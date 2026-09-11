/*
 * `toBeInTheDocument` and friends are declared in
 * @testing-library/jest-dom's own `jest.d.ts`, which only loads if
 * something in the TypeScript program imports the package. This repo
 * imports it from `jest.testing-library.config.js` — a Jest setup file
 * that is not part of the program — so the matchers would otherwise be
 * untyped in `.test.tsx` files.
 */
import '@testing-library/jest-dom'
