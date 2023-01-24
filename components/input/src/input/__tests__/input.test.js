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
})
