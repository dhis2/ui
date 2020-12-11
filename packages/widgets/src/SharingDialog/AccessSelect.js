import React from 'react'

import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'

import { MenuDivider, MenuItem } from '@dhis2/ui'
import { SingleSelectField } from '../index.js'

import { accessStrings } from './sharingConstants'
import { accessSelectStyles } from './SharingDialog.styles'

export const AccessSelect = ({
    label,
    placeholder,
    prefix,
    access,
    accessOptions,
    showRemoveOption,
    disabled,
    onChange,
}) => (
    <div className="share-select">
        <style jsx>{accessSelectStyles}</style>
        <SingleSelectField
            label={label}
            placeholder={placeholder}
            prefix={prefix}
            disabled={disabled}
            selected={access}
            onChange={({ selected }) => onChange(selected)}
        >
            {accessOptions.map(value => (
                <CustomSingleSelectOption
                    key={value}
                    label={accessStrings[value].option}
                    value={value}
                    active={value === access}
                />
            ))}
            {showRemoveOption && (
                <CustomSingleSelectOption
                    key="remove"
                    label={i18n.t('Remove access')}
                    value="remove"
                    destructive
                />
            )}
        </SingleSelectField>
    </div>
)

AccessSelect.propTypes = {
    access: PropTypes.string,
    accessOptions: PropTypes.array,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    showRemoveOption: PropTypes.bool,
    onChange: PropTypes.func,
}

const CustomSingleSelectOption = ({
    label,
    value,
    active,
    destructive,
    onClick,
}) => (
    <>
        {destructive && <MenuDivider dense />}
        <MenuItem
            label={label}
            value={value}
            active={active}
            destructive={destructive}
            onClick={(_, e) => onClick({ selected: value }, e)}
            dense
        />
    </>
)

CustomSingleSelectOption.propTypes = {
    active: PropTypes.bool,
    destructive: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
}
