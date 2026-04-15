import { useDhis2ConnectionStatus } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { Divider } from '@dhis2-ui/divider'
import { SingleSelectField, SingleSelectOption } from '@dhis2-ui/select'
import React, { useContext } from 'react'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    ACCESS_NONE,
} from '../constants.ts'
import type { AccessType } from '../constants.ts'
import { DestructiveSelectOption } from '../destructive-select-option/index.ts'
import { FetchingContext } from '../fetching-context/index.ts'
import { isRemovableTarget } from '../helpers/index.ts'
import i18n from '../locales/index.js'
import { ListItemContext } from './list-item-context.tsx'
import { ListItemIcon } from './list-item-icon.tsx'

interface AccessObject {
    data: AccessType
    metadata: AccessType
}

const isRemoveEnabled = ({
    dataSharing,
    accessOtherField,
}: {
    dataSharing: boolean
    accessOtherField: AccessType
}): boolean => {
    if (!dataSharing) {
        return true
    }
    return accessOtherField === ACCESS_NONE
}

export interface ListItemProps {
    name: string
    target:
        | typeof SHARE_TARGET_PUBLIC
        | typeof SHARE_TARGET_GROUP
        | typeof SHARE_TARGET_USER
    access: AccessObject
    accessOptions: AccessType[]
    dataSharing: boolean
    onChange: (access: AccessObject) => void
    allUsersItem?: boolean
    disabled?: boolean
    id?: string
    metadataSharing?: boolean
    onRemove?: () => void
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
}: ListItemProps) => {
    const isFetching = useContext(FetchingContext)
    const { isDisconnected: offline } = useDhis2ConnectionStatus()
    const valueToLabel: Record<string, string> = {
        ACCESS_NONE: i18n.t('No access'),
        ACCESS_VIEW_ONLY: i18n.t('View only'),
        ACCESS_VIEW_AND_EDIT: i18n.t('View and edit'),
    }
    const showDataAndMetadataSharing = dataSharing && metadataSharing

    return (
        <>
            <div className="wrapper">
                <div
                    className={
                        showDataAndMetadataSharing
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
                        showDataAndMetadataSharing
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
                                onChange={({
                                    selected,
                                }: {
                                    selected: string
                                }) =>
                                    onChange({
                                        ...access,
                                        data: selected as AccessType,
                                    })
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
                                    }) &&
                                    onRemove && (
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
                                onChange={({
                                    selected,
                                }: {
                                    selected: string
                                }) =>
                                    onChange({
                                        ...access,
                                        metadata: selected as AccessType,
                                    })
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
                                    }) &&
                                    onRemove && (
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
