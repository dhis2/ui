#!/usr/bin/env bash

# The publish job gates on this script's exit status, so anything that
# produces published output must fail hard.
set -e

yarn build:lib
yarn build:api

# Docs and Storybook are not release-blocking: shipping component fixes
# matters more than the documentation site building. The warnings surface a
# failure in the checks UI rather than burying it in the log.
set +e

yarn workspace ui-docusaurus build || echo "::warning::docusaurus build failed (non-blocking)"
yarn workspace ui-storybook build || echo "::warning::storybook build failed (non-blocking)"

set -e

# If there are changes to files after we built, we need to run them
# through d2-style to avoid style-based diffs.
git diff --name-only -z | xargs -r0 yarn d2-style apply
