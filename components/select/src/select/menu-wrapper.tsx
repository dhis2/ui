import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import React from 'react'

export interface MenuWrapperProps {
    dataTest: string
    inputWidth: string
    selectRef: React.RefObject<HTMLDivElement>
    children?: React.ReactNode
    maxHeight?: string
    menuMaxWidth?: string
    menuMinWidth?: string
    onClick?: (...args: unknown[]) => void
}

const MenuWrapper = ({
    children,
    dataTest,
    inputWidth,
    maxHeight = '280px',
    menuMaxWidth,
    menuMinWidth,
    onClick,
    selectRef,
}: MenuWrapperProps) => {
    // menuMinWidth or menuMaxWidth enables flexible sizing (fit-content), with
    // min-width = max(input, menuMinWidth). Without them, width matches the input.
    const flexible = menuMinWidth || menuMaxWidth
    const width = flexible ? 'fit-content' : inputWidth
    const flexibleMinWidth = menuMinWidth
        ? `max(${inputWidth}, ${menuMinWidth})`
        : inputWidth
    const minWidth = flexible ? flexibleMinWidth : 'auto'
    const maxWidth = menuMaxWidth || 'none'
    return (
        <Layer onBackdropClick={onClick as never} translucent={false}>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
                <div data-test={`${dataTest}-menuwrapper`}>
                    {children}

                    <style jsx>{`
                        div {
                            width: ${width};
                            min-width: ${minWidth};
                            max-width: ${maxWidth};
                            height: auto;
                            max-height: ${maxHeight};
                            overflow: auto;
                            background: ${colors.white};
                            border: 1px solid ${colors.grey200};
                            border-radius: 3px;
                            box-shadow: ${(elevations as Record<string, string>)
                                .popover};
                        }
                    `}</style>
                </div>
            </Popper>
        </Layer>
    )
}
export { MenuWrapper }
