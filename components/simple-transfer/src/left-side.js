import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const LeftSide = ({ children, dataTest, width }) => (
    <div data-test={dataTest}>
        {children}

        {
            /**
             * Flex basis 0px to make sure right and left side
             * always have the same width
             */ ''
        }
        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                background-color: ${colors.white};
                border-radius: 3px;
                border: 1px solid ${colors.grey400};
                min-height: 240px;
                max-width: 100%;
                width: ${width};
            }
        `}</style>
    </div>
)

LeftSide.propTypes = {
    width: PropTypes.string.isRequired,
    children: PropTypes.node,
    dataTest: PropTypes.string,
}
