/* eslint-disable react/display-name */
import { CustomDataProvider } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const namespace = 'OrganisationUnitTree'

export const delayResponse = (delay, response) => () =>
    new Promise(resolve => setTimeout(() => resolve(response), delay))

export const getOrganisationUnitData = id => {
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

export const StatefulMultiSelectionWrapper = ({
    children,
    onSelectionChange = () => null,
}) => {
    const [selected, setSelected] = useState([])

    return children({
        selected,
        onChange: ({ selected: newSelected }) => {
            setSelected(newSelected)
            onSelectionChange(newSelected)
        },
    })
}

StatefulMultiSelectionWrapper.propTypes = {
    children: PropTypes.func.isRequired,
    onSelectionChange: PropTypes.func,
}

export const createDecoratorStatefulMultiSelection = args => {
    return fn => (
        <StatefulMultiSelectionWrapper
            onSelectionChange={args?.onSelectionChange}
        >
            {fn}
        </StatefulMultiSelectionWrapper>
    )
}

export const createDecoratorCustomDataProvider = args => {
    return fn => (
        <CustomDataProvider data={args?.data || dataProviderData}>
            {fn()}
        </CustomDataProvider>
    )
}
