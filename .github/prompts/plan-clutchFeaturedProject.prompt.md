## Plan: Replace Featured Project with Clutch

Update the Projects page card and the featured carousel entry to swap out “This Is It! BBQ” for the Clutch mobile app, using the provided website and Google Play links and omitting any source-code link. Adjust the carousel button rendering so only available links show, since the repo is private and there’s no App Store URL yet.

### Steps
1. Replace the “This Is It! BBQ Website” card block in [src/pages/Projects.tsx](src/pages/Projects.tsx#L39-L63) with a Clutch card using the provided website and Google Play URLs.
2. Replace the first entry in the `projects` array in [src/components/ProjectsCarousel.tsx](src/components/ProjectsCarousel.tsx#L5-L11) with a Clutch object (use `live` for https://clutch-app.co and add a `playStore` field for the Play link).
3. Update the carousel CTA rendering in [src/components/ProjectsCarousel.tsx](src/components/ProjectsCarousel.tsx#L64-L76) to only show buttons for available URLs, and hide the `source` button when no repo link is provided.

### Further Considerations
1. App Store URL missing — provide when available to add a third button.
2. Confirm preferred Clutch description and tags (mobile app, cross-platform, LFG, matchmaking, etc.) before final copy.

---

## Plan: Add new skills from the Clutch project

Update the Skills page to include new backend, mobile, and release/testing skills gained while building Clutch.

### Steps
1. Add Supabase-specific entries to the "Tools & Platforms" section (e.g., Supabase Auth, Supabase Storage, Supabase Realtime).
2. Add database-related entries to the "Databases" section (e.g., PostgreSQL Functions (SQL / PL/pgSQL), Postgres Triggers, Row Level Security (RLS), Database Policies & Security).
3. Add realtime and backend patterns to the "Concepts" section (Realtime Presence / Live Counts, Feature Flags (Backend-driven), Rate Limiting / Anti-Spam Patterns, Content Moderation (Profile Images)).
4. Add mobile platform and release/testing items to the "Frameworks & Libraries" or "Tools & Platforms" sections (Expo, React Navigation, Deep Linking (Mobile), Push Notifications / In-App Notifications, EAS Build & Release, App Store / TestFlight Release Workflow).
5. Add integration and CI/CD items to the "Cloud & DevOps" or "Tools & Platforms" sections (OAuth 2.0 (Twitch Integration), Third-Party API Integration (Twitch / RAWG), Mobile CI/CD (GitHub Actions), E2E Testing (Maestro)).

### Further Considerations
1. Keep categories balanced by moving items between sections if one becomes too long.
2. Normalize naming style (Title Case, consistent parentheticals).
3. Confirm whether to list Supabase under "Tools & Platforms" or add a new "Backend as a Service" category.
