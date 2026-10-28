---
title: Search
---

<ComponentHeader tag="snap-search" />

::: raw
<div class="component-example">
  <snap-search label="Filter sites" placeholder="Filter sites…"></snap-search>
  <snap-button size="small">Export</snap-button>
</div>
:::

```html
<snap-search label="Filter sites" placeholder="Filter sites…"></snap-search>
```

This is the filter field from the prototype's table toolbars, which pairs
with small buttons. It's 190px wide by default; set `--snap-search-width` to
change it:

```html
<snap-search label="Search this folder" placeholder="Search this folder…" style="--snap-search-width: 240px"></snap-search>
```

The field has no visible label, so set `label` to describe what it searches.
Screen readers read it out.

## Props

<PropsTable tag="snap-search" />

## Events

<EventsTable tag="snap-search" />

## Custom properties

Set these on the element, or on any container, to adjust it. See [Styling](/install#styling).

<CssPropsTable tag="snap-search" />

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
