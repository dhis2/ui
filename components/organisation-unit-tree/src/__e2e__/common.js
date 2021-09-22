import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const namespace = 'OrganisationUnitTree'

export const delayResponse = (delay, response) => () =>
    new Promise(resolve => setTimeout(() => resolve(response), delay))

export const dataProviderData = {
    organisationUnits: (type, { id }) => {
        if (id === 'A0000000000') {
            return {
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
            }
        }

        if (id === 'A0000000001') {
            return {
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
            return {
                displayName: 'Org Unit 3',
                id: 'A0000000002',
                path: '/A0000000000/A0000000002',
                children: [],
            }
        }

        if (id === 'A0000000003') {
            return {
                displayName: 'Org Unit 4',
                id: 'A0000000003',
                path: '/A0000000000/A0000000001/A0000000003',
                children: [],
            }
        }

        if (id === 'A0000000004') {
            return {
                displayName: 'Org Unit 5',
                id: 'A0000000004',
                path: '/A0000000000/A0000000001/A0000000004',
                children: [],
            }
        }

        if (id === 'A0000000006') {
            return {
                displayName: 'Org Unit 7',
                id: 'A0000000006',
                path: '/A0000000000/A0000000006',
                children: [],
            }
        }

        return Promise.reject(`No org unit with id "${id}"`)
    },
}

const onChange =
    (selected, setSelected) =>
    ({ selected: newSelected }) => {
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
    children: PropTypes.func.isRequired,
    onSelectionChange: PropTypes.func,
}
