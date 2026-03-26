import { mutuallyExclusive } from '@dhis2/prop-types'
import { spacers, colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { NoticeBoxContent } from './notice-box-content.js'
import { NoticeBoxIcon } from './notice-box-icon.js'

export const NoticeBox = ({
    className,
    children,
    dataTest = 'dhis2-uicore-noticebox',
    title,
    warning,
    error,
    valid,
    dense = false,
    icon,
}) => {
    const classnames = cx(className, 'root', { warning, error, valid, dense })

    return (
        <div className={classnames} data-test={dataTest}>
            <NoticeBoxIcon
                error={error}
                warning={warning}
                valid={valid}
                dense={dense}
                icon={icon}
                dataTest={`${dataTest}-icon`}
            />
            <div>
                <NoticeBoxContent
                    title={title}
                    dense={dense}
                    dataTest={`${dataTest}-content`}
                >
                    {children}
                </NoticeBoxContent>
            </div>

            <style jsx>{`
                .root {
                    background: ${colors.blue050};
                    border: 1px solid ${colors.blue200};
                    border-radius: 3px;
                    display: flex;
                    padding-block: ${spacers.dp12};
                    padding-inline: ${spacers.dp16};
                }

                .root.dense {
                    padding-block: ${spacers.dp8};
                    padding-inline: ${spacers.dp8};
                }

                .root.warning {
                    background: ${colors.yellow050};
                    border: 1px solid ${colors.yellow200};
                }

                .root.error {
                    background: ${colors.red050};
                    border: 2px solid ${colors.red500};
                }

                .root.valid {
                    background: ${colors.green050};
                    border: 1px solid ${colors.green200};
                }
            `}</style>
        </div>
    )
}

NoticeBox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Uses 16px icons and tighter padding and internal spacing */
    dense: PropTypes.bool,
    /** Applies 'error' message styles. Mutually exclusive with the `valid` and `warning` props */
    error: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
    /** Replaces the default status icon; `error`, `warning`, and `valid` still set box colors */
    icon: PropTypes.node,
    title: PropTypes.string,
    /** Applies 'valid' message styles. Mutually exclusive with the `error` and `warning` props */
    valid: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
    /** Applies 'warning' message styles. Mutually exclusive with the `error` and `valid` props */
    warning: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
}
