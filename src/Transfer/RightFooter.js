import React from 'react'
import propTypes from '@dhis2/prop-types'

import { borderColor } from './common.js'
import { spacers } from '../theme.js'

export const RightFooter = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 0;
                border-top: 1px solid ${borderColor};
                padding: 0 ${spacers.dp8};
            }
        `}</style>
    </div>
)

RightFooter.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
}
