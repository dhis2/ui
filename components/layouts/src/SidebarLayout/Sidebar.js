import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState, useRef } from 'react'
import { LayoutOverlay } from '../LayoutOverlay'
import { useParentSize } from '../useParentSize'
import {
    sidebarStyles,
    sidebarToggleStyles,
    sidebarSize,
} from './SidebarLayout.styles'

const isBooleanSpecified = x => x === true || x === false

export const Sidebar = ({
    className,
    style,
    toggleClassname,
    toggleStyle,
    children,
    side,
    collapsible,
    collapseBreakpoint,
    collapsed: forceCollapsed,
    toggled: forceToggled,
}) => {
    const [collapsed, setCollapsed] = useState(!!forceCollapsed)
    const [toggled, setToggled] = useState(!!forceToggled)
    const elementRef = useRef()
    const size = useParentSize(elementRef)

    useEffect(() => {
        if (!isBooleanSpecified(forceCollapsed) && collapsible) {
            setCollapsed(size.width < collapseBreakpoint)
        }
    }, [size])

    return (
        <>
            <LayoutOverlay
                ref={elementRef}
                className={classNames(
                    className,
                    sidebarStyles.className,
                    'sidebarContainer',
                    `sidebarSide-${side}`,
                    collapsed && 'sidebarCollapsed',
                    toggled && 'sidebarToggled'
                )}
                style={style}
            >
                {sidebarStyles.styles}
                {children}
            </LayoutOverlay>

            {/* TODO: Make this accessible */}

            {collapsed && !isBooleanSpecified(forceToggled) && (
                <div
                    onClick={() => setToggled(toggled => !toggled)}
                    className={classNames(
                        toggleClassname,
                        sidebarToggleStyles.className,
                        'sidebarToggle',
                        `sidebarSide-${side}`,
                        toggled && 'sidebarToggled'
                    )}
                    style={toggleStyle}
                >
                    {sidebarToggleStyles.styles}
                </div>
            )}
        </>
    )
}

Sidebar.defaultProps = {
    side: 'left',
    collapsible: true,
    collapseBreakpoint: sidebarSize * 3,
}

Sidebar.propTypes = {
    collapseBreakpoint: PropTypes.number.isRequired,
    children: PropTypes.any,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
    collapsed: PropTypes.bool,
    collapsible: PropTypes.bool,
    side: PropTypes.string,
    style: PropTypes.instanceOf(Object),
    toggleClassname: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
    toggleStyle: PropTypes.instanceOf(Object),
    toggled: PropTypes.bool,
}
