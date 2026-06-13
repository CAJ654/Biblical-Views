# Biblical Views

An interactive theological reference app exploring 25 major doctrinal questions across 80+ Christian views and traditions. Built with **React + TypeScript + Vite**, deployed to **GitHub Pages** with automated CI/CD.

**Live:** [CAJ654.github.io/Biblical-Views](https://CAJ654.github.io/Biblical-Views/)

-----

## What It Is

Biblical Views is a single-page reference tool for exploring where different Christian traditions land on contested theological questions — from the nature of hell to gender roles to the millennium. Each category presents the major views positioned on a spectrum from traditional/restrictive to progressive/open, with summaries, key texts, proponents, and contextual notes for each position.

**Design principle:** Descriptive, not prescriptive. The goal is to accurately represent what each tradition actually believes and why, grounded in real scholarship and confessional documents — not strawmen or caricatures.

**Use cases:**

- Researchers comparing theological positions across traditions
- Students of theology or philosophy exploring doctrinal diversity
- Faith communities understanding different Christian perspectives
- Anyone seeking a neutral, non-advocacy reference

-----

## Categories Covered
TODO: update section
12 major doctrinal categories with 6–9 views each:

|# |Category                           |Question                                                       |
|--|-----------------------------------|---------------------------------------------------------------|
|1 |🔥 Hell, Purgatory & Eternal Destiny|What awaits the dead after death?                              |
|2 |📜 Torah & the Law                  |What is the believer’s relationship to the Mosaic Law?         |
|3 |☁️ Rapture & Tribulation            |When does the church leave, and what is the Tribulation?       |
|4 |👑 The Millennium                   |What is the nature of Christ’s 1,000-year reign?               |
|5 |✝️ Salvation & Soteriology          |How does God save, and what role does human will play?         |
|6 |✡️ Israel & the Church              |What is God’s plan for ethnic/national Israel?                 |
|7 |🌍 Creation & Origins               |How and when did God create the universe?                      |
|8 |🕊️ Spiritual Gifts                  |Are miraculous gifts still active today?                       |
|9 |💧 Baptism                          |Who should be baptized, and what does it do?                   |
|10|🍞 The Lord’s Supper                |What happens in Communion / Eucharist?                         |
|11|📖 Scripture & Authority            |What is Scripture’s authority relative to tradition?           |
|12|⚖️ Gender, Sexuality & the Church   |What does Scripture teach about gender roles and sexual ethics?|

### Highlights

**Hell & Eternal Destiny** — Eternal Conscious Torment, Purgatory, Immediate Annihilationism, Eventual Annihilationism (Terminal Punishment), Universal Reconciliation

**Salvation & Soteriology** — Hyper-Calvinism, 5-Point Calvinism (TULIP), 4-Point Calvinism (Amyraldism), Molinism, Classical Arminianism, Wesleyan Arminianism, Open Theism, Semi-Pelagianism, Pelagianism

**Torah & the Law** — Antinomianism, Lutheran Law/Gospel, Covenant Theology, New Covenant Theology, Messianic/Torah-Observant, Theonomy

**Gender, Sexuality & the Church** — Complementarianism, Egalitarianism, Traditional Sexual Ethic (Side B), Reparative/Change Therapy, Revisionist Evangelical, Full Affirmation, Transgender-Inclusive Theologies

-----

## Features

- **Interactive spectrum bar** — visually maps where each view sits relative to others within its doctrinal category
- **Expandable detail cards** — click any view to reveal key biblical texts, historical proponents, and contextual notes
- **Tab-based navigation** — instant switching between 12 categories
- **Fully static** — no backend, no database; all data hardcoded; works offline once loaded
- **Responsive design** — works seamlessly on mobile and desktop with scrollable tab nav and adaptive grid layout
- **Dark theme** — readable in all lighting conditions

-----

## Tech Stack

|Tool          |Role                     |
|--------------|-------------------------|
|React 18      |UI framework             |
|TypeScript    |Type safety & IDE support|
|Vite 5        |Build tool & dev server  |
|GitHub Actions|Automated CI/CD pipeline |
|GitHub Pages  |Static hosting           |

**No UI library, no CSS framework** — all styling is vanilla inline CSS via React style props, keeping the bundle minimal and the design cohesive.

-----

## Project Structure

```
Biblical-Views/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD pipeline
├── src/
│   ├── biblical-views.tsx    # Entire app — data + components
│   └── main.tsx              # React entry point
├── index.html                # HTML shell
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript config
└── vite.config.ts            # Vite config (sets base path for GitHub Pages)
```

-----

## Local Development

**Prerequisites:** Node.js 20+

```bash
# Clone the repo
git clone https://github.com/CAJ654/Biblical-Views.git
cd Biblical-Views

# Install dependencies
npm install

# Start dev server at http://localhost:5173
npm run dev
```

```bash
# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

-----

## Deployment

**Automated:** The app deploys to GitHub Pages on every push to `main` via GitHub Actions.

**Pipeline:**

1. Checkout code
1. Set up Node 20
1. `npm install`
1. `npm run build` → outputs to `dist/`
1. Upload `dist/` as a Pages artifact
1. Deploy to GitHub Pages

**Live site:** <https://CAJ654.github.io/Biblical-Views/>

**Manual deployment:** Run `npm run build` and upload the `dist/` folder to any static host (Cloudflare Pages, Netlify, Vercel, etc.).

-----

## Design Philosophy

**Spectrum positioning** — Views are mapped to a 0–100 axis within each category. The axis represents the range from most traditional/restrictive to most progressive/open *for that specific question* — not a universal left/right political axis. Context matters.

**Descriptive, not prescriptive** — Each view is presented as its actual proponents articulate it, grounded in real scholars, confessional documents, and historical traditions. No strawmanning or caricature.

**Proponents cited** — Real names: Augustine, Calvin, Wesley, contemporary scholars, confessions (Westminster, Heidelberg), official church statements (Vatican, Orthodox councils). Readers can follow up with primary sources.

**Nuance in notes** — The notes field captures intra-tradition distinctions, historical context, cross-tradition relationships, and common misconceptions that the summary can’t fit.

-----

## Portfolio Value

This project demonstrates:

- **Full-stack execution** — scoping, curation, component architecture, state management, production deployment
- **Research depth** — accurate theological representation across 12 contested domains; grounded in scholarship
- **DevOps chops** — GitHub Actions CI/CD, Vite build optimization, GitHub Pages hosting, semantic versioning
- **Design sensibility** — dark theme, accessible spectrum UI, responsive layout, intentional information architecture
- **Code quality** — TypeScript, functional components, clean React patterns, zero dependencies beyond React itself

-----

## Contributing

If you spot a factual error, a misrepresentation of a tradition, or a significant view that should be included, feel free to open an issue.

TODO: Add more views for Spiritual Gifts, Baptism, Scripture & Authority
TODO: Refine Post Trib & Pre Wrath Rapture Explanations
TODO: Consider adding more topics

-----

## License

MIT
