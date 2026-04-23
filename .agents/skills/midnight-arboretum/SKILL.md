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

### 1. Creative North Star
Embrace the weight and permanence of solid surfaces. The interface is architected through solid, nested forms, mimicking a lush conservatory at night.

### 2. Colors: Tonal Architecture
*   **Primary (Electric Moss):** `#92C421` — For key interactions and primary brand moments.
*   **Tertiary (Deep Foliage):** `#0E3300` — For subtle accents and deep background depth.
*   **Neutral (Absolute Void):** `#000000` — The absolute foundation.

#### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning. Boundaries must be established through:
1.  **Background Color Shifts:** Placing a higher-tier surface on a lower-tier background.
2.  **Negative Space:** Using "gutters" of the base background color between surfaces.

#### Surface Hierarchy & Nesting
*   `surface-container-lowest`: `#000000` (Main background)
*   `surface`: `#080808` (Standard canvas)
*   `surface-container` through `surface-container-highest`: Incremental steps of grey/black.
*   **Rule:** An inner card must always be at least one tier higher than its parent container.

### 3. Typography: editorial Authority
*   **Font:** `Plus Jakarta Sans`
*   **Display:** Tight letter-spacing (-0.02em).
*   **Body:** Use `on_surface_variant` (muted) for long-form text, `on_surface` (bright) for high priority.
*   **Labels:** Uppercase with increased letter-spacing (+0.05em).

### 4. Elevation & Depth: Tonal Stacking
*   **Forbidden:** Glassmorphism, backdrop-blurs, and transparency.
*   **Floating Elements:** Use extra-diffused shadows (`0px 24px 48px rgba(0, 0, 0, 0.8)`). The shadow must be a deeper black, never grey.

### 5. Components
*   **Buttons:**
    *   **Primary:** Solid `#92C421` with `on_primary` text. `roundedness: level 2`.
    *   **Secondary:** Solid `secondary_container`. No border.
*   **Chips:** Level 2 rounded corners. `primary` for selected.
*   **Input Fields:** `surface_container_low`. On focus, shift to `surface_container_high` + 2px solid `primary` bottom-bar only.
*   **Cards & Lists:** Prohibit horizontal dividers. Use vertical gutters (Level 2 spacing) to separate items.

### 6. Do's and Don'ts

#### Do:
*   **Embrace Asymmetry:** Align text left, let imagery "grow" off-grid to the right.
*   **Use High Contrast:** `primary` (#92C421) only against the darkest surfaces.
*   **Solid Stacking:** Lift components by moving them up the surface scale.

#### Don't:
*   **No Transparency:** Every surface must be a solid hex code.
*   **No Glassmorphism:** Strictly forbidden.
*   **No Centered Text:** Stick to intentional left-alignment.
*   **No Thin Icons:** Use "Medium" or "Bold" weights.
