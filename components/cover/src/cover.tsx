import { layers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

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
    (onClick?: CoverProps['onClick']): React.MouseEventHandler<HTMLDivElement> =>
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
    <div
        className={cx(className, { translucent })}
        onClick={createClickHandler(onClick)}
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
    </div>
)

export { Cover }
