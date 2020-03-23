import { CircularLoader } from '../index.js'
import React from 'react'
import propTypes from 'prop-types'

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
