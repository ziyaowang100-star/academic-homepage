# Ziyao Wang Academic Homepage

Static academic homepage for Ziyao Wang, Postdoctoral Researcher in Electrical Engineering at the University of Macau. The site is built with Astro, TypeScript, and Tailwind CSS, and is ready for GitHub Pages, Vercel, or Netlify.

## Tech Stack

- Astro static site generation
- TypeScript
- Tailwind CSS
- Data-driven content files
- No backend or database
- SEO metadata, robots.txt, sitemap generation, and JSON-LD Person schema

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The development server usually runs at `http://localhost:4321`.

## Project Structure

```text
academic-homepage/
├── public/
│   ├── cv.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── profile-placeholder.jpg
├── src/
│   ├── components/
│   ├── data/
│   │   ├── awards.ts
│   │   ├── news.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── publications.ts
│   ├── layouts/
│   ├── pages/
│   └── styles/
```

## Updating Profile Information

Edit `src/data/profile.ts` to update:

- Name, title, affiliation, department, and location
- Bio and research interests
- Education and research experience
- Patents, book, academic service
- Email and profile links
- Canonical URL placeholder

The project is currently configured for GitHub Pages at `https://ziyaowang100-star.github.io/academic-homepage/`. If you deploy to a different domain, update `src/data/profile.ts`, `astro.config.mjs`, and `public/robots.txt`.

## Adding a Publication

Open `src/data/publications.ts` and add a new object to the `publications` array:

```ts
{
  title: "Publication title",
  authors: "Author A, Author B, Ziyao Wang",
  venue: "Journal Name",
  year: 2026,
  volume: "12(3)",
  pages: "1-12",
  status: "Published",
  type: "Journal",
  tags: ["Reliability Assessment", "Distribution Network Planning"],
  doi: "#",
  paperLink: "#",
  codeLink: "#",
  selected: false
}
```

Set `selected: true` to show the publication on the home page.

## Adding a Project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  title: "Project title",
  organization: "Organization",
  period: "2026-2027",
  description: "Concise public-facing description.",
  tags: ["Planning", "Optimization"],
  selected: true
}
```

Set `selected: true` to show the project on the home page.

## Updating News

Open `src/data/news.ts` and add, remove, or reorder news items. Keep descriptions short so the home page remains concise.

## Updating the CV PDF

Replace `public/cv.pdf` with the latest CV PDF. Keep the filename as `cv.pdf` so the `/cv` page and download button continue to work.

If your CV source is a Word document, export it to PDF first and then overwrite `public/cv.pdf`.

## Updating the Profile Photo

Replace `public/images/profile-placeholder.jpg` with a professional headshot. Keep the same filename, or update `image` and `imageAlt` in `src/data/profile.ts`.

## Deployment

### GitHub Pages

1. Push this project to a GitHub repository.
2. Replace the `site` value in `astro.config.mjs` with the final GitHub Pages URL.
3. Configure GitHub Pages to deploy the built static site.
4. Build command: `npm run build`
5. Output directory: `dist`

For project pages such as `https://username.github.io/repository-name`, add `base: "/repository-name"` to `astro.config.mjs`.

### Vercel

1. Import the repository into Vercel.
2. Framework preset: Astro.
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Import the repository into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Publishing Checklist

- Replace all placeholder contact links in `src/data/profile.ts`.
- Replace the configured GitHub Pages URL if you deploy to a different final domain.
- Replace the placeholder profile image.
- Replace `public/cv.pdf` with the latest academic CV.
- Add real DOI, paper, and code links where available.
- Run `npm run build` successfully.
- Preview the production build with `npm run preview`.
