## FlyoutMenu

From [`src/flyout-menu/flyout-menu.js`](./src/flyout-menu/flyout-menu.js)

| prop          |    type     |        default        | required | description                                          |
| ------------- | :---------: | :-------------------: | :------: | ---------------------------------------------------- |
| **children**  | `ReactNode` |                       |   :x:    | Typically, but not limited to, `MenuItem` components |
| **className** |  `String`   |                       |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-menu'` |   :x:    |
| **dense**     |  `Boolean`  |                       |   :x:    | Menu uses smaller dimensions                         |
| **maxHeight** |  `String`   |       `'auto'`        |   :x:    |
| **maxWidth**  |  `String`   |       `'380px'`       |   :x:    |

## Menu

From [`src/menu/menu.js`](./src/menu/menu.js)

| prop          |    type     |          default          | required | description                                                               |
| ------------- | :---------: | :-----------------------: | :------: | ------------------------------------------------------------------------- |
| **children**  | `ReactNode` |                           |   :x:    | Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader`              |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-menulist'` |   :x:    |
| **dense**     |  `Boolean`  |                           |   :x:    | Applies `dense` property to all child components unless already specified |

## MenuDivider

From [`src/menu-divider/menu-divider.js`](./src/menu-divider/menu-divider.js)

| prop          |   type    |           default            | required | description |
| ------------- | :-------: | :--------------------------: | :------: | ----------- |
| **className** | `String`  |                              |   :x:    |
| **dataTest**  | `String`  | `'dhis2-uicore-menudivider'` |   :x:    |
| **dense**     | `Boolean` |                              |   :x:    |

## MenuItem

From [`src/menu-item/menu-item.js`](./src/menu-item/menu-item.js)

| prop              |    type     |          default          | required | description                                                                                             |
| ----------------- | :---------: | :-----------------------: | :------: | ------------------------------------------------------------------------------------------------------- |
| **active**        |  `Boolean`  |                           |   :x:    |
| **chevron**       |  `Boolean`  |                           |   :x:    |
| **children**      | `ReactNode` |                           |   :x:    | Nested menu items can become submenus. See `showSubMenu` and `toggleSubMenu` props, and 'Children' demo |
| **className**     |  `String`   |                           |   :x:    |
| **dataTest**      |  `String`   | `'dhis2-uicore-menuitem'` |   :x:    |
| **dense**         |  `Boolean`  |                           |   :x:    |
| **destructive**   |  `Boolean`  |                           |   :x:    |
| **disabled**      |  `Boolean`  |                           |   :x:    |
| **href**          |  `String`   |                           |   :x:    | For using menu item as a link                                                                           |
| **icon**          | `ReactNode` |                           |   :x:    | An icon for the left side of the menu item                                                              |
| **label**         | `ReactNode` |                           |   :x:    | Text in the menu item                                                                                   |
| **onClick**       | `Function`  |                           |   :x:    | Click handler called with signature `({ value: string }, event)`                                        |
| **showSubMenu**   |  `Boolean`  |                           |   :x:    | When true, nested menu items are shown in a Popper                                                      |
| **target**        |  `String`   |                           |   :x:    | For using menu item as a link                                                                           |
| **toggleSubMenu** | `Function`  |                           |   :x:    | On click, this function is called (without args)                                                        |
| **value**         |  `String`   |                           |   :x:    | Value associated with item. Passed as an argument to onClick handler.                                   |

## MenuSectionHeader

From [`src/menu-section-header/menu-section-header.js`](./src/menu-section-header/menu-section-header.js)

| prop            |    type     |              default               | required | description |
| --------------- | :---------: | :--------------------------------: | :------: | ----------- |
| **className**   |  `String`   |                                    |   :x:    |
| **dataTest**    |  `String`   | `'dhis2-uicore-menusectionheader'` |   :x:    |
| **dense**       |  `Boolean`  |                                    |   :x:    |
| **hideDivider** |  `Boolean`  |                                    |   :x:    |
| **label**       | `ReactNode` |                                    |   :x:    |
