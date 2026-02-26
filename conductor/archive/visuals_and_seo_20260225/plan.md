# Implementation Plan: Immersive Visuals & Search Optimization

## Phase 1: Room Lightbox UI [checkpoint: 544b344]
- [x] Task: Create a reusable `Lightbox` component with GSAP animations 544b344
- [x] Task: Update `RoomGallery` to trigger the lightbox on click 544b344
- [x] Task: Add multi-image support to the `ROOMS` data structure 544b344
- [x] Task: Write Tests: Verify lightbox opens and displays correct room data 544b344

## Phase 2: SEO & Meta Data [checkpoint: 45606f9]
- [x] Task: Install and configure `react-helmet-async` for meta tag management 45606f9
- [x] Task: Implement dynamic SEO titles/descriptions for EN/FR 45606f9
- [x] Task: Add `robots.txt` and basic sitemap generation 45606f9
- [x] Task: Write Tests: Verify meta tag rendering 45606f9

## Phase 3: Performance & Accessibility [checkpoint: 2fde84f]
- [x] Task: Audit and implement image lazy-loading and `srcset` where applicable 2fde84f
- [x] Task: Final contrast and ARIA label review across all components 2fde84f
- [x] Task: Fine-tune GSAP scroll speed for premium feel 2fde84f
- [x] Task: Push changes to GitHub 2fde84f
