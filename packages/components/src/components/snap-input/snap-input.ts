import { Elena, html, nothing } from "@elenajs/core";

// Gives each field's input an id, for its label and hint.
let count = 0;

/**
 * A single-line text field, with a label above it and an optional hint below.
 *
 * The input renders in the light DOM, so it takes part in forms like a
 * native input: give it a name and its value is submitted.
 *
 * @displayName Input
 * @status alpha
 *
 * @event input - Fires as the value changes. Read the new value from `value`.
 * @event change - Fires when the user commits a change.
 * @event focus - Programmatically move focus to the input.
 * @event blur - Programmatically remove focus from the input.
 *
 * @cssprop [--snap-input-text] - Overrides the default text color.
 * @cssprop [--snap-input-bg] - Overrides the default background color.
 * @cssprop [--snap-input-border-color] - Overrides the default border color.
 * @cssprop [--snap-input-font] - Overrides the default font family.
 * @cssprop [--snap-input-font-size] - Overrides the default font size.
 * @cssprop [--snap-input-height] - Overrides the default height.
 * @cssprop [--snap-input-padding-x] - Overrides the default horizontal padding.
 * @cssprop [--snap-input-radius] - Overrides the default border radius.
 * @cssprop [--snap-input-label-color] - Overrides the label color.
 */
export default class SnapInput extends Elena(HTMLElement) {
  static tagName = "snap-input";
  static props = [
    "label",
    "hint",
    { name: "value", reflect: false },
    "placeholder",
    "type",
    "name",
    "autocomplete",
    "readonly",
  ];
  static events = ["focus", "blur"];
  static element = "input";

  /**
   * The label above the field. Every field needs one, for screen readers.
   * @property
   */
  label: string = "";

  /**
   * A short note under the field.
   * @property
   */
  hint: string = "";

  /**
   * The current value. Updates as the user types.
   * @property
   */
  value: string = "";

  /**
   * Text shown in the empty field.
   * @property
   */
  placeholder: string = "";

  /**
   * The kind of value, as on a native input.
   * @property
   */
  type: "text" | "email" | "password" | "number" | "tel" | "url" = "text";

  /**
   * The name the value is submitted under, as on a native input.
   * @property
   */
  name: string = "";

  /**
   * The browser autofill hint, as on a native input.
   * @property
   */
  autocomplete: string = "";

  /**
   * Shows the value without letting the user change it.
   * @property
   */
  readonly: boolean = false;

  /** @internal */
  _id = `snap-input-${++count}`;

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
    const id = this._id;
    return html`
      ${this.label ? html`<label class="snap-input-label" for="${id}">${this.label}</label>` : nothing}
      <input
        class="snap-input-field"
        id="${id}"
        type="${this.type}"
        name="${this.name}"
        value="${this.value}"
        placeholder="${this.placeholder}"
        autocomplete="${this.autocomplete}"
        ${this.hint ? html`aria-describedby="${id}-hint"` : ""}
        ${this.readonly ? "readonly" : ""}
      />
      ${this.hint ? html`<div class="snap-input-hint" id="${id}-hint">${this.hint}</div>` : nothing}
    `;
  }
}

SnapInput.define();
