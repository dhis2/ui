import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { AccessAdd } from '../access-add.js'

describe('<AccessAdd />', () => {
    it('renders a button with "Give access"', () => {
        const wrapper = mount(<AccessAdd onAdd={() => {}} />, {
            wrappingComponent: CustomDataProvider,
        })
        const elements = wrapper.find('button')

        expect(elements).toHaveLength(1)
        expect(elements.text()).toContain('Give access')
    })
})
