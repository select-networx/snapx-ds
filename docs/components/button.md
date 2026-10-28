---
title: Button
---

<ComponentHeader tag="snap-button" />

::: raw
<div class="component-example">
  <snap-button>Export</snap-button>
  <snap-button variant="primary">Save changes</snap-button>
  <snap-button variant="danger">Delete</snap-button>
  <snap-button variant="success">Approve</snap-button>
</div>
<div class="component-example">
  <snap-button size="small">Small</snap-button>
  <snap-button size="small" variant="primary">Small primary</snap-button>
  <snap-button disabled>Disabled</snap-button>
  <snap-button href="#">Link</snap-button>
</div>
:::

```html
<snap-button>Export</snap-button>
<snap-button variant="primary">Save changes</snap-button>
<snap-button variant="danger">Delete</snap-button>
<snap-button variant="success">Approve</snap-button>
<snap-button size="small">Small</snap-button>
<snap-button size="small" variant="primary">Small primary</snap-button>
<snap-button disabled>Disabled</snap-button>
<snap-button href="#">Link</snap-button>
```

The default and primary buttons match the prototype's secondary and primary
buttons. Use the switch in the top bar to see them in each look.

## Choosing a variant

| Variant | Use for |
| --- | --- |
| `primary` | The main action on a page or in a form, such as Save changes or + New Portal. Keep to one per view, so it's clear which action matters most. |
| `default` | Every other action, including Cancel. |
| `danger` | An action that removes or deletes something. Say what it does in the label ("Remove", not "OK"), as the colour alone doesn't tell everyone. |
| `success` | An action that approves something. |

`size="small"` is the compact button from the prototype's table toolbars,
next to a [search field](/components/search). Use the default size
everywhere else.

`href` makes the button a link. Use it when the button takes you somewhere,
and leave it off when it does something on the page.

## In a form

`snap-button` renders a native `<button>`, and inside a `<form>` a native
button submits the form. There's no way to change that yet, so every
`snap-button` in a form submits it, even one labelled Cancel. Until there is,
stop the buttons that shouldn't submit from doing so:

```js
cancel.addEventListener("click", (event) => {
  event.preventDefault();
  // …close the form
});
```

## Props

<PropsTable tag="snap-button" />

## Events

<EventsTable tag="snap-button" />

## Custom properties

Set these on the element, or on any container, to adjust it. See [Styling](/install#styling).

<CssPropsTable tag="snap-button" />

<style>
    .component-example {
        background: var(--snap-color-page);
        border: 1px solid var(--snap-color-border-soft);
        border-radius: 6px;
        padding: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .5rem;
        margin-top: 1.25rem;
    }
</style>
