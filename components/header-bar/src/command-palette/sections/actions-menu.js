import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import {
    IconApps16,
    IconLogOut16,
    IconRedo16,
    IconTerminalWindow16,
} from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { joinPath } from '../../join-path.js'
import i18n from '../../locales/index.js'
import Heading from './heading.js'
import ListItem from './list-item.js'

const ActionsMenu = ({
    showAppsList,
    showCommandsList,
    showShortcutsList,
    setCurrentView,
}) => {
    const { baseUrl } = useConfig()
    return (
        <div
            role="menu"
            className="actions-menu"
            data-test="headerbar-actions-menu"
        >
            <Heading heading={'Actions'} />
            {showAppsList ? (
                <ListItem
                    title={i18n.t('Browse apps')}
                    icon={<IconApps16 color={colors.grey700} />}
                    onClickHandler={() => setCurrentView('apps')}
                    dataTest="headerbar-browse-apps"
                />
            ) : null}
            {showCommandsList ? (
                <ListItem
                    title={i18n.t('Browse commands')}
                    icon={<IconTerminalWindow16 color={colors.grey700} />}
                    onClickHandler={() => setCurrentView('commands')}
                    dataTest="headerbar-browse-commands"
                />
            ) : null}
            {showShortcutsList ? (
                <ListItem
                    title={i18n.t('Browse shortcuts')}
                    icon={<IconRedo16 color={colors.grey700} />}
                    onClickHandler={() => setCurrentView('shortcuts')}
                    dataTest="headerbar-browse-shortcuts"
                />
            ) : null}
            <ListItem
                title={i18n.t('Logout')}
                icon={<IconLogOut16 color={colors.grey700} />}
                onClickHandler={async () => {
                    await clearSensitiveCaches()
                    window.location.assign(
                        joinPath(
                            baseUrl,
                            'dhis-web-commons-security/logout.action'
                        )
                    )
                }}
                href={joinPath(
                    baseUrl,
                    'dhis-web-commons-security/logout.action'
                )}
                dataTest="headerbar-logout"
            />
        </div>
    )
}

ActionsMenu.propTypes = {
    setCurrentView: PropTypes.func,
    showAppsList: PropTypes.bool,
    showCommandsList: PropTypes.bool,
    showShortcutsList: PropTypes.bool,
}

export default ActionsMenu
