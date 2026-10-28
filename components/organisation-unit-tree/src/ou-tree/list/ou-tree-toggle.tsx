import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export type OuTreeToggleProps =
    | { leaf: true; open?: never; onToggle?: never; dataTest?: string }
    | { leaf?: false; open: boolean; onToggle: () => void; dataTest?: string }

// Ported from components/node/src/toggle.js for the flat list. A leaf has
// no toggle and gets the toggle's space, so labels line up.
export const OuTreeToggle = ({
    leaf = false,
    open = false,
    onToggle,
    dataTest,
}: OuTreeToggleProps) => (
    <div
        className={cx('toggle', { open })}
        data-test={dataTest}
        aria-hidden={leaf || undefined}
        onClick={onToggle}
    >
        {leaf ? null : (
            <span>
                <svg
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M15.7041 10.3329L12.1495 14.3318C12.0699 14.4213 11.9301 14.4213 11.8505 14.3318L8.29589 10.3329C8.18124 10.2039 8.2728 10 8.44537 10H15.5546C15.7272 10 15.8188 10.2039 15.7041 10.3329Z" />
                </svg>
            </span>
        )}
        <style jsx>{`
            .toggle {
                width: 24px;
                position: relative;
                flex-shrink: 0;
                align-self: stretch;
            }
            .toggle::after {
                background: ${colors.grey400};
                bottom: 0;
                inset-inline-start: 11px;
                position: absolute;
                top: 15px;
                width: 1px;
                z-index: 1;
            }
            .open::after {
                content: '';
            }
            span {
                display: block;
                position: relative;
                z-index: 2;
                width: 24px;
                height: 24px;
                fill: ${colors.grey900};
            }
            span:hover {
                cursor: pointer;
                border-radius: 3px;
                background: ${colors.grey100};
            }
            .arrow {
                display: block;
                fill: inherit;
                height: 24px;
                width: 24px;
                pointer-events: none;
                transform: rotate(-90deg);
                transition: transform 0.1s ease-out;
            }
            .arrow:dir(rtl) {
                transform: rotate(90deg);
            }
            .open .arrow,
            .open .arrow:dir(rtl) {
                transform: rotate(0);
            }
        `}</style>
    </div>
)
