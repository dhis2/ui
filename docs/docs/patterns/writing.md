---
title: Grammar, punctuation, and style
---

# Writing in applications: Grammar, punctuation, and style

This document provides communication and writing guidelines for designing DHIS2 applications. Apps that follow these guidelines offer a consistent, unambiguous DHIS2 user experience.

General guidance for communicating with users is given in [Content and communication](../principles/content-communication.md). This document offers more technical patterns and guidance.

#### Internationalization

These guidelines cover grammar and language rules for English. Where possible, use these guidelines when translating to other languages. However, the natural communication style of a language takes precedent over these guidelines.

# Spelling, grammar, capitalization

## Spelling

-   Use US-EN spelling, as a general rule.
-   There are some terms in DHIS2, like _organisation unit_, that have adopted other spellings. In those cases, use the DHIS2 established spelling.

## Capitalization

#### Sentence case

-   Throughout an application, always use sentence case.
-   Don't use title case unless referring to an application, person, or product.

    -   ✅ **Recommended:** _Use the Capture app to record patient data._
    -   ❌ **Not recommended:** _Use the capture app to record patient data._
    -   ❌ **Not recommended:** _Use The Capture App To Record Patient Data._

#### Interface elements

-   Use sentence case for all interface elements.

    -   ✅ **Recommended:** A button label, _Add a patient_.
    -   ❌ **Not recommended:** A button label _Add a Patient_.

#### Referring to interface elements

-   When referring to elements in an interface, like buttons or sections, use the same capitalization style that the element itself uses.

So, when referring to a button on screen that reads _Add record_:

-   ✅ **Recommended:** _Press Add record to get started._
-   ❌ **Not recommended:** _Press add record to get started._

#### All-caps

-   All-caps, capitalizing all letters, can be used sparingly for headings and labels.
-   Never use all-caps for sentences or paragraphs of text.

## Punctuation

#### Quotation marks

-   Avoid quotation marks in interfaces. They add visual noise and are rarely needed.
-   Don't refer to interface terms using quotation marks.
-   If using, always use double quotation marks ("").

    -   ✅ **Recommended:** _Press Update to see the changes in the visualization_.
    -   ❌ **Not recommended:** _Press "Update" to see the changes in the visualization_.

#### Periods

-   All sentences should end with a period. There are a few exceptions:
    -   List items fewer than 3 words.
    -   Headings, subheadings, titles, and subtitles.
    -   Interface labels, like the label of a form field or a checkbox label.

#### Serial commas

-   Use a serial comma, a comma before _and_ at the end of a list, as it's the clearest and least ambiguous choice.

    -   ✅ **Recommended:** _Add users, roles, and groups to the table_.
    -   ❌ **Not recommended:** _Add users, roles and groups to the table_.

# Writing style

## Concise, clear, and actionable

-   Make sure text gets quickly to the point. Users scan an interface and won't read every word.

    -   ✅ **Recommended:** _Manage patient data with the new Capture app_.
    -   ❌ **Not recommended:** _Welcome to the new Capture app. This app is a quick, easy, and simple way to manage your DHIS2 instance patient data._

-   Prefer short, clear language and terms.

    -   ✅ **Recommended:** _Share this table with others by adding their usernames below_.
    -   ❌ **Not recommended:** _You can provide access to this saved analytical object by entering the usernames of the users you want to share with the in the username input in the table below_.

-   Use keywords consistently. Don't change the terms used to refer to key elements.

    -   ✅ **Recommended:** _Add users in the table below. Users added here have default settings_.
    -   ❌ **Not recommended:** _Add users in the table below. People created in this database have default settings_.

-   Avoid referring to the DHIS2 data model (unless the app purpose is interacting directly with that model, like Maintenance app).

    -   ✅ **Recommended:** _Couldn't load events for this patient_.
    -   ❌ **Not recommended:** _Couldn't load events for this tracked entity instance_.

-   Start statements with verbs where possible. This draws attention to the usefulness of the text.

    -   ✅ **Recommended:** _Edit and manage metadata with the Maintenance app_.
    -   ❌ **Not recommended:** _Maintenance app offers editing and management of metadata_.

-   Don't use _will_ where a simpler, more effective present-tense statement works. _Will_ should only be used when making reference to the consequences of a user action.

    -   ✅ **Recommended:** _Items in groups are available to everyone_.
    -   ❌ **Not recommended:** _Items in groups will be available to everyone_.
    -   ✅ **Recommended:** _Importing items adds them to the database_.
    -   ❌ **Not recommended:** _Importing items will add them to the database_.
    -   ✅ **Recommended:** _All items will be deleted_.
    -   ❌ **Not recommended:** _All items are deleted after this operation is completed_.

## Politeness

-   Using polite terms like _please_, _thank you_, and _sorry_ is unnecessary. These terms add visual noise without adding value.

    -   ✅ **Recommended:** _Click the Open button to get started_.
    -   ❌ **Not recommended:** _Please click the Open button to get started_.

## Acronyms

-   Remember, not everyone knows what an acronym means.
-   Introduce an acronym the first time a term is used.

    -   ✅ **Recommended:** _Add data element group sets (DEGS) to this group. DEGS inherit the default settings_.
    -   ❌ **Not recommended:** _Add DEGS to this group. DEGS inherit the default settings_.
