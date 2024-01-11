### SegmentedControl

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SegmentedControl } from '@dhis2-ui/segmented-control'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|options|arrayOf({<br/>  "label": "string",<br/>  "value": "string",<br/>  "disabled": "boolean"<br/>})||*|Options to populate the segmented control|
|selected|string||*|An option to select; should match the `value` property of the option to be selected|
|onChange|function||*|Called with the signature `({ value: string }, event)`|
|ariaLabel|string|||Used to provide an accessible label to a segmented control without a visible label|
