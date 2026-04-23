---
name: midnight-arboretum
description: Official design system for MindSpark. Focuses on high-contrast botanical precision, absolute black surfaces, and "Electric Moss" accents. Strictly prohibits glassmorphism and transparency.
---

# Design System: The Midnight Arboretum

## When to use this skill
- Use this when designing or modifying any UI elements for MindSpark.
- This is the source of truth for all layout, color, and component decisions.
- Use this to ensure adherence to the "Midnight" aesthetic and "No-Line" rule.

## How to use it

# Design System Document

## 1. Overview & Creative North Star: "The Midnight Arboretum"
This design system is a study in high-contrast botanical precision. It moves away from the airy, translucent trends of the moment to embrace the weight and permanence of solid surfaces. Our Creative North Star is **The Midnight Arboretum**: a digital environment that mimics the focused, calm experience of a lush conservatory at night.

We reject the "default" look of modern web apps by utilizing extreme tonal depth and vibrant, singular focal points. The interface does not "float"; it is architected through solid, nested forms. By replacing traditional borders with intentional shifts in deep black values and utilizing the "Electric Moss" green only for high-leverage moments, we create a premium editorial experience that feels both grounded and alive.

---

## 2. Colors: Tonal Architecture
The palette is rooted in an absolute black base, punctuated by a sharp, lime-leaning green that signifies life and action.

### The Palette
* **Primary (Electric Moss):** #92C421 — Used for key interactions and primary brand moments.
* **Tertiary (Deep Foliage):** #0E3300 — A low-chroma, dark green used for subtle accents, deep shadows, or background depth within containers.
* **Neutral (Absolute Void):** #000000 — The foundation of the system.

### The "No-Line" Rule
**Explicit Instruction:** Junior designers are prohibited from using 1px solid borders to define sections or containers. Boundaries must be established exclusively through:
1. **Background Color Shifts:** Placing a `surface-container-high` element on a `surface` background.
2. **Negative Space:** Using the spacing scale to create "gutters" of the base background color between surfaces.

### Surface Hierarchy & Nesting
We treat the UI as a series of solid, physical slabs. Use the tiers to create a sense of "stacking" without using transparency:
* **Deepest Layer:** `surface-container-lowest` (#000000) — Used for the main background or "void" areas.
* **Base Layer:** `surface` (#080808) — The standard canvas for content.
* **Elevated Surfaces:** `surface-container` through `surface-container-highest`. An inner card must always be at least one tier higher than its parent container to signify importance.

### Signature Textures
While the system is solid, "flat" does not mean "lifeless."
* **CTA Soul:** Use subtle linear gradients for primary actions, transitioning from a lighter lime to `primary` (#92C421) at a 135-degree angle. This mimics the natural gradient of a leaf under light.

---

## 3. Typography: Editorial Authority
We use **Plus Jakarta Sans** for its modern, geometric clarity. The hierarchy is designed to feel like a high-end botanical journal.

* **Display (lg/md/sm):** Used for heroic statements. These should be set with tight letter-spacing (-0.02em) to feel cohesive and authoritative.
* **Headlines:** The "Entry Point" for content. Use `headline-lg` for section headers to create a clear break in the visual flow.
* **Body (lg/md):** Optimized for readability. In this dark environment, use `on_surface_variant` for long-form text to reduce eye strain, reserving `on_surface` for high-priority information.
* **Labels:** Always uppercase with a slight letter-spacing increase (+0.05em) when used for category tags or small metadata.

---

## 4. Elevation & Depth: Tonal Layering
Since glassmorphism and transparency are strictly forbidden, depth is achieved through **Solid Tonal Stacking**.

* **The Layering Principle:** To "lift" a component, move it up the surface scale. A sidebar might be `surface_container_low`, while the cards within it are `surface_container_high`.
* **Ambient Shadows:** When a component must "float" (like a Modal), use an extra-diffused shadow.
* *Shadow Property:* `0px 24px 48px rgba(0, 0, 0, 0.8)`.
* *The Rule:* The shadow color must never be grey; it must be a deeper black than the background to maintain the "Midnight" vibe.
* **The "Ghost Border" Fallback:** In rare accessibility cases where a border is required, use `outline_variant` at 20% opacity. Never use a 100% opaque border.

---

## 5. Components: Botanical Primitives

### Buttons
* **Primary:** Solid `primary` background with `on_primary` text. Use moderate (`roundedness: 2`) corner radii to achieve a modern, architectural feel.
* **Secondary:** Solid `secondary_container` background. No border.
* **Tertiary:** No background. Text color is `primary`. Use for low-emphasis actions.

### Chips
* **Usage:** Used for filtering botanical categories. Use `surface_container_highest` for unselected and `primary` for selected. Moderate rounded corners (Level 2) are mandatory.

### Input Fields
* **Surface:** Use `surface_container_low`.
* **Focus State:** Do not use a glow. Instead, change the background to `surface_container_high` and add a 2px solid `primary` bottom-bar only.

### Cards & Lists
* **No Dividers:** Prohibit the use of horizontal lines.
* **The Vertical Gutter:** Separate list items using the balanced spacing scale (Level 2), allowing the `surface` color to act as the separator.
* **Card Styling:** Solid `surface_container` with `md` (roundedness level 2) corners.

---

## 6. Do's and Don'ts

### Do:
* **Embrace Asymmetry:** Align text to the left but allow imagery or accents to "grow" off-grid to the right, mimicking organic plant growth.
* **Use High Contrast:** Ensure `primary` (#92C421) is only used against the darkest surfaces for maximum "pop."
* **Balanced Spacing:** Use a consistent spacing scale (Level 2) to create a clean, structured layout that still feels open.

### Don't:
* **No Transparency:** Do not use `rgba` or opacity for backgrounds. Every surface must be a solid hex code.
* **No Glassmorphism:** No backdrop-blurs. This system is about the strength of solid earth and dark stone.
* **No Centered Text:** Avoid centering large blocks of text; it breaks the editorial, high-end feel. Stick to intentional left-alignment.
* **No Thin Icons:** Use "Medium" or "Bold" weight icons to match the visual weight of the Plus Jakarta Sans typeface.
