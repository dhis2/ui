import propTypes from '@dhis2/prop-types'
import React from 'react'

export const TagText = ({ children, dataTest }) => (
    <span data-test={dataTest}>
        {children}
        <style jsx>{`
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        `}</style>
    </span>
)

TagText.propTypes = {
    dataTest: propTypes.string.isRequired,
    children: propTypes.node,
}
