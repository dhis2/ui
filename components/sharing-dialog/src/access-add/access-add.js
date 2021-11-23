import { Button } from '@dhis2-ui/button'
import { SingleSelectField, SingleSelectOption } from '@dhis2-ui/select'
import { useOnlineStatus } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
import { SharingAutocomplete } from '../autocomplete/index.js'
import { ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT } from '../constants.js'
import { FetchingContext } from '../fetching-context/index.js'
import i18n from '../locales/index.js'
import { Title } from '../text/index.js'

export const AccessAdd = ({ onAdd }) => {
    const isFetching = useContext(FetchingContext)
    const [entity, setEntity] = useState(null)
    const [access, setAccess] = useState('')
    const { offline } = useOnlineStatus()

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({
            type: entity.type,
            id: entity.id,
            name: entity.displayName || entity.name,
            access,
        })

        setEntity(null)
        setAccess('')
    }

    const accessOptions = [
        {
            value: ACCESS_VIEW_ONLY,
            label: i18n.t('View only'),
        },
        {
            value: ACCESS_VIEW_AND_EDIT,
            label: i18n.t('View and edit'),
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
                    <SingleSelectField
                        label={i18n.t('Access level')}
                        placeholder={i18n.t('Select a level')}
                        disabled={offline}
                        selected={access}
                        helpText={
                            offline ? i18n.t('Not available offline') : ''
                        }
                        onChange={({ selected }) => setAccess(selected)}
                    >
                        {accessOptions.map(({ value, label }) => (
                            <SingleSelectOption
                                key={value}
                                label={label}
                                value={value}
                                active={value === access}
                            />
                        ))}
                    </SingleSelectField>
                </div>
                <Button
                    type="submit"
                    disabled={offline || isFetching || !entity || !access}
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
}
