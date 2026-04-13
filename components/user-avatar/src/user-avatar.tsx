import cx from 'classnames'
import React from 'react'
import { ImageAvatar } from './image-avatar.tsx'
import { TextAvatar } from './text-avatar.tsx'

/**
An avatar is a visual icon that represents a user.

Use an avatar to give extra information when a user is mentioned or displayed in DHIS2. The avatar shows a user uploaded photograph or initials. The avatar is intended to give context and help to identify different users. An avatar is usually shown alongside the user name, but can be used alone to show a visual hint of a user.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/atoms/avatar.md)

```js
import { UserAvatar } from '@dhis2/ui'
```
*/

export interface UserAvatarProps {
    name: string
    ariaLabel?: string
    avatarId?: string
    className?: string
    dataTest?: string
    extralarge?: boolean
    extrasmall?: boolean
    large?: boolean
    medium?: boolean
    small?: boolean
}

const UserAvatar = ({
    name,
    avatarId,
    className,
    dataTest = 'dhis2-uicore-useravatar',
    extralarge,
    extrasmall,
    large,
    medium,
    small,
    ariaLabel,
}: UserAvatarProps) => (
    <div
        className={cx(className, {
            extrasmall,
            small,
            medium,
            large,
            extralarge,
        })}
        data-test={dataTest}
        aria-label={ariaLabel || name}
        aria-hidden={!name}
    >
        {avatarId ? (
            <ImageAvatar avatarId={avatarId} dataTest={`${dataTest}-image`} />
        ) : (
            <TextAvatar
                name={name}
                dataTest={`${dataTest}-text`}
                extrasmall={extrasmall}
                small={small}
                medium={medium}
                large={large}
                extralarge={extralarge}
            />
        )}

        <style jsx>{`
            div {
                display: inline-flex;
            }
            div.extrasmall {
                height: 16px;
                width: 16px;
            }
            div.small {
                height: 24px;
                width: 24px;
            }
            div,
            div.medium {
                height: 36px;
                width: 36px;
            }
            div.large {
                height: 48px;
                width: 48px;
            }
            div.extralarge {
                height: 72px;
                width: 72px;
            }
        `}</style>
    </div>
)

export { UserAvatar }
