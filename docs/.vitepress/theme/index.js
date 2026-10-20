import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "@select-networx/snapx-ds/dist/bundle.css";
import ComponentHeader from "./components/ComponentHeader.vue";
import PropsTable from "./components/PropsTable.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";
import TokenTable from "./components/TokenTable.vue";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { "nav-bar-content-after": () => h(ThemeSwitch) }),
  enhanceApp({ app }) {
    app.component("ComponentHeader", ComponentHeader);
    app.component("PropsTable", PropsTable);
    app.component("TokenTable", TokenTable);
  },
  async setup() {
    if (typeof window !== "undefined") {
      await import("@select-networx/snapx-ds");
    }
  },
};
