<ComponentHeader tag="snap-text" />

::: raw
<div class="component-example">
  <snap-text>The Scenic Inn</snap-text>
  <snap-text weight="medium">Customer PIN 4821</snap-text>
  <snap-text variant="secondary">March 2026 · 214 properties</snap-text>
  <snap-text variant="meta">12 sites billed</snap-text>
  <snap-text variant="detail">AC Hotel Asheville · ASH-0042</snap-text>
  <snap-text variant="caption">Updated 4 minutes ago</snap-text>
  <snap-text variant="figure">1,284</snap-text>
</div>
:::

```html
<snap-text>The Scenic Inn</snap-text>
<snap-text weight="medium">Customer PIN 4821</snap-text>
<snap-text variant="secondary">March 2026 · 214 properties</snap-text>
<snap-text variant="meta">12 sites billed</snap-text>
<snap-text variant="detail">AC Hotel Asheville · ASH-0042</snap-text>
<snap-text variant="caption">Updated 4 minutes ago</snap-text>
<snap-text variant="figure">1,284</snap-text>
```

The prototype is a dense dashboard, without one body text style. These
variants are the styles it uses most, by role:

| Variant | Style | Use for |
| --- | --- | --- |
| `body` (default) | Inter 13px, ink | Values and main copy |
| `secondary` | Inter 12.5px, muted | The line under a page title; descriptions |
| `meta` | Inter 12px, muted | Supporting figures, such as the line under a stat |
| `detail` | Inter 11.5px, faint | The line under a list item's title; short notes in a toolbar |
| `caption` | Inter 11px, faint | Hints, notes and timestamps |
| `figure` | Geist 30px semibold, ink | Headline numbers |

`weight="medium"` sets the text in medium (500), for a value under a
[label](/components/label), for example.

## Tone

The prototype often sets text at one of these sizes in a different grey from
the variant's own. `tone` changes the grey and keeps the size:

::: raw
<div class="component-example">
  <snap-text variant="secondary" tone="faint">No sites match this filter.</snap-text>
  <snap-text variant="secondary" weight="medium" tone="ink-2">Enable PAN</snap-text>
  <snap-text variant="detail" tone="muted">Within SLA</snap-text>
</div>
:::

```html
<snap-text variant="secondary" tone="faint">No sites match this filter.</snap-text>
<snap-text variant="secondary" weight="medium" tone="ink-2">Enable PAN</snap-text>
<snap-text variant="detail" tone="muted">Within SLA</snap-text>
```

The tones run darkest to faintest: `ink`, `ink-2`, `ink-3`, `muted` and
`faint`. Accent and status colours aren't tones: links and status text will be
their own components.

## Text that wraps

The variants use the font's normal line height, as single lines do in the
prototype. For text that wraps onto several lines, such as a description,
add `multiline` for the prototype's looser line height:

::: raw
<div class="component-example">
  <snap-text variant="secondary" multiline style="max-width: 26rem">
    Dynamic fields are shown on the portal when a guest signs in. Each one
    collects a single answer, and the answers appear in the guest report.
  </snap-text>
</div>
:::

```html
<snap-text variant="secondary" multiline>Dynamic fields are shown on the portal…</snap-text>
```

## To be revisited

The prototype sets body text in 54 combinations of size, weight and colour.
That's far too many for a design system. These variants and tones match the
prototype for now, but they'll be revisited and cut down. See
[Prototype gaps](/prototype-gaps#to-revisit).

## Props

<PropsTable tag="snap-text" />

<style>
    .component-example {
        background: var(--snap-color-page);
        border: 1px solid var(--snap-color-border-soft);
        border-radius: 6px;
        padding: 1.5rem;
        display: grid;
        gap: .75rem;
        margin-top: 1.25rem;
    }
</style>
