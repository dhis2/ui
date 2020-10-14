import React from 'react'
import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'
import { Divider } from '@dhis2/ui'

import { sharingListItemStyles } from './SharingDialog.styles'
import { IconExternal } from './icons/IconExternal'
import { Avatar } from './icons/Avatar'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
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
    <>
        <div className="sharing-list-item">
            <style jsx>{sharingListItemStyles}</style>
            <div className="share-details">
                {target === SHARE_TARGET_USER ? (
                    <Avatar name={name} />
                ) : (
                    <IconExternal className="share-details-icon" />
                )}
                <div className="share-details-text">
                    <p className="share-entity">{name}</p>
                    <p className="share-context">
                        {target === SHARE_TARGET_PUBLIC
                            ? accessStrings[access]?.publicDescription
                            : accessStrings[access]?.description}
                    </p>
                </div>
            </div>
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
        </div>
        <Divider />
    </>
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
