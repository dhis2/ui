import React from 'react'

import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'

import { SingleSelect, SingleSelectOption } from '@dhis2/ui-core'
import { accessStrings, ACCESS_NONE } from './sharingConstants'
import { accessSelectStyles } from './SharingDialog.styles'

export const AccessSelect = ({ access, onChange, showNoAccessOption }) => (
    <SingleSelect
        className="share-select"
        placeholder={i18n.t('Select access')}
        selected={access}
        onChange={({ selected }) => onChange(selected)}
    >
        <style jsx>{accessSelectStyles}</style>
        {Object.entries(accessStrings).map(
            ([value, strings]) =>
                (value !== ACCESS_NONE || showNoAccessOption) && (
                    <SingleSelectOption
                        key={value}
                        label={strings.option}
                        value={value}
                    />
                )
        )}
    </SingleSelect>
)

AccessSelect.propTypes = {
    access: PropTypes.string,
    showNoAccessOption: PropTypes.bool,
    onChange: PropTypes.func,
}
