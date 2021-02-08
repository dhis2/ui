import propTypes from '@dhis2/prop-types'
import React from 'react'
import styles from './ExpandedRowContent.styles.js'

export const ExpandedRowContent = ({
    children,
    className,
    setIsHoveringExpandedContent,
}) => (
    <tr
        onMouseOver={() => setIsHoveringExpandedContent(true)}
        onMouseOut={() => setIsHoveringExpandedContent(false)}
        className={className}
    >
        <td colSpan="9999999">{children}</td>
        <style jsx>{styles}</style>
    </tr>
)

ExpandedRowContent.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string.isRequired,
    setIsHoveringExpandedContent: propTypes.func.isRequired,
}
