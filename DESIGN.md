# Design System - Cyber Sphere

<!-- impeccable:design-schema 1 -->

## Thesis
An ultra-clean, structural, and minimal light-mode console interface. It completely rejects generic "AI slop" patterns: there are no floating gradient blobs, no blurry shadow overlays, and no generic rounded marketing card layouts. Instead, it draws inspiration from clean technical schematics, high-fidelity security reports, and functional terminal layouts set against a crisp white canvas.

---

## Palette

### Base
* **Canvas Ground**: `#ffffff` (Pure White)
* **Canvas Muted**: `#f8fafc` (Off-white / Slate 50)
* **Primary Text**: `#0f172a` (Matte Black / Slate 900)
* **Secondary Text**: `#475569` (Charcoal Slate 600)
* **Muted Text**: `#94a3b8` (Slate 400)

### Brand & Status Accents
* **Cyber Red**: `#dc2626` / `#e11d48` (Crimson / Alert status)
* **Cyber Green**: `#16a34a` / `#22c55e` (Matrix Green / Active status)
* **Structural Line**: `#cbd5e1` / `#e2e8f0` (Slate 200/300)

---

## Typography

### Headers & Display
* **Primary Font**: `Plus Jakarta Sans`, sans-serif (Clean, high-end geometric)
* **Display Weight**: `700` or `800` for striking contrast.

### Monospace & Data Elements
* **Accent Font**: `JetBrains Mono` or `Space Mono`, monospace.
* **Usage**: Stats, dates, tags, buttons, code blocks, navigation sub-labels.

---

## Layout & Components

### The Schematic Grid
* All major sections are bound by fine, high-contrast borders (`1px solid #e2e8f0`) simulating a blueprint or grid structure.
* Avoid large border-radii; restrict corners to sharp rectangular cuts or micro-corners (`rounded-lg` max 8px).

### Tactical Status Indicators
* Small flashing dot components for active events/workshops (`bg-green-600 animate-pulse`).
* Code syntax highlighting uses clean red and green markers to call out ethical hacking components.

### Mechanical Interactions
* Button states swap instantly on hover (e.g., solid black changes to red or green border, text shifts slightly).
* Card hovers do not lift with large drop-shadows; instead, they change border colors instantly to Cyber Red or Cyber Green with a clean monospace label highlighting active state.
