### FlyoutMenu

#### Usage

To use `FlyoutMenu`, you can import the component from the `@dhis2/ui` library  


```js
import { FlyoutMenu } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Typically, but not limited to, `MenuItem` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-menu'`|||
|dense|boolean|||Menu uses smaller dimensions|
|maxHeight|string|`'auto'`|||
|maxWidth|string|`'380px'`|||

### Menu

#### Usage

To use `Menu`, you can import the component from the `@dhis2/ui` library  


```js
import { Menu } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader`|
|className|string||||
|dataTest|string|`'dhis2-uicore-menulist'`|||
|dense|boolean|||Applies `dense` property to all child components unless already specified|

### MenuDivider

#### Usage

To use `MenuDivider`, you can import the component from the `@dhis2/ui` library  


```js
import { MenuDivider } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-menudivider'`|||
|dense|boolean||||

### MenuItem

#### Usage

To use `MenuItem`, you can import the component from the `@dhis2/ui` library  


```js
import { MenuItem } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|active|boolean||||
|checkbox|boolean||||
|checked|boolean||||
|chevron|boolean||||
|children|node|||Nested menu items can become submenus.<br/>See `showSubMenu` and `toggleSubMenu` props, and 'Children' demo|
|className|string||||
|dataTest|string|`'dhis2-uicore-menuitem'`|||
|dense|boolean||||
|destructive|boolean||||
|disabled|boolean||||
|href|string|||For using menu item as a link|
|icon|node|||An icon for the left side of the menu item|
|label|node|||Text in the menu item|
|showSubMenu|boolean|||When true, nested menu items are shown in a Popper|
|suffix|node|||A supporting element shown at the end of the menu item|
|tabIndex|number||||
|target|string|||For using menu item as a link|
|toggleSubMenu|function|||On click, this function is called (without args)|
|value|string|||Value associated with item. Passed as an argument to onClick handler.|
|onClick|function|||Click handler called with signature `({ value: string }, event)`|

### MenuSectionHeader

#### Usage

To use `MenuSectionHeader`, you can import the component from the `@dhis2/ui` library  


```js
import { MenuSectionHeader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-menusectionheader'`|||
|dense|boolean||||
|hideDivider|boolean||||
|label|node||||
