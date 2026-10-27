import { Elena, html } from "@elenajs/core";

/**
 * A compact search field with a magnifier icon, for filtering a table or
 * list from its toolbar.
 *
 * It has no visible label, so give it one with `label` for screen readers.
 *
 * @displayName Search
 * @status alpha
 *
 * @event input - Fires as the value changes. Read the new value from `value`.
 * @event change - Fires when the user commits a change.
 * @event focus - Programmatically move focus to the input.
 * @event blur - Programmatically remove focus from the input.
 *
 * @cssprop [--snap-search-text] - Overrides the default text color.
 * @cssprop [--snap-search-bg] - Overrides the default background color.
 * @cssprop [--snap-search-border-color] - Overrides the default border color.
 * @cssprop [--snap-search-font] - Overrides the default font family.
 * @cssprop [--snap-search-font-size] - Overrides the default font size.
 * @cssprop [--snap-search-radius] - Overrides the default border radius.
 * @cssprop [--snap-search-width] - Overrides the default width.
 */
export default class SnapSearch extends Elena(HTMLElement) {
  static tagName = "snap-search";
  static props = ["label", { name: "value", reflect: false }, "placeholder", "name"];
  static events = ["focus", "blur"];
  static element = "input";

  /**
   * The accessible name, read out by screen readers.
   * @property
   */
  label: string = "Search";

  /**
   * The current value. Updates as the user types.
   * @property
   */
  value: string = "";

  /**
   * Text shown in the empty field, e.g. "Filter sites…".
   * @property
   */
  placeholder: string = "";

  /**
   * The name the value is submitted under, as on a native input.
   * @property
   */
  name: string = "";

  /**
   * Keeps `value` in step with what the user types.
   * @internal
   */
  firstUpdated() {
    this.addEventListener("input", () => {
      this.value = (this.element as HTMLInputElement).value;
    });
  }

  /**
   * Shows a value set from code, which the value attribute alone doesn't
   * once the user has typed in the field.
   * @internal
   */
  updated() {
    const input = this.element as HTMLInputElement;
    if (input.value !== this.value) {
      input.value = this.value;
    }
  }

  /**
   * Renders the html template.
   * @internal
   */
  render() {
    return html`
      <svg class="snap-search-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        class="snap-search-field"
        type="search"
        aria-label="${this.label}"
        name="${this.name}"
        value="${this.value}"
        placeholder="${this.placeholder}"
      />
    `;
  }
}

SnapSearch.define();
