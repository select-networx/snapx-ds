# Design principles

The rules the design system is built by. They apply just as much when you
build UI in an app that uses it.

## The prototype decides

The approved SNAPX redesign prototype is the source of truth for how things
look: sizes, colours, spacing and variants. Where snapx-admin and the prototype
differ, the prototype wins. Where the prototype has no answer, the gap is
logged in [Prototype gaps](/prototype-gaps), not designed on the spot.

## Only what the prototype uses

A component or variant is added once it comes up in 2 or 3 real places in
the prototype, not before. Something admin has that the prototype doesn't,
such as admin's dark buttons, isn't added. One-offs stay in the app that
needs them.

## Tokens, not values

Components are built from the [design tokens](/tokens/design-tokens), and app
CSS should be too. A colour or size written as a raw value doesn't follow the
look, or a later change to the token.

## Two looks, one set of components

Every component works in both looks, Select and SNAPX, from the same markup.
Don't write a colour that belongs to one look: use the token, and the look
sets it.

## Adjusted from outside, not inside

Apps adjust a component through its custom properties, such as
`--snap-button-bg`, and never by styling its inner elements. Each component
keeps its styles separate with CSS `@scope`, so the app's CSS stays out and
the component's stays in.

## Accessible, even where the prototype isn't

Where the prototype leaves out something people need, the components add it.
The prototype's buttons show no sign of focus, for example, so `snap-button`
adds an outline.
See [Accessibility](/accessibility).
