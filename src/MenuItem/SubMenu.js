import React, { useState, useRef } from 'react'
import propTypes from '@dhis2/prop-types'

import { MenuItemContent } from './MenuItemContent'
import { Popper } from '../Popper.js'

const createMenuItemMouseOutHandler = (setOpen, popperRef) => event => {
    if (!popperRef.current.contains(event.relatedTarget)) {
        setOpen(false)
    }
}
const createPopperMouseOutHandler = (
    setOpen,
    menuItemRef,
    popperRef
) => event => {
    if (
        !menuItemRef.current.contains(event.relatedTarget) &&
        !popperRef.current.contains(event.relatedTarget)
    ) {
        setOpen(false)
    }
}

const SubMenu = ({
    children,
    active,
    className,
    dataTest,
    dense,
    destructive,
    disabled,
    icon,
    label,
}) => {
    const menuItemRef = useRef()
    const popperRef = useRef()
    const [open, setOpen] = useState(false)

    return (
        <>
            <MenuItemContent
                active={active}
                className={className}
                dataTest={dataTest}
                dense={dense}
                destructive={destructive}
                disabled={disabled}
                icon={icon}
                label={label}
                showChevron={true}
                onMouseOver={() => setOpen(true)}
                onMouseOut={createMenuItemMouseOutHandler(setOpen, popperRef)}
                ref={menuItemRef}
            />
            {open && (
                <Popper placement="right-start" reference={menuItemRef}>
                    <div
                        ref={popperRef}
                        onMouseOut={createPopperMouseOutHandler(
                            setOpen,
                            menuItemRef,
                            popperRef
                        )}
                    >
                        {children}
                    </div>
                </Popper>
            )}
        </>
    )
}

SubMenu.propTypes = {
    active: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    destructive: propTypes.bool,
    disabled: propTypes.bool,
    icon: propTypes.element,
    label: propTypes.oneOfType([propTypes.string, propTypes.node]),
}

export { SubMenu }
