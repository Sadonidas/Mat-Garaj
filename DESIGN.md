---
name: Ultra-Luxury Automotive Design System
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#d0cecf'
  on-tertiary: '#313031'
  tertiary-container: '#b5b2b3'
  on-tertiary-container: '#454546'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#e5e2e3'
  tertiary-fixed-dim: '#c8c6c7'
  on-tertiary-fixed: '#1c1b1c'
  on-tertiary-fixed-variant: '#474647'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 90px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for an ultra-premium automotive customization studio, evoking a sense of precision, exclusivity, and futuristic engineering. It targets high-net-worth individuals who view their vehicles as a blend of high-performance machinery and bespoke art.

The visual style is **High-End Glassmorphism mixed with Minimalist Dark Mode**. It relies on deep atmospheric backgrounds, razor-sharp geometric lines, and tactical uses of "light-as-material" through glowing borders and backdrop blurs. The aesthetic should feel like a high-tech cockpit or a private luxury showroom at midnight. Every interaction must feel deliberate, smooth, and expensive.

## Colors
The palette is anchored in **Deepest Charcoal (#0B0B0C)**, providing a void-like canvas that allows metallic and light-based accents to pop. 

- **Primary (Metallic Gold):** Used for prestige elements, headings, and primary calls to action. It represents luxury and craftsmanship.
- **Secondary (Cyber-Cyan):** A functional accent used sparingly for interactive "live" states, focus indicators, and subtle glows to inject a high-tech, futuristic energy.
- **Surface & Border:** Surfaces are not solid colors but layers of translucency. The standard glass surface uses a 3% white tint with a heavy backdrop blur, while borders are kept at a crisp 10% white opacity to define edges without adding visual weight.

## Typography
The system utilizes **Inter** exclusively to maintain a cohesive, technical, and modernist look. The hierarchy is defined by extreme scale and tight letter-spacing for headlines, contrasted with generous leading for body text to ensure readability against dark backgrounds.

- **Display & Headlines:** Use heavy weights (700-800) and negative letter-spacing to create a "machined" look. 
- **Turkish Character Support:** Ensure glyphs like *ğ, ü, ş, i, ö, ç* are rendered with the same geometric precision as the standard Latin set.
- **Labels:** Always use the `label-sm` style with 10% letter-spacing and uppercase styling for navigation and small descriptors (e.g., "HİZMETLERİMİZ").

## Layout & Spacing
The layout follows a **Fixed-Width Centered Grid** for desktop to maintain the "editorial gallery" feel, transitioning to a fluid model for mobile.

- **Grid:** A 12-column system with 24px gutters. Elements should often span 6 or 12 columns to maintain a bold, cinematic structure.
- **Whitespace:** Emphasize "Luxury through Absence." Use large vertical gaps (`section-gap`) between content blocks to allow the imagery of the vehicles to breathe.
- **Margins:** Desktop margins are intentionally wide (80px) to frame the content like a piece of art.

## Elevation & Depth
Depth in this design system is achieved through **Optical Light Physics** rather than traditional drop shadows.

- **The Glass Layer:** High-level containers use a `backdrop-filter: blur(20px)` and a thin `1px` border. This creates a "frosted lens" effect that feels physical.
- **Luminescence:** Instead of shadows, use "Outer Glows." When an element is active or hovered, apply a subtle `0px 0px 15px` spread using the Secondary Cyan or Primary Gold at 30% opacity.
- **Z-Index Hierarchy:** 
  - Base: Deepest Charcoal (#0B0B0C).
  - Level 1: Glass Cards (3% white overlay).
  - Level 2: Modals and Popovers (8% white overlay + stronger blur).

## Shapes
To reflect the precision of automotive engineering and "razor-sharp" customization, the system uses a **Sharp (0px)** roundedness policy. 

Every button, input field, and card must have 90-degree corners. This creates a technical, aggressive, and disciplined aesthetic. The only exception is for circular elements like icons or radio buttons, which must remain perfect circles.

## Components
Consistent component styling reinforces the ultra-luxury narrative.

- **Buttons (İletişime Geç):** Rectangular with a 1px Gold border. On hover, the border glows with a Gold outer shadow, and the background transitions from transparent to a very subtle Gold gradient (5% opacity).
- **Cards (Service/Gallery):** Large glass panes. On hover, the 1px border brightness increases from 10% to 40% white, and the vehicle image inside scales slightly (+5%) for a parallax effect.
- **Inputs:** A single bottom border (1px) in 20% white. On focus, the border transforms into the Cyber-Cyan accent with a faint glow underneath the text.
- **Navigation (Ana Sayfa, Galeri, etc.):** Text-only with the `label-sm` style. Active links are marked by a 2px Gold underline that spans the width of the word.
- **Chips/Badges:** Used for vehicle specs (e.g., "V12", "Carbon Fiber"). Small, sharp-edged boxes with a 10% white border and `label-sm` typography.