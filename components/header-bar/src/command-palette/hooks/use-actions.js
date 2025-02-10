import { useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { IconApps16, IconRedo16, IconTerminalWindow16 } from '@dhis2/ui-icons'
import React, { useCallback, useMemo } from 'react'
import { joinPath } from '../../join-path.js'
import i18n from '../../locales/index.js'
import logoutCommand from '../commands/logout-command.js'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    ACTION,
    ALL_APPS_VIEW,
    ALL_COMMANDS_VIEW,
    ALL_SHORTCUTS_VIEW,
    MIN_APPS_NUM,
    MIN_COMMANDS_NUM,
    MIN_SHORTCUTS_NUM,
} from '../utils/constants.js'

export const useAvailableActions = ({ apps, shortcuts, commands }) => {
    const { baseUrl } = useConfig()
    const { setCurrentView, setHighlightedIndex } = useCommandPaletteContext()

    const logoutURL = joinPath(
        baseUrl,
        'dhis-web-commons-security/logout.action'
    )

    const switchViewAction = useCallback(
        (type) => {
            setCurrentView(type)
            setHighlightedIndex(0)
        },
        [setCurrentView, setHighlightedIndex]
    )

    const actions = useMemo(() => {
        const actionsArray = []
        if (apps?.length > MIN_APPS_NUM) {
            actionsArray.push({
                type: ACTION,
                title: i18n.t('Browse apps'),
                icon: <IconApps16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-apps',
                action: () => switchViewAction(ALL_APPS_VIEW),
            })
        }
        if (commands?.length > MIN_COMMANDS_NUM) {
            actionsArray.push({
                type: ACTION,
                title: i18n.t('Browse commands'),
                icon: <IconTerminalWindow16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-commands',
                action: () => switchViewAction(ALL_COMMANDS_VIEW),
            })
        }
        if (shortcuts?.length > MIN_SHORTCUTS_NUM) {
            actionsArray.push({
                type: ACTION,
                title: i18n.t('Browse shortcuts'),
                icon: <IconRedo16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-shortcuts',
                action: () => switchViewAction(ALL_SHORTCUTS_VIEW),
            })
        }
        // default logout action
        actionsArray.push(logoutCommand(logoutURL))
        return actionsArray
    }, [apps, shortcuts, commands, logoutURL, switchViewAction])
    return actions
}
