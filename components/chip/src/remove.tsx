import { colors } from '@dhis2/ui-constants'
import React from 'react'
import css from 'styled-jsx/css'

interface CancelOutlineProps {
    className?: string
}

function CancelOutline({ className }: CancelOutlineProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={className}
        >
            <path d="M11.2928932,3.29289322 L12.7071068,4.70710678 L9.41389322,7.99989322 L12.7071068,11.2928932 L11.2928932,12.7071068 L7.99989322,9.41389322 L4.70710678,12.7071068 L3.29289322,11.2928932 L6.58589322,7.99989322 L3.29289322,4.70710678 L4.70710678,3.29289322 L7.99989322,6.58589322 L11.2928932,3.29289322 Z" />

            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 16px;
                    width: 16px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}

const containerStyle = css`
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        margin-inline-end: 4px;
        border-radius: 12px;
        margin-inline-start: -8px;
    }
    span:hover {
        background: ${colors.grey400};
    }
`

const removeIcon = css.resolve`
    svg {
        fill: ${colors.grey600};
        height: 16px;
        width: 16px;
        cursor: pointer;
        opacity: 1;
        pointer-events: all;
    }
`

export interface RemoveProps {
    dataTest: string
    onRemove?: (
        payload: Record<string, never>,
        event: React.MouseEvent<HTMLSpanElement>
    ) => void
}

export const Remove = ({ onRemove, dataTest }: RemoveProps) => {
    if (!onRemove) {
        return null
    }

    return (
        <span
            onClick={(e) => {
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
