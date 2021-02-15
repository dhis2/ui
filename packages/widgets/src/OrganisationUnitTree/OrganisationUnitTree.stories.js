/* eslint-disable react/no-unescaped-entities,react/prop-types */
import { CustomDataProvider, DataProvider } from '@dhis2/app-runtime'
import React, { useEffect, useState } from 'react'
import { OrganisationUnitTree } from './OrganisationUnitTree.js'

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

const log = true
const onChange = (...args) => log && console.log('onChange', ...args)
const onExpand = (...args) => log && console.log('onExpand', ...args)
const onCollapse = (...args) => log && console.log('onCollapse', ...args)
const onChildrenLoaded = (...args) =>
    log && console.log('onChildrenLoaded', ...args)

const customData = {
    'organisationUnits/A0000000000': () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    id: 'A0000000000',
                    path: '/A0000000000',
                    displayName: 'Org Unit 1',
                    children: [
                        {
                            id: 'A0000000001',
                            path: '/A0000000000/A0000000001',
                            children: [
                                { id: 'A0000000003' },
                                { id: 'A0000000004' },
                            ],
                            displayName: 'Org Unit 2',
                        },
                        {
                            id: 'A0000000002',
                            path: '/A0000000000/A0000000002',
                            children: [],
                            displayName: 'Org Unit 3',
                        },
                        {
                            id: 'A0000000006',
                            path: '/A0000000000/A0000000006',
                            children: [],
                            displayName: 'Org Unit 7',
                        },
                    ],
                })
            }, 1000)
        }),
    'organisationUnits/A0000000001': () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    displayName: 'Org Unit 2',
                    children: [
                        {
                            id: 'A0000000003',
                            path: '/A0000000000/A0000000001/A0000000003',
                            children: [],
                            displayName: 'Org Unit 4',
                        },
                        {
                            id: 'A0000000004',
                            path: '/A0000000000/A0000000001/A0000000004',
                            children: [],
                            displayName: 'Org Unit 5',
                        },
                    ],
                })
            }, 1000)
        }),
    'organisationUnits/A0000000002': {
        displayName: 'Org Unit 3',
        id: 'A0000000002',
        path: '/A0000000000/A0000000002',
        children: [],
    },
    'organisationUnits/A0000000003': {
        displayName: 'Org Unit 4',
        id: 'A0000000003',
        path: '/A0000000000/A0000000001/A0000000003',
        children: [],
    },
    'organisationUnits/A0000000004': {
        displayName: 'Org Unit 5',
        id: 'A0000000004',
        path: '/A0000000000/A0000000001/A0000000004',
        children: [],
    },
    'organisationUnits/A0000000006': () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    displayName: 'Org Unit 7',
                    id: 'A0000000006',
                    path: '/A0000000000/A0000000006',
                    children: [],
                })
            }, 400)
        }),
}

const ForceReloadAll = ({ delay }) => {
    const [forceReload, setForceReload] = useState(false)

    useEffect(() => {
        setTimeout(() => setForceReload(true), delay)
    }, [])

    return (
        <OrganisationUnitTree
            onChange={onChange}
            forceReload={forceReload}
            name="Root org unit"
            roots={['A0000000000']}
            initiallyExpanded={['/A0000000000/A0000000001']}
            selected={['/A0000000000/A0000000001/A0000000003']}
        />
    )
}

const ForceReloadIds = () => {
    return (
        <p>
            This is currently not working due to limitations of the data engine
            in the app runtime.
        </p>
    )

    //const [idsThatShouldBeReloaded, setIdsThatShouldBeReloaded] = useState([])

    //useEffect(() => {
    //    setTimeout(() => setIdsThatShouldBeReloaded(['A0000000001']), delay)
    //}, [])

    //return (
    //    <OrganisationUnitTree
    //        onChange={onChange}
    //        idsThatShouldBeReloaded={idsThatShouldBeReloaded}
    //        name="Root org unit"
    //        roots={['A0000000000']}
    //        initiallyExpanded={['/A0000000000', '/A0000000000/A0000000001']}
    //        selected={['/A0000000000/A0000000001/A0000000003']}
    //        onChildrenLoaded={({ path, forced }) =>
    //            console.log(
    //                `Unit with path "${path}" loaded, was forced: ${
    //                    forced ? 'yes' : 'no'
    //                }`
    //            )
    //        }
    //    />
    //)
}

