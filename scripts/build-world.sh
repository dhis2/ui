#!/usr/bin/env bash

# The library build is what gets published, so a failure here must fail the
# whole command — otherwise a broken or missing `build/` reaches the publish
# job, which gates only on this script's exit status.
set -e

yarn build:lib
yarn build:api

# Docs and Storybook are deliberately NOT release-blocking: being able to ship
# component fixes matters more than the documentation site building. They are
# still reported, as GitHub Actions warnings so a failure is visible in the
# checks UI rather than buried in the log.
set +e

yarn workspace ui-docusaurus build || echo "::warning::docusaurus build failed (non-blocking)"
yarn workspace ui-storybook build || echo "::warning::storybook build failed (non-blocking)"

set -e

# If there are changes to files after we built, we need to run them
# through d2-style to avoid style-based diffs.
git diff --name-only -z | xargs -r0 yarn d2-style apply
