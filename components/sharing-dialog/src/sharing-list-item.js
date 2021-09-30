import { Divider } from '@dhis2-ui/divider'
import { colors } from '@dhis2/ui-constants'
import { IconWorld24, IconUserGroup24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { AccessSelect } from './access-select'
import { Avatar } from './avatar'
import { isPermanentTarget } from './helpers'
import i18n from './locales/index.js'
import {
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
    accessStrings,
} from './sharing-constants'
import { sharingListItemStyles } from './sharing-dialog.styles'

export const SharingListItem = ({
    name,
    target,
    access,
    accessOptions,
    disabled,
    onChange,
    onRemove,
}) => {
    const getIcon = (target) => {
        switch (target) {
            case SHARE_TARGET_EXTERNAL:
                return <IconWorld24 color={colors.grey600} />
            case SHARE_TARGET_PUBLIC:
            case SHARE_TARGET_GROUP:
                return <IconUserGroup24 color={colors.grey600} />
            case SHARE_TARGET_USER:
                return <Avatar name={name} />
        }
    }

    return (
        <>
            <div className="sharing-list-item">
                <style jsx>{sharingListItemStyles}</style>
                <div className="share-details">
                    {getIcon(target)}
                    <div className="share-details-text">
                        <p className="share-entity">{name}</p>
                        <p className="share-context">
                            {target === SHARE_TARGET_PUBLIC
                                ? accessStrings[access]?.publicDescription()
                                : accessStrings[access]?.description()}
                        </p>
                    </div>
                </div>
                <AccessSelect
                    prefix={i18n.t('Metadata')}
                    access={access}
                    accessOptions={accessOptions}
                    disabled={disabled}
                    showRemoveOption={!isPermanentTarget(target)}
                    onChange={(selected) =>
                        selected === 'remove' ? onRemove() : onChange(selected)
                    }
                />
            </div>
            <Divider />
        </>
    )
}

SharingListItem.propTypes = {
    access: PropTypes.string.isRequired,
    accessOptions: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    onRemove: PropTypes.func,
}
