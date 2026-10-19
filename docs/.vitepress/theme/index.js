import DefaultTheme from "vitepress/theme";
import "@select-networx/snapx-ds/dist/bundle.css";
import ComponentHeader from "./components/ComponentHeader.vue";
import PropsTable from "./components/PropsTable.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ComponentHeader", ComponentHeader);
    app.component("PropsTable", PropsTable);
  },
  async setup() {
    if (typeof window !== "undefined") {
      await import("@select-networx/snapx-ds");
    }
  },
};