---
title: Card
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/card/API.md'

# Card

A card is a container element used to group together and separate blocks of content.

<Demo
    path="/story/card--default"
    args="children:Card Content."
    height="150px"
/>

## Usage

```jsx
<Card>Card Content.</Card>
```

### When to use

-   **Group content**. Use a card as a container for related content. When there's different areas of content on a page, a card helps to establish boundaries between them.

### When not to use

-   **Few items**. A card probably isn't necessary to contain one or two items. Everything on a page doesn't need to be wrapped in a card.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/card--default" target="_blank">Demo</a>
