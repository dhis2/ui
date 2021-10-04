import { Button } from '@dhis2-ui/button'
import { Modal, ModalTitle } from '@dhis2-ui/modal'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { DashboardSharingContent } from '../dashboard-sharing-content.js'
import { DefaultSharingContent } from '../default-sharing-content.js'
import { ACCESS_NONE } from '../sharing-constants'
import { SharingDialog } from '../sharing-dialog'

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

    it('renders a DefaultSharingContent component when the type is not dashboard', () => {
        const wrapper = mount(
            <SharingDialog {...requiredProps} type="visualization" />,
            {
                wrappingComponent: CustomDataProvider,
            }
        )
        const defaultSharingContent = wrapper.find(DefaultSharingContent)

        expect(defaultSharingContent).toHaveLength(1)
    })

    it('renders a DashboardSharingContent component when the type is dashboard', () => {
        const wrapper = mount(
            <SharingDialog {...requiredProps} type="dashboard" />,
            {
                wrappingComponent: CustomDataProvider,
            }
        )
        const dashboardSharingContent = wrapper.find(DashboardSharingContent)

        expect(dashboardSharingContent).toHaveLength(1)
    })
})
