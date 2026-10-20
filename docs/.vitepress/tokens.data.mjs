import { readFileSync } from "fs";
import { resolve } from "path";

const source = resolve(__dirname, "../../packages/components/src/tokens.css");

/**
 * Reads tokens.css for the tokens page, so the docs can't drift from the
 * source. Relies on the file's layout: one declaration per line, and groups
 * introduced by a one-line comment inside a rule.
 *
 * Returns { base, looks }: base is [{ group, tokens: [{ name, value, note }] }];
 * looks is the same shape, with `select` and `snapx` values instead of `value`.
 */
export default {
  watch: [source],
  load() {
    const rules = parseRules(readFileSync(source, "utf8"));
    const base = rules.find(r => r.selector === ":root");
    const select = rules.find(r => r.selector.includes('[data-theme="select"]'));
    const snapx = rules.find(r => r.selector.includes('[data-theme="snapx"]'));

    const snapxValues = new Map(snapx.groups.flatMap(g => g.tokens).map(t => [t.name, t.value]));
    const looks = select.groups.map(({ group, tokens }) => ({
      group,
      tokens: tokens.map(({ name, value, note }) => ({
        name,
        note,
        select: value,
        snapx: snapxValues.get(name) ?? "—",
      })),
    }));

    return { base: base.groups, looks };
  },
};

function parseRules(css) {
  const rules = [];
  let selector = "";
  let rule = null;

  for (const raw of css.split("\n")) {
    const line = raw.trim();

    if (!rule) {
      if (line.startsWith("/*") || line.startsWith("**") || line.startsWith("*/") || !line) continue;
      if (line.endsWith("{")) {
        rule = { selector: `${selector} ${line.slice(0, -1)}`.trim().replace(/,\s*/g, ", "), groups: [] };
        selector = "";
      } else {
        selector += ` ${line}`;
      }
      continue;
    }

    if (line === "}") {
      rules.push(rule);
      rule = null;
      continue;
    }

    const comment = line.match(/^\/\*\s*(.+?)\s*\*\/$/);
    if (comment) {
      rule.groups.push({ group: comment[1], tokens: [] });
      continue;
    }

    const declaration = line.match(/^(--[\w-]+):\s*(.+?);\s*(?:\/\*\s*(.+?)\s*\*\/)?$/);
    if (declaration) {
      if (!rule.groups.length) rule.groups.push({ group: "General", tokens: [] });
      const [, name, value, note = ""] = declaration;
      rule.groups.at(-1).tokens.push({ name, value, note });
    }
  }

  return rules;
}
