import { Button } from '@dhis2-ui/button'
import { Modal, ModalTitle, ModalContent } from '@dhis2-ui/modal'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { SingleSelectOption } from '../index.js'
import { SingleSelect } from './index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()

const CustomSingleSelectOption = ({ label, onClick }) => (
    <div onClick={(e) => onClick({}, e)}>{label}</div>
)

CustomSingleSelectOption.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
}

const options = [
    { name: 'Hello', id: '1' },
    { name: 'world', id: '2' },
    { name: 'foo', id: '3' },
    { name: 'bar', id: '4' },
]

export default { title: 'SingleSelect' }
export const WithOptions = () => (
    <SingleSelect className="select">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithOptionsAndOnChange = () => (
    <SingleSelect className="select" onChange={window.onChange}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithOnFocus = () => (
    <SingleSelect className="select" onFocus={window.onFocus}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithOnBlur = () => (
    <SingleSelect className="select" onBlur={window.onBlur}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithCustomOptionsAndOnChange = () => (
    <SingleSelect className="select" onChange={window.onChange}>
        <CustomSingleSelectOption value="1" label="option one" />
        <CustomSingleSelectOption value="2" label="option two" />
        <CustomSingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
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
export const WithInitialFocus = () => (
    <SingleSelect className="select" initialFocus />
)
export const Empty = () => <SingleSelect className="select" />
export const EmptyWithEmptyText = () => (
    <SingleSelect className="select" empty="Custom empty text" />
)
export const EmptyWithEmptyComponent = () => (
    <SingleSelect
        className="select"
        empty={<div className="custom-empty">Custom empty component</div>}
    />
)
export const WithOptionsAndLoading = () => (
    <SingleSelect className="select" loading>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithOptionsLoadingAndLoadingText = () => (
    <SingleSelect className="select" loadingText="Loading options" loading>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
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
export const WithMoreThanThreeOptionsAndA100pxMaxHeight = () => (
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
export const WithOptionsASelectionAndDisabled = () => (
    <SingleSelect disabled className="select" selected="1">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithOptionsAndDisabled = () => (
    <SingleSelect disabled className="select">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithPrefix = () => (
    <SingleSelect className="select" prefix="Prefix text">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithPrefixAndSelection = () => (
    <SingleSelect className="select" prefix="Prefix text" selected="1">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithPlaceholder = () => (
    <SingleSelect className="select" placeholder="Placeholder text">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
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
export const WithDisabledOptionAndOnChange = () => (
    <SingleSelect className="select" onChange={window.onChange}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
        <SingleSelectOption value="4" label="disabled option" disabled />
    </SingleSelect>
)
export const WithOptionsAndASelection = () => (
    <SingleSelect className="select" selected="1">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
export const WithOptionsASelectionAndOnChange = () => (
    <SingleSelect className="select" selected="1" onChange={window.onChange}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
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
export const WithFilterField = () => (
    <SingleSelect filterable noMatchText="No match found" className="select">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
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
export const WithDuplicateSelectedOptionValues = () => (
    <SingleSelect className="select" selected="1">
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="1" label="option one a" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
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
                            <SingleSelect
                                onChange={({ selected }) =>
                                    console.log('size changed to ' + selected)
                                }
                            >
                                {options.map(({ name, id }) => (
                                    <SingleSelectOption
                                        key={id}
                                        value={id}
                                        label={name}
                                    />
                                ))}
                            </SingleSelect>
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
                    <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
                </ModalContent>
            </Modal>
        </div>
    )
}
