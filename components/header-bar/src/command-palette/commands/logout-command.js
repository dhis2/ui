import { clearSensitiveCaches } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { IconLogOut16 } from '@dhis2/ui-icons'
import React from 'react'
import i18n from '../../locales/index.js'
import { COMMAND } from '../utils/constants.js'

const logoutAction = async (href) => {
    await clearSensitiveCaches()
    window.location.assign(href)
}

const logoutCommand = (href) => ({
    type: COMMAND,
    name: i18n.t('Logout'),
    icon: <IconLogOut16 color={colors.grey700} />,
    dataTest: 'headerbar-logout',
    description: i18n.t('Logout of the application'),
    action: () => logoutAction(href),
    url: href,
})

export default logoutCommand
