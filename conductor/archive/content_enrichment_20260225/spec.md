# Specification: Content Enrichment & Amenities Showcase

## Overview
This track aims to replace placeholder data with authentic content for Apart Hotel Amelia. We will integrate the real room categories, pricing, wellness facilities, and actual guest reviews to create a trustworthy and high-converting luxury experience.

## User Stories
- **Potential Guest:** I want to see the actual room types and prices in XAF so I can plan my stay accurately.
- **Potential Guest:** I want to explore the rooftop pool and wellness facilities to understand the full luxury offering.
- **Potential Guest:** I want to read reviews from real international guests to feel confident in my booking.

## Functional Requirements
- **Data-Driven Room Gallery:**
    - Update `ROOMS` data with specific categories (Deluxe, Superior, Apartments).
    - Set accurate pricing in XAF (starting from 40,000).
    - Include specific amenities per room type (balcony, spa bath, etc.).
- **Interactive Amenities Showcase:**
    - New section featuring: Rooftop Pool, Fitness Centre, Sauna, and Restaurant.
    - Use high-end imagery and GSAP reveals for each amenity.
- **Guest Testimonials Slider:**
    - Dynamic slider featuring real reviews from Leyuga, Theresa, Tabuwe, etc.
    - Display guest nationality and rating score (e.g., 10/10).
- **FAQ & House Rules Section:**
    - Accordion-style FAQ for common questions.
    - Clear display of check-in/out times and pet policies.

## Technical Requirements
- **State Management:** React state for sliders and accordions.
- **Animations:** GSAP ScrollTrigger for section reveals and entrance effects.
- **Styling:** Tailwind CSS for the luxury theme.

## Acceptance Criteria
- Room Gallery reflects the provided room list and prices.
- Amenities section is visually distinct and highly interactive.
- Testimonials slider correctly displays the provided review text and scores.
- FAQ accordion functions smoothly.
- Test coverage for new components is >80%.
