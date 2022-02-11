## Modal

From [`src/modal/modal.js`](./src/modal/modal.js)

| prop          |                   type                    |        default         | required | description                         |
| ------------- | :---------------------------------------: | :--------------------: | :------: | ----------------------------------- |
| **children**  |                `ReactNode`                |                        |   :x:    |
| **className** |                 `String`                  |                        |   :x:    |
| **dataTest**  |                 `String`                  | `'dhis2-uicore-modal'` |   :x:    |
| **fluid**     |                 `Boolean`                 |                        |   :x:    |
| **hide**      |                 `Boolean`                 |                        |   :x:    |
| **large**     |      `sharedPropTypes.sizePropType`       |                        |   :x:    |
| **onClose**   |                `Function`                 |                        |   :x:    | Callback used when the Modal closes |
| **position**  | `sharedPropTypes.insideAlignmentPropType` |        `'top'`         |   :x:    |
| **small**     |      `sharedPropTypes.sizePropType`       |                        |   :x:    |

## ModalActions

From [`src/modal-actions/modal-actions.js`](./src/modal-actions/modal-actions.js)

| prop         |    type     |            default            | required | description |
| ------------ | :---------: | :---------------------------: | :------: | ----------- |
| **children** | `ReactNode` |                               |   :x:    |
| **dataTest** |  `String`   | `'dhis2-uicore-modalactions'` |   :x:    |

## ModalContent

From [`src/modal-content/modal-content.js`](./src/modal-content/modal-content.js)

| prop          |    type     |            default            | required | description |
| ------------- | :---------: | :---------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                               |   :x:    |
| **className** |  `String`   |                               |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-modalcontent'` |   :x:    |

## ModalTitle

From [`src/modal-title/modal-title.js`](./src/modal-title/modal-title.js)

| prop         |   type   |           default           | required | description |
| ------------ | :------: | :-------------------------: | :------: | ----------- |
| **children** | `String` |                             |   :x:    |
| **dataTest** | `String` | `'dhis2-uicore-modaltitle'` |   :x:    |
