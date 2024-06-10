### CircularLoader

#### Usage

To use `CircularLoader`, you can import the component from the `@dhis2/ui` library  


```js
import { CircularLoader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|aria-label|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-circularloader'`|||
|extrasmall|custom||||
|invert|boolean||||
|large|custom||||
|small|custom||||

### LinearLoader

#### Usage

To use `LinearLoader`, you can import the component from the `@dhis2/ui` library  


```js
import { LinearLoader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|amount|number||*|The progression in percent without the '%' sign|
|aria-label|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-linearloader'`|||
|invert|boolean|||Use inverted color scheme|
|margin|string|`spacers.dp12`||The margin around the loader, can be a full shorthand|
|width|string|`'300px'`||The width of the entire indicator|
