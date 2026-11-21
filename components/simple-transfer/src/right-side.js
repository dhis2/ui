import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const RightSide = ({ children, dataTest, width }) => (
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
                background-color: ${colors.white};
                border: 1px solid ${colors.grey400};
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                max-width: 100%;
                width: ${width};
            }
        `}</style>
    </div>
)

RightSide.propTypes = {
    width: PropTypes.string.isRequired,
    children: PropTypes.node,
    dataTest: PropTypes.string,
}
