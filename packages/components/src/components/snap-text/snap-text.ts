import { Elena, html } from "@elenajs/core";

/**
 * Body text, in the roles the prototype uses: values and main copy, the
 * supporting line under a title, metadata, captions and headline figures.
 *
 * @displayName Text
 * @status alpha
 *
 * @cssprop [--snap-text-color] - Overrides the text color set by the variant.
 * @cssprop [--snap-text-font] - Overrides the font family set by the variant.
 * @cssprop [--snap-text-font-size] - Overrides the font size set by the variant.
 * @cssprop [--snap-text-line-height] - Overrides the line height.
 */
export default class SnapText extends Elena(HTMLElement) {
  static tagName = "snap-text";
  static props = ["variant", "weight", "multiline"];

  /**
   * The role of the text:
   * "body" for values and main copy,
   * "secondary" for the line under a page title, and descriptions,
   * "meta" for supporting figures, such as the line under a stat,
   * "caption" for hints, notes and timestamps,
   * "figure" for headline numbers, in the display font.
   * @property
   */
  variant: "body" | "secondary" | "meta" | "caption" | "figure" = "body";

  /**
   * Set to "medium" for emphasis, such as a value under a label.
   * Doesn't apply to figures, which are always semibold.
   * @property
   */
  weight: "regular" | "medium" = "regular";

  /**
   * Sets the looser line height the prototype uses for text that wraps
   * onto several lines. Single lines don't need it.
   * @property
   */
  multiline: boolean = false;

  /**
   * Renders the html template.
   * @internal
   */
  render() {
    return html`<span class="snap-text">${this.text}</span>`;
  }
}

SnapText.define();
