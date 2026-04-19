---
name: ui-components
description: Teaches the agent how to implement new UI components and lists (like ribbon lists) adhering to the "No-Line" rule and Glassmorphism aesthetics of the project.
---

# Skill: UI Component Implementation (Luminous Sanctuary)

## When to use this skill
- Use this when building new UI components, views, or lists (like ribbon lists).
- This is helpful for ensuring actionable implementation stays true to the **Luminous Sanctuary** aesthetic and respects the "No-Line" rule and Glassmorphism aesthetics.

## How to use it

### Core Principles (Ortho-Standard)
*   **Boundary Rule:** Never use `border: 1px solid`. Delineate sections via `background-color` shifts between `surface`, `surface-container-low`, and `surface-container`.
*   **Depth Rule:** Achieve hierarchy through tonal nesting, not heavy shadows.
*   **Glow Rule:** Interactive or floating elements use primary-tinted glows (`rgba(163, 166, 255, 0.06)`).

### Implementation Workflow (Steps)
1.  **Define the Container:**
    ```tsx
    <div className="bg-surface-container rounded-xl p-8 glow-primary">
       {/* Content here */}
    </div>
    ```
2.  **Add Interactive Elements:** Use `.btn-primary` (gradient) for major actions and `.btn-tertiary` (transparent with hover shift) for secondary actions.
3.  **Apply Glassmorphism:** For overlays or floating navs, use the `.glass` class which applies the prescribed blur and 60% opacity.
4.  **Handle Muted Text:** Use `var(--color-on-surface-variant)` for labels and secondary metadata to reduce visual noise.

### Style Utilities Reference (index.css)
| Feature | CSS Variable / Class | Rule |
| :--- | :--- | :--- |
| **Glass** | `.glass` | `backdrop-filter: blur(20px)` |
| **Glow** | `.glow-primary` | Ambient soft shadow, primary tint |
| **Main Button** | `.btn-primary` | 135deg linear gradient |
| **Corners** | `.rounded-xl` | `3rem` (Standard for containers) |
| **Ghost Border** | `.ghost-border` | Use only if essential; 15% opacity |

### Example Section (The "Ribbon" Pattern)
To create a list without dividers:
```tsx
const RibbonList = () => (
  <div className="flex flex-col gap-4">
    <div className="bg-surface-container-low p-4 rounded-md">Item 1</div>
    <div className="bg-surface-container-low p-4 rounded-md">Item 2</div>
  </div>
);
```
