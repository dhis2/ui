import { shallow } from 'enzyme'
import React from 'react'
import { Action } from '../../TableCellHead/Action.js'

describe('<Action>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<Action onClick={() => {}}>{children}</Action>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })

    it('accepts an onClick prop', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<Action onClick={onClick}>children</Action>)

        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
