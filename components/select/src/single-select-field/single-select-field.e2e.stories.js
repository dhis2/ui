import React from 'react'
import { SingleSelectOption } from '../index.js'
import { SingleSelectField } from './index.js'

export default { title: 'SingleSelectField' }
export const WithLabel = () => (
    <SingleSelectField label="The label">
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithHelpText = () => (
    <SingleSelectField helpText="The help text">
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithValidationText = () => (
    <SingleSelectField validationText="The validation text">
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithLabelAndRequiredStatus = () => (
    <SingleSelectField label="The label" required>
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithClearableAndSelectedOption = () => (
    <SingleSelectField selected="1" clearable>
        <SingleSelectOption key="1" value="1" label="One" />
    </SingleSelectField>
)
export const WithFilterable = () => (
    <SingleSelectField filterable>
        <SingleSelectOption key="1" value="1" label="One" />
    </SingleSelectField>
)
export const WithLoading = () => <SingleSelectField loading />
export const WithoutOptions = () => <SingleSelectField />

export const WithHiddenParent = () => {
    return (
        <>
            <div className="container">
                <div className="hoverSpan">
                    <span>Hover over me</span>
                    <div className="hiddenSelect">
                        <SingleSelectField
                            dataTest="hoverable-select-field"
                            label="Choose something"
                            onChange={() => {}}
                        >
                            <SingleSelectOption value="1" label="one" />
                            <SingleSelectOption value="2" label="two" />
                        </SingleSelectField>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                }
                .hiddenSelect {
                    display: none;
                }
                .hoverSpan:hover .hiddenSelect {
                    display: block;
                }
            `}</style>
        </>
    )
}
