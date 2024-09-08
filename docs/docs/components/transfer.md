---
title: Transfer
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/transfer/API.md'

# Transfer

A transfer is used to make complex selections from a list of options.

<Demo
    path="transfer--single-selection"
    height="320px"
/>

## Usage

A transfer is made up of two lists. The _source list_ that shows the available options and the _picked list_ that shows the chosen options. Options can be transferred between lists with the middle buttons or by double-clicking an option.

### When to use

-   **Choose from many items**. Use a transfer if a user needs to choose from many items. Transfers can work for hundreds of thousands of items.
-   **Ordered selections**. Use a transfer if chosen options need to have a specific order.
-   **Choose from several groups**. Use a transfer if a user needs to choose from several groups into a single set of chosen options.

### When not to use

-   **Choosing from a few items**. Don't use a transfer to choose from a few options. Use a [`Select`](select.md) instead.

## Options

For all the demo's below, `transferOptions` is an array of objects with the following shape:

```js
;[
    {
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    },
]
```

The `onChange` and `selected` properties are created like this:

```js
const [selected, setSelected] = useState()
const onChange = (payload) => setSelected(payload.selected)
```

### Header

<Demo
    path="transfer--header"
    height="320px"
    args="leftHeader.type:h4;leftHeader.props.children:Available+Options;rightHeader.props.children:Selected+Options"
/>

```jsx
<Transfer
    options={transferOptions}
    selected={selected}
    leftHeader={<Header label="Available options" />}
    rightHeader={<Header label="Selected options" />}
    onChange={onChange}
/>
```

The `header` component in this case is a simple `h4` element.

-   Use headers for titles that make it clear what the transfer options are.
-   _Source list_ headers could also contain group filters.

### Footer

<Demo
    path="transfer--options-footer"
    height="320px"
/>

```jsx
<Transfer
    options={transferOptions}
    selected={selected}
    leftFooter={<Footer />}
    onChange={onChange}
/>
```

The footer component is as follows:

```jsx
<a
    href="#"
    style={{
        color: 'grey',
        padding: '8px 0',
        display: 'block',
    }}
>
    Reload list
</a>

```

-   Use footers for actions that apply to a list, like _Reload items_.

### Reordering

<Demo
    path="transfer--reordering"
    height="320px"
/>

```jsx
<Transfer
    enableOrderChange
    options={transferOptions}
    selected={selected}
    onChange={onChange}
/>
```

-   Allow reordering if the order of the chosen options has meaning or consequences.

### Filtering

<Demo
    path="transfer--filtered"
    height="320px"
/>

```jsx
<Transfer
    filterable
    filterPlaceholder="Search for an option"
    options={transferOptions}
    selected={selected}
    onChange={onChange}
/>
```

-   Use filtering to help a user find options in the _source list_.

### Loading


<Demo
    path="transfer--loading-source"
    height="320px"
/>

-   Different types of data will need different loading strategies.
-   Use a [`Loader`](loading.md) to block interaction if using the transfer while loading is taking place can cause problems.
-   A common pattern is loading more options as a user scrolls. See the [Transfer: Infinite Loading recipe](../recipes/transfer-infinite-loading-all-options-selected.md) for more information.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/transfer--multiple" target="_blank">Demo</a>
