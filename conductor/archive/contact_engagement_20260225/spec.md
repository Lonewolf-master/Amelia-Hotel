# Specification: Contact & Engagement

## Overview
The goal of this track is to implement the direct communication and social engagement channels for Apart Hotel Amelia. This includes a floating WhatsApp button, a luxurious contact form, and updated social media links in the global layout.

## User Stories
- **Potential Guest:** I want to be able to message the hotel directly on WhatsApp for quick inquiries.
- **Potential Guest:** I want to fill out a contact form to request more information or a personalized quote via email.
- **Potential Guest:** I want to follow the hotel on social media to see updates and lifestyle content.

## Functional Requirements
- **WhatsApp Integration:**
    - Floating action button (FAB) visible on all pages.
    - Direct links to WhatsApp using the number `652422909`.
    - Custom pre-filled message (e.g., "Hello Apart Hotel Amelia, I would like to inquire about...").
- **Contact Form:**
    - Luxury-styled form with fields: Name, Email, Subject, Message.
    - Integration with email `chidaluwisdomorima` (simulated or via mailto/formservice).
    - Validation for all fields.
- **Social Media Presence:**
    - Update Navbar and Footer with actual social media links (Instagram, Facebook).
- **Responsive Design:**
    - Form and buttons must be optimized for all devices.

## Technical Requirements
- **Framework:** React (TypeScript).
- **Styling:** Tailwind CSS + GSAP for form animations.
- **Icons:** Lucide React.

## Acceptance Criteria
- WhatsApp button correctly opens the WhatsApp chat with the right number.
- Contact form validates inputs and displays success/error states.
- Social media links are functional and consistent across the site.
- Test coverage for form logic and visibility is >80%.
