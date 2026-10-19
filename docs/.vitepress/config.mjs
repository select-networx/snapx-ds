import { defineConfig } from "vitepress";
import { postcssIsolateStyles } from "vitepress";

export default defineConfig({
  title: "SNAPx Design System",
  description: "Component library documentation",
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


