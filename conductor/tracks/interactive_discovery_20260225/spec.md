# Specification: Interactive Discovery

## Overview
The goal of this track is to implement the core visual and interactive elements of the Apart Hotel Amelia website. This includes a high-impact hero section, a room gallery with scroll-triggered animations, and a location section with an interactive map.

## User Stories
- **Potential Guest:** I want to be greeted by a luxurious and modern landing page that reflects the quality of the hotel.
- **Potential Guest:** I want to explore the rooms through a visually engaging gallery that feels premium and interactive.
- **Potential Guest:** I want to easily find the hotel's location and get directions from my current position.

## Functional Requirements
- **Hero Section:**
    - High-resolution background imagery/video.
    - Smooth text reveal animations using GSAP.
    - Parallax effects on scroll.
- **Room Gallery:**
    - Grid or carousel layout for rooms.
    - Scroll-triggered reveal animations for each room entry.
    - Hover effects showcasing room details.
- **Location Section:**
    - "Find Our Location" button.
    - On click, reveal an embedded Google Map.
    - Map should calculate and show the route from the user's current location (using Geolocation API).
- **Responsive Design:**
    - All components must be fully responsive (Mobile, Tablet, Desktop).
    - Mobile-first approach for styling and animations.

## Technical Requirements
- **Framework:** React (TypeScript) + Vite.
- **Styling:** Tailwind CSS + CSS Modules.
- **Animations:** GSAP (ScrollTrigger, TextPlugin).
- **Maps:** Google Maps Platform API.
- **Icons:** Lucide React.

## Acceptance Criteria
- Hero section animations are smooth and trigger correctly on load.
- Room gallery items animate into view as the user scrolls.
- The map button correctly reveals the Google Map with the route from the user's location.
- No linting or TypeScript errors.
- Test coverage for core logic and components is >80%.
