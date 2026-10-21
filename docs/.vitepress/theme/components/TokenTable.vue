<script setup>
  import { data } from "../../tokens.data.mjs";

  // "base" lists the shared palette; "looks" shows Select and SNAPX side by side.
  const props = defineProps({
    kind: {
      type: String,
      required: true,
    },
  });

  const groups = props.kind === "looks" ? data.looks : data.base;

  // How to preview a token, from its name.
  function previewStyle(name) {
    const v = `var(${name})`;
    if (name.includes("shadow")) return { boxShadow: v, background: "#fff" };
    if (name.startsWith("--snap-color-")) return { background: v };
    if (name.startsWith("--snap-radius-")) return { borderRadius: v, border: "1.5px solid currentColor" };
    if (name.startsWith("--snap-font-")) return { fontFamily: v };
    if (name.startsWith("--snap-text-")) return { fontSize: v };
    if (name.startsWith("--snap-weight-")) return { fontWeight: v };
    if (name.startsWith("--snap-tracking-")) return { letterSpacing: v };
    if (name.startsWith("--snap-space-")) return { width: v };
    return null;
  }

  function previewClass(name) {
    if (name.startsWith("--snap-space-")) return "bar";
    return /color|shadow|radius/.test(name) ? "swatch" : "sample";
  }

  function sampleText(name) {
    return name.startsWith("--snap-tracking-") ? "LABEL" : "Aa";
  }
</script>

<template>
  <template v-for="{ group, tokens } in groups" :key="group">
    <h3>{{ group }}</h3>
    <table class="token-table">
      <thead v-if="kind === 'looks'">
        <tr><th>Token</th><th>Select</th><th>SNAPX</th></tr>
      </thead>
      <thead v-else>
        <tr><th>Token</th><th>Value</th><th>Preview</th></tr>
      </thead>
      <tbody>
        <tr v-for="token in tokens" :key="token.name">
          <td>
            <code>{{ token.name }}</code>
            <div v-if="token.note" class="note">{{ token.note }}</div>
          </td>
          <template v-if="kind === 'looks'">
            <td v-for="look in ['select', 'snapx']" :key="look">
              <span :data-theme="look" class="cell">
                <span v-if="previewStyle(token.name)" :class="previewClass(token.name)" :style="previewStyle(token.name)">{{ previewClass(token.name) === "sample" ? sampleText(token.name) : "" }}</span>
                <code>{{ token[look] }}</code>
              </span>
            </td>
          </template>
          <template v-else>
            <td><code>{{ token.value }}</code></td>
            <td>
              <span v-if="previewStyle(token.name)" :class="previewClass(token.name)" :style="previewStyle(token.name)">{{ previewClass(token.name) === "sample" ? sampleText(token.name) : "" }}</span>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<style scoped>
  .token-table {
    width: 100%;
  }

  .note {
    margin-top: 2px;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }

  .cell {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .swatch {
    display: inline-block;
    flex: none;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.1);
  }

  .bar {
    display: inline-block;
    height: 12px;
    border-radius: 2px;
    background: var(--vp-c-brand-1);
  }

  .sample {
    display: inline-block;
    min-width: 28px;
    line-height: 1.2;
    color: var(--vp-c-text-1);
  }
</style>
