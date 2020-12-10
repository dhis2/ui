import React from 'react'
import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import { Close } from '../Icons/index.js'

const Dismiss = ({ onClick, dataTest }) => (
    <div onClick={onClick} data-test={dataTest}>
        <Close />
        <style jsx>{`
            div {
                margin-left: ${spacers.dp24};
            }
            div:hover {
                cursor: pointer;
            }
            div :global(svg) {
                width: 18px;
                height: 18px;
            }
        `}</style>
    </div>
)

Dismiss.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
}

export { Dismiss }
