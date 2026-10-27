# Design tokens

Colours, type, shape and elevation for SNAPx, taken from the approved SNAPX
redesign prototype. Components are built from these tokens, so switching the
look, or overriding a token, restyles every component that uses it.

## Two looks

| Look | Accent | Navigation | Cards |
| --- | --- | --- | --- |
| **Select** (default) | Orange | Light | Square, with corner brackets |
| **SNAPX** | Blue | Navy | Rounded |

Choose the look with a `data-theme` attribute, usually on `<html>`. Without
one, you get Select.

```html
<html data-theme="snapx">
```

`data-theme` also works on any element, to show just that part of the page in
the other look. Use the **Select / SNAPX** switch in the top bar to preview
these docs in either look.

## Loading the tokens

The tokens come with the component styles in `dist/bundle.css`, or on their own
in `dist/tokens.css`.

The library doesn't load fonts. Load Inter, Geist and JetBrains Mono in your
app, for example:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
/>
```

## Overriding a token

The library's CSS isn't in a cascade layer. CSS in a layer always loses to CSS
that isn't, so if your app's CSS is layered (as snapx-admin's is), an override
on `:root` won't apply. Set overrides on `body`, or on any container, instead:

```css
body {
  --snap-color-accent: #e11d48;
}
```

Components derive related values where they use them. For example,
`snap-button`'s focus outline is `--snap-color-focus` if you set it, and the
accent otherwise, so overriding the accent carries through.

## Accent washes

Tinted backgrounds are the accent at low opacity, mixed where they're used:

```css
background: color-mix(in srgb, var(--snap-color-accent) 5%, transparent);
```

The prototype uses 3% to 12% for hover and selected rows, and 25% to 50% for
emphasis. Use `--snap-color-wash-ink` for text on a wash.

## Naming conventions

Every token is `--snap-<category>-<name>`. The `--snap-` prefix keeps tokens
from colliding with an app's own custom properties.

| Category | What it holds | Examples |
| --- | --- | --- |
| `color` | Colours | `--snap-color-accent`, `--snap-color-danger-bg` |
| `font` | Font families, by role | `--snap-font-ui`, `--snap-font-display`, `--snap-font-mono` |
| `text` | Font sizes, smallest to largest: `2xs` to `2xl`, plus `xs-plus` (11.5px) between `xs` and `sm` | `--snap-text-base` (13px) |
| `weight` | Font weights | `--snap-weight-medium` |
| `tracking` | Letter spacing | `--snap-tracking-label` |
| `leading` | Line heights | `--snap-leading-body` |
| `space` | Spacing. `--snap-space-N` is N × 2px | `--snap-space-4` (8px), `--snap-space-9` (18px) |
| `radius` | Corner radii, by what they're for | `--snap-radius-control`, `--snap-radius-card` |
| `shadow` | Elevation | `--snap-shadow-popover` |

Colour names follow a few patterns:

- **Text greys** run from `ink` (darkest) through `ink-2` and `ink-3` to `muted`
  and `faint`.
- **`-ink`** is the text colour for a colour family: `accent-ink`, `danger-ink`.
- **Status colours** come in sets: the base colour, plus `-ink`, `-bg` and
  `-border`. For example, `--snap-color-success-bg` is a success background.
- **`on-accent`** is for text and icons on an accent background.

### Tracing tokens to the prototype

Token names follow the approved prototype's theme keys, in kebab-case, so any
value can be traced back to it: `accentHover` is `--snap-color-accent-hover`
and `ink2` is `--snap-color-ink-2`. The exceptions:

| Prototype | Token |
| --- | --- |
| `pageBg` | `--snap-color-page` |
| `navBg`, `navText` and so on | `--snap-color-nav-bg`, `--snap-color-nav-text` and so on |
| `cardRadius` | `--snap-radius-card` |
| `brackets` (on or off) | `--snap-card-bracket-size` (`0` turns brackets off) |
| `statGap` | `--snap-stat-gap` |
| `wash03` to `wash50` | No tokens: mix the accent where it's used (see above) |
| The `display`, `ui` and `mono` font helpers | `--snap-font-display`, `--snap-font-ui`, `--snap-font-mono` |

### When to add a token

- Components use tokens, not raw values. Where a component needs a value 1px
  off the scale to allow for a border, it calculates it from a token, e.g.
  `calc(var(--snap-space-5) - 1px)`.
- Don't declare a token in terms of another token; derive the value where
  it's used instead (see [Overriding a token](#overriding-a-token)).
- Only add a token once a value has come up in 2 or 3 real places.

## Look tokens

These change with the look. Each column shows that look's value, whichever
look is switched on.

<TokenTable kind="looks" />

## Shared tokens

These are the same in both looks.

<TokenTable kind="base" />
