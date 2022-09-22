import { ButtonStrip, Button } from '@dhis2-ui/button'
import {
    Modal as Dhis2Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
} from '@dhis2-ui/modal'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

export const Modal = ({ onClose, name, children }) => {
    const title = name
        ? i18n.t('Sharing and access: {{- objectName}}', {
              objectName: name,
              nsSeparator: '|',
          })
        : i18n.t('Sharing and access')

    return (
        <Dhis2Modal large position="top" onClose={onClose}>
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

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    onClose: PropTypes.func,
}
