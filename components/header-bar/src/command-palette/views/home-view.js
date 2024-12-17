import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { joinPath } from '../../join-path.js'
import i18n from '../../locales/index.js'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import AppItem from '../sections/app-item.js'
import Heading from '../sections/heading.js'
import ListItem from '../sections/list-item.js'
import ListView from './list-view.js'

function HomeView({ apps, commands, shortcuts, actions }) {
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
                        {actions.map(
                            ({ dataTest, icon, title, type }, index) => {
                                const logoutActionHandler = async () => {
                                    await clearSensitiveCaches()
                                    window.location.assign(
                                        joinPath(
                                            baseUrl,
                                            'dhis-web-commons-security/logout.action'
                                        )
                                    )
                                }

                                const viewActionHandler = () => {
                                    setCurrentView(type)
                                    setHighlightedIndex(0)
                                }

                                return (
                                    <ListItem
                                        key={`action-${type}-${index}`}
                                        title={title}
                                        icon={icon}
                                        dataTest={dataTest}
                                        href={
                                            type === 'logout'
                                                ? joinPath(
                                                      baseUrl,
                                                      'dhis-web-commons-security/logout.action'
                                                  )
                                                : undefined
                                        }
                                        onClickHandler={
                                            type === 'logout'
                                                ? logoutActionHandler
                                                : viewActionHandler
                                        }
                                        highlighted={
                                            activeSection === 'actions' &&
                                            highlightedIndex === index
                                        }
                                        handleMouseEnter={() => {
                                            setActiveSection('actions')
                                            setHighlightedIndex(index)
                                        }}
                                    />
                                )
                            }
                        )}
                    </div>
                </>
            )}
        </>
    )
}

HomeView.propTypes = {
    actions: PropTypes.array,
    apps: PropTypes.array,
    commands: PropTypes.array,
    shortcuts: PropTypes.array,
}

export default HomeView