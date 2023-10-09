# Kata github actions monorepo using Turborepo

This Turborepo includes the following sharing packages and apps.
This Turborepo includes the following sharing packages and apps.

## Apps and Packages

- `packages/shared-lib/config/eslint-config-custom`: Jest and ESLint configurations
- `packages/shared-lib/config/jest-presets`: Jest and ESLint configurations
- `packages/shared-lib/config/nycrc`: Jest and ESLint configurations
- `packages/shared-lib/config/tsconfig-custom`: tsconfig.json;s used throughout the monorepo
- `packages/shared-lib/logger`: isomorphic logger (a small wrapper around console.log)
- `packages/shared-spi/redis-client`: dummy redis client

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

## Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [NYC](https://github.com/istanbuljs/nyc) for code coverage generation and merge

## Run

Run the following command:

```sh
make install
make build
make link
make test-unit
make test-features
make dev
make start
```