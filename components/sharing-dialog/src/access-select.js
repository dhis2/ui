import { SingleSelectField } from '@dhis2-ui/select'
import { useOnlineStatus } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import { ConditionalTooltip } from './conditional-tooltip.js'
import { CustomSingleSelectOption } from './custom-single-select-option.js'
import i18n from './locales/index.js'
import { accessStrings } from './sharing-constants.js'

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

    return (
        <div className="share-select">
            <ConditionalTooltip
                show={offline}
                content={i18n.t('Not available offline')}
            >
                <SingleSelectField
                    label={label}
                    placeholder={placeholder}
                    prefix={prefix}
                    disabled={offline || disabled}
                    selected={access}
                    onChange={({ selected }) => onChange(selected)}
                >
                    {accessOptions.map((value) => (
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
            </ConditionalTooltip>
            <style jsx>{`
                .share-select {
                    flex: 1;
                }
            `}</style>
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