const ReplaceRoots = ({ delay }) => {
    return (
        <p>
            This is currently not working due to limitations of the data engine
            in the app runtime. Normally the root unit would've been replaced
            after {` ${delay} `} milliseconds.
        </p>
    )

    //const [roots, setRoots] = useState(['A0000000000'])

    //useEffect(() => {
    //    setTimeout(() => setRoots(['A0000000001']), delay)
    //}, [])

    //return (
    //    <OrganisationUnitTree
    //        name="Root org unit"
    //        roots={roots}
    //        onChange={console.log.bind(null, 'onChange')}
    //        initiallyExpanded={['/A0000000001']}
    //    />
    //)
}

export default {
    title: 'Forms/Organisation Unit Tree',
    component: OrganisationUnitTree,
    decorators: [
        fn => <CustomDataProvider data={customData}>{fn()}</CustomDataProvider>,
    ],
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

export const Collapsed = args => <OrganisationUnitTree {...args} />
Collapsed.args = {
    onChange: onChange,
    name: 'Root org unit',
    roots: ['A0000000000'],
}

export const Expanded = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000']}
        initiallyExpanded={['/A0000000000/A0000000001']}
    />
)

export const MultipleRoots = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000', 'A0000000001']}
        initiallyExpanded={['/A0000000000/A0000000001']}
    />
)
MultipleRoots.storyName = 'Multiple roots'

export const FilteredRoot = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000', 'A0000000001']}
        initiallyExpanded={['/A0000000000/A0000000001']}
        filter={['/A0000000000']}
    />
)
FilteredRoot.storyName = 'Filtered (root)'

export const Filtered = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000']}
        initiallyExpanded={['/A0000000000/A0000000001']}
        filter={['/A0000000000/A0000000001']}
    />
)

export const SelectedMultiple = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000']}
        selected={[
            '/A0000000000/A0000000002',
            '/A0000000000/A0000000001/A0000000003',
        ]}
        initiallyExpanded={['/A0000000000', '/A0000000000/A0000000001']}
    />
)
SelectedMultiple.storyName = 'Selected multiple'

export const Indeterminate = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000']}
        selected={['/A0000000000/A0000000001']}
        initiallyExpanded={['/A0000000000']}
    />
)

export const SingleSelection = () => (
    <OrganisationUnitTree
        onChange={onChange}
        singleSelection
        name="Root org unit"
        roots={['A0000000000']}
        selected={['/A0000000000/A0000000001']}
        initiallyExpanded={['/A0000000000']}
    />
)
SingleSelection.storyName = 'Single selection'

export const NoSelection = () => (
    <OrganisationUnitTree
        onChange={onChange}
        disableSelection
        name="Root org unit"
        roots={['A0000000000']}
        selected={['/A0000000000/A0000000001']}
        initiallyExpanded={['/A0000000000']}
    />
)
NoSelection.storyName = 'No selection'

export const Highlighted = () => (
    <OrganisationUnitTree
        onChange={onChange}
        highlighted={['/A0000000000/A0000000001']}
        name="Root org unit"
        roots={['A0000000000']}
        initiallyExpanded={['/A0000000000']}
    />
)

export const _ForceReloadAll = () => <ForceReloadAll delay={2000} />
_ForceReloadAll.storyName = 'Force reload all'

export const ForceReloadOneUnit = () => <ForceReloadIds delay={2000} />
ForceReloadOneUnit.storyName = 'Force reload one unit'

export const _ReplaceRoots = () => <ReplaceRoots delay={1000} />
_ReplaceRoots.storyName = 'Replace roots'

export const Loading = () => (
    <CustomDataProvider
        data={{
            ...customData,
            'organisationUnits/A0000000001': () => new Promise(() => null),
        }}
    >
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000']}
            initiallyExpanded={['/A0000000000/A0000000001']}
        />
    </CustomDataProvider>
)

