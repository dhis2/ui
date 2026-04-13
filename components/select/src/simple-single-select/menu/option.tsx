import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { useEffect, useRef } from 'react'

const VISIBILE_INTERSECTION_RATIO = 0.99

interface DefaultStyleProps {
    label: string
    disabled?: boolean
    highlighted?: boolean
}

function DefaultStyle({ label, disabled, highlighted }: DefaultStyleProps) {
    return (
        <span
            className={cx('option', {
                disabled,
                active: highlighted,
            })}
        >
            {label}

            <style jsx>{`
                span {
                    display: block;
                    cursor: pointer;
                    font-size: 14px;
                    text-decoration: none;
                    color: ${colors.grey900};
                    padding-block: ${spacers.dp8};
                    padding-inline: ${spacers.dp12};
                    line-height: ${spacers.dp16};
                }

                span:hover {
                    background-color: ${colors.grey200};
                }

                span:active,
                span.active {
                    background-color: ${colors.teal700};
                    color: ${colors.white};
                    cursor: auto;
                }

                span.disabled {
                    color: ${colors.grey500};
                    cursor: not-allowed;
                    user-select: none;
                }

                span.disabled:hover {
                    background-color: initial;
                }
            `}</style>
        </span>
    )
}

export interface OptionProps {
    comboBoxId: string
    index: number
    label: string
    value: string
    onClick: (option: { value: string; label: string }) => void
    component?: React.ElementType
    dataTest?: string
    disabled?: boolean
    highlighted?: boolean
    listBoxRef?: React.RefObject<HTMLElement>
    onBecameVisible?: () => void
    [key: string]: unknown
}

export function Option({
    comboBoxId,
    index,
    label,
    value,
    onClick,
    component: StyleComponent = DefaultStyle,
    dataTest,
    disabled,
    highlighted,
    listBoxRef,
    onBecameVisible,
    ...rest
}: OptionProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (onBecameVisible && listBoxRef) {
            const scrollableContainer = listBoxRef.current?.parentNode as HTMLElement

            const intersectionOptions = {
                root: scrollableContainer,
                threshold: VISIBILE_INTERSECTION_RATIO,
            }

            const intersectionHandler = (entries: IntersectionObserverEntry[]) => {
                entries.forEach((result) => {
                    const { intersectionRatio } = result
                    if (intersectionRatio >= VISIBILE_INTERSECTION_RATIO) {
                        onBecameVisible()
                    }
                })
            }

            const observer = new IntersectionObserver(
                intersectionHandler,
                intersectionOptions
            )

            if (buttonRef.current) {
                observer.observe(buttonRef.current)
            }
            return () => observer.disconnect()
        }
    }, [onBecameVisible, listBoxRef])

    return (
        <button
            ref={buttonRef}
            id={`${comboBoxId}-${index}`}
            data-test={dataTest}
            disabled={disabled}
            role="option"
            aria-selected={highlighted || 'false'}
            aria-disabled={disabled}
            aria-label={label}
            onClick={() => {
                if (!disabled) {
                    onClick({ value, label })
                }
            }}
        >
            <StyleComponent
                value={value}
                label={label}
                index={index}
                disabled={disabled}
                highlighted={highlighted}
                {...rest}
            >
                {label}
            </StyleComponent>

            <style jsx>{`
                button {
                    display: block;
                    width: 100%;
                    padding: 0;
                    border: 0;
                    background: 0;
                    outline: 0;
                    text-align: start;
                }
            `}</style>
        </button>
    )
}
