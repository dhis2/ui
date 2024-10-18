import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import AppItem from '../sections/app-item.js'
import Heading from '../sections/heading.js'
import { escapeRegExpCharacters } from '../utils/escapeCharacters.js'
import SearchResults from './search-results.js'

function HomeView({ apps, filter }) {
    const divRef = useRef(null)
    const [activeItem, setActiveItem] = useState(-1)

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                // row 1
                if (activeItem <= 3) {
                    setActiveItem(activeItem > 0 ? activeItem - 1 : 3)
                }
                // row 2
                if (activeItem >= 4) {
                    setActiveItem(activeItem > 4 ? activeItem - 1 : 7)
                }
                break
            case 'ArrowRight':
                // row 1
                if (activeItem <= 3) {
                    setActiveItem(activeItem >= 3 ? 0 : activeItem + 1)
                }
                // row 2
                if (activeItem >= 4) {
                    setActiveItem(activeItem >= 7 ? 4 : activeItem + 1)
                }
                break
            case 'ArrowDown':
                setActiveItem(activeItem >= 4 ? activeItem - 4 : activeItem + 4)
                break
            case 'ArrowUp':
                setActiveItem(activeItem <= 3 ? activeItem + 4 : activeItem - 4)
                break
            case 'Enter':
                event.preventDefault()
                event.target?.click()
                break
            case 'Tab':
                event.preventDefault()
        }
    }

    const handleFocus = () => {
        if (divRef) {
            if (activeItem <= -1) {
                setActiveItem(0)
            }
        }
    }

    useEffect(() => {
        if (divRef) {
            if (apps.length && activeItem > -1) {
                divRef.current?.children[activeItem]?.focus()
            }
        }
    }, [activeItem, apps.length])
    // filter happens across everything here - apps, commands, shorcuts
    const filteredApps = apps.filter(({ displayName, name }) => {
        const appName = displayName || name
        const formattedAppName = appName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedAppName.match(formattedFilter)
            : true
    })

    return (
        <div onKeyDown={handleKeyDown} onFocus={handleFocus} tabIndex={-1}>
            {filter.length > 0 && (
                <SearchResults filter={filter} filteredItems={filteredApps} />
            )}
            {/* normal view */}
            {filter.length < 1 && (
                <>
                    <Heading heading={'Top apps'} />
                    <div
                        data-test="headerbar-apps-menu-list"
                        ref={divRef}
                        className="headerbar-top-apps"
                    >
                        {filteredApps.length > 0 &&
                            filteredApps
                                .slice(0, 8)
                                .map(
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
        </div>
    )
}

HomeView.propTypes = {
    apps: PropTypes.array,
    filter: PropTypes.string,
}

export default HomeView
