import DefaultTheme from "vitepress/theme";
import "@snapx-ds/components/dist/bundle.css";
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
      await import("@snapx-ds/components");
    }
  },
};