---
title: File input
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { FileInputField, FileListItem } from '@dhis2/ui'

# File input

A file input is used to choose and upload files.

<Demo>
    <FileInputField
    helpText="Max size 5mb. Supported file types are .jpg, .png, and .pdf."
    label="Upload birth certificate"
    />
</Demo>

## Usage

### When to use

-   **Adding files from a user's machine**. Use a file input when a user can upload a file from their local machine. This is usually as part of a form.

### When not to use

-   **Adding files that exist elsewhere**. Don't use a file input if a user is choosing files from somewhere else than their local machine, like files already uploaded to an app.

### Format

#### Content

##### Label

<Demo>
    <FileInputField
    label="Upload birth certificate"
    />
</Demo>

-   Use a label above the button if the file input is part of a form with other controls.

##### Button

<Demo>
    <FileInputField
    buttonLabel="Upload test data"
    />
</Demo>

-   When a form label isn't used, the button label should make it clear what kind of file is expected. Use _Upload certificate_ instead of just _Upload_, for example.

##### Help text

<Demo>
    <FileInputField
    helpText="Max size 5mb. Supported file types are .jpg, .png, and .pdf."
    label="Upload birth certificate"
    />
</Demo>

-   Use help text to tell the user about any limitations or expectations of the files, like size or format.

## Options

### Multiple files

<Demo>
    <FileInputField label="Upload documents">
        <FileListItem label="document-name.pdf" removeText="Remove"/>
        <FileListItem label="uploaded-document.pdf" removeText="Remove"/>
        <FileListItem label="DHIS2-UI-Guide.pdf" removeText="Remove"/>
    </FileInputField>
</Demo>

-   Allow multiple file upload if that fits the use case.
-   Don't use several file inputs for the same kind of file, use one with multiple files allowed.

## Examples

==TODO: examples==

## Links

-   Demo ==TODO: link==
-   API reference ==TODO: link==
