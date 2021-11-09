import { Button } from '@dhis2-ui/button'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { SharingAutocomplete } from '../../autocomplete/index.js'
import { AccessAdd } from '../access-add.js'

describe('<AccessAdd />', () => {
    it('renders a single SharingAutocomplete component ', () => {
        const wrapper = mount(<AccessAdd onAdd={() => {}} />, {
            wrappingComponent: CustomDataProvider,
        })
        const components = wrapper.find(SharingAutocomplete)

        expect(components).toHaveLength(1)
    })

    it('renders a button with "Give access"', () => {
        const wrapper = mount(<AccessAdd onAdd={() => {}} />, {
            wrappingComponent: CustomDataProvider,
        })
        const buttons = wrapper.find(Button)

        expect(buttons).toHaveLength(1)
        expect(buttons.text()).toContain('Give access')
    })
})