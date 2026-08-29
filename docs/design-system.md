# Agnivridhi Visual System & Design Tokens Reference

This document serves as the developer reference for the design tokens, typography, and visual rules established for the **Agnivridhi India** website.

---

## 1. Brand Philosophy & Identity

- **Core Pillars**: `TRUST` + `GROWTH` + `FIRE` + `PRESTIGE`
- **Primary Tone**: Editorial, confident, professional, human-crafted, warm.
- **Aesthetic Boundaries**: Strictly no generic AI SaaS templates, no cartoonish rounded corners, no gratuitous gradients, and no over-animation.

---

## 2. Color System

### Primary Scale (Teal)
Anchored around `#0891B2` (Teal-600) — represents trust, clarity, and institutional authority.

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `teal-50` | `#F0FDFA` | Subtle brand backgrounds, active badge backgrounds |
| `teal-100` | `#CCFBF1` | Soft pill backgrounds, tag surfaces |
| `teal-200` | `#99F6E4` | Light borders, subtle indicators |
| `teal-500` | `#14B8A6` | Vibrant brand accentuation |
| **`teal-600`** | **`#0891B2`** | **Primary Brand Action Anchor** |
| `teal-700` | `#0E7490` | Button hover state |
| `teal-800` | `#155E75` | Button active/pressed state |
| `teal-900` | `#164E63` | Deep teal contrast text |

### Accent Scale (Gold — "Agni" / Growth / Prestige)
Muted burnished gold — represents the transformative power of enterprise capital, warmth, and prestige.

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `gold-50` | `#FFFDF5` | Warm off-white background tint |
| `gold-100` | `#FEF9E6` | Prestige tag surface, soft highlight |
| `gold-300` | `#F9E396` | Gold border highlights |
| **`gold-600`** | **`#B8891F`** | **Burnished Gold Action Anchor** |
| `gold-700` | `#936719` | Gold button hover |
| `gold-800` | `#77511B` | Deep gold active state |

### Neutrals (Slate Hierarchy)
- **`background`**: `#FFFFFF`
- **`background-subtle`**: `#F8FAFC` (Slate-50)
- **`foreground`**: `#0F172A` (Slate-900)
- **`foreground-muted`**: `#475569` (Slate-600)
- **`foreground-subtle`**: `#94A3B8` (Slate-400)
- **`border`**: `#E2E8F0` (Slate-200)
- **`border-subtle`**: `#F1F5F9` (Slate-100)
- **`border-strong`**: `#CBD5E1` (Slate-300)

---

## 3. Typography System

### Font Pairing
- **Display / Editorial**: `Fraunces` (`font-serif` or `font-display`)
  - Used for: Hero headlines, section titles, editorial statements, major metrics.
- **Body / Interface**: `Inter` (`font-sans`)
  - Used for: Paragraphs, navigation, buttons, forms, labels, data tables.

### Type Scale Classes

```html
<!-- Display / Hero Impact -->
<h1 className="type-display">Accelerating MSME Growth</h1>

<!-- Main Section Title -->
<h2 className="type-h2">Institutional Funding Assistance</h2>

<!-- Subsection / Feature Title -->
<h3 className="type-h3">CGTMSE Collateral-Free Loans</h3>

<!-- Module / Card Title -->
<h4 className="type-h4">ISO Certification Advisory</h4>

<!-- Lead Paragraph -->
<p className="type-body-lg text-slate-600">Empowering Indian startups with verified financial architecture...</p>

<!-- Standard Body -->
<p className="type-body text-slate-600">Comprehensive assistance for documentation and compliance...</p>

<!-- Category Eyebrow -->
<span className="type-eyebrow text-teal-600">Government Initiatives</span>
```

---

## 4. Spacing & Rhythm Tokens

### Layout Boundaries
- `max-w-reading`: `65ch` (~680px) — optimal for case study and editorial reading.
- `max-w-content`: `1200px` — standard container for section content.
- `max-w-wide`: `1440px` — wide layout for full navigation and editorial imagery.
- `page-gutters`: Responsive padding (`px-4 sm:px-6 lg:px-8 xl:px-12`).

### Vertical Section Rhythm
- `section-compact`: `py-12 md:py-16` (secondary blocks, FAQs, banners).
- `section-standard`: `py-16 md:py-24` (core service blocks, feature sections).
- `section-generous`: `py-24 md:py-32` (editorial deep dives, testimonial suites).

---

## 5. Radius, Shadows & Borders

### Restrained Radius
- `rounded-sm`: `4px` (tags, badge pills, mini-controls).
- `rounded-md`: `8px` (standard buttons, form inputs).
- `rounded-lg`: `12px` (cards, content panels).
- `rounded-xl`: `16px` (featured hero modules).
- `rounded-pill`: `9999px` (status badges).
*(Avoid arbitrary `rounded-3xl` across standard layout items).*

### Subtle Shadows
- `shadow-subtle`: Micro-elevation for inputs and active controls.
- `shadow-card`: Base shadow for standard cards.
- `shadow-elevated`: Hover state for cards and floating bars.
- `shadow-floating`: High-elevation modals and dialogs.
- `glow-teal`: Restrained teal glow for active CTA indicators.
- `glow-gold`: Restrained gold glow for premium moments.

---

## 6. Selective Effects & Utilities

- **Glassmorphism (`.glass-surface`)**: Restricted to sticky navigation headers, hero summary badges, and floating control bars. Never applied universally to all cards.
- **Micro-Noise (`.bg-noise`)**: Lightweight inline SVG data URI layer (~2.5% opacity) for adding organic paper texture.
- **Gradients**:
  - `.gradient-primary`: `#0891B2` → `#0E7490`
  - `.gradient-accent`: `#DCAE32` → `#B8891F`
  - `.gradient-brand`: `#0891B2` → `#0E7490` (65%) → `#B8891F` (100%)
  - `.gradient-subtle`: `#F8FAFC` → `#FFFFFF`

---

## 7. Motion Guidelines (`lib/tokens/motion.ts`)

- `instant` (100ms): Micro-states, button presses.
- `fast` (200ms): Dropdowns, hover transitions.
- `normal` (350ms): Card reveals, tab switching.
- `slow` (600ms): Staggered text reveals, page transitions.
- Easing: `standard`, `emphasized`, `entrance`, `exit`.
- Respects `prefers-reduced-motion` unconditionally.
