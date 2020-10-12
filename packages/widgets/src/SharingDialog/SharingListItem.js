import React from 'react'
import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'
import { TableRow, TableCell } from '@dhis2/ui'

import { sharingListItemStyles } from './SharingDialog.styles'
import { IconExternal } from './icons/IconExternal'
import {
    SHARE_TARGET_PUBLIC,
    isPermanentTarget,
    accessStrings,
} from './sharingConstants'
import { AccessSelect } from './AccessSelect'

export const SharingListItem = ({
    name,
    target,
    access,
    accessOptions,
    disabled,
    onChange,
    onRemove,
}) => (
    <TableRow>
        <style jsx>{sharingListItemStyles}</style>
        <TableCell>
            <div className="share-details">
                <IconExternal className="icon" />
                <div>
                    <p className="share-entity">{name}</p>
                    <p className="share-context">
                        {target === SHARE_TARGET_PUBLIC
                            ? accessStrings[access]?.publicDescription
                            : accessStrings[access]?.description}
                    </p>
                </div>
            </div>
        </TableCell>
        <TableCell>
            <AccessSelect
                prefix={i18n.t('Access')}
                access={access}
                accessOptions={accessOptions}
                disabled={disabled}
                showRemoveOption={!isPermanentTarget(target)}
                onChange={selected =>
                    selected === 'remove' ? onRemove() : onChange(selected)
                }
            />
        </TableCell>
    </TableRow>
)

SharingListItem.propTypes = {
    access: PropTypes.string,
    accessOptions: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    target: PropTypes.string,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
}
