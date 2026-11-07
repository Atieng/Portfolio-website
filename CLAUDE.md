# Ivy Atieng's portfolio

Personal portfolio for Ivy Atieng: data science, full-stack development and design.
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, lucide-react. Deployed on Vercel from the `main` branch of github.com/Atieng/Portfolio-website.

## Where things live
- `data/site.ts`: personal details, about text, education, training, community roles, skills
- `data/projects.ts`: projects and case studies (`category` is "data", "fullstack" or "design")
- `data/gallery.ts`: design gallery pieces
- `app/page.tsx` + `components/Terminal.tsx`: the homepage terminal. Commands are built from the data files.
- `app/globals.css`: design tokens. Theme is a dark terminal: lavender = data, mint = development, pink = design. Font is IBM Plex Mono.
- Images go in `public/projects/<slug>/` and `public/gallery/`.

## Rules
- Never invent experience, results, numbers, dates or links. If something is unknown, write it as "TODO: ..." (the site shows these as visible placeholders) and ask Ivy.
- Keep the copy plain, specific and in Ivy's own voice. Avoid generic AI-sounding phrases.
- Keep the site accessible: alt text on images, keyboard focus visible, reduced motion respected, no horizontal scroll on phones.
- Run `npm run build` before committing to make sure there are no errors.
- Commit with clear messages. Only push when Ivy asks.
