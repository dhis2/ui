## SegmentedControl

From [`src/segmented-control.js`](./src/segmented-control.js)

A segmented control is used to select between options that relate to another
area of content. All of the options in a segmented control should be closely related.

Do not use a segmented control as a standalone selection, it should always be
used as a selector for other content. For example, do not use a segmented
control in place of radio buttons when making a single, standalone choice.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/molecules/segmented-control.md)

```js
import { SegmentedControl } from '@dhis2/ui'
```

| prop                   |       type       | default |      required      | description                                                                         |
| ---------------------- | :--------------: | :-----: | :----------------: | ----------------------------------------------------------------------------------- |
| **onChange**           |    `Function`    |         | :white_check_mark: | Called with the signature `({ value: string }, event)`                              |
| **options**            | `Array[]<Shape>` |         | :white_check_mark: | Options to populate the segmented control                                           |
| **options[].disabled** |    `Boolean`     |         |        :x:         |
| **options[].label**    |     `String`     |         | :white_check_mark: |
| **options[].value**    |     `String`     |         | :white_check_mark: |
| **selected**           |     `String`     |         | :white_check_mark: | An option to select; should match the `value` property of the option to be selected |
