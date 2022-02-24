### CheckboxFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { CheckboxFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name            | Type     | Default | Required | Description                    |
| --------------- | -------- | ------- | -------- | ------------------------------ |
| input           | custom   |         |          | Provided by Final Form `Field` |
| meta            | custom   |         |          | Provided by Final Form `Field` |
| error           | boolean  |         |          |                                |
| showValidStatus | boolean  |         |          |                                |
| valid           | boolean  |         |          |                                |
| validationText  | string   |         |          |                                |
| onBlur          | function |         |          |                                |
| onFocus         | function |         |          |                                |

### FieldGroupFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FieldGroupFF } from '@dhis2/ui-forms'
```

#### Props

| Name     | Type    | Default | Required | Description |
| -------- | ------- | ------- | -------- | ----------- |
| children | node    |         |          |             |
| label    | string  |         |          |             |
| name     | string  |         |          |             |
| required | boolean |         |          |             |

### FileInputFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { FileInputFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name            | Type                           | Default | Required | Description                                  |
| --------------- | ------------------------------ | ------- | -------- | -------------------------------------------- |
| input           | custom                         |         |          | `input` props provided by Final Form `Field` |
| meta            | custom                         |         |          | `meta` props provided by Final Form `Field`  |
| buttonLabel     | string                         |         |          |                                              |
| disabled        | boolean                        |         |          |                                              |
| error           | boolean                        |         |          |                                              |
| multifile       | boolean                        |         |          |                                              |
| showValidStatus | boolean                        |         |          |                                              |
| valid           | boolean                        |         |          |                                              |
| validationText  | string                         |         |          |                                              |
| value           | arrayOf(instanceOf(File)) │ '' |         |          |                                              |

### InputFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { InputFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name              | Type     | Default | Required | Description                                    |
| ----------------- | -------- | ------- | -------- | ---------------------------------------------- |
| input             | custom   |         |          | `input` props received from Final Form `Field` |
| meta              | custom   |         |          | `meta` props received from Final Form `Field`  |
| error             | boolean  |         |          |                                                |
| loading           | boolean  |         |          |                                                |
| showLoadingStatus | boolean  |         |          |                                                |
| showValidStatus   | boolean  |         |          |                                                |
| valid             | boolean  |         |          |                                                |
| validationText    | string   |         |          |                                                |
| onBlur            | function |         |          |                                                |
| onFocus           | function |         |          |                                                |

### MultiSelectFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { MultiSelectFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name              | Type                                                            | Default | Required | Description                                  |
| ----------------- | --------------------------------------------------------------- | ------- | -------- | -------------------------------------------- |
| input             | custom                                                          |         |          | `input` props provided by Final Form `Field` |
| meta              | custom                                                          |         |          | `meta` props provided by Final Form `Field`  |
| error             | boolean                                                         |         |          |                                              |
| loading           | boolean                                                         |         |          |                                              |
| options           | arrayOf({<br/> "label": "string",<br/> "value": "string"<br/>}) | `[]`    |          |                                              |
| showLoadingStatus | boolean                                                         |         |          |                                              |
| showValidStatus   | boolean                                                         |         |          |                                              |
| valid             | boolean                                                         |         |          |                                              |
| validationText    | string                                                          |         |          |                                              |
| onBlur            | function                                                        |         |          |                                              |
| onFocus           | function                                                        |         |          |                                              |

### RadioFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { RadioFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name            | Type     | Default | Required | Description                                    |
| --------------- | -------- | ------- | -------- | ---------------------------------------------- |
| input           | custom   |         |          | `input` props received from Final Form `Field` |
| meta            | custom   |         |          | `meta` props received from Final Form `Field`  |
| error           | boolean  |         |          |                                                |
| showValidStatus | boolean  |         |          |                                                |
| valid           | boolean  |         |          |                                                |
| validationText  | string   |         |          |                                                |
| onBlur          | function |         |          |                                                |
| onFocus         | function |         |          |                                                |

### SingleSelectFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { SingleSelectFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name              | Type                                                            | Default | Required | Description                                    |
| ----------------- | --------------------------------------------------------------- | ------- | -------- | ---------------------------------------------- |
| input             | custom                                                          |         |          | `input` props received from Final Form `Field` |
| meta              | custom                                                          |         |          | `meta` props received from Final Form `Field`  |
| options           | arrayOf({<br/> "label": "string",<br/> "value": "string"<br/>}) |         | \*       |                                                |
| error             | boolean                                                         |         |          |                                                |
| loading           | boolean                                                         |         |          |                                                |
| showLoadingStatus | boolean                                                         |         |          |                                                |
| showValidStatus   | boolean                                                         |         |          |                                                |
| valid             | boolean                                                         |         |          |                                                |
| validationText    | string                                                          |         |          |                                                |
| onBlur            | function                                                        |         |          |                                                |
| onFocus           | function                                                        |         |          |                                                |

### SwitchFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { SwitchFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name            | Type     | Default | Required | Description                                    |
| --------------- | -------- | ------- | -------- | ---------------------------------------------- |
| input           | custom   |         |          | `input` props received from Final Form `Field` |
| meta            | custom   |         |          | `meta` props received from Final Form `Field`  |
| error           | boolean  |         |          |                                                |
| showValidStatus | boolean  |         |          |                                                |
| valid           | boolean  |         |          |                                                |
| validationText  | string   |         |          |                                                |
| onBlur          | function |         |          |                                                |
| onFocus         | function |         |          |                                                |

### TextAreaFieldFF

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { TextAreaFieldFF } from '@dhis2/ui-forms'
```

#### Props

| Name              | Type     | Default | Required | Description                                    |
| ----------------- | -------- | ------- | -------- | ---------------------------------------------- |
| input             | custom   |         |          | `input` props received from Final Form `Field` |
| meta              | custom   |         |          | `meta` props received from Final Form `Field`  |
| error             | boolean  |         |          |                                                |
| loading           | boolean  |         |          |                                                |
| showLoadingStatus | boolean  |         |          |                                                |
| showValidStatus   | boolean  |         |          |                                                |
| valid             | boolean  |         |          |                                                |
| validationText    | string   |         |          |                                                |
| onBlur            | function |         |          |                                                |
| onFocus           | function |         |          |                                                |
