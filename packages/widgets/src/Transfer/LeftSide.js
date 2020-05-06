import React from 'react'
import propTypes from '@dhis2/prop-types'

import { borderColor, borderRadius } from './common.js'

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
                border-radius: ${borderRadius};
                border: 1px solid ${borderColor};
                min-height: 240px;
                max-width: 100%;
                width: ${width};
            }
        `}</style>
    </div>
)

LeftSide.propTypes = {
    width: propTypes.string.isRequired,
    children: propTypes.node,
    dataTest: propTypes.string,
}
