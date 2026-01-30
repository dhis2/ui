import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { SimpleSingleSelect } from './simple-single-select.js'

describe('<SimpleSingleSelect />', () => {
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
            <SimpleSingleSelect
                onBlur={onBlur}
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
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
            <SimpleSingleSelect
                onFocus={onFocus}
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
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
            <SimpleSingleSelect
                autoFocus
                onFocus={onFocus}
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        expect(onFocus).toHaveBeenCalledTimes(1)
    })

    it('should accept loading', () => {
        render(
            <SimpleSingleSelect
                loading
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
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
            <SimpleSingleSelect
                loading
                menuLoadingText="Loading text"
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
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
            <SimpleSingleSelect
                menuMaxHeight="100px"
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
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
            <SimpleSingleSelect
                name="simple"
                selected={null}
                placeholder="Placeholder text"
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        const placeholder = screen.getByText('Placeholder text')
        const dataTestValue =
            placeholder.attributes.getNamedItem('data-test').value
        expect(dataTestValue).toBe(
            'dhis2-simplesingleselect-selectedvalue-placeholder'
        )
    })

    it('should accept a prefix', () => {
        render(
            <SimpleSingleSelect
                prefix="Prefix text"
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
                onChange={() => null}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        const placeholder = screen.getByText('Prefix text')
        const dataTestValue =
            placeholder.attributes.getNamedItem('data-test').value
        expect(dataTestValue).toBe(
            'dhis2-simplesingleselect-selectedvalue-prefix'
        )
    })

    it('should allow options to be selected', () => {
        const onChange = jest.fn()

        render(
            <SimpleSingleSelect
                name="simple"
                selected={null}
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
        expect(onChange).toHaveBeenCalledWith({ value: 'foo', label: 'Foo' })
    })

    it('should allow custom options to be selected', () => {
        const onChange = jest.fn()

        // eslint-disable-next-line react/prop-types
        const CustomOption = ({ value, label }) => (
            <span data-test={`custom-option-${value}`}>{label}</span>
        )

        render(
            <SimpleSingleSelect
                name="simple"
                selected={null}
                optionComponent={CustomOption}
                valueLabel=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                ]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const optionComponent = screen.getByTestId('custom-option-foo')
        const option = screen.getByTestId('custom-option-foo').parentNode
        expect(option.attributes.getNamedItem('role').value).toBe('option')

        fireEvent.click(optionComponent)

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith({ value: 'foo', label: 'Foo' })
    })

    it('should allow individual custom options to be selected', () => {
        const onChange = jest.fn()

        // eslint-disable-next-line react/prop-types
        const CustomOption = ({ value, label }) => (
            <span data-test={`custom-option-${value}`}>{label}</span>
        )

        render(
            <SimpleSingleSelect
                name="simple"
                selected={null}
                valueLabel=""
                onChange={onChange}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo', component: CustomOption },
                ]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        const optionComponent = screen.getByTestId('custom-option-foo')
        const option = screen.getByTestId('custom-option-foo').parentNode
        expect(option.attributes.getNamedItem('role').value).toBe('option')

        fireEvent.click(optionComponent)

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith({ value: 'foo', label: 'Foo' })
    })

    it('should be clearable when there is a selected value', () => {
        const onClear = jest.fn()

        render(
            <SimpleSingleSelect
                clearable
                clearText="Clear simple select"
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
                valueLabel="Foo"
                onChange={() => null}
                onClear={onClear}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        const clearButton = screen.getByLabelText('Clear simple select')
        expect(clearButton).toBeInstanceOf(HTMLElement)

        fireEvent.click(clearButton)

        expect(onClear).toHaveBeenCalledTimes(1)
    })

    it('should not be clearable when there is no selected value', () => {
        render(
            <SimpleSingleSelect
                clearable
                clearText="Clear simple select"
                name="simple"
                selected={null}
                onChange={jest.fn()}
                options={[
                    { value: '', label: 'None' },
                    { value: 'foo', label: 'Foo' },
                ]}
            />
        )

        const clearButton = screen.queryByLabelText('Clear simple select')
        expect(clearButton).toBeNull()
    })

    it('should be disabled', () => {
        render(
            <SimpleSingleSelect
                disabled
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
                onChange={jest.fn()}
                options={[{ value: 'foo', label: 'Foo' }]}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        // Element is in the dom, but invisible, which makes it inaccessible
        const listbox = screen.queryByRole('listbox')
        expect(listbox).toBeNull()

        const clearButton = screen.queryByLabelText('Clear simple select')
        expect(clearButton).toBeNull()
    })

    it('should have an empty-text in the menu', () => {
        render(
            <SimpleSingleSelect
                empty="Empty"
                name="simple"
                selected={null}
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
            <SimpleSingleSelect
                filterable
                onFilterChange={onFilterChange}
                noMatchText="No options found"
                name="simple"
                selected={{ value: 'foo', label: 'Foo' }}
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
            <SimpleSingleSelect
                filterable
                filterLabel="Custom filter label"
                onFilterChange={onFilterChange}
                noMatchText="No options found"
                name="simple"
                selected={null}
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
            <SimpleSingleSelect
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
                <SimpleSingleSelect
                    name="simple"
                    selected={null}
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
                <SimpleSingleSelect
                    disabled
                    name="simple"
                    selected={null}
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
                <SimpleSingleSelect
                    name="simple"
                    selected={null}
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
                <SimpleSingleSelect
                    name="simple"
                    selected={null}
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
            expect(onChange).toHaveBeenCalledWith({
                value: 'foo',
                label: 'Foo',
            })
        })
    })

    it('should select the next option when closed and user presses ArrowDown', () => {
        const onChange = jest.fn()

        render(
            <SimpleSingleSelect
                name="simple"
                selected={null}
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
        expect(onChange).toHaveBeenCalledWith({ value: 'foo', label: 'Foo' })
    })

    describe('Clear the selected value when ESCAPE is pressed', () => {
        it('should clear the selected value when closed, clearable and user presses Escape', () => {
            function TestSelect() {
                const [selected, setSelected] = useState({
                    label: 'Foo',
                    value: 'foo',
                })

                return (
                    <SimpleSingleSelect
                        clearable
                        name="simple"
                        selected={selected}
                        onClear={() =>
                            setSelected({
                                label: '',
                                value: '',
                            })
                        }
                        options={[
                            { value: '', label: 'None' },
                            { value: 'foo', label: 'Foo' },
                            { value: 'bar', label: 'Bar' },
                        ]}
                    />
                )
            }
            render(<TestSelect />)

            // menu is closed
            expect(screen.queryByRole('listbox')).toBeNull()

            // there are selected value
            expect(screen.getByText('Foo')).toBeInTheDocument()

            // press Escape once to clear the selected value
            fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape' })

            // the value is cleared
            expect(screen.queryByText('Foo')).toBeNull()
        })

        it('should clear the selected value when open and ESCAPE is pressed twice', () => {
            const onClear = jest.fn()

            render(
                <SimpleSingleSelect
                    clearable
                    name="simple"
                    selected={{ value: 'bar', label: 'Bar' }}
                    onChange={() => {}}
                    onClear={onClear}
                    clearText="Clear"
                    options={[
                        { value: '', label: 'None' },
                        { value: 'foo', label: 'Foo' },
                        { value: 'bar', label: 'Bar' },
                    ]}
                />
            )

            const comboBox = screen.getByRole('combobox')

            // open the menu
            expect(
                comboBox.attributes.getNamedItem('aria-expanded').value
            ).toBe('false')
            fireEvent.click(comboBox)
            expect(
                comboBox.attributes.getNamedItem('aria-expanded').value
            ).toBe('true')

            // The first escape should close the combo BUT not call clear
            fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape' })
            expect(
                comboBox.attributes.getNamedItem('aria-expanded').value
            ).toBe('false')
            expect(onClear).not.toHaveBeenCalledWith()

            // The second escape should call clear
            fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape' })
            expect(onClear).toHaveBeenCalledWith()
        })
    })

    it('should not select the next option when closed, disabled and user presses ArrowDown', () => {
        const onChange = jest.fn()

        render(
            <SimpleSingleSelect
                disabled
                name="simple"
                selected={null}
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
            <SimpleSingleSelect
                name="simple"
                selected={null}
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
        expect(onChange).toHaveBeenCalledWith({ value: 'bar', label: 'Bar' })
    })

    it('should select the previous option when closed and user presses ArrowUp', () => {
        const onChange = jest.fn()

        render(
            <SimpleSingleSelect
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
        expect(onChange).toHaveBeenCalledWith({ value: 'foo', label: 'Foo' })
    })

    it('should not select the previous option when closed, disabled and user presses ArrowUp', () => {
        const onChange = jest.fn()

        render(
            <SimpleSingleSelect
                disabled
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
            <SimpleSingleSelect
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
        expect(onChange).toHaveBeenCalledWith({ value: '', label: 'None' })
    })

    it('should highlight the next option', () => {
        const onChange = jest.fn()

        render(
            <SimpleSingleSelect
                name="simple"
                selected={null}
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
            <SimpleSingleSelect
                name="simple"
                selected={null}
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
            <SimpleSingleSelect
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
            <SimpleSingleSelect
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
            <SimpleSingleSelect
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
            <SimpleSingleSelect
                name="simple"
                selected={{ value: 'bar', label: 'Bar' }}
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
            <SimpleSingleSelect
                name="simple"
                selected={null}
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
            <SimpleSingleSelect
                name="simple"
                selected={null}
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
