import propTypes from '@dhis2/prop-types'
import React from 'react'

export const TagIcon = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}
        <style jsx>{`
            margin-right: 4px;
            width: 12px;
            height: 12px;
            overflow: hidden;
            flex-shrink: 0;
        `}</style>
    </div>
)

TagIcon.propTypes = {
    dataTest: propTypes.string.isRequired,
    children: propTypes.node,
}
