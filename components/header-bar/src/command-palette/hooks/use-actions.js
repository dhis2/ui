import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import {
    IconApps16,
    IconLogOut16,
    IconRedo16,
    IconTerminalWindow16,
} from '@dhis2/ui-icons'
import React, { useCallback, useMemo } from 'react'
import { joinPath } from '../../join-path.js'
import i18n from '../../locales/index.js'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    ALL_APPS_VIEW,
    ALL_COMMANDS_VIEW,
    ALL_SHORTCUTS_VIEW,
    APPS,
    COMMANDS,
    LOGOUT,
    MIN_APPS_NUM,
    SHORTCUTS,
} from '../utils/constants.js'

export const useAvailableActions = ({ apps, shortcuts, commands }) => {
    const { baseUrl } = useConfig()
    const logoutURL = joinPath(
        baseUrl,
        'dhis-web-commons-security/logout.action'
    )
    const { setCurrentView, setHighlightedIndex } = useCommandPaletteContext()

    const switchViewAction = useCallback(
        (type) => {
            setCurrentView(type)
            setHighlightedIndex(0)
        },
        [setCurrentView, setHighlightedIndex]
    )

    const logoutAction = useCallback(async () => {
        await clearSensitiveCaches()
        window.location.assign(logoutURL)
    }, [logoutURL])

    const actions = useMemo(() => {
        const actionsArray = []
        if (apps?.length > MIN_APPS_NUM) {
            actionsArray.push({
                type: APPS,
                title: i18n.t('Browse apps'),
                icon: <IconApps16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-apps',
                action: () => switchViewAction(ALL_APPS_VIEW),
            })
        }
        if (commands?.length > 0) {
            actionsArray.push({
                type: COMMANDS,
                title: i18n.t('Browse commands'),
                icon: <IconTerminalWindow16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-commands',
                action: () => switchViewAction(ALL_COMMANDS_VIEW),
            })
        }
        if (shortcuts?.length > 0) {
            actionsArray.push({
                type: SHORTCUTS,
                title: i18n.t('Browse shortcuts'),
                icon: <IconRedo16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-shortcuts',
                action: () => switchViewAction(ALL_SHORTCUTS_VIEW),
            })
        }
        // default logout action
        actionsArray.push({
            type: LOGOUT,
            title: i18n.t('Logout'),
            icon: <IconLogOut16 color={colors.grey700} />,
            dataTest: 'headerbar-logout',
            action: logoutAction,
            href: logoutURL,
        })
        return actionsArray
    }, [apps, shortcuts, commands, logoutAction, logoutURL, switchViewAction])
    return actions
}
