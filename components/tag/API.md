## Tag

From [`src/tag.js`](./src/tag.js)

| prop          |         type         |       default        | required | description                                                                                                                                                             |
| ------------- | :------------------: | :------------------: | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **bold**      |      `Boolean`       |                      |   :x:    | Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused.   |
| **children**  |       `String`       |                      |   :x:    |
| **className** |       `String`       |                      |   :x:    |
| **dataTest**  |       `String`       | `'dhis2-uicore-tag'` |   :x:    |
| **icon**      |     `ReactNode`      |                      |   :x:    | Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon.       |
| **maxWidth**  |       `String`       |      `'240px'`       |   :x:    |
| **negative**  | `tagVariantPropType` |                      |   :x:    | Red 'negative' tags imply an error or a problem. `neutral`, `positive`, and `negative` are mutually exclusive props                                                     |
| **neutral**   | `tagVariantPropType` |                      |   :x:    | Blue 'neutral' tags are used when a tag _could_ have valid or error status but is currently neutral. `neutral`, `positive`, and `negative` are mutually exclusive props |
| **positive**  | `tagVariantPropType` |                      |   :x:    | Green 'valid' tags should be used to indicate validity or success. `neutral`, `positive`, and `negative` are mutually exclusive props                                   |
