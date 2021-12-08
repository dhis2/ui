import { Menu, MenuItem } from '@dhis2-ui/menu'
import { OrganisationUnitTree } from '@dhis2-ui/organisation-unit-tree'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import React, { useState } from 'react'

export const decoratorCommonStyles = (fn) => (
    <>
        {fn()}
        <style jsx>{`
            :global(body) {
                background: ${colors.grey100};
                padding: 0 !important;
            }

            :global(div#root) {
                padding: 0;
            }
        `}</style>
    </>
)

export const getOrganisationUnitData = (id) => {
    let data

    if (id === 'A0000000000') {
        data = {
            id: 'A0000000000',
            path: '/A0000000000',
            displayName: 'Org Unit 1',
            children: [
                {
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    children: [{ id: 'A0000000003' }, { id: 'A0000000004' }],
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
        }
    }

    if (id === 'A0000000001') {
        data = {
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
        }
    }

    if (id === 'A0000000002') {
        data = {
            displayName: 'Org Unit 3',
            id: 'A0000000002',
            path: '/A0000000000/A0000000002',
            children: [],
        }
    }

    if (id === 'A0000000003') {
        data = {
            displayName: 'Org Unit 4',
            id: 'A0000000003',
            path: '/A0000000000/A0000000001/A0000000003',
            children: [
                {
                    id: 'A0000000007',
                    path: '/A0000000000/A0000000001/A0000000003/A0000000007',
                    children: [],
                    displayName: 'Org Unit 8',
                },
            ],
        }
    }

    if (id === 'A0000000004') {
        data = {
            displayName: 'Org Unit 5',
            id: 'A0000000004',
            path: '/A0000000000/A0000000001/A0000000004',
            children: [],
        }
    }

    if (id === 'A0000000006') {
        data = {
            displayName: 'Org Unit 7',
            id: 'A0000000006',
            path: '/A0000000000/A0000000006',
            children: [],
        }
    }

    if (id === 'A0000000007') {
        data = {
            displayName: 'Org Unit 8',
            id: 'A0000000007',
            path: '/A0000000000/A0000000001/A0000000003/A0000000007',
            children: [],
        }
    }

    return data
}

export const dataProviderData = {
    organisationUnits: (_, { id }) => {
        const data = getOrganisationUnitData(id)

        if (!data) {
            return Promise.reject(new Error('404 - Org unit not found'))
        }

        return Promise.resolve(data)
    },
}

export const createDecoratorCustomDataProvider = (args) => {
    const data = args?.data || dataProviderData

    return (Story) => {
        window.dataProviderData = data

        return (
            <CustomDataProvider data={data}>
                <Story />
            </CustomDataProvider>
        )
    }
}

export const createStatefulDecorator = (args) => {
    return (fn) => {
        const [workflow, setWorkflow] = useState(args?.workflow || null)
        const [workflowOpen, setWorkflowOpen] = useState(
            args?.workflowOpen || false
        )
        const [dataSet, setDataSet] = useState(args?.dataSet || null)
        const [dataSetOpen, setDataSetOpen] = useState(
            args?.dataSetOpen || false
        )
        const [orgUnit, setOrgUnit] = useState(args?.orgUnit || null)
        const [orgUnitOpen, setOrgUnitOpen] = useState(
            args?.orgUnitOpen || false
        )

        return (
            <>
                {fn({
                    workflow,
                    setWorkflow,
                    workflowOpen,
                    setWorkflowOpen,
                    dataSet,
                    setDataSet,
                    dataSetOpen,
                    setDataSetOpen,
                    orgUnit,
                    setOrgUnit,
                    orgUnitOpen,
                    setOrgUnitOpen,
                })}
            </>
        )
    }
}

export const workflows = [
    { value: 'm<4y', label: 'Mortality < 4 years' },
    { value: 'm<5y', label: 'Mortality < 5 years' },
]

export const dataSets = [
    { value: 'data-set-1', label: 'Data set 1' },
    { value: 'data-set-2', label: 'Data set 2' },
    { value: 'data-set-3', label: 'Data set 3' },
]

export const MenuSelect = ({ values, selected, onChange }) => {
    return (
        <div style={{ width: 400, padding: 16, background: 'white' }}>
            <Menu>
                {values.map(({ value, label }) => (
                    <MenuItem
                        key={value}
                        label={label}
                        active={selected === value}
                        onClick={() => onChange({ selected: value })}
                    />
                ))}
            </Menu>
        </div>
    )
}

export const OrgUnitSelect = ({ onChange, selected }) => {
    return (
        <div style={{ width: 400, minHeight: 400, maxHeight: '70vh' }}>
            <OrganisationUnitTree
                singleSelection
                onChange={onChange}
                roots={['A0000000000']}
                selected={selected}
            />
        </div>
    )
}
