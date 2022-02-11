## CheckboxFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/CheckboxFieldFF/CheckboxFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/CheckboxFieldFF/CheckboxFieldFF.js)

| prop                |    type    | default | required | description                    |
| ------------------- | :--------: | :-----: | :------: | ------------------------------ |
| **error**           | `Boolean`  |         |   :x:    |
| **input**           |  `custom`  |         |   :x:    | Provided by Final Form `Field` |
| **meta**            |  `custom`  |         |   :x:    | Provided by Final Form `Field` |
| **onBlur**          | `Function` |         |   :x:    |
| **onFocus**         | `Function` |         |   :x:    |
| **showValidStatus** | `Boolean`  |         |   :x:    |
| **valid**           | `Boolean`  |         |   :x:    |
| **validationText**  |  `String`  |         |   :x:    |

## FieldGroupFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/FieldGroupFF/FieldGroupFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/FieldGroupFF/FieldGroupFF.js)

| prop         |    type     | default | required | description |
| ------------ | :---------: | :-----: | :------: | ----------- |
| **children** | `ReactNode` |         |   :x:    |
| **label**    |  `String`   |         |   :x:    |
| **name**     |  `String`   |         |   :x:    |
| **required** |  `Boolean`  |         |   :x:    |

## FileInputFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/FileInputFieldFF/FileInputFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/FileInputFieldFF/FileInputFieldFF.js)

| prop                |               type               | default | required | description                                  |
| ------------------- | :------------------------------: | :-----: | :------: | -------------------------------------------- |
| **buttonLabel**     |             `String`             |         |   :x:    |
| **disabled**        |            `Boolean`             |         |   :x:    |
| **error**           |            `Boolean`             |         |   :x:    |
| **input**           |             `custom`             |         |   :x:    | `input` props provided by Final Form `Field` |
| **meta**            |             `custom`             |         |   :x:    | `meta` props provided by Final Form `Field`  |
| **multifile**       |            `Boolean`             |         |   :x:    |
| **showValidStatus** |            `Boolean`             |         |   :x:    |
| **valid**           |            `Boolean`             |         |   :x:    |
| **validationText**  |             `String`             |         |   :x:    |
| **value**           | `Union<Array[]<File>\|Enum('')>` |         |   :x:    |
| **value<1>**        |         `Array[]<File>`          |         |   :x:    |
| **value<2>**        |            `Enum('')`            |         |   :x:    |

## InputFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/InputFieldFF/InputFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/InputFieldFF/InputFieldFF.js)

| prop                  |    type    | default | required | description                                    |
| --------------------- | :--------: | :-----: | :------: | ---------------------------------------------- |
| **error**             | `Boolean`  |         |   :x:    |
| **input**             |  `custom`  |         |   :x:    | `input` props received from Final Form `Field` |
| **loading**           | `Boolean`  |         |   :x:    |
| **meta**              |  `custom`  |         |   :x:    | `meta` props received from Final Form `Field`  |
| **onBlur**            | `Function` |         |   :x:    |
| **onFocus**           | `Function` |         |   :x:    |
| **showLoadingStatus** | `Boolean`  |         |   :x:    |
| **showValidStatus**   | `Boolean`  |         |   :x:    |
| **valid**             | `Boolean`  |         |   :x:    |
| **validationText**    |  `String`  |         |   :x:    |

## MultiSelectFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/MultiSelectFieldFF/MultiSelectFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/MultiSelectFieldFF/MultiSelectFieldFF.js)

| prop                  |       type       | default | required | description                                  |
| --------------------- | :--------------: | :-----: | :------: | -------------------------------------------- |
| **error**             |    `Boolean`     |         |   :x:    |
| **input**             |     `custom`     |         |   :x:    | `input` props provided by Final Form `Field` |
| **loading**           |    `Boolean`     |         |   :x:    |
| **meta**              |     `custom`     |         |   :x:    | `meta` props provided by Final Form `Field`  |
| **onBlur**            |    `Function`    |         |   :x:    |
| **onFocus**           |    `Function`    |         |   :x:    |
| **options**           | `Array[]<Shape>` |  `[]`   |   :x:    |
| **options[].label**   |     `String`     |         |   :x:    |
| **options[].value**   |     `String`     |         |   :x:    |
| **showLoadingStatus** |    `Boolean`     |         |   :x:    |
| **showValidStatus**   |    `Boolean`     |         |   :x:    |
| **valid**             |    `Boolean`     |         |   :x:    |
| **validationText**    |     `String`     |         |   :x:    |

## RadioFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/RadioFieldFF/RadioFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/RadioFieldFF/RadioFieldFF.js)

| prop                |    type    | default | required | description                                    |
| ------------------- | :--------: | :-----: | :------: | ---------------------------------------------- |
| **error**           | `Boolean`  |         |   :x:    |
| **input**           |  `custom`  |         |   :x:    | `input` props received from Final Form `Field` |
| **meta**            |  `custom`  |         |   :x:    | `meta` props received from Final Form `Field`  |
| **onBlur**          | `Function` |         |   :x:    |
| **onFocus**         | `Function` |         |   :x:    |
| **showValidStatus** | `Boolean`  |         |   :x:    |
| **valid**           | `Boolean`  |         |   :x:    |
| **validationText**  |  `String`  |         |   :x:    |

## SingleSelectFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/SingleSelectFieldFF/SingleSelectFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/SingleSelectFieldFF/SingleSelectFieldFF.js)

| prop                  |       type       | default |      required      | description                                    |
| --------------------- | :--------------: | :-----: | :----------------: | ---------------------------------------------- |
| **error**             |    `Boolean`     |         |        :x:         |
| **input**             |     `custom`     |         |        :x:         | `input` props received from Final Form `Field` |
| **loading**           |    `Boolean`     |         |        :x:         |
| **meta**              |     `custom`     |         |        :x:         | `meta` props received from Final Form `Field`  |
| **onBlur**            |    `Function`    |         |        :x:         |
| **onFocus**           |    `Function`    |         |        :x:         |
| **options**           | `Array[]<Shape>` |         | :white_check_mark: |
| **options[].label**   |     `String`     |         |        :x:         |
| **options[].value**   |     `String`     |         |        :x:         |
| **showLoadingStatus** |    `Boolean`     |         |        :x:         |
| **showValidStatus**   |    `Boolean`     |         |        :x:         |
| **valid**             |    `Boolean`     |         |        :x:         |
| **validationText**    |     `String`     |         |        :x:         |

## SwitchFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/SwitchFieldFF/SwitchFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/SwitchFieldFF/SwitchFieldFF.js)

| prop                |    type    | default | required | description                                    |
| ------------------- | :--------: | :-----: | :------: | ---------------------------------------------- |
| **error**           | `Boolean`  |         |   :x:    |
| **input**           |  `custom`  |         |   :x:    | `input` props received from Final Form `Field` |
| **meta**            |  `custom`  |         |   :x:    | `meta` props received from Final Form `Field`  |
| **onBlur**          | `Function` |         |   :x:    |
| **onFocus**         | `Function` |         |   :x:    |
| **showValidStatus** | `Boolean`  |         |   :x:    |
| **valid**           | `Boolean`  |         |   :x:    |
| **validationText**  |  `String`  |         |   :x:    |

## TextAreaFieldFF

From [`/home/varl/dev/dhis2/libs/ui/collections/forms/src/TextAreaFieldFF/TextAreaFieldFF.js`](/home/varl/dev/dhis2/libs/ui/collections/forms/src/TextAreaFieldFF/TextAreaFieldFF.js)

| prop                  |    type    | default | required | description                                    |
| --------------------- | :--------: | :-----: | :------: | ---------------------------------------------- |
| **error**             | `Boolean`  |         |   :x:    |
| **input**             |  `custom`  |         |   :x:    | `input` props received from Final Form `Field` |
| **loading**           | `Boolean`  |         |   :x:    |
| **meta**              |  `custom`  |         |   :x:    | `meta` props received from Final Form `Field`  |
| **onBlur**            | `Function` |         |   :x:    |
| **onFocus**           | `Function` |         |   :x:    |
| **showLoadingStatus** | `Boolean`  |         |   :x:    |
| **showValidStatus**   | `Boolean`  |         |   :x:    |
| **valid**             | `Boolean`  |         |   :x:    |
| **validationText**    |  `String`  |         |   :x:    |
