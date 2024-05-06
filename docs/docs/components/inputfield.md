---
title: Input
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { InputField, TextAreaField, Tooltip } from '@dhis2/ui'

import API from '../../../components/input/API.md'

# Input

An input is used to enter data, like text or a number.

<Demo>
    <InputField value="Input label" label="Value" />
</Demo>

## Usage

### When to use

-   **Entering or editing data**. Inputs are used to add or change data, like text or a number.

### When not to use

-   **Choosing from options**. Don't use an input to choose from other a list of options, use a `Select` instead.

### Variants

| Variant    | Usage                                   |
| ---------- | --------------------------------------- |
| `input`    | A couple of words, sentence, or number. |
| `textarea` | Several sentences                       |

### Format

#### Content

##### Label

<Demo>
    <InputField value="Malaria Registration" label="Program name" />
</Demo>

```jsx
<InputField value="Malaria Registration" label="Program name" />
```

-   Use a label above the input to show what the input is for.

##### Placeholder

<Demo>
    <InputField placeholder="Example: Malaria Registration" label="Program name" />
</Demo>

```jsx
<InputField placeholder="Example: Malaria Registration" label="Program name" />
```

-   Only use placeholder text to clarify what kind of content is expected.
-   Placeholder text shouldn't repeat the label.
-   Always use placeholder text if a label isn't used.
-   Placeholder text disappears when entering content, so make sure it's not critical.

##### Help text

<Demo>
    <InputField value="Malaria Registration" label="Program name" helpText="Used for data entry and shown on all reports." />
</Demo>

```jsx
<InputField
    value="Malaria Registration"
    label="Program name"
    helpText="Used for data entry and shown on all reports."
/>
```

-   Use help text to tell the user about any limitations or expectations for the content.
-   Help text can also be used to clarify what the input is for if it's a complex concept.

#### Size

<Demo>
    <div className='stacked-examples-vertical'>
        <InputField value="Malaria Registration" label="Program name" />
        <InputField value="Malaria Registration" label="Program name" dense />
    </div>
</Demo>

```jsx
<InputField value="Malaria Registration" label="Program name" />
<InputField value="Malaria Registration" label="Program name" dense />
```

-   Inputs are available in two sizes, regular and `dense`. Regular sized inputs are useful when there's space available. Use `dense` sized inputs in compact, information-dense interfaces.

#### Width

<Demo>
    <div className='stacked-examples-vertical'>
        <InputField label="Address" inputWidth="400px" />
        <InputField label="Number of district clinics" inputWidth="120px" type="number" />
    </div>
</Demo>

```jsx
<InputField label="Address" inputWidth="400px" />
<InputField label="Number of district clinics" inputWidth="120px" type="number" />
```

-   Inputs width should reflect the expected content.
-   If a three digit number is expected then the input should be narrow.
-   If a longer sentence is expected then the input should be wider.

## Options

### Textarea

<Demo>
    <TextAreaField label="Description of symptoms" />
</Demo>

```jsx
<TextAreaField label="Description of symptoms" />
```

-   Use a `Textarea` if more than a single sentence of content is expected.
-   [`Textarea`](https://ui.dhis2.nu/demo/?path=/story/forms-text-area-text-area-field--no-placeholder-no-value) is available as a standalone component.

### Validation

-   Validating the type of data entered isn't part of the components themselves.
-   Read more about [form handling in DHIS2](../utilities/forms/react-final-form.md).

### Read-only

<Demo>
    <InputField value="OU897234798" label="Unique ID" readOnly />
</Demo>

```jsx
<InputField value="OU897234798" label="Unique ID" readOnly />
```

-   Use a read-only input if it makes sense to show the input, but the content can't be changed.
-   Read-only inputs are useful to show that a value is locked, like a unique ID.
-   Offer help text for read-only inputs if it's unclear why the content can't be changed.

### State: Error

<Demo>
    <InputField value="Malaria Registration" label="Program name" error validationText="There's a program with this name already. Try another program name." />
</Demo>

```jsx
<InputField
    value="Malaria Registration"
    label="Program name"
    error
    validationText="There's a program with this name already. Try another program name."
/>
```

-   Use an error state if there's a problem with the content of the input, or if it's required but empty.
-   Don't show an error too early, give the user a chance to finish entering data.
-   The error text should help the user fix the problem. Refer to the [error writing guidelines](../principles/content-communication.md) for examples.

### State: Disabled

<Demo>
    <Tooltip content="Stage name is automatically generated and can't be changed."><InputField value="Referrals" label="Stage name" readOnly /></Tooltip>
</Demo>

```jsx
<Tooltip content="Stage name is automatically generated and can't be changed.">
    <InputField value="Referrals" label="Stage name" readOnly />
</Tooltip>
```

-   Use a disabled state if the input temporarily can't be used.
-   Show a [`Tooltip`](tooltip.md) on hover or focus to explain why the input is disabled.

### Data type: Text

<Demo>
    <InputField value="Olukayode" label="First name" inputWidth="240px" />
</Demo>

```jsx
<InputField value="Olukayode" label="First name" inputWidth="240px" />
```

-   Text inputs are the default type.
-   Use a text input for entering any kind of text content, like a mix of letters and numbers.

### Data type: Number

<Demo>
    <InputField value="19" label="Admission count" inputWidth="100px" type="number" />
</Demo>

```jsx
<InputField
    value="19"
    label="Admission count"
    inputWidth="100px"
    type="number"
/>
```

-   Use a number input for entering numbers.
-   The `step` value should reflect the expected content. If entering a number that's always a multiple of 10, use 10 as the `step` value.

### Data type: Password

<Demo>
    <InputField value="It's a secret!" label="Password" inputWidth="320px"  type="password" />
</Demo>

```jsx
<InputField
    value="It's a secret!"
    label="Password"
    inputWidth="320px"
    type="password"
/>
```

-   Use a password input whenever a user is entering a password or secret value.

### Data type: Date / time

<Demo>
    <InputField  label="Incident date and time" inputWidth="240px" type="datetime-local" />
</Demo>

```jsx
<InputField
    label="Incident date and time"
    inputWidth="240px"
    type="datetime-local"
/>
```

-   Using date/time inputs offers different interactions depending on the user's browser.

### Other data types

The following data types don't change the interaction with the input, but should be used for clarity:

-   Telephone (`tel`)
-   Email (`email`)
-   Month (`month`)
-   Week (`week`)
-   Search (`search`)

## API Reference

<API />

## Links

- <a href="/demo/?path=/story/file-input-field--default" target="_blank">Demo</a>
- <a href="/demo/?path=/story/text-area--placeholder-no-value" target="_blank">`TextArea`Demo</a>
