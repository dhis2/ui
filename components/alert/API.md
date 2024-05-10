### AlertBar

#### Usage

To use `AlertBar`, you can import the component from the `@dhis2/ui` library  


```js
import { AlertBar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|actions|custom|||An array of 0-2 action objects <br/>`[{label: "Save", onClick: clickHandler}]`|
|children|string|||The message string for the alert|
|className|string||||
|critical|custom|||Alert bars with `critical` will not autohide|
|dataTest|string|`'dhis2-uicore-alertbar'`|||
|duration|number|`8000`||How long you want the notification to display, in `ms`, when it's not permanent|
|hidden|boolean|||AlertBar will be hidden on creation when this is set to true|
|icon|custom|`true`||A specific icon to override the default icon in the bar.<br/>If `false` is provided, no icon will be shown.|
|permanent|boolean|||When set, AlertBar will not autohide|
|success|custom||||
|warning|custom|||Alert bars with `warning` will not autohide|
|onHidden|function||||

### AlertStack

#### Usage

To use `AlertStack`, you can import the component from the `@dhis2/ui` library  


```js
import { AlertStack } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-alertstack'`|||
