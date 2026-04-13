import { Portal } from '@dhis2-ui/portal'
import cx from 'classnames'
import React from 'react'

export interface LayerProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Disable the Portal, useful for nesting layers */
    disablePortal?: boolean
    /** Z-index level */
    level?: number | string
    position?: 'absolute' | 'fixed'
    /** Adds a semi-transparent background */
    translucent?: boolean
    /** Backdrop click handler */
    onBackdropClick?: (
        payload: Record<string, never>,
        event: React.MouseEvent<HTMLDivElement>
    ) => void
    /** Click handler - DEPRECATED: use onBackdropClick instead */
    onClick?: (
        payload: Record<string, never>,
        event: React.MouseEvent<HTMLDivElement>
    ) => void
}

const Layer = ({
    children,
    className,
    dataTest = 'dhis2-uicore-layer',
    disablePortal,
    level = 'auto',
    onBackdropClick,
    onClick,
    position = 'fixed',
    translucent,
}: LayerProps) => {
    const resolvedOnClick = onBackdropClick || onClick

    return (
        <Portal disable={disablePortal}>
            <div
                className={cx('layer', className, position, {
                    translucent,
                })}
                data-test={dataTest}
            >
                {resolvedOnClick && (
                    <div
                        className="backdrop"
                        onClick={(event) => resolvedOnClick({}, event)}
                    />
                )}
                {children}

                <style jsx>{`
                    div {
                        z-index: ${level};
                    }
                `}</style>

                <style jsx>{`
                    div {
                        inset-block-start: 0;
                        inset-inline-start: 0;
                        min-height: 100vh;
                        min-width: 100vw;
                    }
                    div.fixed {
                        position: fixed;
                        height: 100vh;
                        width: 100vw;
                    }
                    div.absolute {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                    }
                    div.translucent {
                        background-color: rgba(33, 43, 54, 0.4);
                    }
                    div.backdrop {
                        position: absolute;
                        inset: 0;
                        z-index: -1;
                    }
                `}</style>
            </div>
        </Portal>
    )
}

export { Layer }
