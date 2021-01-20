import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableToolbar } from '../TableToolbar.js'

describe('<TableToolbar>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableToolbar>{children}</TableToolbar>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(<TableToolbar ref={ref} />)

        expect(wrapper.find('div').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableToolbar className={className} />)

        expect(wrapper.find('div').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableToolbar dataTest={dataTest} />)

        expect(wrapper.find('div').prop('data-test')).toBe(dataTest)
    })
    it('accepts a position prop', () => {
        const wrapperDefault = shallow(<TableToolbar />)
        const wrapperTop = shallow(<TableToolbar position="top" />)
        const wrapperBottom = shallow(<TableToolbar position="bottom" />)

        expect(wrapperDefault.find('div').hasClass('top')).toBe(true)
        expect(wrapperDefault.find('div').hasClass('bottom')).toBe(false)

        expect(wrapperTop.find('div').hasClass('top')).toBe(true)
        expect(wrapperTop.find('div').hasClass('bottom')).toBe(false)

        expect(wrapperBottom.find('div').hasClass('top')).toBe(false)
        expect(wrapperBottom.find('div').hasClass('bottom')).toBe(true)
    })
})
