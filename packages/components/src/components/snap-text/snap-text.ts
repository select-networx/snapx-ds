import { Elena, html } from "@elenajs/core";

/**
 * Body text, in the roles the prototype uses: values and main copy, the
 * supporting line under a title, metadata, the line under a list item,
 * captions and headline figures.
 *
 * @displayName Text
 * @status alpha
 *
 * @cssprop [--snap-text-color] - Overrides the text color set by the variant and tone.
 * @cssprop [--snap-text-font] - Overrides the font family set by the variant.
 * @cssprop [--snap-text-font-size] - Overrides the font size set by the variant.
 * @cssprop [--snap-text-line-height] - Overrides the line height.
 */
export default class SnapText extends Elena(HTMLElement) {
  static tagName = "snap-text";
  static props = ["variant", "tone", "weight", "multiline"];

  /**
   * The role of the text:
   * "body" for values and main copy,
   * "secondary" for the line under a page title, and descriptions,
   * "meta" for supporting figures, such as the line under a stat,
   * "detail" for the line under a list item's title, and short notes,
   * "caption" for hints, notes and timestamps,
   * "figure" for headline numbers, in the display font.
   * @property
   */
  variant: "body" | "secondary" | "meta" | "detail" | "caption" | "figure" = "body";

  /**
   * The grey, darkest to faintest, where it differs from the variant's own:
   * "ink", "ink-2", "ink-3", "muted" or "faint".
   * @property
   */
  tone: "" | "ink" | "ink-2" | "ink-3" | "muted" | "faint" = "";

  /**
   * Set to "medium" for emphasis, such as a value under a label.
   * Doesn't apply to figures, which are always semibold.
   * @property
   */
  weight: "regular" | "medium" = "regular";

  /**
   * Sets the looser line height the prototype uses for text that wraps
   * onto several lines. Single lines don't need it.
   * @property
   */
  multiline: boolean = false;

  /**
   * Renders the html template.
   * @internal
   */
  render() {
    return html`<span class="snap-text">${this.text}</span>`;
  }
}

SnapText.define();
