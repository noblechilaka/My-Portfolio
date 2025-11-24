# nobl. Preloader Animation

## Overview

This is a minimal, high-end preloader animation designed for the brand "nobl." It features a static wordmark with an animated dot that expands from a small filled circle into a hollow ring and collapses back in a calm, smooth cycle. The preloader provides:

- Dark background matching brand (#2a2a2a)
- Dot and ring in white (#FFFFFF) with subtle opacity and glow
- Smooth easing with about 1.1s loop duration
- GPU-friendly animation using transform and opacity
- Accessibility support with aria-hidden and programmatic dismissal

## Integration (HTML/CSS/JS Preloader)

### Markup

Place the following markup as the very first child inside the `<body>` tag of your HTML:

```html
<div class="preloader" aria-label="Loading content" aria-hidden="false">
  <span class="preloader__text"
    >nobl<span class="preloader__dot" aria-hidden="true">.</span></span
  >
</div>
```

### Styles

Include the CSS from `css/styles.css` which contains the `.preloader` styles and `.preloader__dot` animation.

### Script

The dismissal JS is included in `js/scripts.js`. It automatically hides the preloader after window load by adding the `.loaded` class and setting `aria-hidden="true"`. You can also call the `dismissPreloader()` function programmatically if needed.

## Integration (Animated SVG Preloader)

You can use the standalone SVG file `preloader-svg.svg` as a drop-in animated graphic anywhere in your markup.

```html
<object
  type="image/svg+xml"
  data="preloader-svg.svg"
  aria-label="Loading"
></object>
```

Or embed the SVG inline for full control.

## Recommended Dimensions

- The preloader container fills the viewport.
- The animated dot sized roughly 12px diameter at rest, expanding to about 32px outer diameter ring.
- Font size for the wordmark is about 2.5rem (can be adjusted in CSS).

## Accessibility

- The preloader uses `aria-hidden` toggling and is hidden with the `.loaded` class after load.
- The dot has `aria-hidden="true"` to exclude it from screen readers.
- Ensure preloader is shown only during loading and dismissed appropriately.

---

This preloader is optimized for calm, boutique-style portfolios with subtle, efficient animations.
