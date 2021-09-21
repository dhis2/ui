import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const ArrowDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path d="M14 20l10 10 10-10z" />
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

export const Toggle = ({ open, onOpen, onClose, dataTest }) => {
    const onClick = open ? onClose : onOpen

    return (
        <div
            className={cx({ open })}
            data-test={dataTest}
            onClick={event => onClick && onClick({ open: !open }, event)}
        >
            <span>
                <ArrowDown />
            </span>

            <style jsx>{`
                div {
                    width: 24px;
                    position: relative;
                    flex-shrink: 0;
                }
                div:after {
                    background: ${colors.grey400};
                    height: calc(100% - 24px);
                    left: 12px;
                    position: absolute;
                    top: 15px;
                    width: 1px;
                    z-index: 1;
                }
                .open:after {
                    content: '';
                }
                span {
                    display: block;
                    position: relative;
                    z-index: 2;
                    fill: ${colors.grey700};
                }
                div :global(svg) {
                    vertical-align: top;
                    transform: rotate(-90deg);
                }
                .open :global(svg) {
                    transform: rotate(0);
                }
            `}</style>
        </div>
    )
}

Toggle.propTypes = {
    dataTest: PropTypes.string.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
}
