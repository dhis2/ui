import { Divider } from '@dhis2-ui/divider'
import { SingleSelectField, SingleSelectOption } from '@dhis2-ui/select'
import { useOnlineStatus } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { FetchingContext } from '../context/index.js'
import { DestructiveSelectOption } from '../destructive-select-option/index.js'
import { isRemovableTarget } from '../helpers/index.js'
import i18n from '../locales/index.js'
import { ListItemContext } from './list-item-context.js'
import { ListItemIcon } from './list-item-icon.js'

export const ListItem = ({
    name,
    target,
    access,
    accessOptions,
    disabled,
    onChange,
    onRemove,
}) => {
    const isFetching = useContext(FetchingContext)
    const { offline } = useOnlineStatus()
    const valueToLabel = {
        ACCESS_NONE: i18n.t('No access'),
        ACCESS_VIEW_ONLY: i18n.t('View only'),
        ACCESS_VIEW_AND_EDIT: i18n.t('View and edit'),
    }

    return (
        <>
            <div className="wrapper">
                <div className="details">
                    <ListItemIcon target={target} name={name} />
                    <div className="details-text">
                        <p className="details-name">{name}</p>
                        <ListItemContext access={access} />
                    </div>
                </div>
                <div className="select">
                    <SingleSelectField
                        disabled={disabled || offline || isFetching}
                        prefix={i18n.t('Metadata')}
                        selected={access}
                        helpText={
                            offline ? i18n.t('Not available offline') : ''
                        }
                        onChange={({ selected }) => onChange(selected)}
                    >
                        {accessOptions.map((value) => (
                            <SingleSelectOption
                                key={value}
                                label={valueToLabel[value]}
                                value={value}
                                active={value === access}
                            />
                        ))}
                        {isRemovableTarget(target) && (
                            <DestructiveSelectOption
                                onClick={onRemove}
                                label={i18n.t('Remove access')}
                            />
                        )}
                    </SingleSelectField>
                </div>
            </div>
            <Divider />
            <style jsx>{`
                .wrapper {
                    display: flex;
                    padding: 4px 8px;
                }

                .details {
                    display: flex;
                    flex: 2;
                }

                .details-text {
                    margin-left: 8px;
                }

                .details-name {
                    font-size: 15px;
                    font-weight: 500;
                    color: ${colors.grey900};
                    margin: 0;
                    padding: 0;
                }

                .select {
                    flex: 1;
                }
            `}</style>
        </>
    )
}

ListItem.propTypes = {
    access: PropTypes.string.isRequired,
    accessOptions: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    onRemove: PropTypes.func,
}
