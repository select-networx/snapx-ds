# Accessibility

The components handle the basics. What's left is up to you, when you use them.

## What the components do

- **They use native elements.** `snap-button` renders a `<button>`, or an
  `<a>` when it has an `href`. `snap-heading` renders a real `<h1>` to `<h6>`.
  `snap-input` and `snap-search` render an `<input>`. Keyboards and screen
  readers work with them as they do with any native element.
- **Focus is always visible.** Fields get the prototype's accent ring, and
  keep it when they're read-only. Buttons get an outline, which the prototype
  doesn't have.
- **Labels and hints are linked to their field**, so screen readers read
  them out with it.

## What you need to do

### Label every field

Give every `snap-input` a `label`. A placeholder isn't a label: it disappears
as soon as someone types.

`snap-search` has no visible label, so set `label` to say what it searches,
such as "Filter sites". Screen readers read it out.

### Build a heading outline

Use one `level="1"` heading per page, for the page title, then go down the
levels in order without skipping any. Choose the `level` for where the heading
sits in the outline, and the `variant` for how it looks.

### Use buttons for actions, links for navigation

When a button takes you to another page, give it an `href`, so it's a link.
When it does something on the page, leave `href` off.

### Don't hide focus

Don't remove a component's focus outline or ring, or make it match the
background, when you adjust its custom properties.

### Don't rely on colour alone

A danger button, or text in a status colour, needs words that say what it
means. Label a button "Remove", not "OK", and write "Offline", not just a red
dot.

### Check the contrast of grey text

Text needs a contrast of at least 4.5:1 against its background (WCAG AA). The
greys measure:

| Grey | On white | On the page background (Select, SNAPX) |
| --- | --- | --- |
| `ink` | 17.9:1 | 16.7:1, 15.7:1 |
| `ink-2` | 10.4:1 | 9.7:1, 9.1:1 |
| `ink-3` | 7.8:1 | 7.3:1, 6.9:1 |
| `muted` | 4.7:1 | **4.4:1, 4.2:1** |
| `faint` | **2.5:1** | **2.4:1, 2.2:1** |

Faint is below the minimum everywhere, and muted is just below it on the page
background. The prototype uses both, so the design system does too for now;
it's logged in [Prototype gaps](/prototype-gaps#to-revisit). Until it's
resolved:

- Don't put anything people need to read only in `faint` text.
- Put `muted` text on a card or other white surface, not straight on the page
  background, where you can.

## Not covered yet

The prototype has no disabled, error or required states for text fields, so
`snap-input` doesn't have them yet. See [Prototype gaps](/prototype-gaps).
