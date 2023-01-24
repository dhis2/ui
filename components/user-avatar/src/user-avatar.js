import { sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { ImageAvatar } from './image-avatar.js'
import { TextAvatar } from './text-avatar.js'

/**
An avatar is a visual icon that represents a user.

Use an avatar to give extra information when a user is mentioned or displayed in DHIS2. The avatar shows a user uploaded photograph or initials. The avatar is intended to give context and help to identify different users. An avatar is usually shown alongside the user name, but can be used alone to show a visual hint of a user.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/atoms/avatar.md)

```js
import { UserAvatar } from '@dhis2/ui'
```
*/

const UserAvatar = ({
    name,
    avatarId,
    className,
    dataTest,
    extralarge,
    extrasmall,
    large,
    medium,
    small,
}) => (
    <div
        className={cx(className, {
            extrasmall,
            small,
            medium,
            large,
            extralarge,
        })}
        data-test={dataTest}
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

UserAvatar.defaultProps = {
    dataTest: 'dhis2-uicore-useravatar',
}

UserAvatar.propTypes = {
    // Name could stop being required if we implement an
    // SVG fallback with a `IconUser24`.
    // This has been discussed and deferred
    name: PropTypes.string.isRequired,
    avatarId: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    extralarge: sharedPropTypes.sizePropType,
    extrasmall: sharedPropTypes.sizePropType,
    large: sharedPropTypes.sizePropType,
    medium: sharedPropTypes.sizePropType,
    small: sharedPropTypes.sizePropType,
}

export { UserAvatar }
