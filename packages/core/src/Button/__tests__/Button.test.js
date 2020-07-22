import React from 'react'
import { mount } from 'enzyme'
import { Button } from '../Button.js'

describe('<Button>', () => {
    it('renders a default data-test attribute', () => {
        const dataTest = 'dhis2-uicore-button'
        const wrapper = mount(<Button dataTest={dataTest} />)

        const actual = wrapper.find({ 'data-test': dataTest })

        expect(actual.length).toBe(1)
    })

    it('renders a custom data-test attribute', () => {
        const dataTest = 'button-data-test'
        const wrapper = mount(<Button dataTest={dataTest} />)

        const actual = wrapper.find({ 'data-test': dataTest })

        expect(actual.length).toBe(1)
    })
})
