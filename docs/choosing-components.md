# Choosing components

When you add or change UI in an app, start from the prototype. Find the
screen, or the closest one to it, and build each part from the components
below. Where a component fits, use it rather than styling your own; where
none does, see [When nothing fits](#when-nothing-fits).

## Quick reference

| You need | Use |
| --- | --- |
| The title at the top of a page | `<snap-heading level="1" variant="page">` |
| A card's title | `<snap-heading level="2">`, at the level that suits the page's outline |
| An eyebrow above a page title | `<snap-label tone="accent">` |
| A small label above a value | `<snap-label>` |
| A group heading in a side panel | `<snap-label tone="faint">` |
| A section label in a long form | `<snap-label tone="accent" rule>` |
| Values and main copy | `<snap-text>` |
| The line under a page title, or a description | `<snap-text variant="secondary">` |
| Supporting figures, such as the line under a stat | `<snap-text variant="meta">` |
| The line under a list item's title | `<snap-text variant="detail">` |
| A hint, note or timestamp | `<snap-text variant="caption">` |
| A headline number | `<snap-text variant="figure">` |
| A text field in a form | `<snap-input>` |
| A field that filters a table or list as you type | `<snap-search>` |
| The main action on a page or in a form | `<snap-button variant="primary">` |
| Any other action | `<snap-button>` |
| An action that removes or deletes something | `<snap-button variant="danger">` |
| An action in a table toolbar | `<snap-button size="small">` |
| A button that goes to another page | `<snap-button href="…">` |

Cards, badges, tables, dropdowns, toggles and dialogs aren't in the library
yet. [Prototype gaps](/prototype-gaps#in-the-prototype-not-built-yet) lists
what's still to come.

## Common patterns

These are the prototype's most common combinations. The components have no
outer margins, so space them with the layout around them (see
[Styling](/install#styling)).

### Page header

An eyebrow, the page title, and the line under it.

::: raw
<div class="pattern-example">
  <div class="stack">
    <snap-label tone="accent">Portfolio report</snap-label>
    <snap-heading level="1" variant="page">March 2026</snap-heading>
    <snap-text variant="secondary">214 properties · 12 sites billed</snap-text>
  </div>
</div>
:::

```html
<snap-label tone="accent">Portfolio report</snap-label>
<snap-heading level="1" variant="page">March 2026</snap-heading>
<snap-text variant="secondary">214 properties · 12 sites billed</snap-text>
```

### A value with a label

::: raw
<div class="pattern-example">
  <div class="stack">
    <snap-label>Customer PIN</snap-label>
    <snap-text weight="medium">4821</snap-text>
  </div>
</div>
:::

```html
<snap-label>Customer PIN</snap-label>
<snap-text weight="medium">4821</snap-text>
```

### A stat

::: raw
<div class="pattern-example">
  <div class="stack">
    <snap-label>Active portals</snap-label>
    <snap-text variant="figure">1,284</snap-text>
    <snap-text variant="meta">12 added this month</snap-text>
  </div>
</div>
:::

```html
<snap-label>Active portals</snap-label>
<snap-text variant="figure">1,284</snap-text>
<snap-text variant="meta">12 added this month</snap-text>
```

### A list item

A title in medium weight, with a detail line under it.

::: raw
<div class="pattern-example">
  <div class="stack">
    <snap-text weight="medium">Northwind Harbour Hotel</snap-text>
    <snap-text variant="detail">Portland, ME · NWH-0042</snap-text>
  </div>
</div>
:::

```html
<snap-text weight="medium">Northwind Harbour Hotel</snap-text>
<snap-text variant="detail">Portland, ME · NWH-0042</snap-text>
```

### A form section

A section label with a rule, then the fields.

::: raw
<div class="pattern-example">
  <div class="form">
    <snap-label tone="accent" rule>Contact information</snap-label>
    <snap-input label="Contact name" name="contact_name"></snap-input>
    <snap-input label="Contact email" type="email" name="contact_email" hint="Used for outage alerts only."></snap-input>
  </div>
</div>
:::

```html
<snap-label tone="accent" rule>Contact information</snap-label>
<snap-input label="Contact name" name="contact_name"></snap-input>
<snap-input label="Contact email" type="email" name="contact_email" hint="Used for outage alerts only."></snap-input>
```

### A table toolbar

A filter field, with small buttons for the table's actions.

::: raw
<div class="pattern-example">
  <div class="toolbar">
    <snap-search label="Filter sites" placeholder="Filter sites…"></snap-search>
    <snap-button size="small">Export</snap-button>
  </div>
</div>
:::

```html
<snap-search label="Filter sites" placeholder="Filter sites…"></snap-search>
<snap-button size="small">Export</snap-button>
```

## Choosing a text style

1. **Is it a heading?** A page or card title is
   [`snap-heading`](/components/heading). Choose its `level` for the page's
   outline, and its `variant` for the size.
2. **Is it a small uppercase label?** That's
   [`snap-label`](/components/label). A form field's label is part of
   [`snap-input`](/components/input), so don't add one.
3. **Otherwise it's [`snap-text`](/components/text).** Pick the variant by
   what the text is for, not by the size you want. The size follows the
   role.
4. **Add `weight="medium"`** for a value under a label, or a title in a list.
5. **Only set a `tone`** where the prototype puts the text in a different
   grey.

## Choosing a button

Use `primary` for the main action, and keep to one per view. Everything else
is a default button, unless it removes or deletes something (`danger`). See
[Button](/components/button#choosing-a-variant) for the full guidance.

## When nothing fits

1. **Check the prototype.** Something that looks new might be a combination
   of what's here.
2. **Check [Prototype gaps](/prototype-gaps).** It may be logged already, with
   a decision.
3. **Style it in the app, from the tokens.** Use the
   [design tokens](/tokens/design-tokens#using-tokens-in-your-own-css) for
   every colour, size and space, so it matches the components and follows the
   look.
4. **Don't add a variant or component for one screen.** One is added once it
   comes up in 2 or 3 real places in the prototype. If you think it has, raise
   it so it can be logged in Prototype gaps.

## Don't

- **Don't write raw colours, sizes or spacing.** Use the tokens.
- **Don't style a component's inner elements.** Use its custom properties.
- **Don't choose a heading level for its size.** The level is for the page's
  outline; the variant sets the size.
- **Don't recreate a component with your own CSS** because it's quicker. Two
  versions drift apart.

<style>
    .pattern-example {
        background: var(--snap-color-surface);
        border: 1px solid var(--snap-color-border-soft);
        border-radius: 6px;
        padding: 1.5rem;
        margin-top: 1.25rem;
    }
    .pattern-example .stack {
        display: grid;
        gap: 4px;
    }
    .pattern-example .form {
        display: grid;
        gap: 1rem;
        max-width: 24rem;
    }
    .pattern-example .toolbar {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
</style>
