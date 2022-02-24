### FileInput

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FileInput } from '@dhis2-ui/file-input'
```

#### Props

| Name         | Type       | Default                    | Required | Description                                                                                                                        |
| ------------ | ---------- | -------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| accept       | `string`   | `'*'`                      |          | The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)     |
| buttonLabel  | `string`   |                            |          |                                                                                                                                    |
| className    | `string`   |                            |          |                                                                                                                                    |
| dataTest     | `string`   | `'dhis2-uicore-fileinput'` |          |                                                                                                                                    |
| disabled     | `boolean`  |                            |          |                                                                                                                                    |
| error        | `custom`   |                            |          | Input status. Mutually exclusive with `warning` and `valid`                                                                        |
| initialFocus | `boolean`  |                            |          |                                                                                                                                    |
| large        | `custom`   |                            |          | Button size. Mutually exclusive with `small`                                                                                       |
| multiple     | `boolean`  |                            |          | The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple) |
| name         | `string`   |                            |          |                                                                                                                                    |
| small        | `custom`   |                            |          | Button size. Mutually exclusive with `large`                                                                                       |
| tabIndex     | `string`   |                            |          |                                                                                                                                    |
| valid        | `custom`   |                            |          | Input status. Mutually exclusive with `warning` and `error`                                                                        |
| warning      | `custom`   |                            |          | Input status. Mutually exclusive with `valid` and `error`                                                                          |
| onBlur       | `function` |                            |          | Called with signature `(object, event)`                                                                                            |
| onChange     | `function` |                            |          | Called with signature `(object, event)`                                                                                            |
| onFocus      | `function` |                            |          | Called with signature `(object, event)`                                                                                            |

### FileInputField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FileInputField } from '@dhis2-ui/file-input'
```

#### Props

| Name           | Type                | Default                                | Required | Description                                                                                                                        |
| -------------- | ------------------- | -------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| accept         | `string`            | `'*'`                                  |          | The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)     |
| buttonLabel    | `string │ function` | `() => i18n.t('Upload a file')`        |          | Text on the button                                                                                                                 |
| children       | `node`              |                                        |          |                                                                                                                                    |
| className      | `string`            |                                        |          |                                                                                                                                    |
| dataTest       | `string`            | `'dhis2-uiwidgets-fileinputfield'`     |          |                                                                                                                                    |
| disabled       | `boolean`           |                                        |          | Disables the button                                                                                                                |
| error          | `custom`            |                                        |          | Applies 'error' styling to the validation text. Mutually exclusive with `warning` and `valid` props                                |
| helpText       | `string`            |                                        |          | Useful guiding text for the user                                                                                                   |
| initialFocus   | `boolean`           |                                        |          |                                                                                                                                    |
| label          | `string`            |                                        |          | A descriptive label above the button                                                                                               |
| large          | `custom`            |                                        |          | Size of the button. Mutually exclusive with the `small` prop                                                                       |
| multiple       | `boolean`           |                                        |          | The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple) |
| name           | `string`            |                                        |          | Name associated with input. Passed to event handler callbacks                                                                      |
| placeholder    | `string │ function` | `() => i18n.t('No file uploaded yet')` |          | Placeholder below the button                                                                                                       |
| required       | `boolean`           |                                        |          | Adds an asterisk to indicate this field is required                                                                                |
| small          | `custom`            |                                        |          | Size of the button. Mutually exclusive with the `large` prop                                                                       |
| tabIndex       | `string`            |                                        |          |                                                                                                                                    |
| valid          | `custom`            |                                        |          | Applies 'valid' styling to the validation text. Mutually exclusive with `warning` and `error` props                                |
| validationText | `string`            |                                        |          | Text below the button that provides validation feedback                                                                            |
| warning        | `custom`            |                                        |          | Applies 'warning' styling to the validation text. Mutually exclusive with `valid` and `error` props                                |
| onBlur         | `function`          |                                        |          |                                                                                                                                    |
| onChange       | `function`          |                                        |          | Called with signature `({ name: string, files: [] }, event)`                                                                       |
| onFocus        | `function`          |                                        |          |                                                                                                                                    |

