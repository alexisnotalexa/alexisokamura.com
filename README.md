# alexisokamura.com

My personal portfolio site — a single-page React app built with Vite and deployed on Netlify.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server with HMR:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

Output is written to `dist/`.

## Deployment

The site deploys automatically to [Netlify](https://www.netlify.com/) on push, per the config in `netlify.toml` (`npm run build`, publishing `dist/`).
