import { colors, elevations, spacers, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import { PropTypes } from 'prop-types'
import React from 'react'

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

export const SegmentedControl = ({ options, selected, onChange }) => {
    if (!options.map(({ value }) => value).includes(selected)) {
        const message =
            `There is no option with the value: "${selected}". ` +
            'Make sure that the value passed to the selected ' +
            'prop matches the value of an existing option.'
        throw new Error(message)
    }

    return (
        <div className="segmented-control">
            {options.map(({ label, value, disabled }) => (
                <button
                    key={label}
                    type="button"
                    className={cx('segment', {
                        selected: value === selected,
                        disabled,
                    })}
                    onClick={(e) => onChange({ value }, e)}
                    disabled={disabled}
                >
                    {label}
                </button>
            ))}

            <style jsx>{`
                .segmented-control {
                    display: inline-flex;
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
        </div>
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
}
