import { Card } from '@dhis2-ui/card'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import React from 'react'

export interface MenuPopupProps {
    children: React.ReactNode
    dataTest: string
    menuRef: React.RefObject<HTMLElement>
    menuWidth: string
    maxHeight?: string
    onClick?: () => void
}

export const MenuPopup = ({
    children,
    dataTest,
    maxHeight = '280px',
    menuWidth,
    onClick,
    menuRef,
}: MenuPopupProps) => {
    return (
        <Layer onBackdropClick={onClick} {...{ transparent: true }}>
            <Popper
                reference={menuRef}
                placement="bottom"
                observeReferenceResize
            >
                <div className="card" data-test={`${dataTest}-menuwrapper`}>
                    <Card>{children}</Card>
                </div>
            </Popper>
            <style jsx>{`
                .card {
                    width: ${menuWidth};
                    max-height: ${maxHeight};
                    overflow-y: auto;
                }
            `}</style>
        </Layer>
    )
}
