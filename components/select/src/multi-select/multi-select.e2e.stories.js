import { Button } from '@dhis2-ui/button'
import { Modal, ModalTitle, ModalContent } from '@dhis2-ui/modal'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { MultiSelectOption } from '../index.js'
import { MultiSelect } from './multi-select.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()

const CustomMultiSelectOption = ({ label, onClick }) => (
    <div onClick={(e) => onClick({}, e)}>{label}</div>
)

CustomMultiSelectOption.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
}

const options = [
    { name: 'Hello', id: '1' },
    { name: 'world', id: '2' },
    { name: 'foo', id: '3' },
    { name: 'bar', id: '4' },
]

export default { title: 'MultiSelect' }
export const WithOptions = () => (
    <MultiSelect className="select">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOptionsAndOnChange = () => (
    <MultiSelect className="select" onChange={window.onChange}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOnFocus = () => (
    <MultiSelect className="select" onFocus={window.onFocus}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOnBlur = () => (
    <MultiSelect className="select" onBlur={window.onBlur}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithCustomOptionsAndOnChange = () => (
    <MultiSelect className="select" onChange={window.onChange}>
        <CustomMultiSelectOption value="1" label="option one" />
        <CustomMultiSelectOption value="2" label="option two" />
        <CustomMultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
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
export const WithInitialFocus = () => (
    <MultiSelect className="select" initialFocus />
)
export const Empty = () => <MultiSelect className="select" />
export const EmptyWithEmptyText = () => (
    <MultiSelect className="select" empty="Custom empty text" />
)
export const EmptyWithEmptyComponent = () => (
    <MultiSelect
        className="select"
        empty={<div className="custom-empty">Custom empty component</div>}
    />
)
export const WithOptionsAndLoading = () => (
    <MultiSelect className="select" loading>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOptionsLoadingAndLoadingText = () => (
    <MultiSelect className="select" loadingText="Loading options" loading>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
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
export const WithMoreThanThreeOptionsAndA100pxMaxHeight = () => (
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
export const WithOptionsASelectionAndDisabled = () => (
    <MultiSelect disabled className="select" selected={['1']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOptionsAndDisabled = () => (
    <MultiSelect disabled className="select">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithPrefix = () => (
    <MultiSelect className="select" prefix="Prefix text">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithPrefixAndSelection = () => (
    <MultiSelect className="select" prefix="Prefix text" selected={['1']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithPlaceholder = () => (
    <MultiSelect className="select" placeholder="Placeholder text">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
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
export const WithDisabledOptionAndOnChange = () => (
    <MultiSelect className="select" onChange={window.onChange}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
        <MultiSelectOption value="4" label="disabled option" disabled />
    </MultiSelect>
)
export const WithOptionsAndASelection = () => (
    <MultiSelect className="select" selected={['1']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOptionsASelectionAndOnChange = () => (
    <MultiSelect
        className="select"
        selected={['1']}
        onChange={window.onChange}
    >
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOptionsAndMultipleSelections = () => (
    <MultiSelect className="select" selected={['1', '2']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
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
export const WithFilterField = () => (
    <MultiSelect filterable noMatchText="No match found" className="select">
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
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
                    height: 2000px !important;
                }
            `}</style>
    </>
)
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
export const WithDuplicateSelectedOptionValues = () => (
    <MultiSelect className="select" selected={['1']}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="1" label="option one a" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
export const WithOptionsThatCanBeAddedToTheInput = () => {
    const [values, setValues] = React.useState([])
    return (
        <>
            <MultiSelect
                className="select"
                selected={values}
                onChange={({ selected }) => {
                    window.onChange && window.onChange({ selected })
                    setValues(selected)
                }}
            >
                <MultiSelectOption value="1" label="option one" />
                <MultiSelectOption value="2" label="option two" />
                <MultiSelectOption value="3" label="option three" />
            </MultiSelect>
            <style jsx>{`
            :global(#root) {
                        height: 2000px !important;
                    }
                `}</style>
        </>
    )
}
export const MenuWidthChanging = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="App">
            <Modal dataTest={'myModal'}>
                <ModalTitle>Modal</ModalTitle>
                <ModalContent>
                    <div style={{ display: 'flex' }}>
                        {toggle && (
                            <div
                                style={{
                                    padding: '30px',
                                    border: '1px solid green',
                                }}
                                className="toggler"
                            >
                                Stuff
                            </div>
                        )}
                        <div style={{ flexGrow: 1 }}>
                            <MultiSelect
                                onChange={({ selected }) =>
                                        console.log(
                                    'size changed to ' + selected
                                )
                                }
                            >
                                {options.map(({ name, id }) => (
                                    <MultiSelectOption
                                        key={id}
                                        value={id}
                                        label={name}
                                    />
                                ))}
                            </MultiSelect>
                        </div>
                        {toggle && (
                            <div
                                style={{
                                    padding: '30px',
                                    border: '1px solid green',
                                }}
                                className="toggler"
                            >
                                Stuff
                            </div>
                        )}
                    </div>
                    <Button onClick={() => setToggle(!toggle)}>
                        Toggle
                    </Button>
                </ModalContent>
            </Modal>
        </div>
    )
}
