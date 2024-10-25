import { useDhis2ConnectionStatus } from '@dhis2/app-runtime'
import { colors, spacers } from '@dhis2/ui-constants'
import { Button } from '@dhis2-ui/button'
import { SingleSelectField, SingleSelectOption } from '@dhis2-ui/select'
import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
import { SharingAutocomplete } from '../autocomplete/index.js'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../constants.js'
import { FetchingContext } from '../fetching-context/index.js'
import i18n from '../locales/index.js'
import { Title } from '../text/index.js'

export const AccessAdd = ({ onAdd, dataSharing }) => {
    const isFetching = useContext(FetchingContext)
    const [entity, setEntity] = useState(null)
    const [dataAccess, setDataAccess] = useState('')
    const [metadataAccess, setMetadataAccess] = useState('')
    const { isDisconnected: offline } = useDhis2ConnectionStatus()

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({
            type: entity.type,
            id: entity.id,
            name: entity.displayName || entity.name,
            access: { data: dataAccess, metadata: metadataAccess },
        })

        setEntity(null)
        setDataAccess('')
        setMetadataAccess('')
    }

    const accessOptionsMetadata = [
        {
            value: ACCESS_VIEW_ONLY,
            label: i18n.t('View only'),
        },
        {
            value: ACCESS_VIEW_AND_EDIT,
            label: i18n.t('View and edit'),
        },
    ]

    const accessOptionsData = [
        ...accessOptionsMetadata,
        {
            value: ACCESS_NONE,
            label: i18n.t('No access'),
        },
    ]

    return (
        <>
            <Title>{i18n.t('Give access to a user or group')}</Title>
            <form onSubmit={onSubmit}>
                <SharingAutocomplete
                    selected={entity?.displayName || entity?.name}
                    onSelection={setEntity}
                />
                <div className="select-wrapper">
                    {dataSharing && (
                        <SingleSelectField
                            label={i18n.t('Data access level')}
                            placeholder={i18n.t('Choose a level')}
                            disabled={offline}
                            selected={dataAccess}
                            helpText={
                                offline ? i18n.t('Not available offline') : ''
                            }
                            onChange={({ selected }) => setDataAccess(selected)}
                        >
                            {accessOptionsData.map(({ value, label }) => (
                                <SingleSelectOption
                                    key={value}
                                    label={label}
                                    value={value}
                                    active={value === dataAccess}
                                />
                            ))}
                        </SingleSelectField>
                    )}
                </div>
                <div className="select-wrapper">
                    <SingleSelectField
                        label={
                            dataSharing
                                ? i18n.t('Metadata access level')
                                : i18n.t('Access level')
                        }
                        placeholder={i18n.t('Choose a level')}
                        disabled={offline}
                        selected={metadataAccess}
                        helpText={
                            offline ? i18n.t('Not available offline') : ''
                        }
                        onChange={({ selected }) => setMetadataAccess(selected)}
                    >
                        {(dataSharing
                            ? accessOptionsData
                            : accessOptionsMetadata
                        ).map(({ value, label }) => (
                            <SingleSelectOption
                                key={value}
                                label={label}
                                value={value}
                                active={value === metadataAccess}
                            />
                        ))}
                    </SingleSelectField>
                </div>
                <Button
                    type="submit"
                    disabled={
                        offline ||
                        isFetching ||
                        !entity ||
                        (dataSharing && !dataAccess) ||
                        !metadataAccess ||
                        (dataAccess === ACCESS_NONE &&
                            metadataAccess === ACCESS_NONE)
                    }
                >
                    {i18n.t('Give access')}
                </Button>
            </form>
            <style jsx>{`
                form {
                    background-color: ${colors.grey100};
                    color: ${colors.grey900};
                    margin-bottom: 21px;
                    padding: 8px 12px;
                    border-radius: 5px;
                    display: flex;
                    align-items: flex-end;
                    gap: ${spacers.dp8};
                }

                .select-wrapper {
                    flex: 1;
                }
            `}</style>
        </>
    )
}

AccessAdd.propTypes = {
    onAdd: PropTypes.func.isRequired,
    dataSharing: PropTypes.bool,
}
