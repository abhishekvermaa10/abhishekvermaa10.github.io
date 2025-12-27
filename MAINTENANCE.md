# Maintenance Notes

This site is now entirely data-driven; most tweaks revolve around the shared data file and a few core HTML shells. Use this checklist whenever you (or a future AI) need to extend or reorder content.

## Adding a New Course
1. Drop the cover art into `img/courses/` (PNG with transparent or dark-friendly background works best).
2. Append a new object to `js/courses-data.js`. Set:
   - `slug` (used in the `course.html?course=<slug>` link)
   - Titles/metadata (tagline, duration, tags, featured flags, etc.)
   - Optional arrays: `keyTakeaways`, `tableOfContent`, `prerequisiteCourses`, `nextSteps`, `resources`
3. (Optional) Mention the new course in `README.md` or feature it on `index.html` if you want a dedicated CTA. All other pages (home grids, filters, detail view) pick it up automatically.
4. If the course has a full detail page (`hasDetail !== false`), add its URL to `sitemap.xml` so search engines discover it. (Pattern: `https://abhishekvermaa10.github.io/course.html?course=<slug>`.)

## Changing Course Order or Visibility
- The grids render courses in the order defined inside `AV_COURSES` (`js/courses-data.js`). Reorder objects there to reorder the listings.
- Toggle `featured: true` to make a course appear in the “Spotlight”/“Trending” sections.
- Use `hasDetail: false` if something should link straight to YouTube instead of the internal detail page.

## Footer Year / Reused UI
- Each page footer uses `<span data-current-year></span>` and `js/main.js` fills it with `new Date().getFullYear()`. No manual edits required to roll the year forward.
- The header/footer are intentionally duplicated across the four HTML files to keep the stack simple—edit all four if you need structural changes.

## Removing / Renaming Courses
- Delete or update the relevant entry in `js/courses-data.js`.
- Remove its cover image if it’s no longer used anywhere else.

## Adding Static Assets
- Keep everything under `img/` (subfolders already exist for authors/blog/categories/courses). Avoid reviving the deleted legacy background images unless you also update the layouts to use them.
- Course covers should be conceptual (no text or logos), dark-themed illustrations exported as WebP at 700×350px (≤200KB), with center-safe composition so they load fast and look consistent in the grid. Use transparent or very dark backgrounds so they blend with the site theme.
- Author/profile images work well at 400×400 WebP. Larger is fine as long as the subject is centered and background is clean.
- Stick to WebP for assets that need faster loading.

## SEO & Crawling
- `robots.txt` and `sitemap.xml` live at the repo root. Update the sitemap whenever you add/remove a detailed course page.
- If the deployment domain ever changes, update the `baseUrl` constant at the top of `js/course.js` so canonical/OG/Twitter metadata keep pointing to the right host.
- Each HTML page already includes Open Graph + Twitter cards; keep descriptions concise (&lt; 160 characters) when editing copy.

## General Workflow Reminders
- No build step or templating layer exists—plain HTML/CSS/JS only.
- Stick to ASCII when editing files.
- Test responsive nav/search after major layout tweaks.
