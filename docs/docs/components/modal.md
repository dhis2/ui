---
title: Modal
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { ModalDemoMain, ModalDemoActions, ModalDemoLoading, ModalDemoError } from '@site/src/components/ModalDemos.jsx'
import { Modal, ModalTitle, ModalContent, ModalActions, Button } from '@dhis2/ui'

import API from '../../../components/modal/API.md'

# Modal

A modal shows content on a layer on top of page, interrupting a workflow and focusing a user's attention on the modal contents.

<Demo>
    <ModalDemoMain/>
</Demo>

## Usage

### When to use

-   **Focused tasks that require attention**. Use a modal when user input is required to continue.
-   **Self-contained detail**. A modal can be used to show more detail about something, but remember that the modal will block the page content below. If the modal content needs to be seen while referring to the page content, use a sidebar instead.

### When not to use

-   **Workflows with several steps**. Don't use a modal for a workflow that has more than a single step. Navigate to a new page instead.
-   **Complex tasks**. Modals aren't well suited to complex tasks. Limit the number of controls and logic in a modal. If the task is too complex, navigate to a new page instead.
-   **Non-urgent tasks**. Don't automatically show a modal unless the task requires urgent attention or if the current workflow is blocked. Use a [`Notice box`](notice-box.md) or [`Alert bar`](alertbar.md) instead.
-   **Tasks unrelated to the page**. Modal content should always relate to the current page. Don't use modals to show unrelated content.

### Format

#### Content

##### Title

-   Use short, clear modal titles that explain what the purpose of the modal is.

#### Size

-   Modals are available in several preset sizes, `small`, `medium`, and `large`. Use the size that matches the amount of content to be shown.
-   A `fluid` size is also available that will adapt to the width of the modal contents. Use a `fluid` sized modal if the content doesn't work inside any of the preset sizes. Remember that complex tasks should usually be shown on a new page.

#### Alignment

-   A modal can be vertically aligned to the top or middle of the page.
-   Top-aligned modals are useful if the content inside the modal is dynamically changing, so the height of the modal can change. Top-alignment keeps the modal anchored in the same place.
-   Middle-aligned modals are useful for short, concise modals, like confirming a destructive action.

## Options

### Actions

:::info Note
The `hide` variable used in the demo's below are initiated using `useState(true)` and set to `false` with the button you see in the demos.
:::

<Demo>
    <ModalDemoActions/>
</Demo>

```jsx
<Modal hide={hide}>
    <ModalTitle>Modal title</ModalTitle>

    <ModalContent>
        <InputField
            label="First name"
            required
            value="Karimbe"
            inputWidth="320px"
        />
        <InputField
            label="Last name"
            value="Olefeme"
            required
            inputWidth="320px"
        />
    </ModalContent>

    <ModalActions>
        <ButtonStrip end>
            <Button onClick={() => setHide(true)} secondary>
                Cancel
            </Button>
            <Button onClick={() => setHide(true)} primary>
                Save changes
            </Button>
        </ButtonStrip>
    </ModalActions>
</Modal>
```

-   A modal should contain action buttons.
-   Action buttons should offer clear choices and relate to the modal content.
-   If it's possible to leave the modal with saving, always offer a _Cancel_ action button.
-   The primary action should always be furthest to the right.

### State: Loading

<Demo>
    <ModalDemoLoading/>
</Demo>

```jsx
<Modal hide={hide}>
    <ModalTitle>Modal title</ModalTitle>
    <ModalContent>
        <Box minHeight="240px">
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        </Box>
    </ModalContent>
    <ModalActions>
        <ButtonStrip end>
            <Button onClick={() => setHide(true)} secondary>
                Cancel
            </Button>
            <Button onClick={() => setHide(true)} primary>
                Save changes
            </Button>
        </ButtonStrip>
    </ModalActions>
</Modal>
```

-   Show a [`Loader`](loading.md) when a modal is loading content.
-   Don't show a full page loader before showing the modal. Show the modal immediately.

### State: Error

<Demo>
    <ModalDemoError/>
</Demo>

```jsx
<Modal hide={hide}>
    <ModalTitle>Update profile</ModalTitle>
    <ModalContent>
        <InputField
            label="First name"
            required
            error
            validationText="First name can't be empty."
            inputWidth="320px"
        />
        <InputField
            label="Last name"
            value="Olefeme"
            required
            inputWidth="320px"
        />
        <Box marginTop="16px">
            <NoticeBox error>There's a problem with this form.</NoticeBox>
        </Box>
    </ModalContent>
    <ModalActions>
        <ButtonStrip end>
            <Button onClick={() => setHide(true)} secondary>
                Cancel
            </Button>
            <Button disabled onClick={() => setHide(true)} primary>
                Save changes
            </Button>
        </ButtonStrip>
    </ModalActions>
</Modal>
```

-   If there's a problem with something inside the modal, like a missing input field, show a [`Notice box`](notice-box.md) at the bottom of the modal.
-   If there's a problem with something outside of the modal, like getting an empty response back from the server, show an [`Alert bar`](alertbar.md) outside of the modal.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/modal--default-content" target="_blank">Demo</a>
