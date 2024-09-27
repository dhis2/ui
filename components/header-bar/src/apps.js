import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors, spacers, theme } from '@dhis2/ui-constants'
import {
    IconApps24,
    IconApps16,
    IconTerminalWindow16,
    IconLogOut16,
    IconArrowLeft16,
} from '@dhis2/ui-icons'
import { Button } from '@dhis2-ui/button'
import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { MenuItem } from '@dhis2-ui/menu'
import { Modal, ModalContent } from '@dhis2-ui/modal'
import PropTypes from 'prop-types'
import React, { useState, useCallback, useRef } from 'react'
import { joinPath } from './join-path.js'
import i18n from './locales/index.js'

/**
 * Copied from here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 */
function escapeRegExpCharacters(text) {
    return text.replace(/[/.*+?^${}()|[\]\\]/g, '\\$&')
}

function Search({ value, onChange }) {
    return (
        <div>
            <span>
                <InputField
                    value={value}
                    name="filter"
                    placeholder={i18n.t('Search apps, shortcuts, commands')}
                    onChange={onChange}
                    initialFocus
                />
            </span>
            <style jsx>{`
                // div {
                //     display: flex;
                //     flex-direction: row;
                //     flex-wrap: nowrap;
                //     height: 52px;
                // }

                // span {
                //     flex: 1 100%;
                // }
            `}</style>
        </div>
    )
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

function Item({ name, path, img }) {
    return (
        <a href={path}>
            <img src={img} alt="app logo" />

            <div>{name}</div>

            <style jsx>{`
                a {
                    display: inline-block;
                    // display: flex;
                    // flex-direction: column;
                    // align-items: center;
                    // justify-content: center;
                    // width: 96px;
                    // margin: 5px;
                    // border-radius: 12px;
                    text-decoration: none;
                    cursor: pointer;
                }

                a:hover,
                a:focus {
                    background-color: ${theme.primary050};
                    cursor: pointer;
                }

                a:hover > div {
                    font-weight: 500;
                    cursor: pointer;
                }

                img {
                    width: 48px;
                    height: 48px;
                    // margin: 8px;
                    cursor: pointer;
                    align-items: center;
                }

                div {
                    overflow-wrap: anywhere;
                    margin-top: 14px;
                    color: rgba(0, 0, 0, 0.87);
                    font-size: 12px;
                    letter-spacing: 0.01em;
                    line-height: 14px;
                    text-align: center;
                    cursor: pointer;
                }
            `}</style>
        </a>
    )
}

Item.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
}

function AppItem({ name, path, image, description }) {
    return (
        <a href={path}>
            <img src={image} />
            <div>
                <div>{name}</div>
                <div>{description}</div>
            </div>
            <style jsx>{`
                    a {
                            display: flex;
                            flex-direction: row;
                            width: 100%;
                            // margin: 8px;
                            // border-radius: 12px;
                            text-decoration: none;
                            cursor: pointer;
                            padding-bottom: 0.2em;
                            font-size: 90%
                            font-weight: 500;
                    }
    
                    a:hover,
                    a:focus {
                        background-color: ${theme.primary050};
                        cursor: pointer;
                    }
    
                    a:hover > div {
                        font-weight: 500;
                        cursor: pointer;
                    }
    
                    img {
                        width: 28px;
                        height: 28px;
                        // margin: 8px;
                        cursor: pointer;
                    }
    
                    div {
                        overflow-wrap: anywhere;
                        margin-top: 4px;
                        color: rgba(0, 0, 0, 0.87);
                        font-size: 12px;
                        letter-spacing: 0.01em;
                        line-height: 14px;
                        // text-align: center;
                        cursor: pointer;
                    }
                `}</style>
        </a>
    )
}

AppItem.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
}

function BackToHomeButton({ setView }) {
    const handleClick = () => {
        setView('home')
    }
    return (
        <Button
            aria-label="Back Button"
            icon={<IconArrowLeft16 />}
            name="Back"
            onClick={handleClick}
            title="Back Button"
            value="back"
            style={{
                width: '100%',
                border: 'none',
                justifyContent: 'flex-start',
            }}
        />
    )
}

BackToHomeButton.propTypes = {
    setView: PropTypes.func,
}

