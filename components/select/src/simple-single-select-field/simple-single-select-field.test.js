import '@testing-library/jest-dom'
import { Field } from '@dhis2-ui/field'
import { render } from '@testing-library/react'
import React from 'react'
import { SimpleSingleSelect } from '../simple-single-select/simple-single-select.js'
import { SimpleSingleSelectField } from './simple-single-select-field.js'

jest.mock('../simple-single-select/simple-single-select.js', () => ({
    SimpleSingleSelect: jest.fn(() => <div />),
}))

jest.mock('@dhis2-ui/field', () => ({
    Field: jest.fn(({ children }) => children),
}))

describe('<SimpleSingleSelectField />', () => {
    afterEach(() => {
        Field.mockClear()
        SimpleSingleSelect.mockClear()
    })

    it('should forward props to the SimpleSingleSelect component', () => {
        const options = []
        const optionComponent = () => null
        const onChange = () => null
        const onBlur = () => null
        const onEndReached = () => null
        const onFilterChange = () => null
        const onFocus = () => null

        render(
            <SimpleSingleSelectField
                label="Label text"
                // Props that'll be passed to SimpleSingleSelect
                name="foo"
                options={options}
                onChange={onChange}
                autoFocus={false}
                className=""
                clearText=""
                clearable={false}
                optionComponent={optionComponent}
                dataTest=""
                dense={false}
                disabled={false}
                empty=""
                filterHelpText=""
                filterLabel=""
                filterPlaceholder=""
                filterValue=""
                filterable={false}
                loading={false}
                menuLoadingText=""
                menuMaxHeight=""
                noMatchText=""
                optionUpdateStrategy="off"
                placeholder=""
                prefix=""
                tabIndex=""
                valid={true}
                value=""
                valueLabel=""
                onBlur={onBlur}
                onEndReached={onEndReached}
                onFilterChange={onFilterChange}
                onFocus={onFocus}
            />
        )

        expect(SimpleSingleSelect.mock.calls[0][0].name).toBe('foo')
        expect(SimpleSingleSelect.mock.calls[0][0].options).toBe(options)
        expect(SimpleSingleSelect.mock.calls[0][0].onChange).toBe(onChange)
        expect(SimpleSingleSelect.mock.calls[0][0].autoFocus).toBe(false)
        expect(SimpleSingleSelect.mock.calls[0][0].className).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].clearText).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].clearable).toBe(false)
        expect(SimpleSingleSelect.mock.calls[0][0].optionComponent).toBe(
            optionComponent
        )
        expect(SimpleSingleSelect.mock.calls[0][0].dataTest).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].dense).toBe(false)
        expect(SimpleSingleSelect.mock.calls[0][0].disabled).toBe(false)
        expect(SimpleSingleSelect.mock.calls[0][0].empty).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].filterHelpText).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].filterLabel).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].filterPlaceholder).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].filterValue).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].filterable).toBe(false)
        expect(SimpleSingleSelect.mock.calls[0][0].labelledBy).toBe('foo-label')
        expect(SimpleSingleSelect.mock.calls[0][0].loading).toBe(false)
        expect(SimpleSingleSelect.mock.calls[0][0].menuLoadingText).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].menuMaxHeight).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].noMatchText).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].optionUpdateStrategy).toBe(
            'off'
        )
        expect(SimpleSingleSelect.mock.calls[0][0].placeholder).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].prefix).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].tabIndex).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].valid).toBe(true)
        expect(SimpleSingleSelect.mock.calls[0][0].value).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].valueLabel).toBe('')
        expect(SimpleSingleSelect.mock.calls[0][0].onBlur).toBe(onBlur)
        expect(SimpleSingleSelect.mock.calls[0][0].onEndReached).toBe(
            onEndReached
        )
        expect(SimpleSingleSelect.mock.calls[0][0].onFilterChange).toBe(
            onFilterChange
        )
        expect(SimpleSingleSelect.mock.calls[0][0].onFocus).toBe(onFocus)
    })

    it('should pass the right props to the Field component', () => {
        render(
            <SimpleSingleSelectField
                label="Label text"
                className="class name"
                dataTest="data test"
                disabled={true}
                required={true}
                helpText="Help text"
                validationText="Validation text"
                valid={true}
                // Props required by SimpleSingleSelect
                name="foo"
                options={[]}
                onChange={() => null}
            />
        )

        expect(Field.mock.calls[0][0].className).toBe('class name')
        expect(Field.mock.calls[0][0].dataTest).toBe('data test')
        expect(Field.mock.calls[0][0].disabled).toBe(true)
        expect(Field.mock.calls[0][0].required).toBe(true)
        expect(Field.mock.calls[0][0].labelId).toBe('foo-label')
        expect(Field.mock.calls[0][0].label).toBe('Label text')
        expect(Field.mock.calls[0][0].helpText).toBe('Help text')
        expect(Field.mock.calls[0][0].validationText).toBe('Validation text')
        expect(Field.mock.calls[0][0].error).toBe(undefined)
        expect(Field.mock.calls[0][0].warning).toBe(undefined)
        expect(Field.mock.calls[0][0].valid).toBe(true)
    })
})
