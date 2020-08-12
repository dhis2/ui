# Getting Started

[![npm](https://img.shields.io/npm/v/@dhis2/ui.svg)](https://www.npmjs.com/package/@dhis2/ui)

## Installation

```bash
yarn add @dhis2/ui
```

When not using the dhis2 app platform, then the ui library requires you to install some peer dependencies:

-   `react`
-   `react-dom`
-   `styled-jsx`

Using the dhis2 app platform you won't have to install them as they're bundled with the platform scripts.

```bash
yarn add react react-dom styled-jsx -P
```

## Requirements

### React >= 16.3

This library uses the official React Context API (introduced in 16.3) and React Fragments.
