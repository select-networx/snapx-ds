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

## Props

<PropsTable tag="snap-button" />

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
