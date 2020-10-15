import propTypes from '@dhis2/prop-types'
import React from 'react'
import { backgroundColor, borderColor, borderRadius } from './common/index.js'

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
                background-color: ${backgroundColor};
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
