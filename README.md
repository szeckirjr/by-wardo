# Words by Wardo

A small [Next.js](https://nextjs.org/) site that highlights interesting or unusual English words. Each entry includes a definition and an example taken from books that inspired its inclusion. The project is completely static and uses Tailwind CSS and locally hosted fonts.

The site is deployed via [Vercel](https://vercel.com/) at [https://words.wardo.dev/](https://words.wardo.dev/).

## Running locally

Install dependencies with `npm install` and then start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

To create a production build run:

```bash
npm run build
```

and serve it with:

```bash
npm start
```

## Available commands

- `npm run dev` – start the Next.js development server
- `npm run build` – build the static export
- `npm start` – serve the production build
- `npm run lint` – run ESLint
- `npm test` – execute the Jest test suite
- `npm run test:coverage` – run tests with coverage reporting

## Project structure

The word data lives in [`src/words.tsx`](src/words.tsx) and page components are under [`src/app`](src/app). Unit tests are located alongside components in [`src/components/__tests__`](src/components/__tests__).

## License

MIT
