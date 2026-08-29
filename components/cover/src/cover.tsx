import { layers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

const CoverElement = 'div'

export interface CoverProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Adds a semi-transparent background to the cover */
    translucent?: boolean
    onClick?: (
        payload: Record<string, never>,
        event: React.MouseEvent<HTMLDivElement>
    ) => void
}

const createClickHandler =
    (
        onClick?: CoverProps['onClick']
    ): React.MouseEventHandler<HTMLDivElement> =>
    (event) => {
        // don't respond to clicks that originated in the children
        if (onClick && event.target === event.currentTarget) {
            onClick({}, event)
        }
    }

const Cover = ({
    children,
    className,
    dataTest = 'dhis2-uicore-componentcover',
    onClick,
    translucent,
}: CoverProps) => (
    <CoverElement
        className={cx(className, { translucent })}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick ? createClickHandler(onClick) : undefined}
        onKeyDown={(event) => {
            if (onClick && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                onClick(
                    {},
                    event as unknown as React.MouseEvent<HTMLDivElement>
                )
            }
        }}
        data-test={dataTest}
    >
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: ${layers.applicationTop};
            }
            div.translucent {
                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </CoverElement>
)

export { Cover }
