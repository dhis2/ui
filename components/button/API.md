### Button

#### Usage

To use `Button`, you can import the component from the `@dhis2/ui` library  


```js
import { Button } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Component to render inside the button|
|className|string|||A className that will be passed to the `<button>` element|
|dataTest|string|`'dhis2-uicore-button'`||A string that will be applied as a `data-test` attribute on the button element<br/>for identification during testing|
|destructive|boolean|||Applies 'destructive' button appearance, implying a dangerous action.|
|disabled|boolean|||Applies a greyed-out appearance and makes the button non-interactive|
|icon|element|||An icon element to display inside the button|
|initialFocus|boolean|||Use this variant to capture the initial focus on the page.|
|large|custom|||Makes the button large. Mutually exclusive with `small`|
|loading|boolean|||Sets the button into a loading state|
|name|string|||Sets `name` attribute on button element.<br/>Gets passed as part of the first argument to callbacks (see `onClick`).|
|primary|boolean|||Applies 'primary' button appearance, implying the most important action.|
|secondary|boolean|||Applies 'secondary' button appearance.|
|small|custom|||Makes the button small. Mutually exclusive with `large` prop|
|tabIndex|string|||Tab index for focusing the button with a keyboard|
|toggled|boolean|||Changes appearance of button to an on/off state|
|type|'submit' │ 'reset' │ 'button'|`'button'`||Sets `type` attribute on `<button>` element|
|value|string|||Value associated with the button.<br/>Gets passed as part of the first argument to callbacks (see `onClick`).|
|onBlur|function|||Callback to trigger on de-focus (blur).<br/>Called with same args as `onClick`|
|onClick|function|||Callback to trigger on click.<br/>Called with args `({ value, name }, event)`|
|onFocus|function|||Callback to trigger on focus. Called with same args as `onClick`|
|onKeyDown|function|||Callback to trigger on key-down. Called with same args as `onClick`|

### ButtonStrip

#### Usage

To use `ButtonStrip`, you can import the component from the `@dhis2/ui` library  


```js
import { ButtonStrip } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-buttonstrip'`|||
|end|custom|||Horizontal alignment for buttons. Mutually exclusive with `middle` prop|
|middle|custom|||Horizontal alignment. Mutually exclusive with `end` prop|

### DropdownButton

#### Usage

To use `DropdownButton`, you can import the component from the `@dhis2/ui` library  


```js
import { DropdownButton } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Children to render inside the buton|
|className|string||||
|component|element|||Component to show/hide when button is clicked|
|dataTest|string|`'dhis2-uicore-dropdownbutton'`|||
|destructive|boolean|||Applies 'destructive' button appearance, implying a dangerous action.|
|disabled|boolean|||Make the button non-interactive|
|icon|element||||
|initialFocus|boolean|||Grants button initial focus on the page|
|large|custom|||Button size. Mutually exclusive with `small` prop|
|name|string||||
|open|boolean|||Controls popper visibility. When implementing this prop the component becomes a controlled component|
|primary|boolean|||Applies 'primary' button appearance, implying the most important action.|
|secondary|boolean|||Applies 'secondary' button appearance.|
|small|custom|||Button size. Mutually exclusive with `large` prop|
|tabIndex|string||||
|type|'submit' │ 'reset' │ 'button'|||Type of button. Can take advantage of different default behavior|
|value|string||||
|onClick|custom(function)|||Callback triggered on click.<br/>Called with signature `({ name: string, value: string, open: bool }, event)`<br/>Is required when using the `open` prop to override the internal<br/>state.|

### SplitButton

#### Usage

To use `SplitButton`, you can import the component from the `@dhis2/ui` library  


```js
import { SplitButton } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string||||
|className|string||||
|component|element|||Component to render when the dropdown is opened|
|dataTest|string|`'dhis2-uicore-splitbutton'`|||
|destructive|boolean|||Applies 'destructive' button appearance, implying a dangerous action.|
|disabled|boolean|||Disables the button and makes it uninteractive|
|icon|element|||An icon to add inside the button|
|initialFocus|boolean|||Grants the button the initial focus|
|large|custom|||Changes button size. Mutually exclusive with `small` prop|
|name|string||||
|primary|boolean|||Applies 'primary' button appearance, implying the most important action.|
|secondary|boolean|||Applies 'secondary' button appearance.|
|small|custom|||Changes button size. Mutually exclusive with `large` prop|
|tabIndex|string||||
|type|'submit' │ 'reset' │ 'button'|||Type of button. Applied to html `button` element|
|value|string|||Value associated with the button. Passed in object to onClick handler|
|onClick|function||||