export const RootLoading = () => (
    <CustomDataProvider
        data={{
            ...customData,
            'organisationUnits/A0000000000': () => new Promise(() => null),
        }}
    >
        <fieldset style={{ maxWidth: 600 }}>
            <legend style={{ padding: '0 10px' }}>
                Custom container (max-width: 600px)
            </legend>
            <OrganisationUnitTree
                onChange={onChange}
                name="Root org unit"
                roots={['A0000000000']}
                initiallyExpanded={['/A0000000000/A0000000001']}
            />
        </fieldset>
    </CustomDataProvider>
)
RootLoading.storyName = 'Root loading'

export const RootError = () => (
    <CustomDataProvider
        data={{
            ...customData,
            'organisationUnits/A0000000000': () =>
                new Promise((_, reject) =>
                    reject(
                        'This is a custom error message, it could be anything'
                    )
                ),
        }}
    >
        <fieldset style={{ maxWidth: 600 }}>
            <legend style={{ padding: '0 10px' }}>
                Custom container (max-width: 600px)
            </legend>
            <OrganisationUnitTree
                onChange={onChange}
                name="Root org unit"
                roots={['A0000000000']}
                initiallyExpanded={['/A0000000000/A0000000001']}
            />
        </fieldset>
    </CustomDataProvider>
)
RootError.storyName = 'Root error'

export const LoadingErrorGrandchild = () => (
    <CustomDataProvider
        data={{
            ...customData,
            'organisationUnits/A0000000003': () =>
                Promise.reject(new Error('Loading org unit 4 and 5 failed')),
        }}
    >
        <OrganisationUnitTree
            autoExpandLoadingError
            name="Root org unit"
            roots={['A0000000000']}
            onChange={onChange}
            onExpand={onExpand}
            onCollapse={onCollapse}
            onChildrenLoaded={onChildrenLoaded}
            initiallyExpanded={['/A0000000000/A0000000001']}
        />
    </CustomDataProvider>
)
LoadingErrorGrandchild.storyName = 'Loading error grandchild'

const DX_onChange = (selected, setSelected, singleSelection) => ({
    id,
    path,
    checked,
}) => {
    console.log('onChange', { path, id, checked })
    const pathIndex = selected.indexOf(path)

    if (checked) {
        setSelected(singleSelection ? [path] : [...selected, path])
    } else {
        setSelected(
            singleSelection
                ? []
                : [
                      ...selected.slice(0, pathIndex),
                      ...selected.slice(pathIndex + 1),
                  ]
        )
    }
}

const Wrapper = props => {
    const [selected, setSelected] = useState([])

    return (
        <OrganisationUnitTree
            name="Root org unit"
            roots={['A0000000000']}
            selected={selected}
            onChange={DX_onChange(selected, setSelected, props.singleSelection)}
            initiallyExpanded={['A0000000001/A0000000002']}
            {...props}
        />
    )
}

export const DxMultiSelection = () => <Wrapper />
DxMultiSelection.storyName = 'DX: Multi selection'

export const DxSingleSelection = () => <Wrapper singleSelection />
DxSingleSelection.storyName = 'DX: Single selection'

export const DxNoSelection = () => <Wrapper disableSelection />
DxNoSelection.storyName = 'DX: No selection'

export const DxWithRealBackend = () => (
    <div>
        <div style={{ marginBottom: 20, lineHeight: '28px' }}>
            <b>
                This story doesn't work on netlify for some reason, just run it
                locally.
            </b>
            <br />
            You need to log in to{' '}
            <a
                href="https://debug.dhis2.org/dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://debug.dhis2.org/dev
            </a>
            <br />
            Make sure the{' '}
            <code style={{ background: '#ccc' }}>localhost:[PORT]</code> is part
            of the accepted list:{' '}
            <a
                href="https://debug.dhis2.org/dev/dhis-web-settings/#/access"
                target="_blank"
                rel="noopener noreferrer"
            >
                Settings app / Access
            </a>
        </div>
        <DataProvider baseUrl="https://debug.dhis2.org/dev" apiVersion="">
            <Wrapper
                //initiallyExpanded={['/ImspTQPwCqd/eIQbndfxQMb']}
                suppressAlphabeticalSorting
                roots="ImspTQPwCqd"
            />
        </DataProvider>
    </div>
)
DxWithRealBackend.storyName = 'DX: With real backend'
