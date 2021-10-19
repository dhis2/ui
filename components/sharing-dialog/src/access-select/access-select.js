import { SingleSelectField } from '@dhis2-ui/select'
import { useOnlineStatus } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import { ConditionalTooltip } from '../conditional-tooltip.js'
import i18n from '../locales/index.js'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../sharing-constants.js'
import { CustomSingleSelectOption } from './custom-single-select-option.js'

const accessToLabel = {
    [ACCESS_NONE]: i18n.t('No access'),
    [ACCESS_VIEW_ONLY]: i18n.t('View only'),
    [ACCESS_VIEW_AND_EDIT]: i18n.t('View and edit'),
}

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
                            label={accessToLabel[value]}
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
