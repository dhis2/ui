---
title: Notice box
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { NoticeBox, Button } from '@dhis2/ui'

import API from '../../../components/notice-box/API.md'

# Notice box

A notice box shows important information about a situation.

<Demo>
    <NoticeBox title="Notice box title">
        Notice box content
    </NoticeBox>
</Demo>

## Usage

### When to use

-   **Directly related to the page content**. Use a notice box when the information being communicated is directly related to the page content. Don't use a notice box to tell the user about something unrelated.
-   **Ongoing situations**. A notice box can't be dismissed, so only use it to show information that about an ongoing situation.
-   **Highlighting a section**. A notice box can be shown inside a section or component, drawing attention to that particular area.

### When not to use

-   **In response to an action**. Don't use a notice box to show information that's in response to an action that doesn't navigate away from the page. Use an [`Alert bar`](alertbar.md) instead.
-   **Permanent information**. Don't use a notice box to show information that will never disappear. For example, introductory text that tells a user about a page should use plain text, not a notice box.

### Variants

#### Quick reference

| Variant   | When to use                                                              |
| --------- | ------------------------------------------------------------------------ |
| `info`    | Default. Use for important, but not problematic or critical information. |
| `warning` | Use for problems that require user attention, but are non-critical       |
| `error`   | Use for critical problems or errors that relate to the current context.  |

#### Information

<Demo>
    <NoticeBox title="Database recently updated">
        Dashboard data can take a few hours to update, so the most recent data might not be shown.
    </NoticeBox>
</Demo>

-   The default choice. Use whenever the information isn't a problem or something the user definitely needs to know before moving on.

#### Warning

<Demo>
    <NoticeBox warning title="No assigned organisation units">
        No one will be able to find this program because it doesn't have any assigned organisation units.
        <br/><Button small secondary>Edit access settings</Button>
    </NoticeBox>
</Demo>

-   Use to alert the user to a problem that isn't blocking the current workflow.
-   If possible, offer an [action](#actions) to help the user fix the problem.

#### Critical

<Demo>
    <NoticeBox critical title="Analytics tables failed">
        There isn't any data because there was a problem generating analytics tables.
        <br/><Button small secondary>Go to analytics tables</Button>
    </NoticeBox>
</Demo>

-   Use to alert the user to a problem or error that's blocking the current workflow.
-   If possible, offer an [action](#actions) to help the user fix the problem.

### Format

#### Content

-   Notice box titles should be a short summary to help the user scan elements the page.
-   Notice box text should be clear and informative. Explain what the situation is and, if relevant, offer a solution.
-   Check the [writing guidelines](../patterns/writing.md) for more information.

## Options

### Actions

-   A notice box can show actions.
-   Actions should always relate to the content of the notice box. Don't use notice box actions for unrelated, generic actions.
-   Use simple action verbs as action links.

## API Reference

<API />

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/data-display-notice-box--default)
