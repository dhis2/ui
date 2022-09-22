import { colors, spacers, theme } from '@dhis2/ui-constants'
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
                    /* create a stacking context for the children */
                    position: relative;
                    z-index: 0;
                }

                .segment {
                    all: unset;
                    box-sizing: border-box;
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    font-size: 14px;
                    text-align: center;
                    border: 1px solid ${colors.grey400};
                    border-right-width: 0;
                    background: ${colors.grey050};
                    color: ${colors.grey600};
                    min-width: 72px;
                    max-width: 320px;
                    padding: ${spacers.dp8} ${spacers.dp16};
                }

                .segment:focus {
                    outline: 3px solid ${theme.focus};
                    outline-offset: -3px;
                }
                /*focus-visible backwards compatibility for safari: https://css-tricks.com/platform-news-using-focus-visible-bbcs-new-typeface-declarative-shadow-doms-a11y-and-placeholders/*/
                .segment:focus:not(:focus-visible) {
                    outline: none;
                }

                .segment:not(.selected):hover,
                .segment:not(.selected):focus {
                    background: ${colors.grey100};
                    color: ${colors.grey700};
                }

                .segment:first-of-type {
                    border-radius: 3px 0 0 3px;
                }

                .segment:last-of-type {
                    border-right-width: 1px;
                    border-radius: 0 3px 3px 0;
                }

                .segment.selected {
                    cursor: default;
                    font-weight: 600;
                    border: 1px solid ${colors.teal800};
                    background: ${colors.teal600};
                    color: white;
                }

                .segment.selected:not(:last-of-type) {
                    z-index: 1;
                    margin-right: -1px;
                }

                .segment.selected:focus {
                    background: ${colors.teal700};
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
