import { spacers } from '../../constants/index.js'
import PropTypes from 'prop-types'
import React from 'react'
import { borderColor } from './common/index.js'

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
    children: PropTypes.node,
    dataTest: PropTypes.string,
}
