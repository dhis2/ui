import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import { IconCross16 } from '@dhis2/ui-icons'
import React from 'react'

const Dismiss = ({ onClick, dataTest }) => (
    <div onClick={onClick} data-test={dataTest}>
        <IconCross16 />
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
