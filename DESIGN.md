# Design System Document: The Sun-Drenched Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Mediterranean Veranda"**

This design system is not a set of components; it is an atmosphere. To capture the essence of a luxury boutique hotel on the Amalfi Coast, we must move away from the rigid, "app-like" structures of the modern web. We are building a digital experience that feels like a high-end linen magazine—tactile, airy, and deeply intentional.

We break the "template" look through **intentional asymmetry** and **tonal depth**. Instead of centering everything, use wide margins and staggered imagery. Let elements breathe so much that the white space itself becomes a luxury. We prioritize the "Editorial Overlap"—where high-contrast typography dances over soft-focus photography—to create a sense of three-dimensional space.

## 2. Colors: Tonal Atmosphere
The palette is a study in warmth and restraint. It mimics the natural materials of the Amalfi coast: limestone, sun-bleached linen, and aged taupe.

### Surface Hierarchy & Nesting
Forget the grid; think in layers.
*   **The "No-Line" Rule:** 1px solid borders for sectioning are strictly prohibited. Boundaries are defined by transitions between `surface` (#faf9f7) and `surface_container_low` (#f4f3f1).
*   **Layering Principle:** Treat the UI like stacked sheets of fine stationery. Place a `surface_container_lowest` (#ffffff) card on top of a `surface_container` (#efeeec) background to create a "lift" that feels organic rather than mechanical.
*   **Glass & Gradient:** Use `surface_bright` with a 60% opacity and a 20px backdrop-blur for floating navigation bars. For primary CTAs, apply a subtle linear gradient from `primary` (#715b3e) to `primary_container` (#8b7355) to give the button a "weighted," premium feel.

| Token | Hex | Role |
| :--- | :--- | :--- |
| `background` | #faf9f7 | The primary canvas; warm and inviting. |
| `on_background`| #1a1c1b | Primary text; deep but never pure black. |
| `surface_container`| #efeeec | Content containers and card backdrops. |
| `primary` | #715b3e | Taupe accent for brand actions and focus. |
| `secondary` | #625e51 | Warm gray for metadata and supportive text. |

## 3. Typography: The Editorial Voice
Typography is the strongest pillar of this system. We pair the intellectual, romantic flair of a classic serif with the invisible precision of a modern sans.

*   **The Hero (EB Garamond / Noto Serif):** Used for `display` and `headline` scales. Whenever possible, use *Italic* for keywords within headlines to mimic the Kinfolk editorial style. It should feel like a handwritten note from a concierge.
*   **The Utility (DM Sans / Plus Jakarta Sans):** Used for `body` and `label` scales. Set `body-lg` at `300` or `400` weight with increased letter spacing (0.02em) to ensure it feels light and sophisticated.

**Hierarchy Goal:** A massive `display-lg` headline should often sit near a tiny, tracked-out `label-sm` to create a high-contrast, premium "editorial" tension.

## 4. Elevation & Depth
In this design system, shadows are atmospheric, not structural.

*   **Ambient Shadows:** Use `0 2px 24px rgba(24, 22, 15, 0.06)`. Note the tint: we use the `on_surface` color for the shadow, not pure black. This ensures the shadow feels like a natural casting of light on stone.
*   **The "Ghost Border":** If accessibility requires a stroke, use `outline_variant` (#d1c4b9) at 20% opacity. It should be felt, not seen.
*   **Tonal Layering:** To highlight a specific room type or offer, don't add a shadow. Instead, shift the background of that card to `surface_container_highest` (#e3e2e0) while keeping the surrounding area `surface`.

## 5. Components: Tactile Objects

### Buttons
*   **Primary:** Solid `primary` background. Roundedness at `full` (999px) for a "pill" look. No shadow. Text is `on_primary` (#ffffff) in `label-md`.
*   **Tertiary (The "Editorial" Link):** `EB Garamond` Italic, `primary` color, with a 1.5px underline that sits 4px below the baseline.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Execution:** Use `48px` of vertical white space to separate list items. For cards (e.g., room listings), use `xl` (1.5rem / 24px) corner radius. Imagery inside cards should have a subtle 5% darken overlay to make white text pop.

### Input Fields
*   **Style:** Minimalist. No background color. Only a bottom border using `outline_variant`. When focused, the bottom border animates to 1.5px in `primary`.
*   **Labels:** Use `label-sm` in `secondary` color, all caps with 0.1em letter spacing, floating above the input.

### Signature Component: The "Gallery Masonry"
Instead of a standard image grid, use an asymmetrical masonry layout. Images should have varying aspect ratios (4:5, 1:1, 16:9) and use the `lg` (1rem) corner radius. This breaks the "software" feel and leans into the boutique hotel aesthetic.

## 6. Do’s and Don’ts

### Do:
*   **Use Excessive Spacing:** If you think a section has enough padding, add 24px more.
*   **Layer Elements:** Allow a high-quality photo of the Mediterranean to partially underlap a text container.
*   **Focus on Iconography:** Use 1.5px thin-stroke icons only. Keep them sparse and meaningful.

### Don't:
*   **Don't use pure black:** It breaks the sun-drenched, warm illusion.
*   **Don't use sharp corners:** Nothing in the hotel is sharp; everything is honed stone and soft fabric. Minimum `md` (0.75rem) on small elements, `xl` (1.5rem) on large ones.
*   **Don't use "App" Patterns:** Avoid bottom-nav bars or heavy sidebars. Use elegant, full-screen overlay menus with large `display-md` typography.