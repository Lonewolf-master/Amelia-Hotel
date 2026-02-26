# Specification: Luxurious Booking Flow

This track focuses on implementing a sophisticated, multi-step booking process for Apart Hotel Amelia. The goal is to provide a seamless and visually stunning reservation experience that reflects the hotel's luxury brand.

## 1. User Journey
- **Step 1: Stay Details:** Guests select their check-in and check-out dates and number of guests.
- **Step 2: Room Selection:** Guests choose from the available room categories (integrated with our existing `ROOMS` data).
- **Step 3: Guest Information:** A refined form for contact details and special requests.
- **Step 4: Confirmation:** A summary of the reservation with a high-end success animation.

## 2. Visuals & Animations
- **GSAP Transitions:** Use smooth horizontal or vertical "slide and fade" transitions between steps.
- **Micro-interactions:** Interactive calendar elements and hover states for room selection.
- **Luxury Aesthetic:** Maintain the Deep Green/Navy and Gold palette with elegant serif typography.

## 3. Technical Requirements
- **State Management:** Use a dedicated `BookingContext` or local state to manage the multi-step form data.
- **Validation:** Robust client-side validation for dates and guest info.
- **Responsiveness:** Ensure the booking flow is fully optimized for mobile devices.
