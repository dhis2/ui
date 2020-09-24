import { mount } from 'enzyme'
import React from 'react'
import { CheckboxRegular } from '@dhis2/ui-icons'
import { Checkbox } from '../Checkbox'

describe('<Checkbox>', () => {
    describe('indeterminate', () => {
        it('sets an indeterminate class on the icon if the indeterminate prop is true', () => {
            const wrapper = mount(<Checkbox indeterminate />)

            const hasIndeterminateProp = wrapper
                .find(CheckboxRegular)
                .find('svg')
                .hasClass('indeterminate')

            expect(hasIndeterminateProp).toBe(true)
        })

        it('does not set an indeterminate class on the icon if the indeterminate prop is false', () => {
            const wrapper = mount(<Checkbox />)

            const hasIndeterminateProp = wrapper
                .find(CheckboxRegular)
                .find('svg')
                .hasClass('indeterminate')

            expect(hasIndeterminateProp).toBe(false)
        })
    })
})
