import { Elena, html, nothing } from "@elenajs/core";

/**
 * A small uppercase label: the label above a value, a group heading in a
 * side panel, or a section label in a form.
 *
 * @displayName Label
 * @status alpha
 *
 * @cssprop [--snap-label-color] - Overrides the text color set by the tone.
 * @cssprop [--snap-label-font] - Overrides the default font family.
 * @cssprop [--snap-label-font-size] - Overrides the default font size.
 * @cssprop [--snap-label-tracking] - Overrides the default letter spacing.
 */
export default class SnapLabel extends Elena(HTMLElement) {
  static tagName = "snap-label";
  static props = ["tone", "rule"];

  /**
   * The text color: "muted" above a value, "faint" for a group heading in a
   * side panel, and "accent" for a section label or an eyebrow above a page title.
   * @property
   */
  tone: "muted" | "faint" | "accent" = "muted";

  /**
   * Draws a hairline after the label that fades out across the rest of the
   * row, as on the prototype's form section labels.
   * @property
   */
  rule: boolean = false;

  /**
   * Renders the html template.
   * @internal
   */
  render() {
    return html`
      <span class="snap-label">${this.text}</span>
      ${this.rule ? html`<span class="snap-label-rule"></span>` : nothing}
    `;
  }
}

SnapLabel.define();
