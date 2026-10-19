import { Elena, html } from "@elenajs/core";

/**
 * A standard button component used to trigger actions and events.
 *
 * @displayName Button
 * @status alpha
 *
 * @event click - Programmatically fire click on the component.
 * @event focus - Programmatically move focus to the component.
 * @event blur - Programmatically remove focus from the component.
 *
 * @cssprop [--snap-button-text] - Overrides the default text color.
 * @cssprop [--snap-button-bg] - Overrides the default background color.
 * @cssprop [--snap-button-font] - Overrides the default font family.
 */
export default class SnapButton extends Elena(HTMLElement) {
  static tagName = "snap-button";
  static props = ["variant", "disabled", "href", "icon", "size"];
  static events = ["click", "focus", "blur"];

  /**
   * The style variant of the component.
   * @property
   */
  variant: "default" | "primary" | "danger" = "default";

  /**
   * Whether or not the button is disabled.
   * @property
   */
  disabled: boolean;
  
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
   * Whether the button should render in a smaller or larger state than the default.
   * @property
   */
  size?: "small" | "large";

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
