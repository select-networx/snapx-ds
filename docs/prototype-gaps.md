# Prototype gaps

The approved SNAPX redesign prototype decides how everything in the design
system looks. When snapx-admin has something the prototype doesn't, or the
prototype has no clear answer, the gap is logged here instead of being
designed on the spot. Each entry needs a design decision before it's built.

## Not in the prototype

These aren't built. Admin keeps its own version until the prototype covers
them.

| Gap | Where it comes up | Logged |
| --- | --- | --- |
| **Dark ("inverse") button.** The prototype has no dark button: its only dark backgrounds are a tooltip and a chart marker. | Admin's DataTables buttons (`data-table.css:289`) and the site search submit (`site-search.css:51`) | SNAP-4144, 21 Oct 2026 |
| **Search with a submit button.** The prototype's search fields filter as you type, with no button attached. | Admin's site search (`site-search.css:36`, `:51`) | SNAP-4144, 21 Oct 2026 |
| **Disabled text field.** No field in the prototype is disabled. | Any admin form that locks a field | SNAP-4144, 21 Oct 2026 |
| **Required-field marker.** The prototype doesn't mark required fields. | Admin forms with required fields | SNAP-4144, 21 Oct 2026 |
| **Text field error state.** It appears once, on the sign-in form (a red border and a message), which isn't enough to formalise. | Admin form validation | SNAP-4144, 21 Oct 2026 |

## Calls made where the prototype isn't specific

Built, but worth confirming.

| Decision | Why | Logged |
| --- | --- | --- |
| **Body text is five roles** (`snap-text`): body, secondary, meta, caption and figure. | The prototype has no single body style: it sets text in 22 combinations of size, weight and colour. The five roles cover the most-used ones. | SNAP-4144, 21 Oct 2026 |
| **Read-only fields keep a focus ring.** | The prototype's read-only field is plain text, so it can't take focus. `snap-input`'s can, and keyboard users need to see where focus is. | SNAP-4144, 21 Oct 2026 |
| **Uppercase labels use 0.1em letter spacing**, not the 0.08em first recorded in the tokens. | 0.1em is what the prototype's labels use. 0.08em is its table headers, which now have their own token, `--snap-tracking-table-head`. | SNAP-4144, 21 Oct 2026 |

## In the prototype, not built yet

These are in the prototype and wait for a later ticket or tier.

| Pattern | In the prototype | Waits for |
| --- | --- | --- |
| Multi-line text field | 4 uses, including a monospace code editor | A follow-up to `snap-input` |
| Text field with an attached unit or colour swatch | 5 uses | A follow-up to `snap-input` |
| Dropdown select | Throughout its forms | Tier 3 (dropdowns) |
| Toggle switch | Its settings forms | Not yet assigned to a tier |
| Segmented control, e.g. a site's install status | Its forms and filters | Not yet assigned to a tier |
| Large sign-in field (40px) | 1 use, the sign-in form | A second use |
| Dialog titles (16–17px) | 4 uses | Tier 3 (modals) |
| Dashboard figures at 34px | 2 uses, the dashboard only | A second page |
| Table header labels | Every table | Tier 3 (tables) |
| Badges | Throughout | Tier 2 |

## Decisions

- **The prototype wins (21 Oct 2026).** Sizes, colours and variants come from
  the prototype, not from admin. For example, uppercase labels are 10px, as in
  the prototype, not the 7.5px admin renders.
- **Variants only where the prototype has them (21 Oct 2026).** A variant
  admin uses, such as the dark button, is only added if the prototype has it.
- **Style guide first (21 Oct 2026).** No admin pages are rebuilt while the
  design system is being made.
