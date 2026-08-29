import { spacers } from '@dhis2/ui-constants'
import { IconCross24 } from '@dhis2/ui-icons'
import React from 'react'

interface DismissProps {
    dataTest: string
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Dismiss = ({ onClick, dataTest }: DismissProps) => (
    <div // NOSONAR -- intentional interactive styling hook
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onClick(event as unknown as React.MouseEvent<HTMLDivElement>)
            }
        }}
        data-test={dataTest}
    >
        <IconCross24 />
        <style jsx>{`
            div {
                margin-inline-start: ${spacers.dp16};
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

export { Dismiss }
