### OrganisationUnitTreeRootError

#### Usage

To use `OrganisationUnitTreeRootError`, you can import the component from the `@dhis2/ui` library  


```js
import { OrganisationUnitTreeRootError } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|error|string||*||
|dataTest|string|`'dhis2-uiwidgets-orgunittree-error'`|||

### OrganisationUnitTreeRootLoading

#### Usage

To use `OrganisationUnitTreeRootLoading`, you can import the component from the `@dhis2/ui` library  


```js
import { OrganisationUnitTreeRootLoading } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|dataTest|string|`'dhis2-uiwidgets-orgunittree-loading'`|||

### OrganisationUnitTree

#### Usage

To use `OrganisationUnitTree`, you can import the component from the `@dhis2/ui` library  


```js
import { OrganisationUnitTree } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|roots|string │ arrayOf(string)||*|Root org unit ID(s)|
|onChange|function||*|Will be called with the following object:<br/>`{ id: string, displayName: string, path: string, checked: boolean, selected: string[] }`|
|autoExpandLoadingError|boolean|||When set, the error when loading children fails will be shown automatically|
|dataTest|string|`'dhis2-uiwidgets-orgunittree'`|||
|disableSelection|boolean|||When set to true, no unit can be selected|
|expanded|custom(function)||||
|filter|arrayOf(custom)|`[]`||All organisation units with a path that includes the provided paths will be shown.<br/>All others will not be rendered. When not provided, all org units will be shown.|
|forceReload|boolean|||When true, everything will be reloaded. In order to load it again after reloading, `forceReload` has to be set to `false` and then to `true` again|
|handleCollapse|custom(function)||||
|handleExpand|custom(function)||||
|highlighted|arrayOf(custom)|`[]`||All units provided to "highlighted" as path will be visually<br/>highlighted.<br/>Note:<br/>The d2-ui component used two props for this:<br/>* searchResults<br/>* highlightSearchResults|
|initiallyExpanded|arrayOf(custom)|`[]`||An array of OU paths that will be expanded automatically<br/>as soon as they are encountered.<br/>The path of an OU is the UIDs of the OU<br/>and all its parent OUs separated by slashes (/)<br/>Note: This replaces "openFirstLevel" as that's redundant|
|isUserDataViewFallback|boolean|||When provided, the 'isUserDataViewFallback' option will be sent when requesting the org units|
|renderNodeLabel|function|`defaultRenderNodeLabel`||Renders the actual node component for each leaf, can be used to<br/>customize the node. The default function just returns the node's<br/>displayName<br/><br/>Shape of the object passed to the callback:<br/>```<br/>{<br/>   label: string,<br/>   node: {<br/>     displayName: string,<br/>     id: string,<br/>     // Only provided once `loading` is false<br/>     path?: string,<br/>     // Only provided once `loading` is false<br/>     children?: Array.<{<br/>       id: string,<br/>       path: string,<br/>       displayName: string<br/>     }><br/>   },<br/>   loading: boolean,<br/>   error: string,<br/>   open: boolean,<br/>   selected: string[],<br/>   singleSelection: boolean,<br/>   disableSelection: boolean,<br/>}<br/>```|
|selected|arrayOf(custom)|`[]`||An array of paths of selected OUs. The path of an OU is the UIDs of the OU and all its parent OUs separated by slashes (`/`)|
|singleSelection|boolean|||When set, no checkboxes will be displayed and only the first selected path in `selected` will be highlighted|
|suppressAlphabeticalSorting|boolean|||Turns off alphabetical sorting of units|
|onChildrenLoaded|function|||Called with the children's data that was loaded|
|onCollapse|function|||Called with `{ path: string }` with the path of the parent of the level closed|
|onExpand|function|||Called with `{ path: string }` with the path of the parent of the level opened|
