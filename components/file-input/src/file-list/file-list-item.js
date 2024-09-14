import { theme, colors, spacers } from '@dhis2/ui-constants'
import { IconAttachment16 } from '@dhis2/ui-icons'
import { CircularLoader } from '@dhis2-ui/loader'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const FileListItem = ({
    className,
    label,
    onRemove,
    removeText,
    loading,
    onCancel,
    cancelText,
    dataTest = 'dhis2-uicore-filelistitem',
}) => {
    const handleKeyDown = (event) => {
        if (!onRemove) {
            return
        }
        if (
            event.key === 'Enter' ||
            event.key === 'Backspace' ||
            event.key === 'Delete'
        ) {
            onRemove({}, event)
        }
    }

    return (
        <p className={cx('selected-file', className)} data-test={dataTest}>
            <span className="icon">
                {loading ? (
                    <CircularLoader extrasmall />
                ) : (
                    <IconAttachment16 color={colors.grey700} />
                )}
            </span>

            <span className="text">
                <span className="label">{label}</span>

                {loading && onCancel && cancelText && (
                    <span
                        className="action"
                        onClick={(event) => onCancel({}, event)}
                        data-test={`${dataTest}-cancel`}
                    >
                        {cancelText}
                    </span>
                )}

                {!loading && (
                    <span
                        className="action"
                        onClick={(event) => onRemove({}, event)}
                        data-test={`${dataTest}-remove`}
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                    >
                        {removeText}
                    </span>
                )}
            </span>

            <style jsx>{`
                p {
                    display: flex;
                    margin: 0;
                    padding-top: ${spacers.dp4};
                }
                span {
                    display: inline-block;
                }
                .icon {
                    margin-inline-end: 4px;
                    flex-grow: 0;
                    flex-shrink: 0;
                    display: flex;
                    padding-top: 1px;
                }
                .text {
                    flex-grow: 1;
                    flex-shrink: 1;
                }
                .label {
                    font-size: 14px;
                    color: ${colors.grey900};
                    word-break: break-all;
                }
                .label::after {
                    content: ' ';
                    display: inline-block;
                    width: 12px;
                }
                .action {
                    font-size: 12px;
                    line-height: 12px;
                    margin-top: 0;
                    text-decoration: underline;
                    cursor: pointer;
                    color: ${colors.grey700};
                }
                .action:hover {
                    color: ${colors.red700};
                }
                .action:active {
                    color: ${colors.red800};
                }
                .action:focus {
                    outline: 3px solid ${theme.focus};
                    outline-offset: 2px;
                }
            `}</style>
        </p>
    )
}

FileListItem.propTypes = {
    onRemove: PropTypes.func.isRequired,
    cancelText: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    label: PropTypes.string,
    loading: PropTypes.bool,
    removeText: PropTypes.string,
    onCancel: PropTypes.func,
}

export { FileListItem }