const CommandPalette = ({ apps, commands }) => {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

    const handleVisibilityToggle = useCallback(() => setShow(!show), [show])
    const handleFilterChange = useCallback(({ value }) => setFilter(value), [])

    const containerEl = useRef(null)
    // const onDocClick = useCallback((evt) => {
    //     if (containerEl.current && !containerEl.current.contains(evt.target)) {
    //         // setShow(false)
    //     }
    // }, [])
    // useEffect(() => {
    //     document.addEventListener('click', onDocClick)
    //     return () => document.removeEventListener('click', onDocClick)
    // }, [onDocClick])

    console.log(containerEl, 'containerEl')

    return (
        <div ref={containerEl} data-test="headerbar-apps">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>

            {show ? (
                <MenuModal
                    show={show}
                    apps={apps}
                    commands={commands}
                    filter={filter}
                    onFilterChange={handleFilterChange}
                />
            ) : null}

            <style jsx>{`
                button {
                    display: block;
                    background: transparent;
                    padding-block-start: ${spacers.dp4};
                    padding-block-end: 0;
                    padding-inline: ${spacers.dp12};
                    border: 0;
                    cursor: pointer;
                    height: 100%;
                }
                button:focus {
                    outline: 2px solid white;
                    outline-offset: -2px;
                }
                button:focus:not(:focus-visible) {
                    outline: none;
                }
                button:hover {
                    background: #1a557f;
                }
                button:active {
                    background: #104067;
                }

                div {
                    position: relative;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

CommandPalette.propTypes = {
    apps: PropTypes.array,
    commands: PropTypes.array,
}

export const MenuModal = ({ show, apps, commands, filter, onFilterChange }) => {
    console.log(apps, 'apps')
    const [currentView, setCurrentView] = useState('home')
    const showActions = filter.length <= 0 && currentView === 'home'

    return (
        <div style={{ backgroundColor: 'green', width: '50%' }}>
            {show && (
                <Modal hide={!show}>
                    <ModalContent style={{}}>
                        <div data-test="headerbar-apps-menu">
                            <Card>
                                <Search
                                    value={filter}
                                    onChange={onFilterChange}
                                />
                                <ViewSwitcher
                                    apps={apps}
                                    filter={filter}
                                    view={currentView}
                                    setView={setCurrentView}
                                    commands={commands}
                                />
                                {showActions ? (
                                    <Actions setView={setCurrentView} />
                                ) : null}
                            </Card>
                        </div>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

MenuModal.propTypes = {
    apps: PropTypes.array,
    commands: PropTypes.array,
    filter: PropTypes.string,
    show: PropTypes.bool,
    onFilterChange: PropTypes.func,
}

function ViewSwitcher({ apps, commands, filter, view, setView }) {
    switch (view) {
        case 'apps':
            return <AllAppsView apps={apps} filter={filter} setView={setView} />
        case 'commands':
            return (
                <CommandsView
                    commands={commands}
                    filter={filter}
                    setView={setView}
                />
            )
        case 'home':
        default:
            return <HomeView apps={apps} filter={filter} />
    }
}

ViewSwitcher.propTypes = {
    apps: PropTypes.array,
    commands: PropTypes.array,
    filter: PropTypes.string,
    setView: PropTypes.func,
    view: PropTypes.string,
}

function AllAppsView({ apps, filter, setView }) {
    const filteredApps = apps.filter(({ displayName, name }) => {
        const appName = displayName || name
        const formattedAppName = appName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedAppName.match(formattedFilter)
            : true
    })

    return (
        <>
            <BackToHomeButton setView={setView} />
            <div>
                {filter ? (
                    filteredApps.length > 0 ? (
                        <p style={{ color: colors.grey600 }}>
                            Results for {filter}
                        </p>
                    ) : (
                        <p style={{ color: colors.grey600 }}>
                            Nothing found for {filter}
                        </p>
                    )
                ) : (
                    <h5 style={{ color: colors.grey600 }}>
                        {i18n.t('All Apps')}
                    </h5>
                )}
            </div>
            <List apps={apps} filter={filter} />
        </>
    )
}

AllAppsView.propTypes = {
    apps: PropTypes.array,
    filter: PropTypes.string,
    setView: PropTypes.func,
}

function CommandsView({ commands, filter, setView }) {
    const filteredCommands = commands.filter(({ displayName, name }) => {
        const commandName = displayName || name
        const formattedAppName = commandName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedAppName.match(formattedFilter)
            : true
    })

    return (
        <>
            <BackToHomeButton setView={setView} />
            <div>
                {filter ? (
                    filteredCommands.length > 0 ? (
                        <span>Results for {filter}</span>
                    ) : (
                        <span>Nothing found for {filter}</span>
                    )
                ) : (
                    <h5 style={{ color: colors.grey600 }}>
                        {i18n.t('All Commands')}
                    </h5>
                )}
            </div>
            {filteredCommands.map(
                (
                    { displayName, name, defaultAction, icon, description },
                    idx
                ) => (
                    <AppItem
                        key={`app-${name}-${idx}`}
                        name={displayName || name}
                        path={defaultAction}
                        img={icon}
                        description={description}
                    />
                )
            )}
        </>
    )
}

CommandsView.propTypes = {
    commands: PropTypes.array,
    filter: PropTypes.string,
    setView: PropTypes.func,
}

function HomeView({ apps, filter }) {
    const filteredApps = apps.filter(({ displayName, name }) => {
        const appName = displayName || name
        const formattedAppName = appName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedAppName.match(formattedFilter)
            : true
    })
    return (
        <>
            {filter ? (
                filteredApps.length > 0 ? (
                    <span>Results for {filter}</span>
                ) : (
                    <span>Nothing found for {filter}</span>
                )
            ) : (
                <h5 style={{ color: colors.grey600 }}>{i18n.t('Top Apps')}</h5>
            )}
            <div data-test="headerbar-apps-menu-list">
                {filteredApps.length > 0 &&
                    filteredApps
                        .slice(0, 8)
                        .map(
                            (
                                { displayName, name, defaultAction, icon },
                                idx
                            ) => (
                                <Item
                                    key={`app-${name}-${idx}`}
                                    name={displayName || name}
                                    path={defaultAction}
                                    img={icon}
                                />
                            )
                        )}

                <style jsx>{`
                    div {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(2, auto);
                        gap: 3px;
                        align-items: center;

                        min-height: 200px;
                        max-height: 465px;
                        margin-block-start: 0;
                        margin-block-end: 8px;
                        margin-inline: 8px;

                        overflow: auto;
                        overflow-x: hidden;
                    }

                    @media (max-width: 768px) {
                        div {
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-rows: repeat(4, auto); /* 4 rows */
                        }
                    }
                `}</style>
            </div>
        </>
    )
}

HomeView.propTypes = {
    apps: PropTypes.array,
    filter: PropTypes.string,
}

function List({ apps, filter }) {
    return (
        <div data-test="headerbar-apps-menu-list">
            {apps
                .filter(({ displayName, name }) => {
                    const appName = displayName || name
                    const formattedAppName = appName.toLowerCase()
                    const formattedFilter =
                        escapeRegExpCharacters(filter).toLowerCase()

                    return filter.length > 0
                        ? formattedAppName.match(formattedFilter)
                        : true
                })
                .map(({ displayName, name, defaultAction, icon }, idx) => (
                    <AppItem
                        key={`app-${name}-${idx}`}
                        name={displayName || name}
                        path={defaultAction}
                        img={icon}
                    />
                ))}

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    // flex-wrap: wrap;
                    align-content: flex-start;
                    align-items: flex-start;
                    justify-content: flex-start;
                    // width: 30vw;
                    min-width: 300px;
                    max-width: 560px;

                    min-height: 200px;
                    max-height: 465px;
                    margin-block-start: 0;
                    margin-block-end: 8px;
                    margin-inline: 8px;

                    overflow: auto;
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}
List.propTypes = {
    apps: PropTypes.array,
    filter: PropTypes.string,
}

function Actions({ setView }) {
    const actions = [
        {
            icon: IconApps16,
            type: 'apps',
            action: 'Browse apps',
        },
        {
            icon: IconTerminalWindow16,
            type: 'commands',
            action: 'Browse commands',
        },
    ]

    const { baseUrl } = useConfig()

    return (
        <>
            <h5 style={{ color: colors.grey600 }}>{i18n.t('Actions')}</h5>
            {actions.map((action, index) => (
                <MenuItem
                    key={`${index}-${action.type}`}
                    onClick={(payload, event) => {
                        console.log(payload.value, event.target)
                        setView(action.type)
                    }}
                    label={i18n.t(`${action.action}`)}
                    value={action.action}
                    icon={<action.icon color={colors.grey700} />}
                />
            ))}
            <MenuItem
                href={joinPath(
                    baseUrl,
                    'dhis-web-commons-security/logout.action'
                )}
                // NB: By MenuItem implementation, this callback
                // overwrites default navigation behavior but maintains
                // the href attribute
                onClick={async () => {
                    // setLoading(true)
                    await clearSensitiveCaches()
                    // setLoading(false)
                    window.location.assign(
                        joinPath(
                            baseUrl,
                            'dhis-web-commons-security/logout.action'
                        )
                    )
                }}
                label={i18n.t('Logout')}
                value="logout"
                icon={<IconLogOut16 color={colors.grey700} />}
            />
        </>
    )
}

Actions.propTypes = {
    setView: PropTypes.func,
}

export default CommandPalette
