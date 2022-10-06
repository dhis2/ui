import { Button, ButtonStrip } from '@dhis2-ui/button'
import { Modal, ModalActions, ModalContent, ModalTitle } from '@dhis2-ui/modal'
import { useAlert } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import { DebugInfoTable } from './debug-info-table.js'
import { useFormattedDebugInfo } from './use-debug-info.js'

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
        <Modal position="middle" dataTest="dhis2-ui-headerbar-debuginfomodal">
            <ModalTitle>{i18n.t('Debug info')}</ModalTitle>
            <ModalContent>
                <DebugInfoTable />
            </ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={() => onClose()}>{i18n.t('Close')}</Button>
                    <Button
                        primary
                        onClick={copyDebugInfo}
                        dataTest="dhis2-ui-headerbar-debuginfomodal-copybutton"
                    >
                        {i18n.t('Copy debug info')}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}

DebugInfoModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
