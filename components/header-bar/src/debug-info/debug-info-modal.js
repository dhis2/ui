import { useAlert, useConfig } from '@dhis2/app-runtime'
import {
    Button,
    ButtonStrip,
    Modal,
    ModalActions,
    ModalContent,
    ModalTitle,
} from '@dhis2/ui'
import React from 'react'
import i18n from '../locales'
import { DebugInfoTable } from './debug-info-table'
import { useFormattedDebugInfo } from './use-debug-info'

export function DebugInfoModal({ onClose }) {
    const debugInfo = useFormattedDebugInfo()
    const { show: showClipboardAlert } = useAlert(
        'Debug information copied to clipboard',
        { duration: 3000 }
    )

    const copyDebugInfo = () => {
        navigator.clipboard.writeText(debugInfo)
        onClose()
        showClipboardAlert()
    }

    return (
        <Modal position="middle">
            <ModalTitle>{i18n.t('Debug info')}</ModalTitle>
            <ModalContent>
                <DebugInfoTable />
            </ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={() => onClose()}>{i18n.t('Close')}</Button>
                    <Button primary onClick={copyDebugInfo}>
                        {i18n.t('Copy debug info')}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
