---
title: Alert bar
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { DocFigure } from '@site/src/components/DocFigure.jsx'
import { AlertBar } from '@dhis2/ui'

import API from '../../../components/alert/API.md'

# Alert bar

An alert bar communicates something to the user by showing a prominent, floating bar at the bottom of the screen, using one of several styles each indicating a different purpose.

<Demo>
    <AlertBar permanent>Hello world</AlertBar>
</Demo>

## Usage

### When to use

-   **Tell the user about something important**. Alert bars should only be used for information the user needs to know about.
-   **To inform without blocking**. An alert bar doesn't block the rest of the page, so it should be used to communicate when the user doesn't need to be pulled out of a workflow.
-   **Confirm important actions**. A successful alert bar can tell the user that something was saved successfully without stopping them from moving on.

### When not to use

-   **Critical, blocking problems**. An alert bar can be ignored, so it shouldn't be used if a problem is blocking the user's workflow.
-   **Unnecessary information**. Alert bars will grab the user's attention and distract them from their work, so only use them to communicate important information, problems, and confirmations.

### Variants

#### Quick reference

| Variant    | When to use                                                             |
| ---------- | ----------------------------------------------------------------------- |
| `info`     | Default. Communicate something that's isn't positive or negative.       |
| `success`  | Confirm an important successful action.                                 |
| `warning`  | Warn of a potential problem, usually before it happens.                 |
| `critical` | Communicate a catastrophic error, failure, or problem after it happens. |

#### Info

<Demo>
    <AlertBar permanent>Data export complete.</AlertBar>
</Demo>

-   An `info` alert bar is the default. Use it if none of the other variants fit.
-   Automatically dismiss after 5 seconds, so the message should be a useful but not critical.
-   Use for minor positive confirmations, like _Sharing settings changed._
-   Don't use for errors or problems.

#### Success

<Demo>
    <AlertBar success permanent>1000 objects updated.</AlertBar>
</Demo>

-   Only use to confirm successful, major actions.
-   Don't use for minor confirmations or navigation movements.
-   Always tell the user what was successful. Use clear labels like _45 units updated_, rather than just _Updated_.

#### Warning

<Demo>
    <AlertBar warning permanent>Some data is taking a long time to sync.</AlertBar>
</Demo>

-   Use to warn of potential problems or things that might happen, like _Some data is taking a long time to sync_.
-   Show before the problem happens, if possible.
-   If a problem has already happened, use a `critical` variant instead.
-   Won't automatically dismiss until the warning conditions change, like when the loading finishes.

#### Critical

<Demo>
    <AlertBar critical permanent>There was a problem loading this dashboard.</AlertBar>
</Demo>

-   Only use to communicate a serious problem, like broken functionality or a failed process.
-   Use when a user can still interact with the page. If the entire page broken, use a [`Modal`](modal.md) dialog or error screen instead.
-   Communicate clearly what happened. Use labels like _There was a problem loading this dashboard_ or _Message failed to send_.
-   Won't automatically dismiss.

### Format

#### Content

-   Alert bar labels should be clear, concise, and easy to understand. Remember, `info` and `success` alert bars dismiss automatically.
-   Don't use unclear labels like _Success_, _Failed_, or vague descriptions like _There was a problem_. Be clear and precise.
-   Check the [A-Z glossary](../patterns/glossary.md) and [communication guidelines](../principles/content-communication.md) for more tips for writing useful labels.

#### Display

-   Several alert bars can be shown at the same time.
-   Alert bars are automatically shown in the correct size and spacings when using an [`AlertStack`](https://ui.dhis2.nu/demo/?path=/story/feedback-alerts-alert-stack--default).

## Options

### Actions

<Demo>
    <AlertBar actions
={[
                {
                    label: 'Save',
                },
                {
                    label: 'Cancel',
                }
            ]} permanent>Hello world</AlertBar>
</Demo>

-   Alert bars can have up to two optional actions.
-   Actions offer a shortcut to act on the information in the alert bar.
-   Actions can do something on the current page, like _Retry_ for a failed action.
-   Actions can navigate somewhere else, like _View documentation_. Open external navigation in new tabs so the user doesn't lose their working context.
-   Only show simple actions. Don't include complex actions or actions with several steps.

### Icon

-   Each variant shows a default icon to support the content being communicated.
-   A custom icon can be used. Only use icons that are relevant to the content and that help the user understand the context. Use the default icon unless there's a good reason not to.

## API Reference

<API />

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/feedback-alerts-alert-bar--default)
