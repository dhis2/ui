import propTypes from '@dhis2/prop-types'
import { theme, colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

function Loading({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="22 22 44 44"
            className={className}
        >
            <circle
                className="circle"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
            <style jsx>{`
                svg {
                    fill: ${theme.primary600};
                    color: ${theme.primary600};
                    width: 24px;
                    height: 24px;
                    animation: anim-rotate 1.4s linear infinite;
                }

                .circle {
                    stroke: currentColor;
                    stroke-dasharray: 80px, 200px;
                    stroke-dashoffset: 0;
                    animation: anim-dash 1.4s ease-in-out infinite;
                }

                @keyframes anim-rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes anim-dash {
                    0% {
                        stroke-dasharray: 1px, 200px;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -15px;
                    }
                    100% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -120px;
                    }
                }
            `}</style>
        </svg>
    )
}

Loading.propTypes = {
    className: propTypes.string,
}

function AttachFile({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M33 12v23c0 4.42-3.58 8-8 8s-8-3.58-8-8V10c0-2.76 2.24-5 5-5s5 2.24 5 5v21c0 1.1-.89 2-2 2-1.11 0-2-.9-2-2V12h-3v19c0 2.76 2.24 5 5 5s5-2.24 5-5V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v25c0 6.08 4.93 11 11 11s11-4.92 11-11V12h-3z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}

AttachFile.propTypes = {
    className: propTypes.string,
}
/**
 * @module
 * @param {FileListItem.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileListItem } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/fileinput.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/fileinputfield--file-list|Storybook}
 */
const FileListItem = ({
    className,
    label,
    onRemove,
    removeText,
    loading,
    onCancel,
    cancelText,
    dataTest,
}) => (
    <p className={cx('selected-file', className)} data-test={dataTest}>
        <span className="icon">{loading ? <Loading /> : <AttachFile />}</span>

        <span className="text">
            <span className="label">{label}</span>

            {loading && onCancel && cancelText && (
                <span
                    className="action"
                    onClick={event => onCancel({}, event)}
                    data-test={`${dataTest}-cancel`}
                >
                    {cancelText}
                </span>
            )}

            {!loading && (
                <span
                    className="action"
                    onClick={event => onRemove({}, event)}
                    data-test={`${dataTest}-remove`}
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
                line-height: 18px;
            }
            .icon > :global(svg) {
                width: 12px;
                height: 12px;
                line-height: 12px;
                margin-right: 4px;
                flex-grow: 0;
                flex-shrink: 0;
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
        `}</style>
    </p>
)

FileListItem.defaultProps = {
    dataTest: 'dhis2-uicore-filelistitem',
}

FileListItem.propTypes = {
    onRemove: propTypes.func.isRequired,
    cancelText: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    label: propTypes.string,
    loading: propTypes.bool,
    removeText: propTypes.string,
    onCancel: propTypes.func,
}

export { FileListItem }
