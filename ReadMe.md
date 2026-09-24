# Ibrahim Al Ayoubi — AI engineering portfolio

A portfolio with the original dark blue/cyan design, animated background, circular portrait, glass cards, and section order, with updated AI engineer, computer vision, and machine learning content. Built with Next.js 14, React, TypeScript, and Tailwind CSS; exported as a static site for Sites hosting.

## Run locally

```sh
npm install
npm run dev
```

## Personalize

- **Profile, availability, contact links, projects, experience, skills, education, publications, and certifications:** `src/data/portfolioData.ts`.
- **Opening headline and introduction:** `src/components/Hero.tsx`.
- **Page title and search/social descriptions:** `src/app/layout.tsx`.
- **Profile photo:** replace `public/profile.jpg` with the new portrait. The existing photo is retained until a replacement is supplied.
- **Downloadable resume:** replace `public/ibrahim-al-ayoubi-resume.pdf`.
- **Palette and layout:** `src/app/globals.css`. The original blue/cyan palette and dark surfaces are restored.

Projects use the original cards with technology tags and outcome highlights. Navigation and contact links work without a third-party service; email and phone links open the visitor’s own apps. The site has no backend or contact-form delivery service.

## Content provenance

The resume supplied for this update is the main source for the medical segmentation internship, Inria ETL and knowledge graph work, August 2026 RAG project, and technical skills. The Dice improvement is expressed as **3–5 percentage points absolute**, not a relative percentage.

Mini CLIP (including its approximate 15% retrieval improvement), DAS360, and the research manuscript are retained from the previous portfolio. The manuscript remains explicitly labeled **in preparation**, with no publication or acceptance claim. IBM course titles are retained without unverified completion dates or status. Update these entries as new evidence becomes available.

S2GIM is listed separately using the title, author order, affiliations, and abstract supplied by the user. Its status is **preprint submitted to Elsevier on September 24, 2026**; no journal acceptance or DOI is claimed. Skill categories include short descriptions and links to relevant portfolio projects.

## Build and publish

```sh
npx tsc --noEmit
npm run build
```

The production export is written to `out/`. `next.config.js` uses static export and unoptimized local images. `.openai/hosting.json` holds the Sites project identity and static output directory. Reuse this identity for later Sites updates. Never store publishing credentials in the repository.

The site retains the original responsive layouts, animations, section navigation, and mobile menu.
