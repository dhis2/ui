import { colors } from '@dhis2/ui-constants'
import { IconSearch16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import { TableHeaderCellAction } from '../table-elements/index.js'

export const FilterHandle = ({ active, name, onClick }) => {
    const filterIconColor = active ? colors.blue700 : colors.grey600
    const clickHandler = onClick
        ? event => {
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

FilterHandle.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
}
