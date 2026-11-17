import { theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef } from 'react'

export interface OuTreeContainerProps {
    /** 0 makes the tree one tab stop; the rows themselves are not focusable. */
    tabIndex?: number
    /** The element id of the focused row, while the container has focus. */
    activeDescendantId?: string
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
    onFocus?: React.FocusEventHandler<HTMLDivElement>
    onBlur?: React.FocusEventHandler<HTMLDivElement>
    className?: string
    dataTest?: string
    children?: React.ReactNode
}

/**
 * The tree's scroll element: fills its box, so the box needs a height. The
 * ref is the virtualiser's scroll element. It is also the element that
 * holds DOM focus for the tree, naming the focused row.
 */
export const OuTreeContainer = forwardRef<HTMLDivElement, OuTreeContainerProps>(
    function OuTreeContainer(
        {
            tabIndex,
            activeDescendantId,
            onKeyDown,
            onFocus,
            onBlur,
            className,
            dataTest,
            children,
        },
        ref
    ) {
        return (
            <div
                ref={ref}
                role="tree"
                tabIndex={tabIndex}
                aria-activedescendant={activeDescendantId}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onBlur={onBlur}
                data-test={dataTest}
                className={cx('container', className)}
            >
                {children}
                <style jsx>{`
                    .container {
                        height: 100%;
                        width: 100%;
                        overflow: auto;
                        position: relative;
                    }
                    .container:focus {
                        outline: none;
                    }
                    /* The focused row shows the ring; without one, the box does. */
                    .container:focus-visible:not([aria-activedescendant]) {
                        box-shadow: inset 0 0 0 2px ${theme.focus};
                    }
                `}</style>
            </div>
        )
    }
)
