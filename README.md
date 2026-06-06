# Biblical Views

A interactive theological reference app covering the major doctrinal positions across 13 categories of biblical interpretation. Built with React + TypeScript + Vite, deployed to GitHub Pages.

-----

## What It Is

Biblical Views is a single-page reference tool for exploring where different Christian traditions land on contested theological questions — from the nature of hell to gender roles to the millennium. Each category presents the major views along a spectrum from traditional/restrictive to progressive/open, with summaries, key texts, proponents, and contextual notes for each position.

It’s designed to be descriptive, not prescriptive — the goal is to accurately represent what each tradition actually believes and why, not to advocate for any one position.

-----

## Categories Covered

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

### Views Per Category (selected highlights)

**Hell & Eternal Destiny** — Eternal Conscious Torment, Purgatory, Immediate Annihilationism, Eventual Annihilationism (Terminal Punishment), Universal Reconciliation

**Torah & the Law** — Antinomianism, Lutheran Law/Gospel, Covenant Theology, New Covenant Theology, Messianic/Torah-Observant, Theonomy

**Rapture & Tribulation** — Pre-Tribulation, Mid-Tribulation, Pre-Wrath, Post-Tribulation, No Rapture (Amil/Postmil)

**Salvation & Soteriology** — Hyper-Calvinism, 5-Point Calvinism (TULIP), 4-Point Calvinism (Amyraldism), Molinism, Classical Arminianism, Wesleyan Arminianism, Open Theism, Semi-Pelagianism, Pelagianism

**Gender, Sexuality & the Church** — Complementarianism, Egalitarianism, Traditional Sexual Ethic (Side B), Reparative/Change Therapy, Revisionist Evangelical, Full Affirmation, Transgender-Inclusive Theologies

-----

## Features

- **Spectrum bar** — visually maps where each view sits relative to others in the category
- **Expandable cards** — click any view to reveal key texts, proponents, and contextual notes
- **Tab navigation** — switch between categories instantly
- **Fully static** — no backend, no database, all data is hardcoded; works offline once loaded
- **Mobile-friendly** — scrollable tab nav, responsive grid layout

-----

## Tech Stack

|Tool          |Role                   |
|--------------|-----------------------|
|React 18      |UI framework           |
|TypeScript    |Type safety            |
|Vite 5        |Build tool & dev server|
|GitHub Actions|CI/CD pipeline         |
|GitHub Pages  |Hosting                |

No UI library, no CSS framework — all styling is vanilla inline CSS via React style props.

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

# Start dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

-----

## Deployment

The app deploys automatically to GitHub Pages on every push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

**Pipeline steps:**

1. Checkout code
1. Set up Node 20
1. `npm install`
1. `npm run build` → outputs to `dist/`
1. Upload `dist/` as a Pages artifact
1. Deploy to GitHub Pages

**Live site:** `https://CAJ654.github.io/Biblical-Views/`

To deploy manually, run `npm run build` and upload the `dist/` folder to any static host (Cloudflare Pages, Netlify, etc.).

-----

## Design Philosophy

- **Descriptive, not prescriptive** — each view is presented as its actual proponents would articulate it, not as a strawman
- **Spectrum positioning** — views are placed on a 0–100 axis within each category; the axis represents the range from most traditional/restrictive to most progressive/open within that specific question (not a universal left/right axis)
- **Proponents cited** — real scholars, confessions, and traditions are named so readers can follow up with primary sources
- **Notes surface nuance** — the notes field captures intra-view distinctions, historical context, and cross-tradition relationships that the summary can’t fit

-----

## Contributing

This is a personal reference project, but if you spot a factual error, a missing view, or a misrepresentation of a tradition, feel free to open an issue.

-----

## License

MIT
