import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    Button,
    ButtonStrip,
    Modal,
    ModalTitle,
    ModalActions,
    ModalContent,
} from '../index.js'

window.onClose = window.Cypress.cy.stub()

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
    .add('With children', () => <Modal>I am a child</Modal>)
