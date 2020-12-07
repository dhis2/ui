## Report an issue

We track our issues with Jira at https://jira.dhis2.org under the [LIBS](https://jira.dhis2.org/projects/LIBS) project. You can use the links below to open an issue with the relevant fields prepopulated:

-   [Bug](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10700&issuetype=10006&components=11015)
-   [Feature](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10700&issuetype=10300&components=11015)
-   [Task](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10700&issuetype=10003&components=11015)

## Submitting a PR

A PR is always welcome. We recommend discussing the proposed change first by opening a relevant Jira issue, so that we can prioritize the work and help out with the changes you'd like to make.

## Adding icons to ui-icons

The `@dhis2/ui-icons` build process will take care of most things for you. If you want to add an icon you can follow these steps:

-   Add the icon as an svg to `packages/icons/src/svg`
-   Ensure that you're matching the existing naming conventions, i.e. snake-case and icon name followed by the variant and then the size
-   The svg does not have to be optimized, the build process already includes svgo
-   Any path fill colors should be set to `#010101` so that we can set all path fill colors to `inherit`
-   Use `feat` as your conventional commit type, so that the change will be published automatically when the PR is merged
