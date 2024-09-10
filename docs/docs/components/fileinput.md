---
title: File input
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/file-input/API.md'

# File input

A file input is used to choose and upload files.

<Demo
    path="file-input-field--with-label"
    height="150px"
/>

## Usage

### When to use

-   **Adding files from a user's machine**. Use a file input when a user can upload a file from their local machine. This is usually as part of a form.

### When not to use

-   **Adding files that exist elsewhere**. Don't use a file input if a user is choosing files from somewhere else than their local machine, like files already uploaded to an app.

### Format

#### Content

##### Label

<Demo
    path="file-input-field--with-label"
    args="label:Upload birth certificate"
    height="150px"
/>

```jsx
<FileInputField label="Upload birth certificate" />
```

-   Use a label above the button if the file input is part of a form with other controls.

##### Button

<Demo
    path="file-input-field--with-label"
    args="buttonLabel:Upload test data"
    height="150px"
/>

```jsx
<FileInputField buttonLabel="Upload test data" />
```

-   When a form label isn't used, the button label should make it clear what kind of file is expected. Use _Upload certificate_ instead of just _Upload_, for example.

##### Help text

<Demo
    path="file-input-field--help-text"
    args="helpText:Max+size+is+5mb;label:Upload+birth+certificate"
    height="200px"
/>

```jsx
<FileInputField helpText="Max size 5mb" label="Upload birth certificate" />
```

-   Use help text to tell the user about any limitations or expectations of the files, like size or format.

## Options

### Multiple files

<Demo
    path="file-input-field--file-list"
    args="buttonLabel:Upload+documents"
    height="300px"
/>

```jsx
<FileInputField label="Upload documents">
    <FileListItem label="picture1.jpg" removeText="Remove" />
    <FileListItem
        label="mage_that_is_uploading.jpg"
        loading
        cancelText="Cancel"
    />
    <FileListItem
        label="image_file_name_is_to_long_to_display_on_one_line.jpg"
        removeText="Remove"
    />
</FileInputField>
```

-   Allow multiple file upload if that fits the use case.
-   Don't use several file inputs for the same kind of file, use one with multiple files allowed.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/file-input--default" target="_blank">Demo</a>
