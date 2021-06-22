import { mutuallyExclusive } from '@dhis2/prop-types'
import { spacers, colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { NoticeBoxIcon } from './notice-box-icon.js'
import { NoticeBoxMessage } from './notice-box-message.js'
import { NoticeBoxTitle } from './notice-box-title.js'

export const NoticeBox = ({
    className,
    children,
    dataTest,
    title,
    warning,
    error,
}) => {
    const classnames = cx(className, 'root', { warning, error })

    return (
        <div className={classnames} data-test={dataTest}>
            <NoticeBoxIcon
                error={error}
                warning={warning}
                dataTest={`${dataTest}-icon`}
            />
            <div>
                <NoticeBoxTitle title={title} dataTest={`${dataTest}-title`} />
                <NoticeBoxMessage dataTest={`${dataTest}-message`}>
                    {children}
                </NoticeBoxMessage>
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
    /** Applies 'error' message styles. Mutually exclusive with the `warning` prop */
    error: mutuallyExclusive(['error', 'warning'], PropTypes.bool),
    title: PropTypes.string,
    /** Applies 'warning' message styles. Mutually exclusive with the `error` prop */
    warning: mutuallyExclusive(['error', 'warning'], PropTypes.bool),
}
