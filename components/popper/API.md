### Popper

#### Usage

To use `Popper`, you can import the component from the `@dhis2/ui` library  


```js
import { Popper } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*|Content inside the Popper|
|className|string||||
|dataTest|string|`'dhis2-uicore-popper'`|||
|modifiers|arrayOf({<br/>  "name": "string",<br/>  "options": "object"<br/>})|`[]`||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|
|observePopperResize|boolean|||Makes the Popper update position when the **Popper content** changes size|
|observeReferenceResize|boolean|||Makes the Popper update position when the **reference element** changes size|
|placement|custom|`'auto'`||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|
|reference|custom|||A React ref, DOM node, or [virtual element](https://popper.js.org/docs/v2/virtual-elements/) for the popper to position itself against|
|strategy|'absolute' │ 'fixed'|||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|
|onFirstUpdate|function|||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|
