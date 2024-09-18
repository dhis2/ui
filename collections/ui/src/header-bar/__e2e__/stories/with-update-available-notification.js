import React, { useState } from 'react'
import { HeaderBar } from '../../header-bar.js'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
    providerConfig,
} from './common.js'

export const WithUpdateAvailableNotification = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <HeaderBar
                updateAvailable={true}
                onApplyAvailableUpdate={() => setModalOpen(true)}
            />
            {modalOpen && <div>The callback was successful</div>}
        </>
    )
}
WithUpdateAvailableNotification.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        appName: 'Data Visualizer',
    }),
]

export const WithUpdateAvailableNotificationNoAppName = () => (
    <HeaderBar updateAvailable={true} />
)

WithUpdateAvailableNotificationNoAppName.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        appName: undefined,
    }),
]
