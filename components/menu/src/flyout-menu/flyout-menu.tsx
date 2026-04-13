import {
    colors,
    elevations as elevationsTyped,
    spacers,
} from '@dhis2/ui-constants'
import React, {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useRef,
    useState,
} from 'react'
import { Menu } from '../menu/index.ts'

const elevations = elevationsTyped as Record<string, string>

export interface FlyoutMenuProps {
    /** Typically, but not limited to, `MenuItem` components */
    children?: React.ReactNode
    className?: string
    /** when Escape key is pressed, this function is called to close the flyout menu */
    closeMenu?: () => void
    dataTest?: string
    /** Menu uses smaller dimensions */
    dense?: boolean
    maxHeight?: string
    maxWidth?: string
}

const FlyoutMenu = ({
    children,
    className,
    dataTest = 'dhis2-uicore-menu',
    dense,
    maxHeight = 'auto',
    maxWidth = '380px',
    closeMenu,
}: FlyoutMenuProps) => {
    const [openedSubMenu, setOpenedSubMenu] = useState<number | null>(null)
    const toggleSubMenu = (index: number) => {
        const toggleValue = index === openedSubMenu ? null : index
        setOpenedSubMenu(toggleValue)
    }

    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!divRef.current) {
            return
        }
        const div = divRef.current

        const handleFocus = (event: FocusEvent) => {
            if (event.target === div) {
                if (div?.children && div.children.length > 0) {
                    ;(div.children[0] as HTMLElement).focus()
                }
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault()
                closeMenu && closeMenu()
            }
        }

        div.addEventListener('focus', handleFocus)
        div.addEventListener('keydown', handleKeyDown)

        return () => {
            div.removeEventListener('focus', handleFocus)
            div.removeEventListener('keydown', handleKeyDown)
        }
    }, [closeMenu])

    return (
        <div
            className={className}
            data-test={dataTest}
            tabIndex={0}
            ref={divRef}
        >
            <Menu dense={dense}>
                {Children.map(children, (child, index) =>
                    isValidElement(child)
                        ? cloneElement(child, {
                              showSubMenu: openedSubMenu === index,
                              toggleSubMenu: toggleSubMenu.bind(null, index),
                          } as Record<string, unknown>)
                        : child
                )}
            </Menu>

            <style jsx>{`
                div {
                    background: ${colors.white};
                    border-radius: 3px;
                    box-shadow: ${elevations.popover};
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

export { FlyoutMenu }
