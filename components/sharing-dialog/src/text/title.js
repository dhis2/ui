import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const Title = ({ children }) => {
    return (
        <>
            <h2>{children}</h2>
            <style jsx>{`
                h2 {
                    font-size: 16px;
                    color: ${colors.grey900};
                }
            `}</style>
        </>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
}
