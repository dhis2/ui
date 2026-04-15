import { colors } from '@dhis2/ui-constants'
import { Divider } from '@dhis2-ui/divider'
import React from 'react'

export interface MenuDividerProps {
    className?: string
    dataTest?: string
    dense?: boolean
}

const MenuDivider = ({
    className,
    dataTest = 'dhis2-uicore-menudivider',
    dense,
}: MenuDividerProps) => (
    <li className={className} data-test={dataTest}>
        <Divider dense={dense} />

        <style jsx>{`
            li {
                list-style: none;
                background-color: ${colors.white};
                user-select: none;
                padding: 0;
                line-height: 0;
            }
        `}</style>
    </li>
)

export { MenuDivider }
