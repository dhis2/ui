import { Button } from '@dhis2-ui/button'
import { Modal, ModalTitle } from '@dhis2-ui/modal'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { ACCESS_NONE } from '../sharing-constants.js'
import { SharingDialog } from '../sharing-dialog.js'

describe('<SharingDialog />', () => {
    const requiredProps = {
        id: 'sharing-test',
        type: 'visualization',
        onClose: () => {},
    }

    it('renders a Modal', () => {
        const wrapper = mount(<SharingDialog {...requiredProps} />, {
            wrappingComponent: CustomDataProvider,
        })
        const modals = wrapper.find(Modal)

        expect(modals).toHaveLength(1)
    })

    it('renders the name of the AO in the ModalTitle if passed in initialSharingSettings as name', () => {
        const expected = 'The name of the AO'
        const props = {
            ...requiredProps,
            initialSharingSettings: {
                name: expected,
                allowExternal: true,
                allowPublic: true,
                external: ACCESS_NONE,
                public: ACCESS_NONE,
                groups: {},
                users: {},
            },
        }
        const wrapper = mount(<SharingDialog {...props} />, {
            wrappingComponent: CustomDataProvider,
        })
        const modalTitles = wrapper.find(ModalTitle)

        expect(modalTitles.text()).toContain(expected)
    })

    it('calls the onClose callback when the close button is clicked', () => {
        const spy = jest.fn()
        const wrapper = mount(
            <SharingDialog {...requiredProps} onClose={spy} />,
            {
                wrappingComponent: CustomDataProvider,
            }
        )
        const closeButtons = wrapper
            .find(Button)
            .filterWhere((button) => button.text().includes('Close'))

        expect(closeButtons).toHaveLength(1)
        expect(spy).toHaveBeenCalledTimes(0)

        closeButtons.first().simulate('click')

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
