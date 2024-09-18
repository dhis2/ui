---
title: Select
---

import { Demo } from '@site/src/components/DemoComponent.jsx'

import API from '../../../collections/ui/src/select/API.md'

# Select

Selects are used to choose one or more items from a list of options.
<Demo
    path="single-select--with-options-and-a-selection"
    height="200px"
/>

## Usage

### When to use

-   **Choosing one or several options from a list of many**. Use a select if there are many options to choose from, especially in compact layouts.

### When not to use

-   **Ordering selections**. Don't use a select to choose options when their order is important. Use a [`Transfer`](transfer.md) instead.

### Variants

#### Single select

<Demo
    path="single-select-field--with-help-text"
    height="200px"
    args="label:Aggregation type;children[0].key:1;children[0].props.value:1;children[0].props.label:one;children[1].key:2;children[1].props.value:2;children[1].props.label:two;children[2].key:3;children[2].props.value:3;children[2].props.label:three;children[3]:!undefined;children[4]:!undefined;children[5]:!undefined;children[6]:!undefined;children[7]:!undefined;children[8]:!undefined;children[9]:!undefined"
/>

```jsx
<SingleSelectField label="Aggregation type">
    <SingleSelectOption label="One" value="1" />
    <SingleSelectOption label="Two" value="2" />
    <SingleSelectOption label="Three" value="3" />
</SingleSelectField>
```

-   Use a single select if the user can only choose one option.

#### Multi select

<Demo
    path="multi-select-field--default"
    height="200px"
    args="label:priority;children[0].props.label:Very+low"
/>

```jsx
<MultiSelectField label="Priority" selected={['1']}>
    <MultiSelectOption label="Very low" value="1" />
    <MultiSelectOption label="High" value="4" />
    <MultiSelectOption label="Very high" value="5" />
    <MultiSelectOption label="Critical" value="6" />
</MultiSelectField>
```

-   Use a multi select if the user can choose one or more options.

### Format

#### Label

-   Show a label above the select to show what it's for.
-   Labels should clearly describe the selection to be made. Don't use long sentences.
-   A noun is often the simplest choice of label, rather than a verb. For example, _Period type_ is more concise in a layout than _Choose a period type_. Only use a verb if the use of the control is ambiguous.

##### Placeholder

<Demo
    path="single-select--with-placeholder"
    height="200px"
    args="label:Label;placeholder:Choose+an+option"
/>

```jsx
<SingleSelectField label="Label" placeholder="Choose an option">
    <SingleSelectOption label="Option one" value="1" />
    <SingleSelectOption label="Option two" value="2" />
    <SingleSelectOption label="Option three" value="3" />
</SingleSelectField>
```

-   Only use placeholder text to clarify what kind of content is expected.
-   Placeholder text shouldn't repeat the label.
-   Always use placeholder text if a label isn't used.
-   Placeholder text disappears when choosing an option, so make sure it's not critical.

##### Help text

<Demo
    path="single-select-field--with-help-text"
    height="200px"
    args="label:Aggregation+type;helpText:Choose+the+aggregation+type+to+apply+to+imported+data"
/>

```jsx
<SingleSelectField
    label="Aggregation type"
    helpText="Choose the aggregation type to apply to imported data."
>
    <SingleSelectOption label="Option one" value="1" />
    <SingleSelectOption label="Option two" value="2" />
    <SingleSelectOption label="Option three" value="3" />
</SingleSelectField>
```

-   Use help text to tell the user about any limitations or expectations for the content.
-   Help text can also be used to clarify what the input is for if it's a complex concept.

#### Size

<Demo
    path="single-select--dense"
    height="200px"
/>

```jsx
<SingleSelectField dense label="Dense sized select">
    <SingleSelectOption label="Option one" value="1" />
    <SingleSelectOption label="Option two" value="2" />
    <SingleSelectOption label="Option three" value="3" />
</SingleSelectField>
```

-   Selects are available in two sizes, regular and `dense`. Regular sized selects are useful when there's space available. Use `dense` sized selects in compact, information-dense interfaces.

#### Width

-   A selects width should reflect the expected content.
-   Avoid full-width selects, which can be visually unclear.

## Options

### Filtering

<Demo
    path="single-select--with-filter-field"
    height="250px"
/>

```jsx
<SingleSelectField filterable label="Label">
    <SingleSelectOption label="Option one" value="1" />
    <SingleSelectOption label="Option two" value="2" />
    <SingleSelectOption label="Option three" value="3" />
    <SingleSelectOption label="Option nine" value="9" />
    <SingleSelectOption label="Option ten" value="10" />
</SingleSelectField>
```

-   A select can show a filter control that filters the available options.
-   Use a filter when there's many options, more than 10, to choose from.

### Clearing

<Demo
    path="single-select--with-clear-button-selection-and-on-change"
    height="210px"
/>

```jsx
<SingleSelectField clearable label="Label" selected="1">
    <SingleSelectOption label="Option one" value="1" />
    <SingleSelectOption label="Option two" value="2" />
    <SingleSelectOption label="Option three" value="3" />
    <SingleSelectOption label="Option nine" value="9" />
    <SingleSelectOption label="Option ten" value="10" />
</SingleSelectField>
```

-   A select can show a _Clear_ button that removes the current selection.
-   Use a clearable select if there isn't a _None_ choice in the options.

### Prefix

<Demo
    path="single-select--with-prefix"
    height="210px"
    args="prefix:Data+type"
/>

```jsx
<SingleSelectField prefix="Data type" selected="3">
    <SingleSelectOption label="Data element" value="1" />
    <SingleSelectOption label="Event data item" value="2" />
    <SingleSelectOption label="Program indicator" value="3" />
    <SingleSelectOption label="Option ten" value="10" />
</SingleSelectField>
```

-   A select can show a label that prefixes the chosen option label.
-   Use a prefix when there is limited space and a label above the select would take up too much space.
-   Prefix labels should be short and clear.

### State: Error

<Demo
    path="single-select-field--status-error"
    height="210px"
/>

```jsx
<SingleSelectField
    error
    validationText="That value is wrong. Sorry!"
    label="Label"
>
    <SingleSelectOption label="Option one" value="1" />
    <SingleSelectOption label="Option two" value="2" />
    <SingleSelectOption label="Option three" value="3" />
    <SingleSelectOption label="Option ten" value="10" />
</SingleSelectField>
```

-   Use an error state if there's a problem with the chosen option, or if it's required but empty.
-   Don't show an error too early, give the user a chance to make a choice.
-   The error text should help the user fix the problem. Refer to the [error writing guidelines](../principles/content-communication.md) for examples.

### State: Disabled

<Demo
    path="single-select-field--status-disabled"
    height="150px"
/>

```jsx
<SingleSelectField disabled label="Label">
    <SingleSelectOption label="Option one" value="1" />
    <SingleSelectOption label="Option eight" value="8" />
    <SingleSelectOption label="Option nine" value="9" />
    <SingleSelectOption label="Option ten" value="10" />
</SingleSelectField>
```

-   Use a disabled state if the select temporarily can't be used.
-   Show a [`Tooltip`](tooltip.md) on hover or focus to explain why the select is disabled.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/single-select--with-options-and-on-change" target="_blank">Demo</a>
