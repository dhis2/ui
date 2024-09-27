import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { useContext } from 'react'
import { Context } from './context.js'

export function Option({ value, label, index, selected, onClick, disabled }) {
    const { comboBoxId } = useContext(Context)

    return (
        <div
            aria-selected={selected?.toString() || ''}
            role="option"
            id={`${comboBoxId}-${index}`}
            className={cx('option', {
                disabled,
                active: selected,
            })}
            onClick={() => onClick(value)}
        >
            {label}

            <style jsx>{`
                div {
                    cursor: pointer;
                    font-size: 14px;
                    text-decoration: none;
                    color: ${colors.grey900};
                    padding-block: ${spacers.dp8};
                    padding-inline: ${spacers.dp12};
                }

                div:hover {
                    background-color: ${colors.grey200};
                }

                div:active,
                div.active {
                    background-color: ${colors.teal700};
                    color: ${colors.white};
                    cursor: auto;
                }

                div.disabled {
                    color: ${colors.grey500};
                    cursor: not-allowed;
                    user-select: none;
                }

                div.disabled:hover {
                    background-color: initial;
                }
            `}</style>
        </div>
    )
}
