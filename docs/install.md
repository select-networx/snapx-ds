# Using the package

How to add the design system to an app and work with its components.
snapx-admin is already set up, so if you're working there, skip to
[Using a component](#using-a-component).

## Installing

The package is `@select-networx/snapx-ds`, on GitHub Packages. Installing
from GitHub Packages needs a personal GitHub token, even to read; snapx-admin's
`DESIGN_SYSTEM_SETUP.md` explains how to make one and where to put it.

```sh
npm install @select-networx/snapx-ds@<version>
```

These docs describe the version shown at the top of the page. While the
version is `0.0.x`, a range like `^0.0.5` matches only `0.0.5`, so every new
release needs installing explicitly.

## Loading it

Import the package and its CSS once, in the app's entry point. In
snapx-admin, that's `resources/shared/components/index.ts`.

```ts
import "@select-networx/snapx-ds"; // Registers every component
import "@select-networx/snapx-ds/dist/bundle.css"; // The tokens and the component styles
```

For the tokens alone, without the components, import
`@select-networx/snapx-ds/dist/tokens.css` instead of `bundle.css`.

The package doesn't load fonts. Load Inter, Geist and JetBrains Mono in the
app (see [Design tokens](/tokens/design-tokens#loading-the-tokens)).

For the SNAPX look, add `data-theme="snapx"` to `<html>`. Without it, you
get Select.

## Using a component

Components are custom HTML elements. Write them in markup like any other
element, in a Blade template or plain HTML:

```html
<snap-button variant="primary">Save changes</snap-button>
<snap-input label="Site name" name="site_name"></snap-input>
```

- **The text inside the element is its content:** the button's label, the
  heading's text, and so on.
- **Options are attributes.** A boolean option is on when the attribute is
  there: `<snap-input readonly>`.
- **Each component's page lists its options** under Props.

[Choosing components](/choosing-components) covers which component to use
where.

### From JavaScript

Every option is also a property, kept in sync with its attribute:

```js
const button = document.querySelector("snap-button");
button.variant = "danger"; // Same as button.setAttribute("variant", "danger")
button.disabled = true;
```

To change a component's text after it's on the page, set `text`. Setting
`textContent` or `innerHTML` replaces what the component rendered, and breaks
it.

```js
heading.text = "Portal settings";
```

A component redraws just after a change, not straight away. If you need to
read the result, wait for `updateComplete` first:

```js
heading.text = "Portal settings";
await heading.updateComplete;
```

### Events

Listen for events on the component itself:

| Component | Events |
| --- | --- |
| `snap-button` | `click`, `focus`, `blur` |
| `snap-input`, `snap-search` | `input` (as the value changes), `change` (when the user commits it), `focus`, `blur` |

```js
field.addEventListener("input", () => console.log(field.value));
```

`focus()`, `blur()` and, on a button, `click()` work as they do on native
elements, so `field.focus()` puts the cursor in the field.

### In forms

Components render real form elements into the page, not into a shadow root,
so a `<form>` submits them like native ones. Give each field a `name`:

```html
<form method="post">
  <snap-input label="Site name" name="site_name"></snap-input>
  <snap-button variant="primary">Save changes</snap-button>
</form>
```

Every `snap-button` in a form submits it, even one labelled Cancel. See
[Button: in a form](/components/button#in-a-form).

## Styling

Components style themselves from the [design tokens](/tokens/design-tokens),
in both looks.

**To adjust a component, set its custom properties.** Each component's page
lists them under Custom properties. Set them on the element, or on a container
to adjust every component inside it:

```html
<snap-search label="Filter sites" style="--snap-search-width: 240px"></snap-search>
```

```css
.site-toolbar {
  --snap-button-font-size: var(--snap-text-sm);
}
```

**Don't style a component's inner elements**, such as `.snap-button` or the
`<input>` inside `snap-input`. They're internal, and can change in any release.
Each component also resets the styles inside it, so most rules from the app
don't apply there anyway.

**Components have no outer margins.** Space them with the layout around them,
using the spacing tokens:

```css
.site-form {
  display: grid;
  gap: var(--snap-space-8);
}
```

To change a token itself, such as the accent colour, see
[Overriding a token](/tokens/design-tokens#overriding-a-token). If the app's
CSS is in cascade layers, as snapx-admin's is, those overrides go on `body` or
a container, not on `:root`.

## Upgrading

1. Install the new version: `npm install @select-networx/snapx-ds@<version>`.
2. Check [Prototype gaps](/prototype-gaps) for decisions that affect you.
3. Build the app and check the pages that use the components, in both looks.
