# Data parsing and formatting

There are a few helper functions called 'transformers' in the UI library that are useful for managing and transforming data.

## arrayWithIdObjects

```js
import { arrayWithIdObjects } from '@dhis2/ui'
```

These functions help manage arrays of ID strings (`['1', '2', '3']`) or arrays of objects with ID strings as properties (`[{ id: '1' }, { id: '2' }, { id: '3' }]`), which are common when working with DHIS2 data.

### arrayWithIdObjects.format()

`arrayWithIdObjects.format()` transforms an array of objects which each have an id property into an array of just those ID strings.

Example:

```js
const idsArray = arrayWithIdObjects.format([
    { id: '001', name: 'one' },
    { id: '002', name: 'two' },
    { id: '003', name: 'three' },
])
// Result: idsArray = ['001', '002', '003']
```

### arrayWithIdObjects.parse()

`arrayWithIdObjects.parse()` does the inverse transformation as `format()`; that is, it transforms an array of ID strings into an array of objects with an `id` property.

Example:

```js
const objectsArray = arrayWithIdObjects.format(['001', '002', '003'])
// Result: objectsArray = [{ id: '001' }, { id: '002' }, { id: '003' }]
```
