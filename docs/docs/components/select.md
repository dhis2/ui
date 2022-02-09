---
title: Select
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { SingleSelectField, MultiSelectField, SingleSelectOption, MultiSelectOption } from '@dhis2/ui'

# Select

Selects are used to choose one or more items from a list of options.

<Demo>
    <SingleSelectField label="Label">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

## Usage

### When to use

-   **Choosing one or several options from a list of many**. Use a select if there are many options to choose from, especially in compact layouts.

### When not to use

-   **Ordering selections**. Don't use a select to choose options when their order is important. Use a [`Transfer`](transfer.md) instead.

### Variants

#### Single select

<Demo>
    <SingleSelectField label="Aggregation type">
        <SingleSelectOption label="Sum" value="1" />
        <SingleSelectOption label="Mean" value="2" />
        <SingleSelectOption label="Average" value="3" />
        <SingleSelectOption label="Mode" value="4" />
        <SingleSelectOption label="Min" value="5" />
        <SingleSelectOption label="Max" value="6" />
        <SingleSelectOption label="Median" value="7" />
        <SingleSelectOption label="Total" value="8" />
    </SingleSelectField>
</Demo>

-   Use a single select if the user can only choose one option.

#### Multi select

<Demo>
    <MultiSelectField label="Priority" selected={['1', '5',]}>
        <MultiSelectOption label="Very low" value="1" />
        <MultiSelectOption label="Low" value="2" />
        <MultiSelectOption label="Medium" value="3" />
        <MultiSelectOption label="High" value="4" />
        <MultiSelectOption label="Very high" value="5" />
        <MultiSelectOption label="Critical" value="6" />
    </MultiSelectField>
</Demo>

-   Use a multi select if the user can choose one or more options.

### Format

#### Label

-   Show a label above the select to show what it's for.
-   Labels should clearly describe the selection to be made. Don't use long sentences.
-   A noun is often the simplest choice of label, rather than a verb. For example, _Period type_ is more concise in a layout than _Choose a period type_. Only use a verb if the use of the control is ambiguous.

##### Placeholder

<Demo>
    <SingleSelectField label="Label" placeholder="Choose an option">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

-   Only use placeholder text to clarify what kind of content is expected.
-   Placeholder text shouldn't repeat the label.
-   Always use placeholder text if a label isn't used.
-   Placeholder text disappears when choosing an option, so make sure it's not critical.

##### Help text

<Demo>
    <SingleSelectField label="Aggregation type" helpText="Choose the aggregation type to apply to imported data.">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

-   Use help text to tell the user about any limitations or expectations for the content.
-   Help text can also be used to clarify what the input is for if it's a complex concept.

#### Size

<Demo>
    <SingleSelectField label="Regular sized select">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
    </SingleSelectField>
    <SingleSelectField dense label="Dense sized select">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
    </SingleSelectField>
</Demo>

-   Selects are available in two sizes, regular and `dense`. Regular sized selects are useful when there's space available. Use `dense` sized selects in compact, information-dense interfaces.

#### Width

-   A selects width should reflect the expected content.
-   Avoid full-width selects, which can be visually unclear.

## Options

### Filtering

<Demo>
    <SingleSelectField filterable label="Label">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

-   A select can show a filter control that filters the available options.
-   Use a filter when there's many options, more than 10, to choose from.

### Clearing

<Demo>
    <SingleSelectField clearable label="Label" selected="1">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

-   A select can show a _Clear_ button that removes the current selection.
-   Use a clearable select if there isn't a _None_ choice in the options.

### Prefix

<Demo>
    <SingleSelectField prefix="Data type" selected="3">
        <SingleSelectOption label="Data element" value="1" />
        <SingleSelectOption label="Event data item" value="2" />
        <SingleSelectOption label="Program indicator" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

-   A select can show a label that prefixes the chosen option label.
-   Use a prefix when there is limited space and a label above the select would take up too much space.
-   Prefix labels should be short and clear.

### State: Error

<Demo>
    <SingleSelectField error validationText="There's a problem with this choice." label="Label">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

-   Use an error state if there's a problem with the chosen option, or if it's required but empty.
-   Don't show an error too early, give the user a chance to make a choice.
-   The error text should help the user fix the problem. Refer to the [error writing guidelines](../principles/content-communication.md) for examples.

### State: Disabled

<Demo>
    <SingleSelectField disabled label="Label">
        <SingleSelectOption label="Option one" value="1" />
        <SingleSelectOption label="Option two" value="2" />
        <SingleSelectOption label="Option three" value="3" />
        <SingleSelectOption label="Option four" value="4" />
        <SingleSelectOption label="Option five" value="5" />
        <SingleSelectOption label="Option six" value="6" />
        <SingleSelectOption label="Option seven" value="7" />
        <SingleSelectOption label="Option eight" value="8" />
        <SingleSelectOption label="Option nine" value="9" />
        <SingleSelectOption label="Option ten" value="10" />
    </SingleSelectField>
</Demo>

-   Use a disabled state if the select temporarily can't be used.
-   Show a [`Tooltip`](tooltip.md) on hover or focus to explain why the select is disabled.

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/forms-single-select-single-select-field--default)
-   `Singleselect` API reference ==TODO: link==
-   `Multiselect` API reference ==TODO: link==
