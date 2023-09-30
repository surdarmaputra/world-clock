# World Clock

A simple World Clock comparator bootstrapped with Next.js, TypeScript and TailwindCSS.

## Getting Started

### Prerequisites

- Node v18
- Yarn

### Install dependencies:

```bash
cd world-clock
yarn
```

### Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

The page is auto-updated as you edit the file.

### Execute unit test:

```bash
# Run all tests
yarn test

# Run specific tests
yarn test src/components/__tests__/UserRepositoriesGroups.test.tsx

# Run specific tests and watch for changes
yarn test --watch src/components/__tests__/UserRepositoriesGroups.test.tsx

# Run test coverage
yarn test:coverage

```

### Generated API and documentation

```bash
# Update generated API hooks
yarn api:update

# Run API documentation
yarn api:docs

```

## Project Convention

- File naming convention:
  - `PascalCase` for component, interface, type and enum.
  - `camelCase` for other files including hook, utils and API hook.
- API calls should use generated hooks located in `api/generated`. Hooks are generated using [Orval](https://orval.dev/).
- Test files are located under `__tests__` directory on the same level as the item being tested.
- Use [msw](https://mswjs.io/) for API testing with mocked responses configured in `__msw__/server.ts`.
- Create one file for one type or interface in `types` directory to prevent bloated types files in the future.

## References

- [msw](https://mswjs.io/)
- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [Orval](https://orval.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [SWR](https://www.npmjs.com/package/swr)
- [TailwindCSS](https://tailwindcss.com/)
