import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { SharingDialog } from '../sharing-dialog.js'

describe('<SharingDialog />', () => {
    it('calls the onClose callback when the close button is clicked', () => {
        const requiredProps = {
            id: 'sharing-test',
            type: 'visualization',
            onClose: () => {},
        }
        const spy = jest.fn()
        const wrapper = mount(
            <SharingDialog {...requiredProps} onClose={spy} />,
            {
                wrappingComponent: CustomDataProvider,
            }
        )
        const elements = wrapper
            .find('button')
            .filterWhere((el) => el.text().includes('Close'))

        expect(elements).toHaveLength(1)
        expect(spy).toHaveBeenCalledTimes(0)

        elements.first().simulate('click')

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
