import { Divider } from '@dhis2-ui/divider'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { AccessSelect } from '../access-select/index.js'
import { isRemovableTarget } from '../helpers.js'
import i18n from '../locales/index.js'
import { SharingListItemContext } from './sharing-list-item-context.js'
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
                <div className="share-details">
                    <SharingListItemIcon target={target} name={name} />
                    <div className="share-details-text">
                        <p className="share-entity">{name}</p>
                        <SharingListItemContext access={access} />
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
            <style jsx>{`
                .sharing-list-item {
                    display: flex;
                    padding: 4px 8px;
                }

                .share-details-text {
                    margin-left: 8px;
                }

                div.share-details {
                    display: flex;
                    flex: 2;
                }

                p.share-entity {
                    font-size: 15px;
                    font-weight: 500;
                    color: ${colors.grey900};
                    margin: 0;
                    padding: 0;
                }

                p.share-context {
                    font-size: 14px;
                    color: ${colors.grey700};
                    margin: 6px 0 0 0;
                    padding: 0;
                }
            `}</style>
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
