### ChipGroup

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { ChipGroup } from '@dhis2-ui/chip'
```

#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||The Chip components to be rendered within the group|
|className|string|||Additional CSS class for the chip group|
|dataTest|string|`'dhis2-uicore-chipgroup'`||Data test id for testing purposes|

### Chip

#### Usage

To use `Chip`, you can import the component from the `@dhis2/ui` library  


```js
import { Chip } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|any||||
|className|string||||
|dataTest|string|`'dhis2-uicore-chip'`|||
|dense|boolean||||
|disabled|boolean||||
|dragging|boolean||||
|icon|element||||
|marginBottom|number|`4`||`margin-bottom` value, applied in `px`|
|marginInlineEnd|number|||`margin-inline-end` value, applied in `px`|
|marginInlineStart|number|||`margin-inline-start` value, applied in `px`|
|marginLeft|number|||`margin-inline-start` value, applied in `px`|
|marginRight|number|||`margin-inline-end` value, applied in `px`|
|marginTop|number|`4`||`margin-top` value, applied in `px`|
|overflow|boolean||||
|selected|boolean||||
|onClick|function||||
|onRemove|function||||
