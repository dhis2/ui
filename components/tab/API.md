### Tab

#### Usage

To use `Tab`, you can import the component from the `@dhis2/ui` library  


```js
import { Tab } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-tab'`|||
|disabled|boolean||||
|icon|element||||
|selected|boolean|||Indicates this tab is selected|
|onClick|function|||Called with the signature `({}, event)`|

### TabBar

#### Usage

To use `TabBar`, you can import the component from the `@dhis2/ui` library  


```js
import { TabBar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-tabbar'`|||
|fixed|boolean|||Fixed tabs fill the width of their container. If false (i.e. fluid), tabs take up an amount of space defined by the tab name. Fluid tabs should be used most of the time.|
|scrollable|boolean|||Enables horizontal scrolling for many tabs that don't fit the width of the container|
