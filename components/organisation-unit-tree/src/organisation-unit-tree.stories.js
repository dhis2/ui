import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { customData } from './__stories__/shared.js'
import { OrganisationUnitTree } from './index.js'

const subtitle =
    'Display, manipulate and select organization units displayed in a hierarchical tree'

const description = `
This is a complex, controlled component. It needs access to an App Runtime data provider to fetch org unit data.

Several props require arrays of org. unit paths (referred to as \`orgUnitPathPropType[]\` in the table below). Take a look at the \`initiallyExpanded\` and \`filter\` props in the example to see an example of the paths format.

Example:

\`\`\`js
import { OrganisationUnitTree } from '@dhis2/ui'

const orgUnitTree = (
    <OrganisationUnitTree
        name="Root org unit"
        roots="A0000000000"
        onChange={onChange}
        onExpand={onExpand}
        onCollapse={onCollapse}
        onChildrenLoaded={onChildrenLoaded}
        // Notice the format of the org unit paths
        initiallyExpanded={['/A0000000000/A0000000001']}
        filter={['/A0000000000/A0000000001/A0000000003']}
    />
)
\`\`\`

`

export default {
    title: 'Forms/Organisation Unit Tree',
    component: OrganisationUnitTree,
    decorators: [
        (fn) => (
            <CustomDataProvider data={customData}>{fn()}</CustomDataProvider>
        ),
    ],
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

export { Collapsed } from './__stories__/collapsed.js'
export { Expanded } from './__stories__/expanded.js'
export { CustomExpandedImperativeOpen } from './__stories__/custom-expanded-imperative-open.js'
export { MultipleRoots } from './__stories__/multiple-roots.js'
export { CustomNodeLabel } from './__stories__/custom-node-label.js'
export { FilteredRoot } from './__stories__/filtered-root.js'
export { Filtered } from './__stories__/filtered.js'
export { SelectedMultiple } from './__stories__/selected-multiple.js'
export { Indeterminate } from './__stories__/indeterminate.js'
export { SingleSelection } from './__stories__/single-selection.js'
export { NoSelection } from './__stories__/no-selection.js'
export { Highlighted } from './__stories__/highlighted.js'
export { ForceReloadAll } from './__stories__/force-reload-all.js'
export { ForceReloadOneUnit } from './__stories__/force-reload-one-unit.js'
export { ReplaceRoots } from './__stories__/replace-roots.js'
export { Loading } from './__stories__/loading.js'
export { RootLoading } from './__stories__/root-loading.js'
export { RootError } from './__stories__/root-error.js'
export { LoadingErrorGrandchild } from './__stories__/loading-error-grandchild.js'
export * from './__stories__/development-stories.js'
