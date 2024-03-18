import { mount } from 'enzyme'
import React from 'react'
import { CircularLoader } from '../circular-loader.js'

describe('Circular Loader', () => {
    it('renders the circular loader with aria label', () => {
        const wrapper = mount(
            <CircularLoader
                dataTest={'circular-loader-test'}
                aria-label="Circular Loader"
            />
        )
        const actual = wrapper.find({ 'data-test': 'circular-loader-test' })
        expect(actual.prop('role')).toBe('progressbar')
        expect(actual.prop('aria-label')).toBe('Circular Loader')
    })

    it('renders the circular loader without aria label', () => {
        const wrapper = mount(
            <CircularLoader dataTest={'circular-loader-test'} />
        )
        const actual = wrapper.find({ 'data-test': 'circular-loader-test' })
        expect(actual.prop('aria-label')).toBe(undefined)
        expect(actual.prop('role')).toBe('progressbar')
    })
})
