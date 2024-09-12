---
title: Input
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/input/API.md'

# Input

An input is used to enter data, like text or a number.

<Demo
    path="input-field--with-value"
    args="value:This is an input field"
    height="150px"
/>

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

<Demo
    path="input-field--with-value"
    args="value:Malaria Registration;label:Program name"
    height="150px"
/>

```jsx
<InputField value="Malaria Registration" label="Program name" />
```

-   Use a label above the input to show what the input is for.

##### Placeholder

<Demo
    path="input-field--placeholder-no-value"
    args="label:Program+name;placeholder:Type+your+program+name+here"
    height="150px"
/>

```jsx
<InputField placeholder="Type your program name here" label="Program name" />
```

-   Only use placeholder text to clarify what kind of content is expected.
-   Placeholder text shouldn't repeat the label.
-   Always use placeholder text if a label isn't used.
-   Placeholder text disappears when entering content, so make sure it's not critical.

##### Help text

<Demo
    path="input-field--with-help-text"
    args="label:Program+Name;placeholder:Enter+program+name;helpText:Used+for+data+entry+and+shown+on+all+reports"
    height="150px"
/>

```jsx
<InputField
    placeholder="Enter program name"
    label="Program name"
    helpText="Used for data entry and shown on all reports"
/>
```

-   Use help text to tell the user about any limitations or expectations for the content.
-   Help text can also be used to clarify what the input is for if it's a complex concept.

#### Size

<Demo
    path="input-field--dense"
    args="label:Program+Name;value:Malaria+Registration"
    height="150px"
/>

```jsx
<InputField value="Malaria Registration" label="Program name" dense />
```

-   Inputs are available in two sizes, regular and `dense`. Regular sized inputs are useful when there's space available. Use `dense` sized inputs in compact, information-dense interfaces.

#### Width

<Demo
    path="input-field--input-width"
    height="200px"
/>

```jsx
<InputField inputWidth="100px" />
<InputField inputWidth="220px" />
```

Inputs width should reflect the expected content.

-   If a three digit number is expected then the input should be narrow.
-   If a longer sentence is expected then the input should be wider.

## Options

### Textarea

<Demo
    path="text-area-field--label-text-overflow"
    height="200px"
    args="label:Description+of+symptoms"
/>

```jsx
<TextAreaField label="Description of symptoms" />
```

-   Use a `Textarea` if more than a single sentence of content is expected.
-   [`Textarea`](https://ui.dhis2.nu/demo/?path=/story/forms-text-area-text-area-field--no-placeholder-no-value) is available as a standalone component.

### Validation

-   Validating the type of data entered isn't part of the components themselves.
-   Read more about [form handling in DHIS2](../utilities/forms/react-final-form.md).

### Read-only

<Demo
    path="input-field--read-only"
    height="150px"
    args="value:OU897234798;label:Unique+ID"
/>

```jsx
<InputField value="OU897234798" label="Unique ID" readOnly />
```

-   Use a read-only input if it makes sense to show the input, but the content can't be changed.
-   Read-only inputs are useful to show that a value is locked, like a unique ID.
-   Offer help text for read-only inputs if it's unclear why the content can't be changed.

### State: Error

<Demo
    path="input-field--status-error"
    height="180px"
    args="value:Malaria+Registration;label:Program+name;validationText:This+program+name+is+already+in+use;helpText:"
/>

```jsx
<InputField
    value="Malaria Registration"
    label="Program name"
    error
    validationText="This program name is already in use"
/>
```

-   Use an error state if there's a problem with the content of the input, or if it's required but empty.
-   Don't show an error too early, give the user a chance to finish entering data.
-   The error text should help the user fix the problem. Refer to the [error writing guidelines](../principles/content-communication.md) for examples.

### State: Disabled

<Demo
    path="input-field--disabled"
    height="150px"
    args="value:Referrals;label:Stage+name"
/>

```jsx
<InputField value="Referrals" label="Stage name" readOnly />
```

However, it is recommended to add a Tooltip to explain why the input is disabled.

```jsx
<Tooltip content="Stage name is automatically generated and can't be changed.">
    <InputField value="Referrals" label="Stage name" readOnly />
</Tooltip>
```

-   Use a disabled state if the input temporarily can't be used.
-   Show a [`Tooltip`](tooltip.md) on hover or focus to explain why the input is disabled.

### Data type: Text

<Demo
    path="input-field--with-value"
    height="150px"
    args="label:First+name;type:text;value:Olukayode"
/>

```jsx
<InputField value="Olukayode" label="First name" inputWidth="240px" />
```

-   Text inputs are the default type.
-   Use a text input for entering any kind of text content, like a mix of letters and numbers.

### Data type: Number

<Demo
    path="input-field--with-value"
    height="150px"
    args="label:Admission+count;type:number;value:19"
/>

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

<Demo
    path="input-field--with-value"
    height="150px"
    args="label:Password;type:password;value:thisisasecret"
/>

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

<Demo
    path="input-field--with-value"
    height="150px"
    args="label:Incident+date+and+time;type:datetime-local"
/>

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
