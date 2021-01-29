import propTypes from '@dhis2/prop-types'
import React from 'react'
import { MultiSelect, MultiSelectOption } from '../index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()

const CustomMultiSelectOption = ({ label, onClick }) => (
    <div onClick={e => onClick({}, e)}>{label}</div>
)

CustomMultiSelectOption.propTypes = {
    label: propTypes.string,
    onClick: propTypes.func,
}

export default {
    title: 'Forms/Multi Select/Multi Select',
    component: MultiSelect,
}

export const WithOptions = () => (
    <MultiSelect className="select">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptions.story = {
    name: 'With options',
}

export const WithOptionsAndOnChange = () => (
    <MultiSelect
        className="select"
        onChange={val => console.log(val)}
        selected={['1']}
    >
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsAndOnChange.story = {
    name: 'With options and onChange',
}

export const WithOnFocus = () => (
    <MultiSelect className="select" onFocus={window.onFocus}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOnFocus.story = {
    name: 'With onFocus',
}

export const WithOnBlur = () => (
    <MultiSelect className="select" onBlur={window.onBlur}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOnBlur.story = {
    name: 'With onBlur',
}

export const WithCustomOptionsAndOnChange = () => (
    <MultiSelect className="select" onChange={window.onChange}>
        <CustomMultiSelectOption value="1" label="option one" />
        <CustomMultiSelectOption value="2" label="option two" />
        <CustomMultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithCustomOptionsAndOnChange.story = {
    name: 'With custom options and onChange',
}

export const WithInvalidOptions = () => (
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
)

WithInvalidOptions.story = {
    name: 'With invalid options',
}

export const WithInvalidFilterableOptions = () => (
    <MultiSelect filterable className="select" noMatchText="No match">
        <div>invalid one</div>
        <MultiSelectOption value="1" label="option one" />
        <div>invalid two</div>
        <MultiSelectOption value="2" label="option two" />
        <div>invalid three</div>
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithInvalidFilterableOptions.story = {
    name: 'With invalid filterable options',
}

export const WithInitialFocus = () => (
    <MultiSelect className="select" initialFocus />
)

WithInitialFocus.story = {
    name: 'With initialFocus',
}

export const Empty = () => <MultiSelect className="select" />

export const EmptyWithEmptyText = () => (
    <MultiSelect className="select" empty="Custom empty text" />
)

EmptyWithEmptyText.story = {
    name: 'Empty with empty text',
}

export const EmptyWithEmptyComponent = () => (
    <MultiSelect
        className="select"
        empty={<div className="custom-empty">Custom empty component</div>}
    />
)

EmptyWithEmptyComponent.story = {
    name: 'Empty with empty component',
}

export const WithOptionsAndLoading = () => (
    <MultiSelect className="select" loading>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsAndLoading.story = {
    name: 'With options and loading',
}

export const WithOptionsLoadingAndLoadingText = () => (
    <MultiSelect className="select" loadingText="Loading options" loading>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsLoadingAndLoadingText.story = {
    name: 'With options, loading and loading text',
}

export const WithMoreThanTenOptions = () => (
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
)

WithMoreThanTenOptions.story = {
    name: 'With more than ten options',
}

export const WithMoreThanThreeOptionsAndA100PxMaxHeight = () => (
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
)

WithMoreThanThreeOptionsAndA100PxMaxHeight.story = {
    name: 'With more than three options and a 100px max-height',
}

export const WithOptionsASelectionAndDisabled = () => (
    <MultiSelect disabled className="select" selected={['1']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsASelectionAndDisabled.story = {
    name: 'With options, a selection and disabled',
}

export const WithOptionsAndDisabled = () => (
    <MultiSelect disabled className="select">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsAndDisabled.story = {
    name: 'With options and disabled',
}

export const WithPrefix = () => (
    <MultiSelect className="select" prefix="Prefix text">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithPrefix.story = {
    name: 'With prefix',
}

export const WithPrefixAndSelection = () => (
    <MultiSelect className="select" prefix="Prefix text" selected={['1']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithPrefixAndSelection.story = {
    name: 'With prefix and selection',
}

export const WithPlaceholder = () => (
    <MultiSelect className="select" placeholder="Placeholder text">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithPlaceholder.story = {
    name: 'With placeholder',
}

export const WithPlaceholderAndSelection = () => (
    <MultiSelect
        className="select"
        selected={['1']}
        placeholder="Placeholder text"
    >
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithPlaceholderAndSelection.story = {
    name: 'With placeholder and selection',
}

export const WithDisabledOptionAndOnChange = () => (
    <MultiSelect className="select" onChange={window.onChange}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
        <MultiSelectOption value="4" label="disabled option" disabled />
    </MultiSelect>
)

WithDisabledOptionAndOnChange.story = {
    name: 'With disabled option and onChange',
}

export const WithOptionsAndASelection = () => (
    <MultiSelect className="select" selected={['1']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsAndASelection.story = {
    name: 'With options and a selection',
}

export const WithOptionsASelectionAndOnChange = () => (
    <MultiSelect className="select" selected={['1']} onChange={window.onChange}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsASelectionAndOnChange.story = {
    name: 'With options, a selection and onChange',
}

export const WithOptionsAndMultipleSelections = () => (
    <MultiSelect className="select" selected={['1', '2']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithOptionsAndMultipleSelections.story = {
    name: 'With options and multiple selections',
}

export const WithClearButtonSelectionAndOnChange = () => (
    <MultiSelect
        clearable
        clearText="Clear"
        className="select"
        selected={['1']}
        onChange={window.onChange}
    >
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithClearButtonSelectionAndOnChange.story = {
    name: 'With clear button, selection and onChange',
}

export const WithFilterField = () => (
    <MultiSelect filterable noMatchText="No match found" className="select">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

WithFilterField.story = {
    name: 'With filter field',
}

export const DefaultPosition = () => (
    <>
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
        <style jsx>{`
            :global(#root) {
                margin-bottom: 2000px;
            }
        `}</style>
    </>
)

DefaultPosition.story = {
    name: 'Default position',
}

export const FlippedPosition = () => (
    <>
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
        <style jsx>{`
            :global(html),
            :global(body),
            :global(#root) {
                position: relative;
                height: 500px;
                max-height: 500px;
            }
            :global(#root) {
                padding-top: 400px !important;
            }
        `}</style>
    </>
)

FlippedPosition.story = {
    name: 'Flipped position',
}

export const ShiftedIntoView = () => (
    <>
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
        <style jsx>{`
            :global(html),
            :global(body),
            :global(#root) {
                position: relative;
                height: 300px !important;
                max-height: 300px;
            }
            :global(#root) {
                padding-top: 130px !important;
            }
        `}</style>
    </>
)

ShiftedIntoView.story = {
    name: 'Shifted into view',
}
