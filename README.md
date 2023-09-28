# Kata github actions monorepo using Turborepo

This Turborepo includes the following sharing packages and apps.

## Apps and Packages

- `packages/config/eslint-config-custom`: Jest and ESLint configurations
- `packages/config/eslint-config-custom-next`: Jest and ESLint configurations
- `packages/config/eslint-config-custom-react`: Jest and ESLint configurations
- `packages/config/eslint-config-custom-server`: Jest and ESLint configurations
- `packages/config/jest-config`: Jest and ESLint configurations
- `packages/config/tsconfig`: tsconfig.json;s used throughout the monorepo
- `packages/lib/logger`: isomorphic logger (a small wrapper around console.log)
- `packages/spi/redis-client`: dummy redis client

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

## Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Run

Run the following command:

```sh
pnpm install
yarn install
yarn test
yarn dev
```
