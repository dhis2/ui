### Tag

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { Tag } from '@dhis2-ui/tag'
```

#### Props

| Name      | Type      | Default              | Required | Description                                                                                                                                                             |
| --------- | --------- | -------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bold      | `boolean` |                      |          | Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused.   |
| children  | `string`  |                      |          |                                                                                                                                                                         |
| className | `string`  |                      |          |                                                                                                                                                                         |
| dataTest  | `string`  | `'dhis2-uicore-tag'` |          |                                                                                                                                                                         |
| icon      | `node`    |                      |          | Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon.       |
| maxWidth  | `string`  | `'240px'`            |          |                                                                                                                                                                         |
| negative  | `custom`  |                      |          | Red 'negative' tags imply an error or a problem. `neutral`, `positive`, and `negative` are mutually exclusive props                                                     |
| neutral   | `custom`  |                      |          | Blue 'neutral' tags are used when a tag _could_ have valid or error status but is currently neutral. `neutral`, `positive`, and `negative` are mutually exclusive props |
| positive  | `custom`  |                      |          | Green 'valid' tags should be used to indicate validity or success. `neutral`, `positive`, and `negative` are mutually exclusive props                                   |
