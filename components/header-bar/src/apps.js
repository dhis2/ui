import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { useConfig } from '@dhis2/app-runtime'
import { colors, spacers, theme } from '@dhis2/ui-constants'
import { IconApps24, IconSettings24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useState, useCallback, useRef } from 'react'
import { Link, useInRouterContext } from 'react-router-dom'
import css from 'styled-jsx/css'
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
    const { baseUrl } = useConfig()

    return (
        <div>
            <span>
                <InputField
                    value={value}
                    name="filter"
                    placeholder={i18n.t('Search apps')}
                    onChange={onChange}
                    initialFocus
                />
            </span>

            <span>
                <a href={joinPath(baseUrl, 'dhis-web-menu-management')}>
                    <IconSettings24 color={colors.grey700} />
                </a>
            </span>

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    height: 52px;
                    margin: 8px;
                }

                span {
                    flex: 1 100%;
                }

                span:last-child {
                    flex: 1 auto;
                    margin: 8px;
                }
            `}</style>
        </div>
    )
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

const { className, styles } = css.resolve`
    a {
        text-decoration: none;
        margin: 8px;
    }
`
function ItemWrapper({ name, path, children }) {
    const inRouterContext = useInRouterContext()

    if (inRouterContext) {
        // todo: client-side routing scheme
        return (
            <Link to={`/app/${name}`} className={className}>
                {children}
                {styles}
            </Link>
        )
    }

    return (
        <a href={path} className={className}>
            {children}
            {styles}
        </a>
    )
}
ItemWrapper.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    path: PropTypes.string,
}

function Item({ displayName, name, path, img }) {
    return (
        <ItemWrapper name={name} path={path}>
            <div className="wrapper">
                <img src={img} alt="app logo" />

                <div className="name">{displayName}</div>
            </div>
            <style jsx>{`
                div.wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 96px;
                    border-radius: 12px;
                    cursor: pointer;
                }

                div.wrapper:hover,
                div.wrapper:focus {
                    background-color: ${theme.primary050};
                    cursor: pointer;
                }

                div.wrapper:hover > div.name {
                    font-weight: 500;
                    cursor: pointer;
                }

                img {
                    width: 48px;
                    height: 48px;
                    margin: 8px;
                    cursor: pointer;
                }

                div.name {
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
        </ItemWrapper>
    )
}

Item.propTypes = {
    displayName: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
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
                    <Item
                        key={`app-${name}-${idx}`}
                        displayName={displayName || name}
                        name={name}
                        path={defaultAction}
                        img={icon}
                    />
                ))}

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    align-items: flex-start;
                    justify-content: flex-start;
                    width: 30vw;
                    min-width: 300px;
                    max-width: 560px;

                    min-height: 200px;
                    max-height: 465px;
                    margin: 0 8px 8px 8px;

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

const AppMenu = ({ apps, filter, onFilterChange }) => (
    <div data-test="headerbar-apps-menu">
        <Card>
            <Search value={filter} onChange={onFilterChange} />
            <List apps={apps} filter={filter} />
        </Card>
    </div>
)

AppMenu.propTypes = {
    apps: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string,
}

const Apps = ({ apps }) => {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

    const handleVisibilityToggle = useCallback(() => setShow((s) => !s), [])
    const handleFilterChange = useCallback(({ value }) => setFilter(value), [])

    const containerRef = useRef(null)

    return (
        <div ref={containerRef} data-test="headerbar-apps">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>

            {show ? (
                <Layer onBackdropClick={handleVisibilityToggle}>
                    <Popper reference={containerRef} placement="bottom-end">
                        <AppMenu
                            apps={apps}
                            filter={filter}
                            onFilterChange={handleFilterChange}
                        />
                    </Popper>
                </Layer>
            ) : null}

            <style jsx>{`
                button {
                    display: block;
                    background: transparent;
                    padding: ${spacers.dp4} ${spacers.dp12} 0;
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

Apps.propTypes = {
    apps: PropTypes.array.isRequired,
}

export default Apps
