# Portfolio — Deployable (Root structure)

This bundle uses **root** `app/` and `components/` (no `src/` folder). If you were getting `GET / 404`, this structure avoids any `src/` path confusion.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build & Start
```bash
npm run build
npm start
```

## Place assets
- `public/me.png` — your portrait
- `public/Rishabh_Aggarwal_Resume.pdf` — your resume

## Notes
- Path alias `@/*` points to the **project root** (configured in `tsconfig.json` here).
- If you still see 404, make sure you're inside this folder (where `package.json` lives) when you run `npm run dev`, and delete any `.next` cache before restarting.