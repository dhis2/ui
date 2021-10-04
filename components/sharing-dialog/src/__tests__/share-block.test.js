import { Button } from '@dhis2-ui/button'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { AccessSelect } from '../access-select.js'
import { Autocomplete } from '../autocomplete/autocomplete.js'
import { ShareBlock } from '../share-block.js'

describe('<ShareBlock />', () => {
    it('renders a single Autocomplete component ', () => {
        const wrapper = mount(<ShareBlock onAdd={() => {}} />, {
            wrappingComponent: CustomDataProvider,
        })
        const autocompletes = wrapper.find(Autocomplete)

        expect(autocompletes).toHaveLength(1)
    })

    it('renders a single AccessSelect component', () => {
        const wrapper = mount(<ShareBlock onAdd={() => {}} />, {
            wrappingComponent: CustomDataProvider,
        })
        const accessSelects = wrapper.find(AccessSelect)

        expect(accessSelects).toHaveLength(1)
    })

    it('renders a button with "Give access"', () => {
        const wrapper = mount(<ShareBlock onAdd={() => {}} />, {
            wrappingComponent: CustomDataProvider,
        })
        const buttons = wrapper.find(Button)

        expect(buttons).toHaveLength(1)
        expect(buttons.text()).toContain('Give access')
    })
})
