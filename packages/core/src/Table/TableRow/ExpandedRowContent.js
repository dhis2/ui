import PropTypes from 'prop-types'
import React from 'react'
import styles from './ExpandedRowContent.styles.js'

export const ExpandedRowContent = ({
    children,
    className,
    colSpan,
    setIsHoveringExpandedContent,
}) => (
    <tr
        onMouseOver={() => setIsHoveringExpandedContent(true)}
        onMouseOut={() => setIsHoveringExpandedContent(false)}
        className={className}
    >
        <td colSpan={colSpan}>{children}</td>
        <style jsx>{styles}</style>
    </tr>
)

ExpandedRowContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    colSpan: PropTypes.string.isRequired,
    setIsHoveringExpandedContent: PropTypes.func.isRequired,
}
