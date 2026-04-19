---
name: branding-guidelines
description: Follow these brand principles and color variables when designing or adjusting UI for the MindSpark (Luminous Sanctuary) project to maintain an editorial, high-end aesthetic.
---

# Brand & Design Guidelines: The Luminous Sanctuary

## When to use this skill
- Use this when styling new UI elements or adjusting existing ones.
- This is helpful for understanding the core philosophy ("The Luminous Sanctuary") and ensuring that the UI induces focused calm through **Tonal Depth** and **Atmospheric Glow** rather than typical SaaS designs.

## How to use it

### Core Colors
*   **Primary (The Glow):** `#a3a6ff`
*   **Secondary:** `#ac8aff`
*   **Background (Surface Dim):** `#0e0e10`
*   **Surface:** `#0e0e10`
*   **Surface Container Low (recessed/boundaries):** `#131315`
*   **Surface Container (cards):** `#19191c`
*   **Surface Variant (glass):** `#262528` (Usually 60% opacity + blur)
*   **On Surface (Main Text):** `#f9f5f8`
*   **On Surface Variant (Muted Text):** `#adaaad`

### Key Design Rules
1.  **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning areas. Delineate sections entirely through background color shifts (e.g., from `surface` to `surface_container_low`).
2.  **The "Glass & Gradient" Rule:** Use Glassmorphism for floating UI elements like overlays and navigation. Apply `surface_variant` at 60% opacity with `backdrop-filter: blur(20px)`.
3.  **Primary Actions:** Buttons and major CTAs should use a linear gradient from `#6063ee` to `#8455ef` at a 135-degree angle. Pill-shaped (`border-radius: 9999px`).
4.  **Cards & Containers:** `border-radius: 3rem` (xl) for top-level, and `2rem` (lg) for nested items.
5.  **Ambient Shadows:** No dark shadows. Use a glow: 40px blur, 6% opacity, tinted with the primary color (`#a3a6ff`).

### Typography
*   **Headers & Display:** `Manrope` (modern, wide step). Used for authoritative presence.
*   **Body & Utility:** `Inter` (high legibility at small scale).
