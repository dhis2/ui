import { CustomDataProvider } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const log = true
export const onChange = (...args) => log && console.log('onChange', ...args)
export const onExpand = (...args) => log && console.log('onExpand', ...args)
export const onCollapse = (...args) => log && console.log('onCollapse', ...args)
export const onChildrenLoaded = (...args) =>
    log && console.log('onChildrenLoaded', ...args)

const createResponse = ({ fields, id, path, displayName, children }) => ({
    ...(fields.includes('id') ? { id } : {}),
    ...(fields.includes('path') ? { path } : {}),
    ...(fields.includes('displayName') ? { displayName } : {}),
    ...(fields.includes('children::size') ? { children: children.length } : {}),
    ...(fields.includes('children[id,path,displayName]') ? { children } : {}),
})
import { getOrganisationUnitData as goud } from '../__e2e__/get-organisation-unit-data'

export const getOrganisationUnitData = goud

const t = (id, { fields }) => {
    let data

    if (id === 'A0000000000') {
        data = createResponse({
            fields,
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
        })
    }

    if (id === 'A0000000001') {
        data = createResponse({
            fields,
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
    }

    if (id === 'A0000000002') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 3',
            id: 'A0000000002',
            path: '/A0000000000/A0000000002',
            children: [],
        })
    }

    if (id === 'A0000000003') {
        data = createResponse({
            fields,
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
        })
    }

    if (id === 'A0000000004') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 5',
            id: 'A0000000004',
            path: '/A0000000000/A0000000001/A0000000004',
            children: [],
        })
    }

    if (id === 'A0000000006') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 7',
            id: 'A0000000006',
            path: '/A0000000000/A0000000006',
            children: [],
        })
    }

    if (id === 'A0000000007') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 8',
            id: 'A0000000007',
            path: '/A0000000000/A0000000001/A0000000003/A0000000007',
            children: [],
        })
    }

    return data
}

export const customData = {
    organisationUnits: (_, { id, params = {} }) => {
        const data = getOrganisationUnitData(id, params)

        if (!data) {
            return Promise.reject(new Error('404 - Org unit not found'))
        }

        return Promise.resolve(data)
    },
}

export const StatefulMultiSelectionWrapper = ({
    children,
    onSelectionChange = () => null,
}) => {
    const [selected, setSelected] = useState([])

    return children({
        selected,
        onChange: (...args) => {
            onChange(...args)

            const [{ selected: newSelected }] = args
            setSelected(newSelected)
            onSelectionChange(newSelected)
        },
    })
}

StatefulMultiSelectionWrapper.propTypes = {
    children: PropTypes.func.isRequired,
    onSelectionChange: PropTypes.func,
}

export const createDecoratorStatefulMultiSelection = (args) => {
    return (Story) => (
        <StatefulMultiSelectionWrapper
            onSelectionChange={args?.onSelectionChange}
        >
            {({ selected, onChange }) => (
                <Story selected={selected} onChange={onChange} />
            )}
        </StatefulMultiSelectionWrapper>
    )
}

export const createDecoratorCustomDataProvider = (args) => {
    const data = args?.data || customData

    return (Story) => {
        return (
            <CustomDataProvider data={data}>
                <Story />
            </CustomDataProvider>
        )
    }
}
