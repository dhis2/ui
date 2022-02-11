## Popper

From [`src/popper.js`](./src/popper.js)

| prop                       |            type             |         default         |      required      | description                                                                                                                            |
| -------------------------- | :-------------------------: | :---------------------: | :----------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| **children**               |         `ReactNode`         |                         | :white_check_mark: | Content inside the Popper                                                                                                              |
| **className**              |          `String`           |                         |        :x:         |
| **dataTest**               |          `String`           | `'dhis2-uicore-popper'` |        :x:         |
| **modifiers**              |      `Array[]<Shape>`       |          `[]`           |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |
| **modifiers[].name**       |          `String`           |                         |        :x:         |
| **modifiers[].options**    |          `Object`           |                         |        :x:         |
| **observePopperResize**    |          `Boolean`          |                         |        :x:         | Makes the Popper update position when the **Popper content** changes size                                                              |
| **observeReferenceResize** |          `Boolean`          |                         |        :x:         | Makes the Popper update position when the **reference element** changes size                                                           |
| **onFirstUpdate**          |         `Function`          |                         |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |
| **placement**              |          `custom`           |        `'auto'`         |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |
| **reference**              |          `custom`           |                         |        :x:         | A React ref, DOM node, or [virtual element](https://popper.js.org/docs/v2/virtual-elements/) for the popper to position itself against |
| **strategy**               | `Enum('absolute', 'fixed')` |                         |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |
