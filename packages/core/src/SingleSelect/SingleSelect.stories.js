import propTypes from '@dhis2/prop-types'
import React from 'react'
import { SingleSelect, SingleSelectOption } from '../index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()

const CustomSingleSelectOption = ({ label, onClick }) => (
    <div onClick={e => onClick({}, e)}>{label}</div>
)

CustomSingleSelectOption.propTypes = {
    label: propTypes.string,
    onClick: propTypes.func,
}

export default {
    title: 'Forms/Single Select/Single Select',
    component: SingleSelect,
}

export const WithOptions = () => (
    <SingleSelect className="select">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptions.story = {
    name: 'With options',
}

export const WithOptionsAndOnChange = () => (
    <SingleSelect className="select" onChange={window.onChange}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptionsAndOnChange.story = {
    name: 'With options and onChange',
}

export const WithOnFocus = () => (
    <SingleSelect className="select" onFocus={window.onFocus}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOnFocus.story = {
    name: 'With onFocus',
}

export const WithOnBlur = () => (
    <SingleSelect className="select" onBlur={window.onBlur}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOnBlur.story = {
    name: 'With onBlur',
}

export const WithCustomOptionsAndOnChange = () => (
    <SingleSelect className="select" onChange={window.onChange}>
        <CustomSingleSelectOption value="1" label="option one" />
        <CustomSingleSelectOption value="2" label="option two" />
        <CustomSingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithCustomOptionsAndOnChange.story = {
    name: 'With custom options and onChange',
}

export const WithInvalidOptions = () => (
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
)

WithInvalidOptions.story = {
    name: 'With invalid options',
}

export const WithInvalidFilterableOptions = () => (
    <SingleSelect filterable className="select" noMatchText="No match">
        <div>invalid one</div>
        <SingleSelectOption value="1" label="option one" />
        <div>invalid two</div>
        <SingleSelectOption value="2" label="option two" />
        <div>invalid three</div>
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithInvalidFilterableOptions.story = {
    name: 'With invalid filterable options',
}

export const WithInitialFocus = () => (
    <SingleSelect className="select" initialFocus />
)

WithInitialFocus.story = {
    name: 'With initialFocus',
}

export const Empty = () => <SingleSelect className="select" />

export const EmptyWithEmptyText = () => (
    <SingleSelect className="select" empty="Custom empty text" />
)

EmptyWithEmptyText.story = {
    name: 'Empty with empty text',
}

export const EmptyWithEmptyComponent = () => (
    <SingleSelect
        className="select"
        empty={<div className="custom-empty">Custom empty component</div>}
    />
)

EmptyWithEmptyComponent.story = {
    name: 'Empty with empty component',
}

export const WithOptionsAndLoading = () => (
    <SingleSelect className="select" loading>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptionsAndLoading.story = {
    name: 'With options and loading',
}

export const WithOptionsLoadingAndLoadingText = () => (
    <SingleSelect className="select" loadingText="Loading options" loading>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptionsLoadingAndLoadingText.story = {
    name: 'With options, loading and loading text',
}

export const WithMoreThanTenOptions = () => (
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
)

WithMoreThanTenOptions.story = {
    name: 'With more than ten options',
}

export const WithMoreThanThreeOptionsAndA100PxMaxHeight = () => (
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
)

WithMoreThanThreeOptionsAndA100PxMaxHeight.story = {
    name: 'With more than three options and a 100px max-height',
}

export const WithOptionsASelectionAndDisabled = () => (
    <SingleSelect disabled className="select" selected="1">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptionsASelectionAndDisabled.story = {
    name: 'With options, a selection and disabled',
}

export const WithOptionsAndDisabled = () => (
    <SingleSelect disabled className="select">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptionsAndDisabled.story = {
    name: 'With options and disabled',
}

export const WithPrefix = () => (
    <SingleSelect className="select" prefix="Prefix text">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithPrefix.story = {
    name: 'With prefix',
}

export const WithPrefixAndSelection = () => (
    <SingleSelect className="select" prefix="Prefix text" selected="1">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithPrefixAndSelection.story = {
    name: 'With prefix and selection',
}

export const WithPlaceholder = () => (
    <SingleSelect className="select" placeholder="Placeholder text">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithPlaceholder.story = {
    name: 'With placeholder',
}

export const WithPlaceholderAndSelection = () => (
    <SingleSelect
        className="select"
        selected="1"
        placeholder="Placeholder text"
    >
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithPlaceholderAndSelection.story = {
    name: 'With placeholder and selection',
}

export const WithDisabledOptionAndOnChange = () => (
    <SingleSelect className="select" onChange={window.onChange}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
        <SingleSelectOption value="4" label="disabled option" disabled />
    </SingleSelect>
)

WithDisabledOptionAndOnChange.story = {
    name: 'With disabled option and onChange',
}

export const WithOptionsAndASelection = () => (
    <SingleSelect className="select" selected="1">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptionsAndASelection.story = {
    name: 'With options and a selection',
}

export const WithOptionsASelectionAndOnChange = () => (
    <SingleSelect className="select" selected="1" onChange={window.onChange}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithOptionsASelectionAndOnChange.story = {
    name: 'With options, a selection and onChange',
}

export const WithClearButtonSelectionAndOnChange = () => (
    <SingleSelect
        clearable
        clearText="Clear"
        className="select"
        selected="1"
        onChange={window.onChange}
    >
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithClearButtonSelectionAndOnChange.story = {
    name: 'With clear button, selection and onChange',
}

export const WithFilterField = () => (
    <SingleSelect filterable noMatchText="No match found" className="select">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

WithFilterField.story = {
    name: 'With filter field',
}

export const DefaultPosition = () => (
    <>
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
