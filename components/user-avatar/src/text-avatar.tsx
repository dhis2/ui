import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export const getInitials = (name: string): string => {
    const nameParts = name.split(' ')

    let initials = nameParts.shift()!.charAt(0)

    if (nameParts.length) {
        initials += nameParts.pop()!.charAt(0)
    }

    return initials
}

export interface TextAvatarProps {
    name: string
    dataTest?: string
    extralarge?: boolean
    extrasmall?: boolean
    large?: boolean
    medium?: boolean
    small?: boolean
}

export const TextAvatar = ({
    name,
    dataTest = 'dhis2-uicore-textavatar',
    extralarge,
    extrasmall,
    large,
    medium,
    small,
}: TextAvatarProps) => (
    <div className="text-avatar" data-test={dataTest} aria-label={name}>
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
                background-color: ${colors.grey800}cc;
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
                font-size: 22px;
            }

            .text-avatar-initials.extralarge {
                font-size: 32px;
            }
        `}</style>
    </div>
)
