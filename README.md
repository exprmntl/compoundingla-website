# Compounding LA Website

## Project Setup

Download dependencies:

```
npm ci
```

Run the project:

```
npm start
```

Create a production build:

```
npm run build
```

## Deployment

The site is configured for Vercel. Vercel builds the app with `npm run build`
and serves the `build` directory. `vercel.json` sends client-side routes such as
`/refill` to the React application.

The existing GitHub Pages deployment remains available during the migration.
Do not remove `public/CNAME`, the `gh-pages` branch, or the legacy deployment
script until the custom domain has been verified on Vercel.

Legacy GitHub Pages deployment command:

```
npm run deploy
```
