### OrganisationUnitTree

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { OrganisationUnitTree } from '@dhis2-ui/organisation-unit-tree'
```

#### Props

| Name                                                                                      | Type                       | Default                         | Required | Description                                                                                                                                        |
| ----------------------------------------------------------------------------------------- | -------------------------- | ------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| roots                                                                                     | `string │ arrayOf(string)` |                                 | \*       | Root org unit ID(s)                                                                                                                                |
| onChange                                                                                  | `function`                 |                                 | \*       | Will be called with the following object:                                                                                                          |
| `{ id: string, displayName: string, path: string, checked: boolean, selected: string[] }` |
| autoExpandLoadingError                                                                    | `boolean`                  |                                 |          | When set, the error when loading children fails will be shown automatically                                                                        |
| dataTest                                                                                  | `string`                   | `'dhis2-uiwidgets-orgunittree'` |          |                                                                                                                                                    |
| disableSelection                                                                          | `boolean`                  |                                 |          | When set to true, no unit can be selected                                                                                                          |
| expanded                                                                                  | `custom(function)`         |                                 |          |                                                                                                                                                    |
| filter                                                                                    | `arrayOf(custom)`          | `[]`                            |          | All organisation units with a path that includes the provided paths will be shown.                                                                 |
| All others will not be rendered. When not provided, all org units will be shown.          |
| forceReload                                                                               | `boolean`                  |                                 |          | When true, everything will be reloaded. In order to load it again after reloading, `forceReload` has to be set to `false` and then to `true` again |
| handleCollapse                                                                            | `custom(function)`         |                                 |          |                                                                                                                                                    |
| handleExpand                                                                              | `custom(function)`         |                                 |          |                                                                                                                                                    |
| highlighted                                                                               | `arrayOf(custom)`          | `[]`                            |          | All units provided to "highlighted" as path will be visually                                                                                       |

highlighted.
Note:
The d2-ui component used two props for this:

-   searchResults
-   highlightSearchResults|
    |initiallyExpanded|`arrayOf(custom)`|`[]`||An array of OU paths that will be expanded automatically
    as soon as they are encountered.
    The path of an OU is the UIDs of the OU
    and all its parent OUs separated by slashes (/)
    Note: This replaces "openFirstLevel" as that's redundant|
    |isUserDataViewFallback|`boolean`|||When provided, the 'isUserDataViewFallback' option will be sent when requesting the org units|
    |renderNodeLabel|`function`|`defaultRenderNodeLabel`||Renders the actual node component for each leaf, can be used to
    customize the node. The default function just returns the node's
    displayName

Shape of the object passed to the callback:

````
{
   label: string,
   node: {
     displayName: string,
     id: string,
     // Only provided once `loading` is false
     path?: string,
     // Only provided once `loading` is false
     children?: Array.<{
       id: string,
       path: string,
       displayName: string
     }>
   },
   loading: boolean,
   error: string,
   open: boolean,
   selected: string[],
   singleSelection: boolean,
   disableSelection: boolean,
}
```|
|selected|`arrayOf(custom)`|`[]`||An array of paths of selected OUs. The path of an OU is the UIDs of the OU and all its parent OUs separated by slashes (`/`)|
|singleSelection|`boolean`|||When set, no checkboxes will be displayed and only the first selected path in `selected` will be highlighted|
|suppressAlphabeticalSorting|`boolean`|||Turns off alphabetical sorting of units|
|onChildrenLoaded|`function`|||Called with the children's data that was loaded|
|onCollapse|`function`|||Called with `{ path: string }` with the path of the parent of the level closed|
|onExpand|`function`|||Called with `{ path: string }` with the path of the parent of the level opened|
````
