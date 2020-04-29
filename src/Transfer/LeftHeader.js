import React from 'react'
import propTypes from '@dhis2/prop-types'

import { borderColor } from './common.js'
import { spacers } from '../theme.js'

export const LeftHeader = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                border-bottom: 1px solid ${borderColor};
                flex-grow: 0;
                padding: 0 ${spacers.dp8};
            }
        `}</style>
    </div>
)

LeftHeader.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
}
