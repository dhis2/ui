import { spacers } from '@dhis2/ui-constants'
import { IconCross24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

const Dismiss = ({ onClick, dataTest }) => (
    <div onClick={onClick} data-test={dataTest}>
        <IconCross24 />
        <style jsx>{`
            div {
                margin-left: ${spacers.dp16};
                min-height: 32px;
                min-width: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
            }
            div:hover {
                cursor: pointer;
                background: rgba(0, 0, 0, 0.15);
            }
            div:active {
                background: rgba(0, 0, 0, 0.25);
            }
            div :global(svg) {
                width: 18px;
                height: 18px;
            }
        `}</style>
    </div>
)

Dismiss.propTypes = {
    dataTest: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export { Dismiss }
