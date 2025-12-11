import { useDhis2ConnectionStatus } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { Divider } from '@dhis2-ui/divider'
import { SingleSelectField, SingleSelectOption } from '@dhis2-ui/select'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../constants.js'
import { DestructiveSelectOption } from '../destructive-select-option/index.js'
import { FetchingContext } from '../fetching-context/index.js'
import { isRemovableTarget } from '../helpers/index.js'
import i18n from '../locales/index.js'
import { ListItemContext } from './list-item-context.js'
import { ListItemIcon } from './list-item-icon.js'

const isRemoveEnabled = ({ dataSharing, accessOtherField }) => {
    if (!dataSharing) {
        return true
    }
    return accessOtherField === ACCESS_NONE
}

export const ListItem = ({
    name,
    id,
    target,
    access,
    accessOptions,
    disabled,
    onChange,
    onRemove,
    dataSharing,
    metadataSharing = true,
    allUsersItem = false,
}) => {
    const isFetching = useContext(FetchingContext)
    const { isDisconnected: offline } = useDhis2ConnectionStatus()
    const valueToLabel = {
        ACCESS_NONE: i18n.t('No access'),
        ACCESS_VIEW_ONLY: i18n.t('View only'),
        ACCESS_VIEW_AND_EDIT: i18n.t('View and edit'),
    }

    return (
        <>
            <div className="wrapper">
                <div
                    className={
                        dataSharing && metadataSharing
                            ? 'detailsWithSmall'
                            : 'detailsBig'
                    }
                >
                    <ListItemIcon target={target} name={name} />
                    <div className="details-text">
                        <p className="details-name">{name}</p>
                        <ListItemContext target={target} id={id} />
                    </div>
                </div>
                <div
                    className={
                        dataSharing && metadataSharing
                            ? 'selectWrapperWithBig'
                            : 'selectWrapperSmall'
                    }
                >
                    {dataSharing && (
                        <div className="select">
                            <SingleSelectField
                                disabled={disabled || offline || isFetching}
                                prefix={i18n.t('Data')}
                                selected={access.data}
                                helpText={
                                    offline
                                        ? i18n.t('Not available offline')
                                        : ''
                                }
                                onChange={({ selected }) =>
                                    onChange({ ...access, data: selected })
                                }
                            >
                                {accessOptions.map((value) => (
                                    <SingleSelectOption
                                        key={value}
                                        label={valueToLabel[value]}
                                        value={value}
                                        active={value === access.data}
                                    />
                                ))}
                                {isRemovableTarget(target) &&
                                    isRemoveEnabled({
                                        accessOtherField: access.metadata,
                                        dataSharing,
                                    }) && (
                                        <DestructiveSelectOption
                                            onClick={onRemove}
                                            label={i18n.t('Remove access')}
                                        />
                                    )}
                            </SingleSelectField>
                        </div>
                    )}
                    {metadataSharing && (
                        <div className="select">
                            <SingleSelectField
                                disabled={disabled || offline || isFetching}
                                prefix={i18n.t('Metadata')}
                                selected={access.metadata}
                                helpText={
                                    offline
                                        ? i18n.t('Not available offline')
                                        : ''
                                }
                                onChange={({ selected }) =>
                                    onChange({ ...access, metadata: selected })
                                }
                            >
                                {accessOptions.map((value) => (
                                    <SingleSelectOption
                                        key={value}
                                        label={valueToLabel[value]}
                                        value={value}
                                        active={value === access.metadata}
                                        disabled={
                                            !allUsersItem &&
                                            value === ACCESS_NONE &&
                                            !dataSharing
                                        }
                                    />
                                ))}
                                {isRemovableTarget(target) &&
                                    isRemoveEnabled({
                                        accessOtherField: access.data,
                                        dataSharing,
                                    }) && (
                                        <DestructiveSelectOption
                                            onClick={onRemove}
                                            label={i18n.t('Remove access')}
                                        />
                                    )}
                            </SingleSelectField>
                        </div>
                    )}
                </div>
            </div>
            <Divider />
            <style jsx>{`
                .wrapper {
                    display: flex;
                    padding: 4px 8px;
                    justify-content: space-between;
                }

                .detailsBig {
                    display: flex;
                    width: 65%;
                }

                .detailsSmall {
                    display: flex;
                    width: 35%;
                }

                .details-text {
                    margin-inline-start: 8px;
                }

                .details-name {
                    font-size: 15px;
                    font-weight: 500;
                    color: ${colors.grey900};
                    margin: 0;
                    padding: 0;
                }

                .selectWrapperSmall {
                    display: flex;
                    width: 35%;
                }

                .selectWrapperWithBig {
                    display: flex;
                    width: 65%;
                }

                .select {
                    margin-inline-start: 8px;
                    flex: 1;
                }
            `}</style>
        </>
    )
}

ListItem.propTypes = {
    access: PropTypes.shape({
        data: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
        metadata: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
    }).isRequired,
    accessOptions: PropTypes.arrayOf(
        PropTypes.oneOf([ACCESS_NONE, ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT])
    ).isRequired,
    dataSharing: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.oneOf([
        SHARE_TARGET_PUBLIC,
        SHARE_TARGET_GROUP,
        SHARE_TARGET_USER,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    allUsersItem: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    metadataSharing: PropTypes.bool,
    onRemove: PropTypes.func,
}
