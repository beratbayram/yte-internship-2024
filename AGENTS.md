# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

Teaching material: React and Next.js exercises for the 2024 intern cohort at
TÜBİTAK BİLGEM YTE. Next.js 14 App Router, React 18, TypeScript, npm (`package-lock.json`).
The repo is archived on GitHub.

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build
npm run lint     # next lint
```

No tests.

## Layout

- Every folder in `app/` is a standalone exercise with its own `page.tsx` and, where needed,
  local components and a `page.css`. Exercises don't import from each other.
- Paired exercises show a refactor: `colored-table` → `colored-table-context`, `form-controlled`
  → `form-controlled-context`, `us-cats` → `search-cats`. Keep both versions; the difference is
  the lesson.
- `__non-next-examples__/` is plain HTML and CSS from before React was introduced.
- External APIs: `catfact.ninja/breeds` (cat exercises). No keys.

## Notes

- The code reflects what was taught in class, including intern-level simplifications. Don't
  "improve" an exercise by adding libraries or patterns that weren't taught at that point.
- Most pages are client components (`'use client'`) because they teach hooks.
- Formatting is inconsistent between files (quotes, semicolons); match the file you edit.
