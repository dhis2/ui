import React from 'react'
import { mount } from 'enzyme'
import ButtonBase from '../ButtonBase.js'

describe('<ButtonBase>', () => {
    it('renders a data-test attribute', () => {
        const dataTest = 'button-data-test'
        const wrapper = mount(<ButtonBase dataTest={dataTest} />)

        const actual = wrapper.find('button').find({ 'data-test': dataTest })

        expect(actual.length).toBe(1)
    })
})
