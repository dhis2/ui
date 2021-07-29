import propTypes from '@dhis2/prop-types'
import React from 'react'

export const TagIcon = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}
        <style jsx>{`
            display: flex;
            align-items: center;
            margin-right: 4px;
            max-height: 16px;
            max-width: 16px;
        `}</style>
    </div>
)

TagIcon.propTypes = {
    dataTest: propTypes.string.isRequired,
    children: propTypes.node,
}
