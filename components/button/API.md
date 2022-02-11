## Button

From [`src/button/button.js`](./src/button/button.js)

| prop             |                type                 |         default         | required | description                                                                                                                              |
| ---------------- | :---------------------------------: | :---------------------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **children**     |             `ReactNode`             |                         |   :x:    | Component to render inside the button                                                                                                    |
| **className**    |              `String`               |                         |   :x:    | A className that will be passed to the `<button>` element                                                                                |
| **dataTest**     |              `String`               | `'dhis2-uicore-button'` |   :x:    | A string that will be applied as a `data-test` attribute on the button element for identification during testing                         |
| **destructive**  |              `custom`               |                         |   :x:    | Indicates that the button makes potentially dangerous deletions or data changes. Mutually exclusive with `primary` and `secondary` props |
| **disabled**     |              `Boolean`              |                         |   :x:    | Applies a greyed-out appearance and makes the button non-interactive                                                                     |
| **icon**         |           `ReactElement`            |                         |   :x:    | An icon element to display inside the button                                                                                             |
| **initialFocus** |              `Boolean`              |                         |   :x:    | Use this variant to capture the initial focus on the page.                                                                               |
| **large**        |              `custom`               |                         |   :x:    | Makes the button large. Mutually exclusive with `small`                                                                                  |
| **loading**      |              `Boolean`              |                         |   :x:    | Sets the button into a loading state                                                                                                     |
| **name**         |              `String`               |                         |   :x:    | Sets `name` attribute on button element. Gets passed as part of the first argument to callbacks (see `onClick`).                         |
| **onBlur**       |             `Function`              |                         |   :x:    | Callback to trigger on de-focus (blur). Called with same args as `onClick`                                                               |
| **onClick**      |             `Function`              |                         |   :x:    | Callback to trigger on click. Called with args `({ value, name }, event)`                                                                |
| **onFocus**      |             `Function`              |                         |   :x:    | Callback to trigger on focus. Called with same args as `onClick`                                                                         |
| **primary**      |              `custom`               |                         |   :x:    | Applies 'primary' button appearance. Mutually exclusive with `destructive` and `secondary` props                                         |
| **secondary**    |              `custom`               |                         |   :x:    | Applies 'secondary' button appearance. Mutually exclusive with `primary` and `destructive` props                                         |
| **small**        |              `custom`               |                         |   :x:    | Makes the button small. Mutually exclusive with `large` prop                                                                             |
| **tabIndex**     |              `String`               |                         |   :x:    | Tab index for focusing the button with a keyboard                                                                                        |
| **toggled**      |              `Boolean`              |                         |   :x:    | Changes appearance of button to an on/off state                                                                                          |
| **type**         | `Enum('submit', 'reset', 'button')` |       `'button'`        |   :x:    | Sets `type` attribute on `<button>` element                                                                                              |
| **value**        |              `String`               |                         |   :x:    | Value associated with the button. Gets passed as part of the first argument to callbacks (see `onClick`).                                |

## ButtonStrip

From [`src/button-strip/button-strip.js`](./src/button-strip/button-strip.js)

| prop          |    type     |           default            | required | description                                                             |
| ------------- | :---------: | :--------------------------: | :------: | ----------------------------------------------------------------------- |
| **children**  | `ReactNode` |                              |   :x:    |
| **className** |  `String`   |                              |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-buttonstrip'` |   :x:    |
| **end**       |  `custom`   |                              |   :x:    | Horizontal alignment for buttons. Mutually exclusive with `middle` prop |
| **middle**    |  `custom`   |                              |   :x:    | Horizontal alignment. Mutually exclusive with `end` prop                |

## DropdownButton

From [`src/dropdown-button/dropdown-button.js`](./src/dropdown-button/dropdown-button.js)

