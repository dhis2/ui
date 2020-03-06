import React from 'react'
import propTypes from '@dhis2/prop-types'
import { storiesOf } from '@storybook/react'
import { MultiSelect, MultiSelectOption } from '../index.js'

window.onChange = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()

const CustomMultiSelectOption = ({ label, onClick }) => (
    <div onClick={e => onClick({}, e)}>{label}</div>
)

CustomMultiSelectOption.propTypes = {
    label: propTypes.string,
    onClick: propTypes.func,
}

storiesOf('MultiSelect', module)
    .add('With options', () => (
        <MultiSelect className="select">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options and onChange', () => (
        <MultiSelect className="select" onChange={window.onChange}>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With onFocus', () => (
        <MultiSelect className="select" onFocus={window.onFocus}>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With onBlur', () => (
        <MultiSelect className="select" onBlur={window.onBlur}>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With custom options and onChange', () => (
        <MultiSelect className="select" onChange={window.onChange}>
            <CustomMultiSelectOption value="1" label="option one" />
            <CustomMultiSelectOption value="2" label="option two" />
            <CustomMultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With invalid options', () => (
        <MultiSelect className="select">
            <div>invalid one</div>
            <MultiSelectOption value="1" label="option one" />
            <div>invalid two</div>
            <MultiSelectOption value="2" label="option two" />
            <div>invalid three</div>
            <MultiSelectOption value="3" label="option three" />
            {null}
            {undefined}
            {false}
        </MultiSelect>
    ))
    .add('With invalid filterable options', () => (
        <MultiSelect filterable className="select" noMatchText="No match">
            <div>invalid one</div>
            <MultiSelectOption value="1" label="option one" />
            <div>invalid two</div>
            <MultiSelectOption value="2" label="option two" />
            <div>invalid three</div>
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With initialFocus', () => (
        <MultiSelect className="select" initialFocus />
    ))
    .add('Empty', () => <MultiSelect className="select" />)
    .add('Empty with empty text', () => (
        <MultiSelect className="select" empty="Custom empty text" />
    ))
    .add('Empty with empty component', () => (
        <MultiSelect
            className="select"
            empty={<div className="custom-empty">Custom empty component</div>}
        />
    ))
    .add('With options and loading', () => (
        <MultiSelect className="select" loading>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options, loading and loading text', () => (
        <MultiSelect className="select" loadingText="Loading options" loading>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With more than ten options', () => (
        <MultiSelect className="select">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
            <MultiSelectOption value="4" label="option four" />
            <MultiSelectOption value="5" label="option five" />
            <MultiSelectOption value="6" label="option six" />
            <MultiSelectOption value="7" label="option seven" />
            <MultiSelectOption value="8" label="option eight" />
            <MultiSelectOption value="9" label="option nine" />
            <MultiSelectOption value="10" label="option ten" />
            <MultiSelectOption value="11" label="option eleven" />
            <MultiSelectOption value="12" label="option twelve" />
        </MultiSelect>
    ))
    .add('With more than three options and a 100px max-height', () => (
        <MultiSelect className="select" maxHeight="100px">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
            <MultiSelectOption value="4" label="option four" />
            <MultiSelectOption value="5" label="option five" />
            <MultiSelectOption value="6" label="option six" />
            <MultiSelectOption value="7" label="option seven" />
            <MultiSelectOption value="8" label="option eight" />
            <MultiSelectOption value="9" label="option nine" />
            <MultiSelectOption value="10" label="option ten" />
            <MultiSelectOption value="11" label="option eleven" />
            <MultiSelectOption value="12" label="option twelve" />
        </MultiSelect>
    ))
    .add('With options, a selection and disabled', () => (
        <MultiSelect
            disabled
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options and disabled', () => (
        <MultiSelect disabled className="select">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With prefix', () => (
        <MultiSelect className="select" prefix="Prefix text">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With prefix and selection', () => (
        <MultiSelect
            className="select"
            prefix="Prefix text"
            selected={[{ value: '1', label: 'option one' }]}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With placeholder', () => (
        <MultiSelect className="select" placeholder="Placeholder text">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With placeholder and selection', () => (
        <MultiSelect
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
            placeholder="Placeholder text"
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With disabled option and onChange', () => (
        <MultiSelect className="select" onChange={window.onChange}>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
            <MultiSelectOption value="4" label="disabled option" disabled />
        </MultiSelect>
    ))
    .add('With options and a selection', () => (
        <MultiSelect
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options, a selection and onChange', () => (
        <MultiSelect
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
            onChange={window.onChange}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With options and multiple selections', () => (
        <MultiSelect
            className="select"
            selected={[
                { value: '1', label: 'option one' },
                { value: '2', label: 'option two' },
            ]}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With clear button, selection and onChange', () => (
        <MultiSelect
            clearable
            clearText="Clear"
            className="select"
            selected={[{ value: '1', label: 'option one' }]}
            onChange={window.onChange}
        >
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
    .add('With filter field', () => (
        <MultiSelect filterable noMatchText="No match found" className="select">
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
        </MultiSelect>
    ))
