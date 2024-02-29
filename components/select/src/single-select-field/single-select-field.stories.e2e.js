import { storiesOf } from '@storybook/react'
import React from 'react'
import { SingleSelectOption } from '../index.js'
import { SingleSelectField } from './index.js'

storiesOf('SingleSelectField', module)
    .add('With label', () => (
        <SingleSelectField label="The label">
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
    .add('With help text', () => (
        <SingleSelectField helpText="The help text">
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
    .add('With validation text', () => (
        <SingleSelectField validationText="The validation text">
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
    .add('With label and required status', () => (
        <SingleSelectField label="The label" required>
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
    .add('With clearable and selected option', () => (
        <SingleSelectField selected="1" clearable>
            <SingleSelectOption key="1" value="1" label="One" />
        </SingleSelectField>
    ))
    .add('With filterable', () => (
        <SingleSelectField filterable>
            <SingleSelectOption key="1" value="1" label="One" />
        </SingleSelectField>
    ))
    .add('With loading', () => <SingleSelectField loading />)
    .add('Without options', () => <SingleSelectField />)
    .add('With hidden parent', () => {
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
    })
