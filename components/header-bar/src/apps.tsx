import { useConfig } from '@dhis2/app-runtime'
import { colors, spacers, theme } from '@dhis2/ui-constants'
import { IconApps24, IconSettings24 } from '@dhis2/ui-icons'
import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { joinPath } from './join-path.ts'
import i18n from './locales/index.js'

/**
 * Copied from here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 */
function escapeRegExpCharacters(text: string): string {
    return text.replace(/[/.*+?^${}()|[\]\\]/g, '\\$&')
}

interface SearchProps {
    value: string
    onChange: (
        payload: { value: string | undefined; name: string | undefined },
        event: React.ChangeEvent<HTMLInputElement>
    ) => void
}

function Search({ value, onChange }: SearchProps) {
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

interface ItemProps {
    name?: string
    path?: string
    img?: string
}

function Item({ name, path, img }: ItemProps) {
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
                    margin: 8px;
                    cursor: pointer;
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

interface AppItem {
    displayName?: string
    name: string
    defaultAction: string
    icon: string
}

interface ListProps {
    apps?: AppItem[]
    filter?: string
}

function List({ apps, filter }: ListProps) {
    return (
        <div data-test="headerbar-apps-menu-list">
            {(apps || [])
                .filter(({ displayName, name }) => {
                    const appName = displayName || name
                    const formattedAppName = appName.toLowerCase()
                    const formattedFilter = escapeRegExpCharacters(
                        filter || ''
                    ).toLowerCase()

                    return (filter || '').length > 0
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

interface AppMenuProps {
    apps: AppItem[]
    filter: string
    onFilterChange: (
        payload: { value: string | undefined; name: string | undefined },
        event: React.ChangeEvent<HTMLInputElement>
    ) => void
}

const AppMenu = ({ apps, filter, onFilterChange }: AppMenuProps) => (
    <div data-test="headerbar-apps-menu">
        <Card>
            <Search value={filter} onChange={onFilterChange} />
            <List apps={apps} filter={filter} />
        </Card>

        <style jsx>{`
            div {
                z-index: 10000;
                position: absolute;
                inset-inline-end: -4px;
            }
        `}</style>
    </div>
)

export interface AppsProps {
    apps: AppItem[]
}

const Apps = ({ apps }: AppsProps) => {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

    const handleVisibilityToggle = useCallback(() => setShow(!show), [show])
    const handleFilterChange = useCallback(
        ({ value }: { value: string | undefined }) => setFilter(value || ''),
        []
    )

    const containerEl = useRef<HTMLDivElement>(null)
    const onDocClick = useCallback((evt: MouseEvent) => {
        if (
            containerEl.current &&
            !containerEl.current.contains(evt.target as Node)
        ) {
            setShow(false)
        }
    }, [])
    useEffect(() => {
        document.addEventListener('click', onDocClick)
        return () => document.removeEventListener('click', onDocClick)
    }, [onDocClick])

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

export default Apps
