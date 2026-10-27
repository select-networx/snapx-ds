import { Elena, html } from "@elenajs/core";

// One template per level, so the heading is a native h1 to h6.
const levels = {
  1: (text: string) => html`<h1 class="snap-heading">${text}</h1>`,
  2: (text: string) => html`<h2 class="snap-heading">${text}</h2>`,
  3: (text: string) => html`<h3 class="snap-heading">${text}</h3>`,
  4: (text: string) => html`<h4 class="snap-heading">${text}</h4>`,
  5: (text: string) => html`<h5 class="snap-heading">${text}</h5>`,
  6: (text: string) => html`<h6 class="snap-heading">${text}</h6>`,
};

/**
 * A page or card title, in the display font.
 *
 * The level sets the heading element and the variant sets the size, so a
 * card title can sit at any level in the page outline.
 *
 * @displayName Heading
 * @status alpha
 *
 * @cssprop [--snap-heading-color] - Overrides the default text color.
 * @cssprop [--snap-heading-font] - Overrides the default font family.
 * @cssprop [--snap-heading-font-size] - Overrides the font size set by the variant.
 * @cssprop [--snap-heading-tracking] - Overrides the letter spacing set by the variant.
 */
export default class SnapHeading extends Elena(HTMLElement) {
  static tagName = "snap-heading";
  static props = ["level", "variant"];

  /**
   * The heading level, from 1 to 6.
   * @property
   */
  level: number = 2;

  /**
   * The size: "page" for the title at the top of a page, "card" for the
   * title in a card's header.
   * @property
   */
  variant: "page" | "card" = "card";

  /**
   * Renders the html template.
   * @internal
   */
  render() {
    const level = Math.min(Math.max(Math.round(this.level) || 2, 1), 6);
    return levels[level as keyof typeof levels](this.text);
  }
}

SnapHeading.define();
