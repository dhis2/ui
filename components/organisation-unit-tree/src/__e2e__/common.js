/* eslint-disable react/display-name */
import { CustomDataProvider } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { getOrganisationUnitData } from './get-organisation-unit-data.js'

export { getOrganisationUnitData } from './get-organisation-unit-data.js'
export { namespace } from './namespace.js'

export const delayResponse = (delay, response) => () =>
    new Promise((resolve) => setTimeout(() => resolve(response), delay))

export const dataProviderData = {
    organisationUnits: (_, { id, params = {} }) => {
        console.log('id, params', id, params)
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
