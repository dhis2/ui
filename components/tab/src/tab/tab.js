import { colors, theme } from '@dhis2/ui-constants'
import { Tooltip } from '@dhis2-ui/tooltip'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'

export const Tab = React.forwardRef(
    (
        {
            icon,
            onClick,
            selected,
            disabled,
            children,
            className,
            dataTest = 'dhis2-uicore-tab',
        },
        ref
    ) => {
        let tabRef = useRef(null)
        if (ref) {
            tabRef = ref
        }
        const [isOverflowing, setIsOverflowing] = useState(false)

        useEffect(() => {
            const checkOverflow = () => {
                const isOverflow =
                    tabRef.current.scrollWidth > tabRef.current.clientWidth
                setIsOverflowing(isOverflow)
            }
            checkOverflow()
        }, [])

        return (
            <button
                className={`${cx('tab', className, {
                    selected,
                    disabled,
                })}`}
                onClick={disabled ? undefined : (event) => onClick({}, event)}
                data-test={dataTest}
                ref={tabRef}
                role="tab"
                aria-selected={selected ? 'true' : 'false'}
                aria-disabled={disabled ? 'true' : 'false'}
                onFocus={disabled ? undefined : (event) => onClick({}, event)}
                tabIndex={-1}
            >
                {icon}
                {isOverflowing ? (
                    <Tooltip content={children} maxWidth={'100%'}>
                        <span ref={tabRef}>{children}</span>
                    </Tooltip>
                ) : (
                    <span ref={tabRef}>{children}</span>
                )}

                <style jsx>{`
                    button {
                        flex-grow: 0;
                        position: relative;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        vertical-align: bottom;

                        height: 100%;
                        padding: 16px 16px 11px;

                        background-color: transparent;
                        outline: none;
                        border: none;
                        border-bottom: 1px solid ${colors.grey400};

                        color: ${colors.grey600};
                        font-size: 14px;
                        line-height: 20px;

                        cursor: pointer;
                    }

                    :global(.fixed) > button {
                        flex-grow: 1;
                    }

                    button::after {
                        content: ' ';
                        display: block;
                        position: absolute;
                        bottom: -1px;
                        inset-inline-start: 0;
                        height: 4px;
                        width: 100%;
                        background-color: transparent;
                    }

                    span {
                        display: inline-flex;
                        max-width: 320px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        transition: fill 150ms ease-in-out;
                    }
                    /*focus-visible backwards compatibility for safari: https://css-tricks.com/platform-news-using-focus-visible-bbcs-new-typeface-declarative-shadow-doms-a11y-and-placeholders/*/
                    button:focus {
                        outline: 3px solid ${theme.focus};
                        outline-offset: -3px;
                    }
                    button:focus:not(:focus-visible) {
                        outline: none;
                    }

                    button > :global(svg) {
                        fill: ${colors.grey600};
                        width: 14px;
                        height: 14px;
                        margin: 0 4px 0 0;
                    }

                    button:hover {
                        color: ${colors.grey900};
                    }

                    button:hover::after {
                        background-color: ${colors.grey600};
                        height: 2px;
                    }

                    button:active::after {
                        background-color: ${colors.grey800};
                    }

                    button.selected {
                        color: ${theme.primary800};
                    }

                    button.selected::after {
                        background-color: ${theme.primary700};
                        transition: background-color 150ms ease-in-out;
                    }

                    button.selected:hover::after {
                        background-color: ${theme.primary700};
                        height: 4px;
                    }

                    button.selected > :global(svg) {
                        fill: ${theme.primary700};
                    }

                    button.disabled {
                        color: ${colors.grey500};
                        cursor: not-allowed;
                    }

                    button.disabled:hover,
                    button.selected:hover {
                        background-color: transparent;
                    }

                    button.disabled > :global(svg) {
                        fill: ${colors.grey500};
                    }
                `}</style>
            </button>
        )
    }
)

Tab.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    /** Indicates this tab is selected */
    selected: PropTypes.bool,
    /** Called with the signature `({}, event)` */
    onClick: PropTypes.func,
}

Tab.displayName = 'Tab'
