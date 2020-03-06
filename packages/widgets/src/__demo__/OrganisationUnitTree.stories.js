/* eslint-disable react/no-unescaped-entities,react/prop-types */
import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import { OrganisationUnitTree } from '../index'
import { CustomDataProvider, DataProvider } from '@dhis2/app-runtime'

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

storiesOf('OrganisationUnitTree', module)
    .addDecorator(fn => (
        <CustomDataProvider data={customData}>{fn()}</CustomDataProvider>
    ))
    .add('Collapsed', () => (
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000']}
        />
    ))
    .add('Expanded', () => (
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000']}
            initiallyExpanded={['/A0000000000/A0000000001']}
        />
    ))
    .add('Multiple roots', () => (
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000', 'A0000000001']}
            initiallyExpanded={['/A0000000000/A0000000001']}
        />
    ))
    .add('Filtered (root)', () => (
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000', 'A0000000001']}
            initiallyExpanded={['/A0000000000/A0000000001']}
            filter={['/A0000000000']}
        />
    ))
    .add('Filtered', () => (
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000']}
            initiallyExpanded={['/A0000000000/A0000000001']}
            filter={['/A0000000000/A0000000001']}
        />
    ))
    .add('Selected multiple', () => (
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
    ))
    .add('Indeterminate', () => (
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000']}
            selected={['/A0000000000/A0000000001']}
            initiallyExpanded={['/A0000000000']}
        />
    ))
    .add('Single selection', () => (
        <OrganisationUnitTree
            onChange={onChange}
            singleSelection
            name="Root org unit"
            roots={['A0000000000']}
            selected={['/A0000000000/A0000000001']}
            initiallyExpanded={['/A0000000000']}
        />
    ))
    .add('No selection', () => (
        <OrganisationUnitTree
            onChange={onChange}
            disableSelection
            name="Root org unit"
            roots={['A0000000000']}
            selected={['/A0000000000/A0000000001']}
            initiallyExpanded={['/A0000000000']}
        />
    ))
    .add('Highlighted', () => (
        <OrganisationUnitTree
            onChange={onChange}
            highlighted={['/A0000000000/A0000000001']}
            name="Root org unit"
            roots={['A0000000000']}
            initiallyExpanded={['/A0000000000']}
        />
    ))
    .add('Force reload all', () => <ForceReloadAll delay={2000} />)
    .add('Force reload one unit', () => <ForceReloadIds delay={2000} />)
    .add('Replace roots', () => <ReplaceRoots delay={1000} />)

storiesOf('OrganisationUnitTree', module).add('Loading', () => (
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
))

storiesOf('OrganisationUnitTree', module).add('Root loading', () => (
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
))

storiesOf('OrganisationUnitTree', module).add('Root error', () => (
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
))

storiesOf('OrganisationUnitTree', module).add(
    'Loading error grandchild',
    () => (
        <CustomDataProvider
            data={{
                ...customData,
                'organisationUnits/A0000000003': () =>
                    Promise.reject(
                        new Error('Loading org unit 4 and 5 failed')
                    ),
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
)

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

storiesOf('OrganisationUnitTree', module)
    .addDecorator(fn => (
        <CustomDataProvider data={customData}>{fn()}</CustomDataProvider>
    ))
    .add('DX: Multi selection', () => <Wrapper />)
    .add('DX: Single selection', () => <Wrapper singleSelection />)
    .add('DX: No selection', () => <Wrapper disableSelection />)

storiesOf('OrganisationUnitTree', module)
    .addDecorator(fn => (
        <DataProvider baseUrl="https://debug.dhis2.org/dev" apiVersion="">
            {fn()}
        </DataProvider>
    ))
    .add('DX: With real backend', () => (
        <div>
            <div style={{ marginBottom: 20, lineHeight: '28px' }}>
                <b>
                    This story doesn't work on netlify for some reason, just run
                    it locally.
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
                <code style={{ background: '#ccc' }}>localhost:[PORT]</code> is
                part of the accepted list:{' '}
                <a
                    href="https://debug.dhis2.org/dev/dhis-web-settings/#/access"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Settings app / Access
                </a>
            </div>
            <Wrapper
                //initiallyExpanded={['/ImspTQPwCqd/eIQbndfxQMb']}
                roots="ImspTQPwCqd"
            />
        </div>
    ))
