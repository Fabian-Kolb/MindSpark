# UI Architecture & Layout: The Luminous Sanctuary

## 1. Overview
The Thoxt application follows a fixed, app-like layout designed to prevent jarring page reloads and provide a continuous, stateful experience. The layout adapts dynamically between Desktop and Mobile, focusing on the "Glass & Gradient" aesthetic. It maintains the "No-Line" rule, separating UI elements entirely through color and tonal shifts (e.g., `surface`, `surface-container`, `surface-container-low`).

## 2. Core Layout Structure
The main application shell is managed by `AppLayout` (`src/components/layout/AppLayout.tsx`). It orchestrates three main areas:
1. **Sidebar (`Sidebar.tsx`)**: The global navigation, floating on the left side on Desktop, and converting to a bottom navigation bar on Mobile.
2. **Main Content Area (`.main-content`)**: The wrapper for the dynamic views, occupying the remaining space.
3. **Smart Header (`SmartHeader.tsx`)**: A contextual top bar that stays fixed at the top of the main area.
4. **Page Content (`.page-content`)**: The scrollable container where route views (like `DashboardView` or `SpacesOverview`) are rendered via `<Outlet />`.
5. **Global Modals (`BrainDumpModal`)**: Floating action modals that can be invoked globally.

## 3. The Sidebar
The Sidebar embodies the navigation.
*   **Desktop:** Positioned on the left side, occupying a fixed width. It features the logo at the top, vertical navigation links (`Focus`, `Spaces`, `Tracker`) in the middle, and a secondary interaction button (`Quick Brain-Dump`) at the bottom.
*   **Mobile:** It dramatically transforms into a bottom Navigation Bar (BottomAppBar paradigm) using `position: fixed; bottom: ...`. The "Quick Brain-Dump" turns into a prominent floating action button (FAB) positioned in the center, protruding upwards from the navigation bar.

## 4. Responsiveness
The application strictly changes layout strategies at the `768px` breakpoint (and partially at `1024px` for grids).
*   **App Container (`.app-container`)**: Uses `flex-direction: row;` on Desktop, but switches to `flex-direction: column;` on Mobile (`max-width: 768px`), accommodating the bottom navigation.
*   **Page Content Padding**: On Mobile, the bottom padding is significantly increased (`padding-bottom: 120px`) to ensure content isn't hidden behind the floating bottom Bar.
*   **Grid Layouts (e.g., Dashboard)**: Multi-column grids (like the 2fr 1fr setup on the Focus Dashboard) automatically collapse to a single column (`grid-template-columns: 1fr;` or `flex-direction: column;`) on tablets (`1024px`) and mobile screens.

## 5. Components & Styling Rules
*   **No Dividers (`1px solid`)**: Sections use `background-color` shifts (e.g., nesting a `surface-container-low` card inside a `surface-container`).
*   **Glassmorphism (`.glass`)**: Modals and Floating Navs use a 60% opacity background (`rgba(38, 37, 40, 0.6)`) with a `backdrop-filter: blur(20px)`.
*   **Ambient Shadows (`.glow-primary`)**: Floating or emphasized items use a subtle glow (`0 0 40px rgba(...)`) tinted with the primary color, instead of hard gray drop shadows.
*   **Ghost Borders (`.ghost-border`)**: When absolutely necessary for separation, apply a 15% opacity outline border.

When creating or editing views, always respect the `page-content` padding space, and assume the Sidebar handles high-level structural navigation.
