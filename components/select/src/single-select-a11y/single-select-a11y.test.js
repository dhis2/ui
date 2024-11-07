import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { SingleSelectA11y } from './single-select-a11y.js'

describe('<SingleSelectA11y />', () => {
    beforeAll(() => {
        const consoleError = console.error
        jest.spyOn(console, 'error').mockImplementation((...args) => {
            const [message, dynamicContent] = args

            if (
                message.startsWith(
                    'Warning: An update to %s inside a test was not wrapped in act(...)'
                ) &&
                dynamicContent === 'Popper'
            ) {
                return
            }

            consoleError(...args)
        })
    })

    afterAll(() => {
        console.error.mockRestore()
    })

    it('should accept an onBlur handler', () => {
        const onBlur = jest.fn()

        render(
            <SingleSelectA11y
                onBlur={onBlur}
                idPrefix="a11y"
                value="foo"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        fireEvent.blur(screen.getByRole('combobox'))

        // first argument passed to onBlur is a react event
        //
        // Reg. eslint: Eslint complains about using hasOwnProperty,
        // but accessing `.nativeEvent` directly causes react to log an error
        // eslint-disable-next-line no-prototype-builtins
        expect(onBlur.mock.calls[0][0].hasOwnProperty('nativeEvent')).toBe(true)
        expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it('should accept an onFocus handler', () => {
        const onFocus = jest.fn()

        render(
            <SingleSelectA11y
                onFocus={onFocus}
                idPrefix="a11y"
                value="foo"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        fireEvent.focus(screen.getByRole('combobox'))

        // first argument passed to onFocus is a react event
        //
        // Reg. eslint: Eslint complains about using hasOwnProperty,
        // but accessing `.nativeEvent` directly causes react to log an error
        // eslint-disable-next-line no-prototype-builtins
        expect(onFocus.mock.calls[0][0].hasOwnProperty('nativeEvent')).toBe(
            true
        )
        expect(onFocus).toHaveBeenCalledTimes(1)
    })

    it('should accept autoFocus', () => {
        const onFocus = jest.fn()

        render(
            <SingleSelectA11y
                autoFocus
                onFocus={onFocus}
                idPrefix="a11y"
                value="foo"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        expect(onFocus).toHaveBeenCalledTimes(1)
    })

    it('should accept loading', () => {
        render(
            <SingleSelectA11y
                loading
                idPrefix="a11y"
                value="foo"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const loadingIndicator = screen.getByRole('progressbar')

        expect(loadingIndicator).toBeTruthy()
    })

    it('should display a loading text', () => {
        render(
            <SingleSelectA11y
                loading
                menuLoadingText="Loading text"
                idPrefix="a11y"
                value="foo"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const loadingIndicator = screen.getByRole('progressbar')
        expect(loadingIndicator).toBeTruthy()

        const loadingText = screen.getByText('Loading text')
        expect(loadingText).toBeTruthy()
    })

    it('should accept a max height', () => {
        render(
            <SingleSelectA11y
                menuMaxHeight="100px"
                idPrefix="a11y"
                value="foo"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const listbox = screen.getByRole('listbox')
        const menu = listbox.parentNode.parentNode.parentNode
        expect(menu.style.maxHeight).toBe('100px')
    })

    it('should accept a placeholder', () => {
        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                placeholder="Placeholder text"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        const placeholder = screen.getByText('Placeholder text')
        const dataTestValue =
            placeholder.attributes.getNamedItem('data-test').value
        expect(dataTestValue).toBe(
            'dhis2-singleselecta11y-selectedvalue-placeholder'
        )
    })

    it('should accept a prefix', () => {
        render(
            <SingleSelectA11y
                prefix="Prefix text"
                idPrefix="a11y"
                value="foo"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        const placeholder = screen.getByText('Prefix text')
        const dataTestValue =
            placeholder.attributes.getNamedItem('data-test').value
        expect(dataTestValue).toBe(
            'dhis2-singleselecta11y-selectedvalue-prefix'
        )
    })

    it('should allow options to be selected', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const option = screen.getByText('Foo').parentNode
        expect(option.attributes.getNamedItem('role').value).toBe('option')

        fireEvent.click(option)

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('foo')
    })

    it('should allow custom options to be selected', () => {
        const onChange = jest.fn()

        // eslint-disable-next-line react/prop-types
        const CustomOption = ({ value, label }) => (
            <span data-test={`custom-option-${value}`}>{label}</span>
        )

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                customOption={CustomOption}
                valueLabel=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                ]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const customOption = screen.getByTestId('custom-option-foo')
        const option = screen.getByTestId('custom-option-foo').parentNode
        expect(option.attributes.getNamedItem('role').value).toBe('option')

        fireEvent.click(customOption)

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('foo')
    })

    it('should allow individual custom options to be selected', () => {
        const onChange = jest.fn()

        // eslint-disable-next-line react/prop-types
        const CustomOption = ({ value, label }) => (
            <span data-test={`custom-option-${value}`}>{label}</span>
        )

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                valueLabel=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo', component: CustomOption },
                ]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const customOption = screen.getByTestId('custom-option-foo')
        const option = screen.getByTestId('custom-option-foo').parentNode
        expect(option.attributes.getNamedItem('role').value).toBe('option')

        fireEvent.click(customOption)

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('foo')
    })

    it('should be clearable when there is a selected value', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                clearable
                clearText="Clear a11y select"
                idPrefix="a11y"
                value="foo"
                valueLabel="Foo"
                onChange={onChange}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        const clearButton = screen.getByLabelText('Clear a11y select')
        expect(clearButton).toBeInstanceOf(HTMLElement)

        fireEvent.click(clearButton)

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('')
    })

    it('should not be clearable when there is no selected value', () => {
        render(
            <SingleSelectA11y
                clearable
                clearText="Clear a11y select"
                idPrefix="a11y"
                value=""
                onChange={jest.fn()}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                ]}
            />
        )

        const clearButton = screen.queryByLabelText('Clear a11y select')
        expect(clearButton).toBeNull()
    })

    it('should be disabled', () => {
        render(
            <SingleSelectA11y
                disabled
                idPrefix="a11y"
                value="foo"
                onChange={jest.fn()}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        // Element is in the dom, but invisible, which makes it inaccessible
        const listbox = screen.queryByRole('listbox')
        expect(listbox).toBeNull()

        const clearButton = screen.queryByLabelText('Clear a11y select')
        expect(clearButton).toBeNull()
    })

    it('should have an empty-text in the menu', () => {
        render(
            <SingleSelectA11y
                empty="Empty"
                idPrefix="a11y"
                value=""
                onChange={jest.fn()}
                options={[]}
            />
        )

        const emptyTextBeforeOpen = screen.queryByText('Empty')
        expect(emptyTextBeforeOpen).toBeNull()

        fireEvent.click(screen.getByRole('combobox'))

        const emptyTextAfterOpen = screen.queryByText('Empty')
        expect(emptyTextAfterOpen).toBeVisible()
    })

    it('should provide updates about the filter value', () => {
        const onFilterChange = jest.fn()

        render(
            <SingleSelectA11y
                filterable
                onFilterChange={onFilterChange}
                noMatchText="No options found"
                idPrefix="a11y"
                value="foo"
                onChange={jest.fn()}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        expect(screen.queryByLabelText('Search options')).toBeNull()

        fireEvent.click(screen.getByRole('combobox'))

        const searchInput = screen.getByLabelText('Search options')
        expect(searchInput).toBeInstanceOf(HTMLInputElement)
        expect(searchInput).toBeVisible()

        fireEvent.change(searchInput, { target: { value: 'Search term' } })

        expect(onFilterChange).toHaveBeenCalledTimes(1)
        expect(onFilterChange).toHaveBeenCalledWith('Search term')
    })

    it('should apply a custom filter label', () => {
        const onFilterChange = jest.fn()

        render(
            <SingleSelectA11y
                filterable
                filterLabel="Custom filter label"
                onFilterChange={onFilterChange}
                noMatchText="No options found"
                idPrefix="a11y"
                value=""
                valueLabel=""
                onChange={jest.fn()}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                ]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        expect(screen.getByLabelText('Custom filter label')).not.toBeNull()
    })

    it('should display the selected option', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        const combobox = screen.getByRole('combobox')

        const withTextBar = screen.getByText('Bar', {
            selector: '.selected-option-label',
        })

        expect(combobox).toContainElement(withTextBar)
    })

    /***************************
     *                         *
     *  =====================  *
     *  Keyboard interactions  *
     *  =====================  *
     *                         *
     **************************/
    describe.each([
        { key: ' ' },
        { key: 'Enter' },
        { key: 'ArrowDown', altKey: true },
        { key: 'ArrowUp', altKey: true },
    ])('$key ($altKey)', (keyDownOptions) => {
        test('open the menu', () => {
            const onChange = jest.fn()

            render(
                <SingleSelectA11y
                    idPrefix="a11y"
                    value=""
                    onChange={onChange}
                    options={[
                        { value: '', label: 'None' },
                        { value: 'foo', label: 'Foo' },
                        { value: 'bar', label: 'Bar' },
                    ]}
                />
            )

            fireEvent.keyDown(screen.getByRole('combobox'), keyDownOptions)
            expect(screen.queryByRole('listbox')).not.toBeNull()
            expect(onChange).not.toHaveBeenCalled()
        })
    })

    describe.each([
        { key: ' ' },
        { key: 'Enter' },
        { key: 'ArrowDown', altKey: true },
        { key: 'ArrowUp', altKey: true },
    ])('disabled & $key ($altKey)', (keyDownOptions) => {
        test('not open the menu', () => {
            const onChange = jest.fn()

            render(
                <SingleSelectA11y
                    disabled
                    idPrefix="a11y"
                    value=""
                    onChange={onChange}
                    options={[
                        { value: '', label: 'None' },
                        { value: 'foo', label: 'Foo' },
                        { value: 'bar', label: 'Bar' },
                    ]}
                />
            )

            fireEvent.keyDown(screen.getByRole('combobox'), keyDownOptions)
            expect(screen.queryByRole('listbox')).toBeNull()
            expect(onChange).not.toHaveBeenCalled()
        })
    })

    describe.each([
        { key: ' ' },
        { key: 'Enter' },
        { key: 'ArrowDown', altKey: true },
        { key: 'ArrowUp', altKey: true },
    ])('$key ($altKey)', (keyDownOptions) => {
        test('close the menu', () => {
            const onChange = jest.fn()

            render(
                <SingleSelectA11y
                    idPrefix="a11y"
                    value=""
                    onChange={onChange}
                    options={[
                        { value: '', label: 'None' },
                        { value: 'foo', label: 'Foo' },
                        { value: 'bar', label: 'Bar' },
                    ]}
                />
            )

            fireEvent.click(screen.getByRole('combobox'))
            expect(screen.queryByRole('listbox')).not.toBeNull()
            fireEvent.keyDown(screen.getByRole('combobox'), keyDownOptions)
            expect(screen.queryByRole('listbox')).toBeNull()
            expect(onChange).not.toHaveBeenCalled()
        })
    })

    describe.each([
        { key: 'Escape' },
        { key: 'Enter' },
        { key: 'ArrowDown', altKey: true },
        { key: 'ArrowUp', altKey: true },
    ])('$key ($altKey)', (keyDownOptions) => {
        test('close the menu and select the highlighted option after having highlighted another option', () => {
            const onChange = jest.fn()

            render(
                <SingleSelectA11y
                    idPrefix="a11y"
                    value=""
                    onChange={onChange}
                    options={[
                        { value: '', label: 'None' },
                        { value: 'foo', label: 'Foo' },
                        { value: 'bar', label: 'Bar' },
                    ]}
                />
            )

            fireEvent.click(screen.getByRole('combobox'))
            expect(screen.queryByRole('listbox')).not.toBeNull()

            // highlighting the next option
            fireEvent.keyDown(screen.getByRole('combobox'), {
                key: 'ArrowDown',
            })

            fireEvent.keyDown(screen.getByRole('combobox'), keyDownOptions)

            expect(screen.queryByRole('listbox')).toBeNull()
            expect(onChange).toHaveBeenCalledTimes(1)
            expect(onChange).toHaveBeenCalledWith('foo')
        })
    })

    it('should select the next option when closed and user presses ArrowDown', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        expect(screen.queryByRole('listbox')).toBeNull()

        // highlighting the next option
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
        expect(screen.queryByRole('listbox')).toBeNull()
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('foo')
    })

    it('should not select the next option when closed, disabled and user presses ArrowDown', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                disabled
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        expect(screen.queryByRole('listbox')).toBeNull()

        // highlighting the next option
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
        expect(screen.queryByRole('listbox')).toBeNull()
        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should select the second-next option when closed, next option is disabled and user presses ArrowDown', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo', disabled: true },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        expect(screen.queryByRole('listbox')).toBeNull()

        // highlighting the next option
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
        expect(screen.queryByRole('listbox')).toBeNull()
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('bar')
    })

    it('should select the previous option when closed and user presses ArrowUp', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        expect(screen.queryByRole('listbox')).toBeNull()

        // highlighting the next option
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowUp' })
        expect(screen.queryByRole('listbox')).toBeNull()
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('foo')
    })

    it('should not select the previous option when closed, disabled and user presses ArrowUp', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                disabled
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        expect(screen.queryByRole('listbox')).toBeNull()

        // highlighting the next option
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowUp' })
        expect(screen.queryByRole('listbox')).toBeNull()
        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should select the second-previous option when closed, previous option disabled and user presses ArrowUp', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo', disabled: true },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        expect(screen.queryByRole('listbox')).toBeNull()

        // highlighting the next option
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowUp' })
        expect(screen.queryByRole('listbox')).toBeNull()
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('')
    })

    it('should highlight the next option', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the first option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('None')

        // The second option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'ArrowDown' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('Foo')
    })

    it('should highlight the second next option when the next option is disabled', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo', disabled: true },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the first option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('None')

        // The second option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'ArrowDown' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('Bar')
    })

    it('should highlight the previous option', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the last option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('Bar')

        // The second option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'ArrowUp' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('Foo')
    })

    it('should highlight the second previous option when previous option is disabled', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo', disabled: true },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the last option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('Bar')

        // The second option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'ArrowUp' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('None')
    })

    it('should highlight the first option', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the last option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('Bar')

        // The first option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'Home' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('None')
    })

    it('should highlight the first enabled option', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value="bar"
                onChange={onChange}
                options={[
                    { value: '', label: 'None', disabled: true },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the last option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('Bar')

        // The first option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'Home' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('Foo')
    })

    it('should highlight the last option', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the first option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('None')

        // The last option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'End' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('Bar')
    })

    it('should highlight the last enabled option', () => {
        const onChange = jest.fn()

        render(
            <SingleSelectA11y
                idPrefix="a11y"
                value=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar', disabled: true },
                ]}
            />
        )

        // open the menu
        expect(screen.queryByRole('listbox')).toBeNull()
        const comboBox = screen.getByRole('combobox')
        fireEvent.click(comboBox)
        expect(screen.queryByRole('listbox')).not.toBeNull()

        // the first option should be highlighted
        const highlightedOptionBefore = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionBefore.attributes.getNamedItem('aria-label').value
        ).toBe('None')

        // The last option should be highlighted
        fireEvent.keyDown(comboBox, { key: 'End' })
        const highlightedOptionAfter = screen.getByRole('option', {
            selected: true,
        })
        expect(
            highlightedOptionAfter.attributes.getNamedItem('aria-label').value
        ).toBe('Foo')
    })
})
