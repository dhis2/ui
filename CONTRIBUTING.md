## Submitting a PR

A PR is always welcome. Here we give an overview of the process to contribute to the UI library - if you have any questions, please use the [Community of Practice development category](https://community.dhis2.org/c/development/10) to raise them, and someone from the core team will respond.

The process from a high-level is:

1. Find or create a Jira ticket for the issue you want to work on
1. Create a PR for the contribution according to our guidelines (described below)
1. The core team will review the PR and raise comments; then you should:
    1. Respond to comments on the PR
    1. Update the PR, until it is approved
1. Once approved, the PR will be merged, and it will be part of the next release!

### Choose a Jira ticket

Please check our Jira for open issues. We have a [good-first-issues](https://dhis2.atlassian.net/issues?jql=labels%20%3D%20%22good-first-issues%22) label where we collect issues that are good candidates for first-time contributions (for the UI and other projects). You can also look at all [the issues](https://dhis2.atlassian.net/issues?jql=project%20%3D%20%22LIBS%22%20AND%20component%20%3D%20%22ui%22) for the UI lirbrary, for ideas of what we are working on, and what you can pick up.

If you want to propose a change or a feature, then the first step should be to raise a Jira issue for it, to ensure that it is suitable for the library.

Once you picked the issue, please indicate (in a comment on the ticket or by contacting one of the core developers) that you will be working on it, so that it can be moved to In-Progress and we can avoid having multiple people working on the same issue.

### Create a PR

For contributions, we follow [Github Flow](https://docs.github.com/en/get-started/using-github/github-flow) process. This is a high-level description of how the process looks like in the context of contributions to DHIS2 projects:

1. Clone the repo to your personal GitHub
1. Create a branch for your work `git checkout -b JIRA_TICKET_NUMBER/ticket-short-description` - while we don't enforce branch names, it is a good practice to include the ticket number, so if you are working on this [ticket LIBS-813](https://dhis2.atlassian.net/browse/LIBS-813) on Jira, your branch name can be `LIBS-813/clear-button-fix` (and the command `git checkout -b LIBS-813/clear-button-fix`).
1. Work on your ticket. You can find instructions on how to run the project in the README.
    1. Commit your work - Your Commits should follow [conventional commtis](https://www.conventionalcommits.org/en/v1.0.0/) specification.
1. Push your branch to your personal GitHub and create a Pull Request back to the DHIS2 `master` branch.
1. Add all the relevant information in the PR description (see below).
1. Respond to the PR comments, and update your PR accordingly, until it is approved and merged.

#### Good commit messages

Our commit messages standard is one of the areas that trips first-time contributors, so make sure to understand it and pay attention to having _good_ commit messages that follow the [conventional commtis](https://www.conventionalcommits.org/en/v1.0.0/) specification.

In practice, this means that you should have a prefix and a description, i.e. `fix: make clear button not focusable`, notice:

-   The `fix` (or `feat` or `docts` etc..) prefix, followed by a colon `:` and a `space` - all of these parts are important, even the space! Otherwise your PR will fail on CI checks.

-   You can optionally - and we encourage you to do so - add a scope to the prefix, this can be the UI component you worked on, so `fix(transfer): make clear button not focusable`. Some people also choose to use the JIRA ticket number for the scope.

Additionally, some [general advice](https://www.gitkraken.com/learn/git/best-practices/git-commit-message#quick-git-commit-message-tips) is to:

1. Avoid unnecessary capitalization
1. Double check your spelling
1. Don’t end commit message summaries with punctuation
1. Use Imperative Verb Form, so
   not `fix: making the clear button work` ❌
   nor `fix: made the clear button work` (past) ❌
   nor `fix: Make the clear button work` (captialised) ❌
   rather `fix: make the clear button work` ✅

These are not enforced by CI, but they help keep the commit history clean, and the Changelog easier to read.

> The prefix is important, not only for stylistic reasons. It is what drives our [semantic-release](https://semver.org/) process, so a `feat` prefix would bump the minor version, a `fix` would bump the patch version and having `BREAKING_CHANGE` in the commit message would bump the major version.

#### Good PRs

Try in your PR to give as much information and context as possible to the reviewer. Some things to keep in mind:

-   Add a link to the JIRA ticket: this makes it easier to find the ticket, but also - more importantly - it allows JIRA automation to link the tickcet to your PR.
-   Add a short description of your changes
    -   if you made some coding or design decisions you'd like to highlight, then expand on these decisions in the description
-   Add a video or screenshot of the change.

These are some examples of good PRs:

-   [https://github.com/dhis2/ui/pull/1694](https://github.com/dhis2/ui/pull/1694)

-   [https://github.com/dhis2/ui/pull/1629](https://github.com/dhis2/ui/pull/1629)
-   [https://github.com/dhis2/ui/pull/1672](https://github.com/dhis2/ui/pull/1672)
-   [https://github.com/dhis2/ui/pull/1681](https://github.com/dhis2/ui/pull/1681)

Note that these good PRs are not about having a long and verbose description - sometimes that makes the PR harder to review. Just try and put yourself in the reviewers' shoes and make their lives as easy as possible, so they understand the PR context and approach (the How and the Why).

#### Coding convention

Make sure you followed our coding conventions in the repo. While this might vary between repos, since there are some legacy ones, here some general high-level things to look for:

-   Your code is well formatted - run `yarn format` at the end of your work
    -   This should be done automatically in your IDE, but some of our legacy repos are not well configured.
-   Ensure that the tests are passing, and that you added relevant tests to your PR.
-   Ensure sure the documentation was updated, especially for library projects (like UI or app-plaatform).

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

## Adding icons to ui-icons

The `@dhis2/ui-icons` build process will take care of most things for you. If you want to add an icon you can follow these steps:

-   Add the icon as an svg to `packages/icons/src/svg`
-   Ensure that you're matching the existing naming conventions, i.e. kebab-case and icon name followed by the variant and then the size
-   The svg does not have to be optimized, the build process already includes svgo
-   Any path fill colors should be set to `#010101` so that we can set all path fills to `currentColor`
-   Use `feat` as your conventional commit type, so that the change will be published automatically when the PR is merged