| prop             |                type                 |             default             | required | description                                                                                                                                                                      |
| ---------------- | :---------------------------------: | :-----------------------------: | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**     |             `ReactNode`             |                                 |   :x:    | Children to render inside the buton                                                                                                                                              |
| **className**    |              `String`               |                                 |   :x:    |
| **component**    |           `ReactElement`            |                                 |   :x:    | Component to show/hide when button is clicked                                                                                                                                    |
| **dataTest**     |              `String`               | `'dhis2-uicore-dropdownbutton'` |   :x:    |
| **destructive**  |              `custom`               |                                 |   :x:    | Button variant. Mutually exclusive with `primary` and `secondary` props                                                                                                          |
| **disabled**     |              `Boolean`              |                                 |   :x:    | Make the button non-interactive                                                                                                                                                  |
| **icon**         |           `ReactElement`            |                                 |   :x:    |
| **initialFocus** |              `Boolean`              |                                 |   :x:    | Grants button initial focus on the page                                                                                                                                          |
| **large**        |              `custom`               |                                 |   :x:    | Button size. Mutually exclusive with `small` prop                                                                                                                                |
| **name**         |              `String`               |                                 |   :x:    |
| **onClick**      |              `custom`               |                                 |   :x:    | Callback triggered on click. Called with signature `({ name: string, value: string, open: bool }, event)` Is required when using the `open` prop to override the internal state. |
| **open**         |              `Boolean`              |                                 |   :x:    | Controls popper visibility. When implementing this prop the component becomes a controlled component                                                                             |
| **primary**      |              `custom`               |                                 |   :x:    | Button variant. Mutually exclusive with `destructive` and `secondary` props                                                                                                      |
| **secondary**    |              `custom`               |                                 |   :x:    | Button variant. Mutually exclusive with `primary` and `destructive` props                                                                                                        |
| **small**        |              `custom`               |                                 |   :x:    | Button size. Mutually exclusive with `large` prop                                                                                                                                |
| **tabIndex**     |              `String`               |                                 |   :x:    |
| **type**         | `Enum('submit', 'reset', 'button')` |                                 |   :x:    | Type of button. Can take advantage of different default behavior                                                                                                                 |
| **value**        |              `String`               |                                 |   :x:    |

## SplitButton

From [`src/split-button/split-button.js`](./src/split-button/split-button.js)

| prop             |                type                 |           default            | required | description                                                                                                   |
| ---------------- | :---------------------------------: | :--------------------------: | :------: | ------------------------------------------------------------------------------------------------------------- |
| **children**     |              `String`               |                              |   :x:    |
| **className**    |              `String`               |                              |   :x:    |
| **component**    |           `ReactElement`            |                              |   :x:    | Component to render when the dropdown is opened                                                               |
| **dataTest**     |              `String`               | `'dhis2-uicore-splitbutton'` |   :x:    |
| **destructive**  |              `custom`               |                              |   :x:    | Applies 'destructive' appearance to indicate purpose. Mutually exclusive with `primary` and `secondary` props |
| **disabled**     |              `Boolean`              |                              |   :x:    | Disables the button and makes it uninteractive                                                                |
| **icon**         |           `ReactElement`            |                              |   :x:    | An icon to add inside the button                                                                              |
| **initialFocus** |              `Boolean`              |                              |   :x:    | Grants the button the initial focus                                                                           |
| **large**        |              `custom`               |                              |   :x:    | Changes button size. Mutually exclusive with `small` prop                                                     |
| **name**         |              `String`               |                              |   :x:    |
| **onClick**      |             `Function`              |                              |   :x:    |
| **primary**      |              `custom`               |                              |   :x:    | Applies 'primary' appearance to indicate purpose. Mutually exclusive with `destructive` and `secondary` props |
| **secondary**    |              `custom`               |                              |   :x:    | Applies 'secondary' appearance to indicate purpose. Mutually exclusive with `primary` and `destructive` props |
| **small**        |              `custom`               |                              |   :x:    | Changes button size. Mutually exclusive with `large` prop                                                     |
| **tabIndex**     |              `String`               |                              |   :x:    |
| **type**         | `Enum('submit', 'reset', 'button')` |                              |   :x:    | Type of button. Applied to html `button` element                                                              |
| **value**        |              `String`               |                              |   :x:    | Value associated with the button. Passed in object to onClick handler                                         |
