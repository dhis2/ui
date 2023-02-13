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
    dataTest,
    title,
    warning,
    error,
    valid,
}) => {
    const classnames = cx(className, 'root', { warning, error, valid })

    return (
        <div className={classnames} data-test={dataTest}>
            <NoticeBoxIcon
                error={error}
                warning={warning}
                valid={valid}
                dataTest={`${dataTest}-icon`}
            />
            <div>
                <NoticeBoxContent
                    title={title}
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
                    padding: ${spacers.dp12} ${spacers.dp16};
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

NoticeBox.defaultProps = {
    dataTest: 'dhis2-uicore-noticebox',
}

NoticeBox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Applies 'error' message styles. Mutually exclusive with the `error` and `warning` prop */
    error: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
    /** Applies 'error' message styles. Mutually exclusive with the `error` and `warning` prop */
    title: PropTypes.string,
    valid: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
    /** Applies 'error' message styles. Mutually exclusive with the `error` and `warning` prop */
    warning: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
}
