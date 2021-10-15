import React from 'react'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './__e2e__/common.js'
import { HeaderBar } from './header-bar.js'

export default {
    title: 'HeaderBarTesting',
    component: HeaderBar,
    decorators: [
        createDecoratorCustomDataProviderHeaderBar(),
        createDecoratorProvider(),
    ],
}

export const Default = () => <HeaderBar appName="Example!" />

export { ShowOnlineStatus } from './__e2e__/show-online-status.js'
export { PWAEnabled } from './__e2e__/pwa-enabled.js'
export { WithLastOnline } from './__e2e__/with-last-online.js'
export { MeWithAvatar } from './__e2e__/me-with-avatar.js'
export { WithSpecialAppNameCharacters } from './__e2e__/with-special-app-name-character.js'
export { CustomApplicationTitle } from './__e2e__/custom-application-title.js'
export { UserHasAllAuthority } from './__e2e__/user-has-all-authority.js'
export { UserHasWebInterpretationAndMessagingAuthority } from './__e2e__/user-has-web-interpretation-and-messaging-authority.js'
export { UserHasWebInterpretationAuthority } from './__e2e__/user-has-web-interpretation-authority.js'
export { UserHasWebMessagingAuthority } from './__e2e__/user-has-web-messaging-authority.js'
export { UserHasNoAuthorities } from './__e2e__/user-has-no-authorities.js'
export { ZeroUnreadInterpretations } from './__e2e__/zero-unread-interpretations.js'
export { ZeroUnreadMessages } from './__e2e__/zero-unread-messages.js'
