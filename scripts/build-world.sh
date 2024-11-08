#!/usr/bin/env bash

yarn build:lib
yarn build:api
yarn workspace ui-docusaurus build
yarn workspace ui-storybook build

# If there are changes to files after we built, we need to run them
# through d2-style to avoid style-based diffs.
git diff --name-only -z | xargs -r0 yarn d2-style apply
