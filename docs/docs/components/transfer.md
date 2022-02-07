---
title: Transfer
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { TransferDemoMain, TransferDemoHeader, TransferDemoFooter, TransferDemoReorder, TransferDemoFilter } from '../../src/components/TransferDemos.jsx'
import { Transfer, Button } from '@dhis2/ui'

# Transfer

A transfer is used to make complex selections from a list of options.

<Demo>
    <TransferDemoMain/>
</Demo>

## Usage

A transfer is made up of two lists. The _source list_ that shows the available options and the _picked list_ that shows the chosen options. Options can be transferred between lists with the middle buttons or by double-clicking an option.

### When to use

-   **Choose from many items**. Use a transfer if a user needs to choose from many items. Transfers can work for hundreds of thousands of items.
-   **Ordered selections**. Use a transfer if chosen options need to have a specific order.
-   **Choose from several groups**. Use a transfer if a user needs to choose from several groups into a single set of chosen options.

### When not to use

-   **Choosing from a few items**. Don't use a transfer to choose from a few options. Use a select ==TODO: link== instead.

## Options

### Header

<Demo>
    <TransferDemoHeader />
</Demo>

-   Use headers for titles that make it clear what the transfer options are.
-   _Source list_ headers could also contain group filters.

### Footer

<Demo>
<TransferDemoFooter/>
</Demo>

-   Use footers for actions that apply to a list, like _Reload items_.

### Reordering

<Demo>
    <TransferDemoReorder />
</Demo>

-   Allow reordering if the order of the chosen options has meaning or consequences.

### Filtering

<Demo>
    <TransferDemoFilter />
</Demo>

-   Use filtering to help a user find options in the _source list_.

### Loading

-   Different types of data will need different loading strategies.
-   Use a loader ==TODO:link== to block interaction if using the transfer while loading is taking place can cause problems.
-   A common pattern is loading more options as a user scrolls. See the Transfer: Infinite Loading recipe ==TODO: link== for more information.

## Examples

==TODO: examples==

## Links

-   Demo ==TODO: link==
-   API reference ==TODO: link==
