---
title: Label
---

<ComponentHeader tag="snap-label" />

::: raw
<div class="component-example">
  <div>
    <snap-label>Customer PIN</snap-label>
    <snap-text weight="medium">4821</snap-text>
  </div>
  <snap-label tone="faint">Folders</snap-label>
  <div>
    <snap-label tone="accent">Portfolio Report</snap-label>
    <snap-heading level="1" variant="page">March 2026</snap-heading>
  </div>
  <snap-label tone="accent" rule>Contact Information</snap-label>
</div>
:::

```html
<snap-label>Customer PIN</snap-label>
<snap-label tone="faint">Folders</snap-label>
<snap-label tone="accent">Portfolio Report</snap-label>
<snap-label tone="accent" rule>Contact Information</snap-label>
```

Labels are Inter 10px semibold, in capitals with 0.1em letter spacing. The
tone sets the colour, by role:

| Tone | Use for |
| --- | --- |
| `muted` (default) | The label above a value |
| `faint` | A group heading in a side panel, such as a list of folders |
| `accent` | A section label in a form, or an eyebrow above a page title |

`rule` adds a hairline after the label, fading out across the row. The
prototype uses it, with the accent tone, to divide a long form into sections.

This isn't the label above a form field: [`snap-input`](/components/input)
has its own. Table headers and badges are uppercase too, but they belong to
the table and badge components.

## Props

<PropsTable tag="snap-label" />

## Custom properties

Set these on the element, or on any container, to adjust it. See [Styling](/install#styling).

<CssPropsTable tag="snap-label" />

<style>
    .component-example {
        background: var(--snap-color-page);
        border: 1px solid var(--snap-color-border-soft);
        border-radius: 6px;
        padding: 1.5rem;
        display: grid;
        gap: 1.25rem;
        margin-top: 1.25rem;
    }
    .component-example snap-label + * {
        margin-top: 4px;
    }
</style>
