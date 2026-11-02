# YTE Internship 2024

Exercises from the front-end lectures I gave to the 2024 intern cohort at TÜBİTAK BİLGEM YTE. Each folder under `app/` is one exercise, and together they build up React fundamentals step by step inside a Next.js App Router project.

## Exercises

| Route                      | Topic                                                                             |
| -------------------------- | --------------------------------------------------------------------------------- |
| `/colored-table`           | State and props: a table whose cells change color, state lifted to the page       |
| `/colored-table-context`   | The same table rewritten with React Context instead of prop drilling              |
| `/product-list`            | "Thinking in React": a filterable product table with a search bar                 |
| `/form-controlled`         | Controlled form inputs with `useState`                                            |
| `/form-controlled-context` | A controlled form split into input components that share state through Context    |
| `/form-uncontrolled`       | Uncontrolled forms with `FormData`, routing with `useRouter`, a shared layout, a dynamic `[slug]` route |
| `/us-cats`                 | Fetching data in `useEffect` (cat breeds from catfact.ninja), plus a route `not-found` page |
| `/search-cats`             | Fetching plus client-side search, state shared through Context                    |

`__non-next-examples__/` has the plain HTML and CSS versions used at the start of the course, before moving to React: a basic page, the colored table and the product list.

## Running

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and go to one of the routes above. The home page is only a placeholder.

Built with Next.js 14, React 18 and TypeScript. The plain HTML examples open directly in a browser.

## License

MIT
