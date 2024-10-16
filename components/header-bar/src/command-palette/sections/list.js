import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import ListItem from './list-item.js'

function List({ filteredItems, type }) {
    const divRef = useRef(null)
    const [activeItem, setActiveItem] = useState(-1)
    const lastIndex = filteredItems.length - 1

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowDown':
                setActiveItem(activeItem >= lastIndex ? 0 : activeItem + 1)
                break
            case 'ArrowUp':
                setActiveItem(activeItem > 0 ? activeItem - 1 : lastIndex)
                break
            case 'Enter':
                event.preventDefault()
                event.target?.click()
                break
        }
    }

    useEffect(() => {
        if (divRef) {
            if (filteredItems.length && activeItem > -1) {
                divRef.current.children[activeItem].focus()
            }
        }
    }, [activeItem, filteredItems])

    return (
        <div
            data-test="headerbar-apps-menu-list"
            onKeyDown={handleKeyDown}
            ref={divRef}
            tabIndex={-1}
        >
            {filteredItems.map(
                (
                    { displayName, name, defaultAction, icon, description },
                    idx
                ) => (
                    <ListItem
                        type={type}
                        key={`app-${name}-${idx}`}
                        title={displayName || name}
                        href={defaultAction}
                        image={icon}
                        description={description}
                    />
                )
            )}
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}
List.propTypes = {
    filteredItems: PropTypes.array,
    type: PropTypes.string,
}

export default List
