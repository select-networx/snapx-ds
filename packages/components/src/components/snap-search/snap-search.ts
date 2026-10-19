import { Elena, html } from "@elenajs/core";

/**
 * The description of the component goes here.
 *
 * @displayName Search
 * @status alpha
 *
 * @event click - Programmatically fire click on the component.
 * @event focus - Programmatically move focus to the component.
 * @event blur - Programmatically remove focus from the component.
 *
 * @cssprop [--snap-search-text] - Overrides the default text color.
 * @cssprop [--snap-search-bg] - Overrides the default background color.
 * @cssprop [--snap-search-font] - Overrides the default font family.
 */
export default class SnapSearch extends Elena(HTMLElement) {
  static tagName = "snap-search";
  static props = ["variant"];
  static events = ["click", "focus", "blur"];

  /**
   * The style variant of the component.
   * @property
   */
  variant: "default" | "primary" | "danger" = "default";

  /**
   * Renders the html template.
   * @internal
   */
  render() {
    return html`
      <div class="snap-search">${this.text}</div>
    `;
  }

  myMethod() {
    console.log(this.element);
  }
}
SnapSearch.define();
