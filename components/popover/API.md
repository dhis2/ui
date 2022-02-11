## Popover

From [`src/popover.js`](./src/popover.js)

| prop                       |                   type                    |         default          |      required      | description                                                                                   |
| -------------------------- | :---------------------------------------: | :----------------------: | :----------------: | --------------------------------------------------------------------------------------------- |
| **arrow**                  |                 `Boolean`                 |          `true`          |        :x:         | Show or hide the arrow                                                                        |
| **children**               |                `ReactNode`                |                          | :white_check_mark: |
| **className**              |                 `String`                  |                          |        :x:         |
| **dataTest**               |                 `String`                  | `'dhis2-uicore-popover'` |        :x:         |
| **elevation**              |                 `String`                  |    `elevations.e200`     |        :x:         | Box-shadow to create appearance of elevation. Use `elevations` constants from the UI library. |
| **maxWidth**               |                 `Number`                  |          `360`           |        :x:         |
| **observePopperResize**    |                 `Boolean`                 |                          |        :x:         |
| **observeReferenceResize** |                 `Boolean`                 |                          |        :x:         |
| **onClickOutside**         |                `Function`                 |                          |        :x:         |
| **placement**              | `sharedPropTypes.popperPlacementPropType` |         `'top'`          |        :x:         |
| **reference**              | `sharedPropTypes.popperReferencePropType` |                          |        :x:         | A React ref that refers to the element the Popover should position against                    |
