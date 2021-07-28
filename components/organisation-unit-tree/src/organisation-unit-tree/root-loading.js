import { CircularLoader } from '@dhis2-ui/loader'
import propTypes from 'prop-types'
import React from 'react'

export const RootLoading = ({ dataTest }) => (
    <div data-test={`${dataTest}-loading`}>
        <CircularLoader small />

        <style jsx>{`
            div {
                display: flex;
                justify-content: center;
            }
        `}</style>
    </div>
)

RootLoading.propTypes = {
    dataTest: propTypes.string.isRequired,
}
