import { Button } from '@dhis2-ui/button'
import { Modal, ModalTitle } from '@dhis2-ui/modal'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { mount } from 'enzyme'
import React from 'react'
import { DashboardSharingContent } from '../dashboard-sharing-content.js'
import { DefaultSharingContent } from '../default-sharing-content.js'
import { defaultSharingSettings } from '../sharing-constants.js'
import { SharingDialog } from '../sharing-dialog.js'

describe('SharingDialog widget', () => {
    const onClose = jest.fn()
    const onSave = jest.fn()
    const onError = jest.fn()

    let shallowSharingDialog
    let props

    const getSharingDialogWidget = props => {
        if (!shallowSharingDialog) {
            shallowSharingDialog = mount(<SharingDialog {...props} />, {
                wrappingComponent: CustomDataProvider,
            })
        }

        return shallowSharingDialog
    }

    beforeEach(() => {
        shallowSharingDialog = undefined
        props = {
            id: 'sharing-test',
            type: 'visualization',
            onClose,
            onError,
            onSave,
        }
    })

    it('renders a Modal', () => {
        expect(getSharingDialogWidget(props).find(Modal)).toHaveLength(1)
    })

    it('renders the ModalTitle with the name of the AO if passed in props', () => {
        props.initialSharingSettings = {
            ...defaultSharingSettings,
            name: 'test object',
        }

        expect(getSharingDialogWidget(props).find(ModalTitle).html()).toMatch(
            props.initialSharingSettings.name
        )
    })

    it('renders a Close button', () => {
        const buttons = getSharingDialogWidget(props).find(Button)
        const closeButtons = buttons.filterWhere(button =>
            button.html().includes('Close')
        )

        expect(closeButtons).toHaveLength(1)
    })

    it('calls the Close callback when the Close button is clicked', () => {
        const buttons = getSharingDialogWidget(props).find(Button)
        const closeButtons = buttons.filterWhere(button =>
            button.html().includes('Close')
        )

        closeButtons.first().simulate('click')

        expect(onClose).toHaveBeenCalled()
    })

    it('renders a DefaultSharingContent component when the type is not dashboard', () =>
        expect(
            getSharingDialogWidget(props).find(DefaultSharingContent)
        ).toHaveLength(1))

    it('renders a DashboardSharingContent component when the type is dashboard', () => {
        props.type = 'dashboard'

        expect(
            getSharingDialogWidget(props).find(DashboardSharingContent)
        ).toHaveLength(1)
    })
})
