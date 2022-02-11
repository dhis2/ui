## Radio

From [`src/radio.js`](./src/radio.js)

| prop             |    type     |        default         | required | description                                                                            |
| ---------------- | :---------: | :--------------------: | :------: | -------------------------------------------------------------------------------------- |
| **checked**      |  `Boolean`  |                        |   :x:    |
| **className**    |  `String`   |                        |   :x:    |
| **dataTest**     |  `String`   | `'dhis2-uicore-radio'` |   :x:    |
| **dense**        |  `Boolean`  |                        |   :x:    |
| **disabled**     |  `Boolean`  |                        |   :x:    |
| **error**        |  `custom`   |                        |   :x:    | Adds 'error' styling for feedback. Mutually exclusive with `valid` and `warning` props |
| **initialFocus** |  `Boolean`  |                        |   :x:    |
| **label**        | `ReactNode` |                        |   :x:    |
| **name**         |  `String`   |                        |   :x:    | Name associated with this element. Passed in object to event handler functions         |
| **onBlur**       | `Function`  |                        |   :x:    | Called with the signature `({ name: string, value: string, checked: bool }, event)`    |
| **onChange**     | `Function`  |                        |   :x:    | Called with the signature `({ name: string, value: string, checked: bool }, event)`    |
| **onFocus**      | `Function`  |                        |   :x:    | Called with the signature `({ name: string, value: string, checked: bool }, event)`    |
| **tabIndex**     |  `String`   |                        |   :x:    |
| **valid**        |  `custom`   |                        |   :x:    | Adds 'valid' styling for feedback. Mutually exclusive with `error` and `warning` props |
| **value**        |  `String`   |                        |   :x:    | Value associated with this element. Passed in object to event handler functions        |
| **warning**      |  `custom`   |                        |   :x:    | Adds 'warning' styling for feedback. Mutually exclusive with `valid` and `error` props |
