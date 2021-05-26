import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableHeaderCellAction } from '../TableHeaderCellAction.js'

describe('<TableHeaderCellAction>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(
            <TableHeaderCellAction>{children}</TableHeaderCellAction>
        )

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(<TableHeaderCellAction ref={ref} />)

        expect(wrapper.find('button').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableHeaderCellAction className={className} />)

        expect(wrapper.find('button').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableHeaderCellAction dataTest={dataTest} />)

        expect(wrapper.find('button').prop('data-test')).toBe(dataTest)
    })
    it('accepts a title prop', () => {
        const title = 'test'
        const wrapper = shallow(<TableHeaderCellAction title={title} />)

        expect(wrapper.find('button').prop('title')).toBe(title)
    })
    it('accepts an onClick prop', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<TableHeaderCellAction onClick={onClick} />)

        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
