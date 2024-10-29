import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { spacers, colors } from '@dhis2/ui-constants'
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
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { GRID_ITEMS_LENGTH } from '../hooks/use-navigation.js'
import AppItem from '../sections/app-item.js'
import Heading from '../sections/heading.js'
import ListItem from '../sections/list-item.js'
import ListView from './list-view.js'

const MIN_APPS_NUM = GRID_ITEMS_LENGTH

function HomeView({ apps, commands, shortcuts }) {
    const { baseUrl } = useConfig()
    const {
        filter,
        setCurrentView,
        highlightedIndex,
        setHighlightedIndex,
        activeSection,
        setActiveSection,
    } = useCommandPaletteContext()
    const filteredItems = apps.concat(commands, shortcuts)
    const topApps = apps?.slice(0, 8)
    return (
        <>
            {filter.length > 0 ? (
                <ListView filteredItems={filteredItems} />
            ) : (
                <>
                    {apps.length > 0 && (
                        <>
                            <Heading heading={i18n.t('Top apps')} />
                            <div
                                data-test="headerbar-top-apps-list"
                                className="headerbar-top-apps"
                            >
                                {topApps.map(
                                    (
                                        {
                                            displayName,
                                            name,
                                            defaultAction,
                                            icon,
                                        },
                                        idx
                                    ) => (
                                        <AppItem
                                            key={`app-${name}-${idx}`}
                                            name={displayName || name}
                                            path={defaultAction}
                                            img={icon}
                                            highlighted={
                                                activeSection === 'grid' &&
                                                highlightedIndex === idx
                                            }
                                            handleMouseEnter={() => {
                                                setActiveSection('grid')
                                                setHighlightedIndex(idx)
                                            }}
                                        />
                                    )
                                )}
                                <style jsx>{`
                                    .headerbar-top-apps {
                                        display: grid;
                                        grid-template-columns: repeat(4, 1fr);
                                        padding: 0 ${spacers.dp4};
                                    }
                                `}</style>
                            </div>
                        </>
                    )}
                    {/* actions menu */}
                    <Heading heading={'Actions'} />
                    <div
                        role="menu"
                        className="actions-menu"
                        data-test="headerbar-actions-menu"
                    >
                        {apps?.length > MIN_APPS_NUM ? (
                            <ListItem
                                title={i18n.t('Browse apps')}
                                icon={<IconApps16 color={colors.grey700} />}
                                onClickHandler={() => {
                                    setCurrentView('apps')
                                    setHighlightedIndex(0)
                                }}
                                dataTest="headerbar-browse-apps"
                                highlighted={
                                    activeSection === 'actions' &&
                                    highlightedIndex === 0
                                }
                                handleMouseEnter={() => {
                                    setActiveSection('actions')
                                    setHighlightedIndex(0)
                                }}
                            />
                        ) : null}
                        {commands?.length > 0 ? (
                            <ListItem
                                title={i18n.t('Browse commands')}
                                icon={
                                    <IconTerminalWindow16
                                        color={colors.grey700}
                                    />
                                }
                                onClickHandler={() => {
                                    setCurrentView('commands')
                                    setHighlightedIndex(0)
                                }}
                                dataTest="headerbar-browse-commands"
                                highlighted={
                                    activeSection === 'actions' &&
                                    highlightedIndex === 1
                                }
                                handleMouseEnter={() => {
                                    setActiveSection('actions')
                                    setHighlightedIndex(1)
                                }}
                            />
                        ) : null}
                        {shortcuts?.length > 0 ? (
                            <ListItem
                                title={i18n.t('Browse shortcuts')}
                                icon={<IconRedo16 color={colors.grey700} />}
                                onClickHandler={() => {
                                    setCurrentView('shortcuts')
                                    setHighlightedIndex(0)
                                }}
                                dataTest="headerbar-browse-shortcuts"
                                highlighted={
                                    activeSection === 'actions' &&
                                    highlightedIndex === 2
                                }
                                handleMouseEnter={() => {
                                    setActiveSection('actions')
                                    setHighlightedIndex(2)
                                }}
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
                            highlighted={
                                activeSection === 'actions' &&
                                highlightedIndex === 3
                            }
                            handleMouseEnter={() => {
                                setActiveSection('actions')
                                setHighlightedIndex(3)
                            }}
                        />
                    </div>
                </>
            )}
        </>
    )
}

HomeView.propTypes = {
    apps: PropTypes.array,
    commands: PropTypes.array,
    shortcuts: PropTypes.array,
}

export default HomeView
