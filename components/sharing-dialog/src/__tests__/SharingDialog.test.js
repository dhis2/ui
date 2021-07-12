import { Button } from '@dhis2-ui/button'
import { Modal, ModalTitle } from '@dhis2-ui/modal'
import { shallow } from 'enzyme'
import React from 'react'
import { ShareBlock } from '../share-block.js'
import { defaultSharingSettings } from '../sharing-constants.js'
import { SharingDialog } from '../sharing-dialog.js'
import { SharingList } from '../sharing-list.js'

describe('SharingDialog widget', () => {
    const onClose = jest.fn()
    const onSave = jest.fn()
    const onError = jest.fn()

    let shallowSharingDialog
    let props

    const getSharingDialogWidget = props => {
        if (!shallowSharingDialog) {
            shallowSharingDialog = shallow(<SharingDialog {...props} />)
        }

        return shallowSharingDialog
    }

    beforeEach(() => {
        shallowSharingDialog = undefined
        props = {
            type: 'dashboard',
            onClose,
            onError,
            onSave,
        }
    })

    it('renders a Modal', () =>
        expect(getSharingDialogWidget(props).find(Modal)).toHaveLength(1))

    it('renders the ModalTitle with the name of the AO if passed in props', () => {
        props.initialSharingSettings = {
            ...defaultSharingSettings,
            name: 'test object',
        }

        expect(getSharingDialogWidget(props).find(ModalTitle).html()).toMatch(
            props.initialSharingSettings.name
        )
    })

    it('renders a ShareBlock component', () =>
        expect(getSharingDialogWidget(props).find(ShareBlock)).toHaveLength(1))

    it('renders a SharingList component', () =>
        expect(getSharingDialogWidget(props).find(SharingList)).toHaveLength(1))

    it('renders a Close button', () => {
        const button = getSharingDialogWidget(props).find(Button)

        expect(button).toHaveLength(1)
        expect(button.html()).toMatch('Close')
    })

    it('calls the Close callback when the Close button is clicked', () => {
        const button = getSharingDialogWidget(props).find(Button)

        button.simulate('click')

        expect(onClose).toHaveBeenCalled()
    })
})
