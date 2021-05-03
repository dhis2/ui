import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@dhis2/ui-button'
import ButtonStrip from '@dhis2/ui-button-strip'
import { ModalTitle } from './modal-title/modal-title.js'
import { ModalActions } from './modal-actions/modal-actions.js'
import { ModalContent } from './modal-content/modal-content.js'
import { Modal } from './modal.js'

window.onClose = window.Cypress && window.Cypress.cy.stub()

storiesOf('Modal', module)
    .add('With onClose', () => (
        <Modal small onClose={window.onClose}>
            <ModalTitle>Title</ModalTitle>
            <ModalContent>Content</ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button secondary>Secondary action</Button>
                    <Button primary>Primary action</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Bottom-aligned, with onClose', () => (
        <Modal small onClose={window.onClose} position="bottom">
            <ModalTitle>Title</ModalTitle>
            <ModalContent>Content</ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button secondary>Secondary action</Button>
                    <Button primary>Primary action</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('With children', () => <Modal>I am a child</Modal>)
