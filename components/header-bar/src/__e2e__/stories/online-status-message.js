import { Button } from '@dhis2-ui/button'
import { useOnlineStatusMessage } from '@dhis2/app-runtime'
import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    providerConfig,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const OnlineStatusMessageUpdate = () => {
    const {
        onlineStatusMessage,
        setOnlineStatusMessage,
    } = useOnlineStatusMessage()

    const buttonLabel = !onlineStatusMessage
        ? 'display online status message'
        : 'remove online status message'

    return (
        <Button
            onClick={() => {
                setOnlineStatusMessage(
                    !onlineStatusMessage ? '8 offline events' : ''
                )
            }}
        >
            {buttonLabel}
        </Button>
    )
}

const OnlineStatusMessaging = () => (
    <>
        <HeaderBar appName="Example!" />
        <OnlineStatusMessageUpdate />
    </>
)

export const OnlineStatusMessagingWithPwaEnabled = () => (
    <OnlineStatusMessaging />
)

OnlineStatusMessagingWithPwaEnabled.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider(
        {
            ...providerConfig,
            pwaEnabled: true,
        },
        {
            pwaEnabled: true,
            startRecording: async () => undefined,
            getCachedSections: async () => [],
            removeSection: async () => false,
        }
    ),
]

export const OnlineStatusMessagingWithOfflineInterfacePwaDisabled = () => (
    <OnlineStatusMessaging />
)

OnlineStatusMessagingWithOfflineInterfacePwaDisabled.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider(
        {
            ...providerConfig,
            pwaEnabled: true,
        },
        {
            pwaEnabled: false,
            startRecording: async () => undefined,
            getCachedSections: async () => [],
            removeSection: async () => false,
        }
    ),
]
