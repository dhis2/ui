import { mount } from 'enzyme'
import React from 'react'
import { CheckboxIndeterminate } from '@dhis2/ui-icons'
import { Checkbox } from '../Checkbox'

describe('<Checkbox>', () => {
    describe('indeterminate', () => {
        it('shows an indeterminate icon if the indeterminate prop is true', () => {
            const wrapper = mount(<Checkbox indeterminate />)

            expect(wrapper.find(CheckboxIndeterminate)).toHaveLength(1)
        })

        it('does not show an indeterminate icon if the indeterminate prop is false', () => {
            const wrapper = mount(<Checkbox />)

            expect(wrapper.find(CheckboxIndeterminate)).toHaveLength(0)
        })
    })
})
