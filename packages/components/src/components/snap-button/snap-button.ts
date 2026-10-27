import { Elena, html } from "@elenajs/core";

/**
 * A standard button component used to trigger actions and events.
 *
 * @displayName Button
 * @status alpha
 *
 * @event click - Fires when the button is clicked. Call `click()` to click it from code.
 * @event focus - Fires when the button gets focus. Call `focus()` to move focus to it.
 * @event blur - Fires when the button loses focus. Call `blur()` to remove focus from it.
 *
 * @cssprop [--snap-button-text] - Overrides the default text color.
 * @cssprop [--snap-button-bg] - Overrides the default background color.
 * @cssprop [--snap-button-bg-hover] - Overrides the default background color on hover.
 * @cssprop [--snap-button-text-hover] - Overrides the default text color on hover.
 * @cssprop [--snap-button-border-color-hover] - Overrides the default border color on hover.
 * @cssprop [--snap-button-font] - Overrides the default font family.
 * @cssprop [--snap-button-font-size] - Overrides the default font size.
 * @cssprop [--snap-button-font-weight] - Overrides the default font weight.
 * @cssprop [--snap-button-padding-x] - Overrides the default horizontal padding.
 * @cssprop [--snap-button-padding-y] - Overrides the default vertical padding.
 * @cssprop [--snap-button-border-color] - Overrides the default border color.
 * @cssprop [--snap-button-border-width] - Overrides the default border width.
 * @cssprop [--snap-button-border-style] - Overrides the default border style.
 * @cssprop [--snap-button-radius] - Overrides the default border radius.
 */
export default class SnapButton extends Elena(HTMLElement) {
  static tagName = "snap-button";
  static props = ["variant", "disabled", "href", "icon", "size"];
  static events = ["click", "focus", "blur"];

  /**
   * The style variant of the component.
   * @property
   */
  variant: "default" | "primary" | "danger" | "success" = "default";

  /**
   * Whether or not the button is disabled.
   * @property
   */
  disabled: boolean = false;
  
  /**
   * Will force the component to render as a link if set.
   * @property
   */
  href?: string;
  
  /**
   * The id of the SVG icon from the spritesheet, if available.
   * @property
   */
  icon?: string;
  
  /**
   * Set to "small" for the compact button used in toolbars.
   * @property
   */
  size?: "small";

  renderButton() {
    return html`
      <button 
        class="snap-button" 
        ${this.disabled ? "disabled" : ""}
        ${this.size ? `size-${this.size}` : ""}
        >${this.text}</button>
    `;
  }

  renderLink() {
    return html`
      <a 
        class="snap-button" 
        href="${this.href}"
        ${this.size ? `size-${this.size}` : ""}
        >${this.text}</a>
    `;
  }

  /**
   * Renders the html template.
   * @internal
   */
  render() {
    return this.href ? this.renderLink() : this.renderButton();
  }

  /**
   * Logs `this.element` to the console.
   */
  myMethod() {
    console.log(this.element);
  }
}

SnapButton.define();
