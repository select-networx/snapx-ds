import { readFileSync } from "fs";
import { defineConfig } from "vitepress";
import { postcssIsolateStyles } from "vitepress";

// The docs deploy with each release, so the nav shows which version they describe.
const { version } = JSON.parse(
  readFileSync(new URL("../../packages/components/package.json", import.meta.url), "utf-8"),
);

export default defineConfig({
  title: "SNAPx Design System",
  description: "Component library documentation",
  // Served from GitHub Pages at https://select-networx.github.io/snapx-ds/
  base: "/snapx-ds/",
  head: [
    // The library doesn't load fonts, so the docs do, as an app would.
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
    // Apply the saved look before first paint (see ThemeSwitch.vue).
    ["script", {}, `try{document.documentElement.dataset.theme=localStorage.getItem("snapx-ds.theme")||"select"}catch(e){}`],
  ],
  vite: {
    css: {
      postcss: {
        plugins: [postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] })],
      },
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes("-"),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: `v${version}`, link: "https://github.com/select-networx/snapx-ds/releases" },
    ],
    sidebar: [
      {
        text: "Welcome",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Using the Package", link: "/install" },
          { text: "Choosing Components", link: "/choosing-components" },
          { text: "Prototype Gaps", link: "/prototype-gaps" },
        ],
      },
      {
        text: "Principles",
        items: [
          { text: "Design Principles", link: "/design-principles" },
          { text: "Accessibility", link: "/accessibility" },
        ],
      },
      {
        text: "Tokens",
        items: [
          { text: "Design Tokens", link: "/tokens/design-tokens" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Heading", link: "/components/heading" },
          { text: "Input", link: "/components/input" },
          { text: "Label", link: "/components/label" },
          { text: "Search", link: "/components/search" },
          { text: "Text", link: "/components/text" },
        ],
      },
    ],
  },
});


