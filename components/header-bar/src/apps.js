import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { useConfig } from '@dhis2/app-runtime'
import { colors, theme } from '@dhis2/ui-constants'
import { IconApps24, IconSettings24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useCallback, useRef } from 'react'
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

function Item({ name, path, img }) {
    return (
        <a href={path}>
            <img src={img} alt="app logo" />

            <div>{name}</div>

            <style jsx>{`
                a {
                    display: inline-block;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 96px;
                    margin: 8px;
                    padding: 8px;
                    border-radius: 12px;
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
                    cursor: pointer;
                }

                div {
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

function List({ apps, filter }) {
    return (
        <div data-test="headerbar-apps-menu-list">
            {apps
                .filter(({ displayName, name }) => {
                    const appName = displayName || name
                    const formattedAppName = appName.toLowerCase()
                    const formattedFilter = escapeRegExpCharacters(
                        filter
                    ).toLowerCase()

                    return filter.length > 0
                        ? formattedAppName.match(formattedFilter)
                        : true
                })
                .map(({ displayName, name, defaultAction, icon }, idx) => (
                    <Item
                        key={`app-${name}-${idx}`}
                        name={displayName || name}
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

        <style jsx>{`
            div {
                z-index: 10000;
                position: absolute;
                top: 28px;
                right: -6px;
                border-top: 4px solid transparent;
            }
        `}</style>
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

    const handleVisibilityToggle = useCallback(() => setShow(!show), [show])
    const handleFilterChange = useCallback(({ value }) => setFilter(value), [])

    const containerEl = useRef(null)
    const onDocClick = useCallback(evt => {
        if (containerEl.current && !containerEl.current.contains(evt.target)) {
            setShow(false)
        }
    }, [])
    useEffect(() => {
        document.addEventListener('click', onDocClick)
        return () => document.removeEventListener('click', onDocClick)
    }, [])

    return (
        <div ref={containerEl} data-test="headerbar-apps">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>

            {show ? (
                <AppMenu
                    apps={apps}
                    filter={filter}
                    onFilterChange={handleFilterChange}
                />
            ) : null}

            <style jsx>{`
                button {
                    display: block;
                    background: transparent;
                    padding: 0;
                    border: 0;
                    cursor: pointer;
                }
                button:focus {
                    outline: 1px dotted white;
                }

                div {
                    position: relative;
                    width: 24px;
                    height: 30px;
                    margin: 8px 0 0 0;
                }
            `}</style>
        </div>
    )
}

Apps.propTypes = {
    apps: PropTypes.array.isRequired,
}

export default Apps
