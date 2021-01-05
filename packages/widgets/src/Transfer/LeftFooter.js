import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import { borderColor } from './common/index.js'

export const LeftFooter = ({ children, dataTest }) => (
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

LeftFooter.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
}
