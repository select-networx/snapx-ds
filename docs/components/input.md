<ComponentHeader tag="snap-input" />

::: raw
<div class="component-example">
  <snap-input label="Site name" placeholder="e.g. The Scenic Inn"></snap-input>
  <snap-input label="Contact email" type="email" value="ops@example.com" hint="Used for outage alerts only."></snap-input>
  <snap-input label="Site ID" value="SNX-10482" readonly></snap-input>
</div>
:::

```html
<snap-input label="Site name" placeholder="e.g. The Scenic Inn"></snap-input>
<snap-input label="Contact email" type="email" value="ops@example.com" hint="Used for outage alerts only."></snap-input>
<snap-input label="Site ID" value="SNX-10482" readonly></snap-input>
```

This is the prototype's standard form field: a 36px input with a label above
it. On focus, the border turns to the accent colour and a faint accent ring
appears. Use the switch in the top bar to see it in each look.

A hint is a short note under the field, linked to the input so screen
readers read it out too. A read-only field shows a value the user can't
change, on a grey background.

## In a form

The input renders in the light DOM, so a `<form>` submits it like any native
input. Give it a `name`:

```html
<form>
  <snap-input label="Username" name="username" autocomplete="username"></snap-input>
  <snap-input label="Password" name="password" type="password" autocomplete="current-password"></snap-input>
</form>
```

Listen for `input` or `change` on the element, and read `value`:

```js
field.addEventListener("input", () => console.log(field.value));
```

## Not included yet

The prototype has no disabled, error or required states for this field, so
they aren't built. See [Prototype gaps](/prototype-gaps).

## Props

<PropsTable tag="snap-input" />

## Events

<EventsTable tag="snap-input" />

## Custom properties

Set these on the element, or on any container, to adjust it. See [Styling](/install#styling).

<CssPropsTable tag="snap-input" />

<style>
    .component-example {
        background: var(--snap-color-page);
        border: 1px solid var(--snap-color-border-soft);
        border-radius: 6px;
        padding: 1.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        align-items: start;
        gap: 1rem 0.875rem;
        margin-top: 1.25rem;
    }
</style>
