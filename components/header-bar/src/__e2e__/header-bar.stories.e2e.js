import { HeaderBar as component } from '../index.js'

export default { title: 'HeaderBarTesting', component }
export { Default } from './stories/default.js'
export { ShowOnlineStatus } from './stories/show-online-status.js'
export { PWAEnabled } from './stories/pwa-enabled.js'
export { OnlineStatusMessagingWithPwaEnabled } from './stories/online-status-message.js'
export { MeWithAvatar } from './stories/me-with-avatar.js'
export { WithSpecialAppNameCharacters } from './stories/with-special-app-name-character.js'
export { CustomApplicationTitle } from './stories/custom-application-title.js'
export { UserHasAllAuthority } from './stories/user-has-all-authority.js'
export { UserHasWebInterpretationAndMessagingAuthority } from './stories/user-has-web-interpretation-and-messaging-authority.js'
export { UserHasWebInterpretationAuthority } from './stories/user-has-web-interpretation-authority.js'
export { UserHasWebMessagingAuthority } from './stories/user-has-web-messaging-authority.js'
export { UserHasNoAuthorities } from './stories/user-has-no-authorities.js'
export { ZeroUnreadInterpretations } from './stories/zero-unread-interpretations.js'
export { ZeroUnreadMessages } from './stories/zero-unread-messages.js'
export {
    WithUpdateAvailableNotification,
    WithUpdateAvailableNotificationNoAppName,
} from './stories/with-update-available-notification.js'
export {
    WithUnknownInstanceVersion,
    WithUnknownAppNameAndVersion,
    WithUnknownAppName,
    WithUnknownAppVersion,
} from './stories/with-debug-info-edge-cases.js'
