import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { IconLogOut16 } from '@dhis2/ui-icons'
import React from 'react'
import { joinPath } from '../../join-path.js'

const useLogout = () => {
    const { baseUrl } = useConfig()

    const href = joinPath(baseUrl, 'dhis-web-commons-security/logout.action')
    const logoutAction = async () => {
        await clearSensitiveCaches()
        window.location.assign(href)
    }

    return {
        logout: {
            name: 'Logout',
            icon: <IconLogOut16 color={colors.grey700} />,
            description: 'Logout of the application',
            action: logoutAction,
            url: href,
        },
        logoutURL: href,
        logoutAction,
    }
}

export default useLogout
