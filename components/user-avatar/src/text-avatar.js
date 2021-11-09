import { sharedPropTypes, colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const getInitials = (name) => {
    const nameParts = name.split(' ')

    let initials = nameParts.shift().charAt(0)

    if (nameParts.length) {
        initials += nameParts.pop().charAt(0)
    }

    return initials
}

export const TextAvatar = ({
    name,
    dataTest,
    extralarge,
    extrasmall,
    large,
    medium,
    small,
}) => (
    <div className="text-avatar" data-test={dataTest}>
        <div
            className={cx('text-avatar-initials', {
                extrasmall,
                small,
                medium,
                large,
                extralarge,
            })}
        >
            {getInitials(name)}
        </div>

        <style jsx>{`
            .text-avatar {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                overflow: hidden;
                border-radius: 50%;
                background-color: ${colors.grey800}90;
                color: ${colors.grey050};
                cursor: pointer;
            }

            .text-avatar-initials {
                font-size: 80%;
                font-weight: 500;
                letter-spacing: 1px;
                text-align: center;
                text-transform: uppercase;
            }

            .text-avatar-initials.extrasmall {
                font-size: 7px;
            }
            .text-avatar-initials.small {
                font-size: 9px;
            }
            .text-avatar-initials.medium {
                font-size: 14px;
            }
            .text-avatar-initials.large {
                font-size: 18px;
            }
            .text-avatar-initials.extralarge {
                font-size: 28px;
            }
        `}</style>
    </div>
)

TextAvatar.defaultProps = {
    dataTest: 'dhis2-uicore-textavatar',
}

TextAvatar.propTypes = {
    name: PropTypes.string.isRequired,
    dataTest: PropTypes.string,
    extralarge: sharedPropTypes.sizePropType,
    extrasmall: sharedPropTypes.sizePropType,
    large: sharedPropTypes.sizePropType,
    medium: sharedPropTypes.sizePropType,
    small: sharedPropTypes.sizePropType,
}
