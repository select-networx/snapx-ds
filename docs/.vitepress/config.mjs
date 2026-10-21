import { defineConfig } from "vitepress";
import { postcssIsolateStyles } from "vitepress";

export default defineConfig({
  title: "SNAPx Design System",
  description: "Component library documentation",
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
    sidebar: [
      {
        text: "Welcome",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Installation", link: "/install" },
        ],
      },
      {
        text: "Principles",
        items: [
          { text: "Design Principles", link: "/design-principles" },
          { text: "Accessibility Principles", link: "/accessibility" },
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
          { text: "Search", link: "/components/search" }
        ],
      },
    ],
  },
});


