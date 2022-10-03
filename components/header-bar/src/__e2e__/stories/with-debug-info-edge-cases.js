import { CustomDataProvider } from "@dhis2/app-runtime"
import { HeaderBar } from "../../header-bar"
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
    providerConfig,
} from './common.js'

export const WithUnknownInstanceVersion = () => (
    <HeaderBar appName="Data Visualizer" updateAvailable={true} />
)

WithUnknownInstanceVersion.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        systemInfo: {
            ...providerConfig.systemInfo,
            version: undefined,
        },
    }),
]

export const WithUnknownAppVersion = () => (
    <HeaderBar appName="Data Visualizer" updateAvailable={true} />
)

WithUnknownAppVersion.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        appVersion: undefined,
    }),
]

export const WithUnknownAppNameAndVersion = () => (
    <HeaderBar appName="Data Visualizer" updateAvailable={true} />
)

WithUnknownAppNameAndVersion.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        appName: undefined,
        appVersion: undefined,
    }),
]