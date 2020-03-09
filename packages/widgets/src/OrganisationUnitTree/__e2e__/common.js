import React, { useState } from 'react'
import propTypes from '@dhis2/prop-types'

export const namespace = 'OrganisationUnitTree'

export const delayResponse = (delay, response) => () =>
    new Promise(resolve => setTimeout(() => resolve(response), delay))

export const dataProviderData = {
    'organisationUnits/A0000000000': {
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
    },
    'organisationUnits/A0000000001': {
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
    },
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
    'organisationUnits/A0000000006': {
        displayName: 'Org Unit 7',
        id: 'A0000000006',
        path: '/A0000000000/A0000000006',
        children: [],
    },
}

const onChange = (selected, setSelected) => ({ selected: newSelected }) => {
    setSelected(newSelected)
    return newSelected
}

export const StatefulMultiSelectionWrapper = ({
    children,
    onSelectionChange,
}) => {
    const [selected, setSelected] = useState([])
    const onChangeHandler = onChange(selected, setSelected, false)

    return (
        <>
            {children({
                selected,
                onChange: (...args) => {
                    const newSelection = onChangeHandler(...args)

                    if (onSelectionChange) {
                        onSelectionChange(newSelection)
                    }
                },
            })}
        </>
    )
}

StatefulMultiSelectionWrapper.propTypes = {
    children: propTypes.func.isRequired,
    onSelectionChange: propTypes.func,
}
