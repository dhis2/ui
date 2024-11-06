import { colors } from '@dhis2/ui-constants'
import {
    IconApps16,
    IconLogOut16,
    IconRedo16,
    IconTerminalWindow16,
} from '@dhis2/ui-icons'
import React, { useMemo } from 'react'
import i18n from '../../locales/index.js'
import { MIN_APPS_NUM } from './use-navigation.js'

export const useAvailableActions = ({ apps, shortcuts, commands }) => {
    const actions = useMemo(() => {
        const actionsArray = []
        if (apps?.length > MIN_APPS_NUM) {
            actionsArray.push({
                type: 'apps',
                title: i18n.t('Browse apps'),
                icon: <IconApps16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-apps',
            })
        }
        if (commands?.length > 0) {
            actionsArray.push({
                type: 'commands',
                title: i18n.t('Browse commands'),
                icon: <IconTerminalWindow16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-commands',
            })
        }
        if (shortcuts?.length > 0) {
            actionsArray.push({
                type: 'shortcuts',
                title: i18n.t('Browse shortcuts'),
                icon: <IconRedo16 color={colors.grey700} />,
                dataTest: 'headerbar-browse-shortcuts',
            })
        }
        // default logout action
        actionsArray.push({
            type: 'logout',
            title: i18n.t('Logout'),
            icon: <IconLogOut16 color={colors.grey700} />,
            dataTest: 'headerbar-logout',
        })
        return actionsArray
    }, [apps, shortcuts, commands])
    return actions
}
