# Portfolio: Data. Development. Design.

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS and Lucide icons. Hosted on Vercel.

## Run it locally

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` before deploying to catch errors.

## Where to edit things

| What | File |
| --- | --- |
| Name, email, links, photo, resume, intro, about text, timeline, skills | `data/site.ts` |
| Projects and case studies | `data/projects.ts` |
| Design gallery pieces | `data/gallery.ts` |
| Colours, fonts, homepage grid layout | `app/globals.css` |

### Placeholders

Any text that starts with `TODO:` appears on the site as a dashed grey box, and any link with an empty `href` shows as "(add link)". That way, missing information is always obvious and never looks like a real claim. Replace them all before sharing the site. To find them, search the `data` folder for `TODO`.

### Images

- **Project screenshots:** put them in `public/projects/<project-slug>/` and set `cover.src` (or `src` inside a section's `images`) in `data/projects.ts`, e.g. `"/projects/neudata/home.png"`.
- **Gallery pieces:** put them in `public/gallery/` and set `image.src`, `width` and `height` in `data/gallery.ts`.
- **Your photo:** put it in `public/` and set `photo` in `data/site.ts`.
- **Resume:** save it as `public/resume.pdf` and set `resume: "/resume.pdf"` in `data/site.ts`.

Until an image is added, a labelled placeholder frame shows instead.

### Adding a project

Copy an entry in `data/projects.ts`, give it a new `slug` (this becomes its web address, `/projects/<slug>`), and set `category` to `"data"`, `"fullstack"` or `"design"`. It appears on the Projects page and in the right filter automatically. Set `featured: true` on the one project you want on the homepage.

## Contact form (optional)

The contact page shows your email and profile links. The message form is hidden until it's connected to a real service, so it never pretends to send.

To turn it on:

1. Create a free form at [formspree.io](https://formspree.io) and copy its ID (the part after `/f/`).
2. In Vercel, open your project's **Settings → Environment Variables** and add `NEXT_PUBLIC_FORMSPREE_ID` with that ID.
3. Redeploy.

For local testing, put `NEXT_PUBLIC_FORMSPREE_ID=yourid` in a file called `.env.local`.

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

On vercel.com choose **Add New → Project**, pick the repository, and click **Deploy**. Every push to `main` redeploys the site. Afterwards, set `url` in `data/site.ts` to your live address so link previews work.

## Structure

```
app/                 Pages: home, projects, projects/[slug], about, design, contact
components/          Reusable pieces: ProjectCard, ProjectBrowser (filters), Gallery (lightbox), Header, etc.
data/                All content
lib/                 Types, category colours, placeholder helpers
```
