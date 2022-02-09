---
title: Elevation
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { Box, CssVariables } from '@dhis2/ui'

# Elevation

Elevation is used to create and communicate depth in an interface.

<Demo>
    <CssVariables elevations/>
    <Box>
    <div style={{background: 'white', boxShadow: 'var(--elevations-e200', display: 'inline-block', padding: '16px'}}>An elevated element</div>
    </Box>
</Demo>

## Usage

### When to use

-   **Separate elements**. Use elevation to make relationships between interface elements clearer, like showing that a panel is floating above a background.
-   **Show temporary elements**. Elevation is useful for showing extra elements above other page content. The elevation makes it clear that the extra elements are floating above the page and can be dismissed.

### When not to use

-   **Decoration**. Don't use elevation for decoration only. The elevation should be communicating something about an element's relationship to the interface.

### Variants

<Demo>
    <CssVariables elevations/>
    <Box>
    <div style={{background: 'white', boxShadow: 'var(--elevations-e100', display: 'inline-block', padding: '16px', marginRight: '16px', fontFamily: 'monospace'}}>e100</div>
    <div style={{background: 'white', boxShadow: 'var(--elevations-e200', display: 'inline-block', padding: '16px', marginRight: '16px', fontFamily: 'monospace'}}>e200</div>
    <div style={{background: 'white', boxShadow: 'var(--elevations-e300', display: 'inline-block', padding: '16px', marginRight: '16px', fontFamily: 'monospace'}}>e300</div>
    <div style={{background: 'white', boxShadow: 'var(--elevations-e400', display: 'inline-block', padding: '16px', marginRight: '16px', fontFamily: 'monospace'}}>e400</div>
    </Box>
</Demo>

-   There are four levels of elevation: `e100`, `e200`, `e300`, `e400`.
-   Use different elevation levels to communicate different depths or stacks of elements.
-   Don't skip an elevation level. If there are two layered or stacked elements, use two levels next to one another, like `e100` and `e200`.

## Examples in use

==TODO: examples==

## Links

-   Demo ==TODO: link==
-   API reference ==TODO: link==
