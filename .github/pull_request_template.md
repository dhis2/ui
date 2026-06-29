Hello, thanks for opening a PR! Please read and understand this carefully.

This library is a shared resource, both externally and internally in the DHIS2 core team. Its surface is large, and needs collective input to change and maintain. To keep a coherent vision for the library, the Extensibility team is considered the “owners”, but they don’t have the capacity to be the main stewards. To make the library sustainable for all of us, we need to share the work in a process that looks like this:

## 1. Someone who needs a change in the library implements that change and opens a PR. This could be for bugs or features.

You’re already here. Nice!

In this PR description (there is a template for these at the bottom of this text), please add:

1. A link to the relevant Jira issue
2. A description of changes
3. Screenshots of the change

Make sure you add these things to the code as necessary:

1. Docs
2. Updated types
3. Tests
4. Stories

Also, consider the effects these changes will have on both internal and external consumers, and whether these changes keep the API stable. The Extensibility team will check these things in step 3.

## 2. The person that opens that PR requests a review from teammates or other relevant consumers that want the change

This is because review work, discussing solutions, understanding the code changes, and going back and forth with change requests is time consuming, and the Extensibility team can’t manage that alone.

⚠️ To make the lives of the Extensibility team easier, and to make sure there isn’t another round of asking if this process was followed, **the reviewer should post answers to these questions in the review**:

1. Do you thoroughly understand the code changes?
2. Have you tested it (for example in the storybook of the demo? Find the netlify demo url, and go to the `/demo` path)
3. How will this affect consumers, both internal and external to the core team?
4. Have the requisite steps been done? (Types, docs, tests, stories)

## 3. Request a final review from the Extensibility team

With the other steps above completed accurately, this should be a quick look-over just to make sure that the changes align with the library vision and maintain a stable API. 

Upon approval, the PR will be ready for merging.

---

Here is a template for Step 1:

Jira issue: [JIRA_ISSUE_ID](https://dhis2.atlassian.net/browse/JIRA_ISSUE_ID)

### Description of changes

_Text_

### Screenshots

_Screenshots_

### Checklist

-   [ ] API docs are updated and generated
-   [ ] Types are updated
-   [ ] Storybook demos were added
-   [ ] Tests were added

_All checklist items above are relevant for feature PRs. For bugfixes, tests are necessary, and perhaps Storybook demos if they make sense. API docs and updated types might not be necessary for bugfixes -- consider them, and check them off if they are not needed._
