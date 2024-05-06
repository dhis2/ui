import { colors, elevations, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement, useState } from 'react'
import { Menu } from '../index.js'

const FlyoutMenu = ({
    children,
    className,
    dataTest,
    dense,
    maxHeight,
    maxWidth,
}) => {
    const [openedSubMenu, setOpenedSubMenu] = useState(null)
    const toggleSubMenu = (index) => {
        const toggleValue = index === openedSubMenu ? null : index
        setOpenedSubMenu(toggleValue)
    }

    return (
        <div className={className} data-test={dataTest}>
            <Menu dense={dense}>
                {Children.map(children, (child, index) =>
                    isValidElement(child)
                        ? cloneElement(child, {
                              showSubMenu: openedSubMenu === index,
                              toggleSubMenu: toggleSubMenu.bind(this, index),
                          })
                        : child
                )}
            </Menu>

            <style jsx>{`
                div {
                    background: ${colors.white};
                    border: 1px solid ${colors.grey200};
                    border-radius: 3px;
                    box-shadow: ${elevations.e300};
                    display: inline-block;
                    min-width: ${dense ? '128' : '180'}px;
                    max-width: ${maxWidth};
                    max-height: ${maxHeight};
                    padding: ${spacers.dp4} 0;
                    overflow: auto;
                }
            `}</style>
        </div>
    )
}

FlyoutMenu.defaultProps = {
    dataTest: 'dhis2-uicore-menu',
    maxWidth: '380px',
    maxHeight: 'auto',
}

FlyoutMenu.propTypes = {
    /** Typically, but not limited to, `MenuItem` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Menu uses smaller dimensions */
    dense: PropTypes.bool,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
}

export { FlyoutMenu }
