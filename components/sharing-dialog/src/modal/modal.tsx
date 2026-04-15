import { ButtonStrip, Button } from '@dhis2-ui/button'
import {
    Modal as Dhis2Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
} from '@dhis2-ui/modal'
import React from 'react'
import i18n from '../locales/index.js'

export interface ModalProps {
    children: React.ReactNode
    dataTest?: string
    name?: string
    onClose?: () => void
}

export const Modal = ({
    onClose,
    name,
    children,
    dataTest = 'dhis2-uicore-sharingdialog-modal',
}: ModalProps) => {
    const title = name
        ? i18n.t('Sharing and access: {{- objectName}}', {
              objectName: name,
              nsSeparator: '|',
          })
        : i18n.t('Sharing and access')

    return (
        <Dhis2Modal large position="top" onClose={onClose} dataTest={dataTest}>
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{children}</ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button type="button" secondary onClick={onClose}>
                        {i18n.t('Close')}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Dhis2Modal>
    )
}
