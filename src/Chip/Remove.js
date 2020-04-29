import React from 'react'
import propTypes from '@dhis2/prop-types'
import { css, resolve } from 'styled-jsx/css'

import { CancelOutline } from '../icons/Cancel--outline.js'
import { colors } from '../theme.js'

const containerStyle = css`
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        margin-right: 4px;
        border-radius: 12px;
        margin-left: -8px;
    }
    span:hover {
        background: ${colors.grey400};
    }
`

const removeIcon = resolve`
    svg {
        fill: ${colors.grey600};
		    height: 16px;
		    width: 16px;
        cursor: pointer;
        opacity: 1;
        pointer-events: all;
    }
`

export const Remove = ({ onRemove, dataTest }) => {
    if (!onRemove) {
        return null
    }

    return (
        <span
            onClick={e => {
                e.stopPropagation() // stop onRemove from triggering onClick on container
                onRemove({}, e)
            }}
            data-test={dataTest}
        >
            <CancelOutline className={removeIcon.className} />
            {removeIcon.styles}

            <style jsx>{containerStyle}</style>
        </span>
    )
}

Remove.propTypes = {
    dataTest: propTypes.string.isRequired,
    onRemove: propTypes.func,
}
