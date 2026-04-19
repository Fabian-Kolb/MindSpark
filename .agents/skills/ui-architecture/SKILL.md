---
name: ui-architecture
description: Defines the layout rules, grid structures, and responsive behaviors for the MindSpark application. Use this when creating new pages or adjusting the AppLayout.
---

# UI Architecture & Layout: The Luminous Sanctuary

## When to use this skill
- Use this when creating new pages, navigating layout structures, or adjusting the `AppLayout`.
- This is helpful for understanding the fixed, app-like layout designed to prevent jarring page reloads and adapting dynamically between Desktop and Mobile.

## How to use it

### Core Layout Structure
The main application shell is managed by `AppLayout` (`src/components/layout/AppLayout.tsx`). It orchestrates three main areas:
1. **Sidebar (`Sidebar.tsx`)**: The global navigation, floating on the left side on Desktop, and converting to a bottom navigation bar on Mobile.
2. **Main Content Area (`.main-content`)**: The wrapper for the dynamic views, occupying the remaining space.
3. **Smart Header (`SmartHeader.tsx`)**: A contextual top bar that stays fixed at the top of the main area.
4. **Page Content (`.page-content`)**: The scrollable container where route views are rendered.

### The Sidebar
The Sidebar embodies the navigation.
*   **Desktop:** Positioned on the left side, occupying a fixed width.
*   **Mobile:** It dramatically transforms into a bottom Navigation Bar (BottomAppBar paradigm) using `position: fixed; bottom: ...`.

### Responsiveness
The application strictly changes layout strategies at the `768px` breakpoint (and partially at `1024px` for grids).
*   **App Container (`.app-container`)**: Uses `flex-direction: row;` on Desktop, but switches to `flex-direction: column;` on Mobile (`max-width: 768px`), accommodating the bottom navigation.
*   **Page Content Padding**: On Mobile, the bottom padding is significantly increased (`padding-bottom: 120px`) to ensure content isn't hidden behind the floating bottom Bar.
*   **Grid Layouts**: Multi-column grids automatically collapse to a single column on tablets and mobile screens.

### Components & Styling Rules
When creating or editing views, always respect the `page-content` padding space, and assume the Sidebar handles high-level structural navigation. It maintains the "No-Line" rule, separating UI elements entirely through color and tonal shifts.
