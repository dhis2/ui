import React from 'react'
import propTypes from '@dhis2/prop-types'

import { borderColor, borderRadius } from './common.js'

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
                border: 1px solid ${borderColor};
                border-radius: ${borderRadius};
                display: flex;
                flex-direction: column;
                max-width: 100%;
                width: ${width};
            }
        `}</style>
    </div>
)

RightSide.propTypes = {
    width: propTypes.string.isRequired,
    children: propTypes.node,
    dataTest: propTypes.string,
}
