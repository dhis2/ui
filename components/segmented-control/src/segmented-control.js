import { colors, elevations, spacers, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import { PropTypes } from 'prop-types'
import React, { useMemo } from 'react'

/**
A segmented control is used to select between options that relate to another
area of content. All of the options in a segmented control should be closely related.

Do not use a segmented control as a standalone selection, it should always be
used as a selector for other content. For example, do not use a segmented
control in place of radio buttons when making a single, standalone choice.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/molecules/segmented-control.md)

```js
import { SegmentedControl } from '@dhis2/ui'
```
*/

const ARROW_KEY_DIRECTIONS = {
    ArrowRight: 1,
    ArrowDown: 1,
    ArrowLeft: -1,
    ArrowUp: -1,
}

export const SegmentedControl = ({
    options,
    selected,
    onChange,
    ariaLabel,
}) => {
    const segmentRefs = useMemo(
        () =>
            Object.fromEntries(
                options.map(({ value }) => [value, React.createRef()])
            ),
        [options]
    )

    if (!options.map(({ value }) => value).includes(selected)) {
        const message =
            `There is no option with the value: "${selected}". ` +
            'Make sure that the value passed to the selected ' +
            'prop matches the value of an existing option.'
        throw new Error(message)
    }

    const handleKeyDown = (event) => {
        const direction = ARROW_KEY_DIRECTIONS[event.key]

        if (!direction) {
            return
        }

        event.preventDefault()

        const currentIndex = options.findIndex(
            ({ value }) => segmentRefs[value].current === document.activeElement
        )

        if (currentIndex === -1) {
            return
        }

        const next =
            options[
                (currentIndex + direction + options.length) % options.length
            ]

        segmentRefs[next.value].current?.focus()

        if (!next.disabled) {
            onChange({ value: next.value }, event)
        }
    }

    return (
        <ul
            className="segmented-control"
            role="radiogroup"
            aria-label={ariaLabel}
            onKeyDown={handleKeyDown}
        >
            {options.map(({ label, value, disabled }) => {
                const isSelected = value === selected

                return (
                    <li key={`option-${value}`} role="presentation">
                        <button
                            type="button"
                            ref={segmentRefs[value]}
                            className={cx('segment', {
                                selected: isSelected,
                                disabled,
                            })}
                            onClick={
                                disabled
                                    ? undefined
                                    : (e) => onChange({ value }, e)
                            }
                            role="radio"
                            aria-checked={isSelected ? 'true' : 'false'}
                            aria-disabled={disabled ? 'true' : 'false'}
                            tabIndex={isSelected ? 0 : -1}
                        >
                            {label}
                        </button>
                    </li>
                )
            })}

            <style jsx>{`
                .segmented-control {
                    all: unset;
                    list-style: none;
                    display: inline-flex;
                    align-items: stretch;
                    background: ${colors.grey300};
                    border-radius: 5px;
                    padding: 2px;
                }

                .segment {
                    all: unset;
                    box-sizing: border-box;
                    cursor: pointer;
                    font-size: 14px;
                    text-align: center;
                    border-radius: 5px;
                    background: transparent;
                    color: ${colors.grey700};
                    min-width: 72px;
                    max-width: 320px;
                    height: 100%;
                    padding: 6px ${spacers.dp12};
                }

                .segment:focus {
                    outline: 3px solid ${theme.focus};
                    outline-offset: -3px;
                }
                /*focus-visible backwards compatibility for safari: https://css-tricks.com/platform-news-using-focus-visible-bbcs-new-typeface-declarative-shadow-doms-a11y-and-placeholders/*/
                .segment:focus:not(:focus-visible) {
                    outline: none;
                }

                .segment:not(.selected):not(.disabled):hover {
                    background: ${colors.grey400};
                    color: ${colors.grey900};
                }

                .segment.selected {
                    cursor: default;
                    box-shadow: ${elevations.e100};
                    background: ${colors.white};
                    color: ${colors.grey900};
                }

                .segment.disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            `}</style>
        </ul>
    )
}

SegmentedControl.propTypes = {
    /** Options to populate the segmented control */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    /** An option to select; should match the `value` property of the option to be selected */
    selected: PropTypes.string.isRequired,
    /** Called with the signature `({ value: string }, event)` */
    onChange: PropTypes.func.isRequired,
    /** Used to provide an accessible label to a segmented control without a visible label */
    ariaLabel: PropTypes.string,
}
