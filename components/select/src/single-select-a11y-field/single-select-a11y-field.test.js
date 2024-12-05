import '@testing-library/jest-dom'
import { Field } from '@dhis2-ui/field'
import { render } from '@testing-library/react'
import React from 'react'
import { SingleSelectA11y } from '../single-select-a11y/single-select-a11y.js'
import { SingleSelectA11yField } from './single-select-a11y-field.js'

jest.mock('../single-select-a11y/single-select-a11y.js', () => ({
    SingleSelectA11y: jest.fn(() => <div />),
}))

jest.mock('@dhis2-ui/field', () => ({
    Field: jest.fn(({ children }) => children),
}))

describe('<SingleSelectA11yField />', () => {
    afterEach(() => {
        Field.mockClear()
        SingleSelectA11y.mockClear()
    })

    it('should forward props to the SingleSelectA11y component', () => {
        const options = []
        const optionComponent = () => null
        const onChange = () => null
        const onBlur = () => null
        const onEndReached = () => null
        const onFilterChange = () => null
        const onFocus = () => null

        render(
            <SingleSelectA11yField
                label="Label text"
                // Props that'll be passed to SingleSelectA11y
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

        expect(SingleSelectA11y.mock.calls[0][0].name).toBe('foo')
        expect(SingleSelectA11y.mock.calls[0][0].options).toBe(options)
        expect(SingleSelectA11y.mock.calls[0][0].onChange).toBe(onChange)
        expect(SingleSelectA11y.mock.calls[0][0].autoFocus).toBe(false)
        expect(SingleSelectA11y.mock.calls[0][0].className).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].clearText).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].clearable).toBe(false)
        expect(SingleSelectA11y.mock.calls[0][0].optionComponent).toBe(
            optionComponent
        )
        expect(SingleSelectA11y.mock.calls[0][0].dataTest).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].dense).toBe(false)
        expect(SingleSelectA11y.mock.calls[0][0].disabled).toBe(false)
        expect(SingleSelectA11y.mock.calls[0][0].empty).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].filterHelpText).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].filterLabel).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].filterPlaceholder).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].filterValue).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].filterable).toBe(false)
        expect(SingleSelectA11y.mock.calls[0][0].labelledBy).toBe('foo-label')
        expect(SingleSelectA11y.mock.calls[0][0].loading).toBe(false)
        expect(SingleSelectA11y.mock.calls[0][0].menuLoadingText).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].menuMaxHeight).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].noMatchText).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].optionUpdateStrategy).toBe(
            'off'
        )
        expect(SingleSelectA11y.mock.calls[0][0].placeholder).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].prefix).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].tabIndex).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].valid).toBe(true)
        expect(SingleSelectA11y.mock.calls[0][0].value).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].valueLabel).toBe('')
        expect(SingleSelectA11y.mock.calls[0][0].onBlur).toBe(onBlur)
        expect(SingleSelectA11y.mock.calls[0][0].onEndReached).toBe(
            onEndReached
        )
        expect(SingleSelectA11y.mock.calls[0][0].onFilterChange).toBe(
            onFilterChange
        )
        expect(SingleSelectA11y.mock.calls[0][0].onFocus).toBe(onFocus)
    })

    it('should pass the right props to the Field component', () => {
        render(
            <SingleSelectA11yField
                label="Label text"
                className="class name"
                dataTest="data test"
                disabled={true}
                required={true}
                helpText="Help text"
                validationText="Validation text"
                valid={true}
                // Props required by SingleSelectA11y
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