### FileInputFieldWithList

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FileInputFieldWithList } from '@dhis2-ui/file-input'
```

#### Props

| Name           | Type                        | Default                                    | Required | Description                                                                                                                        |
| -------------- | --------------------------- | ------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| onChange       | `function`                  |                                            | \*       | Called with signature `({ name: string, files: [File] }, event)`                                                                   |
| accept         | `string`                    |                                            |          | The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)     |
| buttonLabel    | `string │ function`         | `() => i18n.t('Upload a file')`            |          | Text on the button                                                                                                                 |
| className      | `string`                    |                                            |          |                                                                                                                                    |
| dataTest       | `string`                    | `'dhis2-uiwidgets-fileinputfieldwithlist'` |          |                                                                                                                                    |
| disabled       | `boolean`                   |                                            |          | Disables the button                                                                                                                |
| error          | `custom`                    |                                            |          | Applies 'error' styling to the button and validation text. Mutually exclusive with `warning` and `valid` props                     |
| files          | `arrayOf(instanceOf(File))` | `[]`                                       |          |                                                                                                                                    |
| helpText       | `string`                    |                                            |          | Useful guiding text for the user                                                                                                   |
| initialFocus   | `boolean`                   |                                            |          |                                                                                                                                    |
| label          | `string`                    |                                            |          | A descriptive label above the button                                                                                               |
| large          | `custom`                    |                                            |          | Size of the button. Mutually exclusive with the `small` prop                                                                       |
| multiple       | `boolean`                   |                                            |          | The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple) |
| name           | `string`                    |                                            |          | Name associated with input. Passed to event handler callbacks                                                                      |
| placeholder    | `string │ function`         | `() => i18n.t('No file uploaded yet')`     |          | Placeholder below the button                                                                                                       |
| removeText     | `string │ function`         | `() => i18n.t('Remove')`                   |          | Text used for the button that removes a file from the list                                                                         |
| required       | `boolean`                   |                                            |          | Adds an asterisk to indicate this field is required                                                                                |
| small          | `custom`                    |                                            |          | Size of the button. Mutually exclusive with the `large` prop                                                                       |
| tabIndex       | `string`                    |                                            |          |                                                                                                                                    |
| valid          | `custom`                    |                                            |          | Applies 'valid' styling to the button and validation text. Mutually exclusive with `warning` and `error` props                     |
| validationText | `string`                    |                                            |          | Text below the button that provides validation feedback                                                                            |
| warning        | `custom`                    |                                            |          | Applies 'warning' styling to the button and validation text. Mutually exclusive with `valid` and `error` props                     |
| onBlur         | `function`                  |                                            |          |                                                                                                                                    |
| onFocus        | `function`                  |                                            |          |                                                                                                                                    |

### FileListItem

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FileListItem } from '@dhis2-ui/file-input'
```

#### Props

| Name       | Type       | Default                       | Required | Description |
| ---------- | ---------- | ----------------------------- | -------- | ----------- |
| onRemove   | `function` |                               | \*       |             |
| cancelText | `string`   |                               |          |             |
| className  | `string`   |                               |          |             |
| dataTest   | `string`   | `'dhis2-uicore-filelistitem'` |          |             |
| label      | `string`   |                               |          |             |
| loading    | `boolean`  |                               |          |             |
| removeText | `string`   |                               |          |             |
| onCancel   | `function` |                               |          |             |

### FileListPlaceholder

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FileListPlaceholder } from '@dhis2-ui/file-input'
```

#### Props

| Name     | Type     | Default                              | Required | Description |
| -------- | -------- | ------------------------------------ | -------- | ----------- |
| children | `string` |                                      |          |             |
| dataTest | `string` | `'dhis2-uicore-filelistplaceholder'` |          |             |

### FileList

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FileList } from '@dhis2-ui/file-input'
```

#### Props

| Name      | Type     | Default                   | Required | Description |
| --------- | -------- | ------------------------- | -------- | ----------- |
| children  | `node`   |                           |          |             |
| className | `string` |                           |          |             |
| dataTest  | `string` | `'dhis2-uicore-filelist'` |          |             |
