import React from 'react'
import propTypes from '@dhis2/prop-types'
import { storiesOf } from '@storybook/react'
import { SingleSelect, SingleSelectOption } from '../index.js'

window.onChange = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()

const CustomSingleSelectOption = ({ label, onClick }) => (
    <div onClick={e => onClick({}, e)}>{label}</div>
)

CustomSingleSelectOption.propTypes = {
    label: propTypes.string,
    onClick: propTypes.func,
}

storiesOf('SingleSelect', module)
    .add('With options', () => (
        <SingleSelect className="select">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With options and onChange', () => (
        <SingleSelect className="select" onChange={window.onChange}>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With onFocus', () => (
        <SingleSelect className="select" onFocus={window.onFocus}>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With onBlur', () => (
        <SingleSelect className="select" onBlur={window.onBlur}>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With custom options and onChange', () => (
        <SingleSelect className="select" onChange={window.onChange}>
            <CustomSingleSelectOption value="1" label="option one" />
            <CustomSingleSelectOption value="2" label="option two" />
            <CustomSingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With invalid options', () => (
        <SingleSelect className="select">
            <div>invalid one</div>
            <SingleSelectOption value="1" label="option one" />
            <div>invalid two</div>
            <SingleSelectOption value="2" label="option two" />
            <div>invalid three</div>
            <SingleSelectOption value="3" label="option three" />
            {null}
            {undefined}
            {false}
        </SingleSelect>
    ))
    .add('With invalid filterable options', () => (
        <SingleSelect filterable className="select" noMatchText="No match">
            <div>invalid one</div>
            <SingleSelectOption value="1" label="option one" />
            <div>invalid two</div>
            <SingleSelectOption value="2" label="option two" />
            <div>invalid three</div>
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With initialFocus', () => (
        <SingleSelect className="select" initialFocus />
    ))
    .add('Empty', () => <SingleSelect className="select" />)
    .add('Empty with empty text', () => (
        <SingleSelect className="select" empty="Custom empty text" />
    ))
    .add('Empty with empty component', () => (
        <SingleSelect
            className="select"
            empty={<div className="custom-empty">Custom empty component</div>}
        />
    ))
    .add('With options and loading', () => (
        <SingleSelect className="select" loading>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With options, loading and loading text', () => (
        <SingleSelect className="select" loadingText="Loading options" loading>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With more than ten options', () => (
        <SingleSelect className="select">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
            <SingleSelectOption value="4" label="option four" />
            <SingleSelectOption value="5" label="option five" />
            <SingleSelectOption value="6" label="option six" />
            <SingleSelectOption value="7" label="option seven" />
            <SingleSelectOption value="8" label="option eight" />
            <SingleSelectOption value="9" label="option nine" />
            <SingleSelectOption value="10" label="option ten" />
            <SingleSelectOption value="11" label="option eleven" />
            <SingleSelectOption value="12" label="option twelve" />
        </SingleSelect>
    ))
    .add('With more than three options and a 100px max-height', () => (
        <SingleSelect className="select" maxHeight="100px">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
            <SingleSelectOption value="4" label="option four" />
            <SingleSelectOption value="5" label="option five" />
            <SingleSelectOption value="6" label="option six" />
            <SingleSelectOption value="7" label="option seven" />
            <SingleSelectOption value="8" label="option eight" />
            <SingleSelectOption value="9" label="option nine" />
            <SingleSelectOption value="10" label="option ten" />
            <SingleSelectOption value="11" label="option eleven" />
            <SingleSelectOption value="12" label="option twelve" />
        </SingleSelect>
    ))
    .add('With options, a selection and disabled', () => (
        <SingleSelect
            disabled
            className="select"
            selected={{ value: '1', label: 'option one' }}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With options and disabled', () => (
        <SingleSelect disabled className="select">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With prefix', () => (
        <SingleSelect className="select" prefix="Prefix text">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With prefix and selection', () => (
        <SingleSelect
            className="select"
            prefix="Prefix text"
            selected={{ value: '1', label: 'option one' }}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With placeholder', () => (
        <SingleSelect className="select" placeholder="Placeholder text">
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With placeholder and selection', () => (
        <SingleSelect
            className="select"
            selected={{ value: '1', label: 'option one' }}
            placeholder="Placeholder text"
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With disabled option and onChange', () => (
        <SingleSelect className="select" onChange={window.onChange}>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
            <SingleSelectOption value="4" label="disabled option" disabled />
        </SingleSelect>
    ))
    .add('With options and a selection', () => (
        <SingleSelect
            className="select"
            selected={{ value: '1', label: 'option one' }}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With options, a selection and onChange', () => (
        <SingleSelect
            className="select"
            selected={{ value: '1', label: 'option one' }}
            onChange={window.onChange}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With clear button, selection and onChange', () => (
        <SingleSelect
            clearable
            clearText="Clear"
            className="select"
            selected={{ value: '1', label: 'option one' }}
            onChange={window.onChange}
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
    .add('With filter field', () => (
        <SingleSelect
            filterable
            noMatchText="No match found"
            className="select"
        >
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
        </SingleSelect>
    ))
