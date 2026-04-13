import { colors } from '@dhis2/ui-constants'
import { IconSearch16 } from '@dhis2/ui-icons'
import React from 'react'
import i18n from '../../locales/index.js'
import { TableHeaderCellAction } from '../table-elements/index.ts'

export interface FilterHandleProps {
    active?: boolean
    name?: string
    onClick?: (
        payload: { name?: string; show: boolean },
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
}

export const FilterHandle: React.FC<FilterHandleProps> = ({
    active,
    name,
    onClick,
}) => {
    const filterIconColor = active ? colors.blue700 : colors.grey600
    const clickHandler = onClick
        ? (event: React.MouseEvent<HTMLButtonElement>) => {
              onClick({ name, show: !active }, event)
          }
        : undefined

    return (
        <TableHeaderCellAction
            onClick={clickHandler}
            title={i18n.t('Toggle filter')}
        >
            <IconSearch16 color={filterIconColor} />
        </TableHeaderCellAction>
    )
}
