import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const ArrowDown = () => (
    <div className="nodeArrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.7041 10.3329L12.1495 14.3318C12.0699 14.4213 11.9301 14.4213 11.8505 14.3318L8.29589 10.3329C8.18124 10.2039 8.2728 10 8.44537 10H15.5546C15.7272 10 15.8188 10.2039 15.7041 10.3329Z" />
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
    </div>
)

export const Toggle = ({ open, onOpen, onClose, dataTest }) => {
    const onClick = open ? onClose : onOpen

    return (
        <div
            className={cx({ open })}
            data-test={dataTest}
            onClick={(event) => onClick && onClick({ open: !open }, event)}
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
                    inset-inline-start: 12px;
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
                    fill: ${colors.grey900};
                }
                div :global(.nodeArrow) {
                    vertical-align: top;
                    transform: rotate(-90deg);
                    transition: transform 0.1s ease-out;
                }
                div :global(.nodeArrow:dir(rtl)) {
                    transform: rotate(90deg);
                }
                .open :global(.nodeArrow) {
                    transform: rotate(0);
                }
                .open :global(.nodeArrow:dir(rtl)) {
                    transform: rotate(0);
                }

                div:hover {
                    cursor: pointer;
                    border-radius: 3px;
                    background: ${colors.grey100};
                }
                div:hover:after {
                    background: #bcc8d4;
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
