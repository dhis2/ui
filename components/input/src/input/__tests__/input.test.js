import { render, fireEvent, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import React from 'react'
import { Input } from '../input.js'

describe('<Input>', () => {
    it('passes min, max, and step props as attributes to the native <input> element', () => {
        const testProps = { min: '0', max: '10', step: '0.5' }
        const wrapper = shallow(<Input type="number" {...testProps} />)

        const inputEl = wrapper.find('input')
        expect(inputEl.props()).toMatchObject(testProps)
    })

    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(<Input name="foo" value="bar" onKeyDown={onKeyDown} />)

        fireEvent.keyDown(screen.getByRole('textbox'), {})

        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'foo', value: 'bar' },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })

    describe('character counter (characterCountLimit)', () => {
        it('renders a counter when characterCountLimit is provided', () => {
            const { getByTestId } = render(
                <Input value="hello" characterCountLimit={10} />
            )
            expect(getByTestId('dhis2-uicore-input-counter')).toBeTruthy()
        })

        it('shows the correct current/max text', () => {
            const { getByTestId } = render(
                <Input value="hello" characterCountLimit={10} />
            )
            expect(getByTestId('dhis2-uicore-input-counter').textContent).toBe(
                '5/10'
            )
        })

        it('shows 0/max when value is empty', () => {
            const { getByTestId } = render(
                <Input value="" characterCountLimit={50} />
            )
            expect(getByTestId('dhis2-uicore-input-counter').textContent).toBe(
                '0/50'
            )
        })

        it('applies exceeds-maximum class when value exceeds characterCountLimit', () => {
            const { getByTestId } = render(
                <Input value="this exceeds" characterCountLimit={5} />
            )
            const counter = getByTestId('dhis2-uicore-input-counter')
            expect(counter.className).toMatch(/exceeds-maximum/)
        })

        it('does not apply exceeds-maximum class when within limit', () => {
            const { getByTestId } = render(
                <Input value="hi" characterCountLimit={10} />
            )
            const counter = getByTestId('dhis2-uicore-input-counter')
            expect(counter.className).not.toMatch(/exceeds-maximum/)
        })

        it('does not render the counter when disabled', () => {
            const { queryByTestId } = render(
                <Input value="hello" characterCountLimit={10} disabled />
            )
            expect(queryByTestId('dhis2-uicore-input-counter')).toBeNull()
        })

        it('does not render the counter when readOnly', () => {
            const { queryByTestId } = render(
                <Input value="hello" characterCountLimit={10} readOnly />
            )
            expect(queryByTestId('dhis2-uicore-input-counter')).toBeNull()
        })

        it('does not set the native maxLength attribute (soft limit)', () => {
            render(<Input name="test" value="hello" characterCountLimit={10} />)
            const input = screen.getByRole('textbox')
            expect(input).not.toHaveAttribute('maxlength')
        })

        it('does not render a counter when characterCountLimit is not provided', () => {
            const { queryByTestId } = render(<Input value="hello" />)
            expect(queryByTestId('dhis2-uicore-input-counter')).toBeNull()
        })

        it('does not render a counter when characterCountLimit is 0', () => {
            const { queryByTestId } = render(
                <Input value="hello" characterCountLimit={0} />
            )
            expect(queryByTestId('dhis2-uicore-input-counter')).toBeNull()
        })

        it('sets aria-describedby on the input when name is provided', () => {
            render(
                <Input name="myfield" value="hello" characterCountLimit={10} />
            )
            const input = screen.getByRole('textbox')
            expect(input).toHaveAttribute('aria-describedby', 'myfield-counter')
        })

        it('gives the counter span a matching id for aria-describedby', () => {
            const { getByTestId } = render(
                <Input name="myfield" value="hello" characterCountLimit={10} />
            )
            const counter = getByTestId('dhis2-uicore-input-counter')
            expect(counter.id).toBe('myfield-counter')
        })

        it('renders counter alongside the clear button when clearable', () => {
            const { getByTestId } = render(
                <Input value="hello" characterCountLimit={10} clearable />
            )
            expect(getByTestId('dhis2-uicore-input-counter')).toBeTruthy()
        })
    })
})
