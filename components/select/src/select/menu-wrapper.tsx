import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import React from 'react'

export interface MenuWrapperProps {
    dataTest: string
    menuWidth: string
    selectRef: React.RefObject<HTMLDivElement>
    children?: React.ReactNode
    maxHeight?: string
    onClick?: (...args: unknown[]) => void
}

const MenuWrapper = ({
    children,
    dataTest,
    maxHeight = '280px',
    menuWidth,
    onClick,
    selectRef,
}: MenuWrapperProps) => {
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
                            width: ${menuWidth};
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
