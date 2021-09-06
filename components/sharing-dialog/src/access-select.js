import { MenuDivider, MenuItem } from '@dhis2-ui/menu'
import { SingleSelectField } from '@dhis2-ui/select'
import { Tooltip } from '@dhis2-ui/tooltip'
import { useOnlineStatus } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import React from 'react'
import { accessStrings } from './sharing-constants.js'
import { accessSelectStyles } from './sharing-dialog.styles.js'

export const AccessSelect = ({
    label,
    placeholder,
    prefix,
    access,
    accessOptions,
    showRemoveOption,
    disabled,
    onChange,
}) => {
    const { offline } = useOnlineStatus()

    const renderSingleSelectField = () => (
        <SingleSelectField
            label={label}
            placeholder={placeholder}
            prefix={prefix}
            disabled={offline || disabled}
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
    )

    return (
        <div className="share-select">
            <style jsx>{accessSelectStyles}</style>
            {offline ? (
                <Tooltip content={i18n.t('Not available offline')}>
                    {renderSingleSelectField()}
                </Tooltip>
            ) : (
                renderSingleSelectField()
            )}
        </div>
    )
}

AccessSelect.propTypes = {
    accessOptions: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    access: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    showRemoveOption: PropTypes.bool,
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
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    active: PropTypes.bool,
    destructive: PropTypes.bool,
    onClick: PropTypes.func,
}
