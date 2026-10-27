<ComponentHeader tag="snap-heading" />

::: raw
<div class="component-example">
  <snap-heading level="1" variant="page">Sites</snap-heading>
  <snap-heading level="2">Portal Information</snap-heading>
</div>
:::

```html
<snap-heading level="1" variant="page">Sites</snap-heading>
<snap-heading level="2">Portal Information</snap-heading>
```

Headings use the display font, Geist, in semibold. There are two sizes, from
the prototype:

| Variant | Size | Letter spacing | Use for |
| --- | --- | --- | --- |
| `page` | 20px | -0.02em | The title at the top of a page |
| `card` (default) | 15px | -0.01em | The title in a card's header |

`level` sets the heading element, from `h1` to `h6`, and is separate from the
size. Choose the level for the page's outline and the variant for the look.
For example, a card title can be an `h2` on one page and an `h3` on another.

For an eyebrow above a page title, use [`snap-label`](/components/label) with
`tone="accent"`. For the line under a page title, use
[`snap-text`](/components/text) with `variant="secondary"`.

## Props

<PropsTable tag="snap-heading" />

## Custom properties

Set these on the element, or on any container, to adjust it. See [Styling](/install#styling).

<CssPropsTable tag="snap-heading" />

<style>
    .component-example {
        background: var(--snap-color-page);
        border: 1px solid var(--snap-color-border-soft);
        border-radius: 6px;
        padding: 1.5rem;
        display: grid;
        gap: 1rem;
        margin-top: 1.25rem;
    }
</style>
