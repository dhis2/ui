import { colors, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const CircularLoader = ({
    small,
    large,
    extrasmall,
    invert,
    className,
    dataTest,
}) => (
    <div
        role="progressbar"
        className={cx(className, {
            small,
            large,
            extrasmall,
            invert,
        })}
        data-test={dataTest}
    >
        <style jsx>{`
            div {
                width: 48px;
                height: 48px;
                border: 6px solid rgba(110, 122, 138, 0.15);
                border-bottom-color: ${colors.blue600};
                border-radius: 50%;
                animation: rotation 1s linear infinite;
            }
            @keyframes rotation {
                0% {
                    transform: rotate(0);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
            .small {
                width: 24px;
                height: 24px;
                border-width: 4px;
            }
            .large {
                width: 72px;
                height: 72px;
                border-width: 8px;
            }
            .extrasmall {
                width: 16px;
                height: 16px;
                border-width: 2px;
            }
            .invert {
                border-color: rgba(33, 41, 52, 0.5);
                border-bottom-color: ${colors.white};
            }
        `}</style>
    </div>
)

CircularLoader.defaultProps = {
    dataTest: 'dhis2-uicore-circularloader',
}

CircularLoader.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
    extrasmall: sharedPropTypes.sizePropType,
    invert: PropTypes.bool,
    large: sharedPropTypes.sizePropType,
    small: sharedPropTypes.sizePropType,
}

export { CircularLoader }
