## Report an issue

We track our issues with Jira at https://jira.dhis2.org under the [LIBS](https://jira.dhis2.org/projects/LIBS) project. You can use the links below to open an issue with the relevant fields prepopulated:

-   [Bug](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10700&issuetype=10006&components=11015)
-   [Feature](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10700&issuetype=10300&components=11015)
-   [Task](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10700&issuetype=10003&components=11015)

## Automated releases

We use semantic release to publish the changes to `@dhis2/ui` automatically. This allows us to easily and quickly publish updates with the correct version number and a generated changelog. Semantic release uses commit messages to deduce what has been changed and how that should affect the version number. See the [semantic release docs](https://github.com/semantic-release/semantic-release#readme) for more detail.

To allow semantic release to analyse our commits we use [conventional commits](https://www.conventionalcommits.org) for our allowed commit types. See [this list](https://github.com/commitizen/conventional-commit-types/blob/master/index.json) for a summary of the available types and their usage. Since semantic release analyses commits, preserving commit hashes between branches is sometimes important. There are [recipes](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/distribution-channels.md#publishing-on-distribution-channels) available in the semantic-release repository for most scenarios, but for convenience these are the merge types you can use for the two most common scenarios:

-   When merging from a feature branch to a release branch we recommend you use a squash merge. A regular merge, squash merge, and rebase merge are all technically ok, but a squash merge ensures that only the PR title and squash commit message will be used for generating the changelog.
-   When merging from a release branch to another release branch you must use a regular merge so that the commit hashes are preserved.

## Submitting a PR

A PR is always welcome. We recommend discussing the proposed change first by opening a relevant Jira issue, so that we can prioritize the work and help out with the changes you'd like to make.

## Adding icons to ui-icons

The `@dhis2/ui-icons` build process will take care of most things for you. If you want to add an icon you can follow these steps:

-   Add the icon as an svg to `packages/icons/src/svg`
-   Ensure that you're matching the existing naming conventions, i.e. kebab-case and icon name followed by the variant and then the size
-   The svg does not have to be optimized, the build process already includes svgo
-   Any path fill colors should be set to `#010101` so that we can set all path fills to `currentColor`
-   Use `feat` as your conventional commit type, so that the change will be published automatically when the PR is merged
