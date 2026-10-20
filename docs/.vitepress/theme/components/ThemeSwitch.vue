<script setup>
  import { onMounted, ref } from "vue";

  // Same key as the inline script in config.mjs that applies the look before first paint.
  const STORAGE_KEY = "snapx-ds.theme";
  const looks = [
    { value: "select", label: "Select" },
    { value: "snapx", label: "SNAPX" },
  ];

  const current = ref("select");

  onMounted(() => {
    current.value = document.documentElement.dataset.theme || "select";
  });

  function choose(value) {
    current.value = value;
    document.documentElement.dataset.theme = value;
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Private browsing or blocked storage: the look still applies for this page view.
    }
  }
</script>

<template>
  <div class="theme-switch" role="group" aria-label="Design system look">
    <button
      v-for="look in looks"
      :key="look.value"
      type="button"
      :aria-pressed="current === look.value"
      @click="choose(look.value)"
    >
      {{ look.label }}
    </button>
  </div>
</template>

<style scoped>
  .theme-switch {
    display: inline-flex;
    margin-left: 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    overflow: hidden;
  }

  button {
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-2);
  }

  button[aria-pressed="true"] {
    background: var(--snap-color-accent);
    color: var(--snap-color-on-accent);
  }
</style>
