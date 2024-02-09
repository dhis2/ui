import { mount } from 'enzyme'
import React from 'react'
import { LinearLoader } from '../linear-loader.js'

describe('Linear Loader', () => {
    it('renders the linear loader with provided aria attributes', () => {
        const wrapper = mount(
            <LinearLoader
                dataTest={'linear-loader-test'}
                ariaLabel="Linear Loader"
                amount={15}
            />
        )
        const actual = wrapper.find({ 'data-test': 'linear-loader-test' })
        expect(actual.prop('role')).toBe('progressbar')
        expect(actual.prop('aria-label')).toBe('Linear Loader')
        expect(actual.prop('aria-valuenow')).toBe(15)
    })

    it('renders the linear loader without aria label', () => {
        const wrapper = mount(
            <LinearLoader dataTest={'linear-loader-test'} amount={45} />
        )
        const actual = wrapper.find({ 'data-test': 'linear-loader-test' })
        expect(actual.prop('role')).toBe('progressbar')
        expect(actual.prop('aria-label')).toBe(undefined)
        expect(actual.prop('aria-valuenow')).toBe(45)
    })
})
