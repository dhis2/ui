import { Divider } from '@dhis2-ui/divider'
import PropTypes from 'prop-types'
import React from 'react'
import { AccessSelect } from './access-select.js'
import { isRemovableTarget } from './helpers.js'
import i18n from './locales/index.js'
import { SHARE_TARGET_PUBLIC, accessStrings } from './sharing-constants.js'
import { sharingListItemStyles } from './sharing-dialog.styles.js'
import { SharingListItemIcon } from './sharing-list-item-icon.js'

export const SharingListItem = ({
    name,
    target,
    access,
    accessOptions,
    disabled,
    onChange,
    onRemove,
}) => {
    return (
        <>
            <div className="sharing-list-item">
                <style jsx>{sharingListItemStyles}</style>
                <div className="share-details">
                    <SharingListItemIcon target={target} />
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
                    showRemoveOption={isRemovableTarget(target)}
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
