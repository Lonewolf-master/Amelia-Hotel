# Specification: High-Fidelity Content & Social Proof Integration

This track focuses on elevating the "Apart Hotel Amelia" website from a generic luxury template to a high-fidelity, data-rich platform using authentic ratings, amenities, and policies.

## 1. Trust & Social Proof
- **Ratings Breakdown:** Implement a visual "Score Dashboard" (Staff: 9.1, Facilities: 9.3, etc.) either in the Testimonials section or as a standalone component.
- **Review Volume:** Display "Fabulous 8.7 based on 23 reviews" to build credibility.
- **Review Expansion:** Increase the pool of testimonials in `TestimonialsSlider.tsx` using the provided Google/Booking reviews.

## 2. Granular Facility Details
- **Safety & Security:** Add a "Safety" subsection to Amenities or FAQ highlighting Smoke alarms, Fire extinguishers, and 24-hour security.
- **Room Specifications:** Update room details with specific dimensions (m²) and luxury essentials (Bathrobes, Slippers, Bidet, Dining table).
- **Wellness Comforts:** Add "Sun loungers", "Beach chairs", and "Sun umbrellas" to the Rooftop Pool description.

## 3. Policy & Logistics Refinement
- **Family & Bedding:** Explicitly mention the "Free Cots (0-2 years)" and "No extra beds" policy in House Rules.
- **Connectivity & Proximity:** Highlight "4 km from center" and "Free Shuttle Service" in the Location section.
- **Dining Specifics:** Clearly state "Continental, Buffet, and à la carte" breakfast options.

## 4. Technical Constraints
- Maintain the **Deep Green/Navy/Gold** luxury aesthetic.
- Ensure all new data points are responsive and accessible.
- Continue using **GSAP** for any new UI reveals (e.g., the Score Dashboard).
