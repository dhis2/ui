import { ButtonStrip, Button } from '@dhis2-ui/button'
import { Center } from '@dhis2-ui/center'
import { Cover } from '@dhis2-ui/cover'
import { CircularLoader } from '@dhis2-ui/loader'
import {
    Modal as Dhis2Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
} from '@dhis2-ui/modal'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

export const Modal = ({ onClose, name, children, block }) => {
    const title = name
        ? i18n.t('Sharing and access: {{- objectName}}', {
              objectName: name,
              nsSeparator: '|',
          })
        : i18n.t('Sharing and access')

    return (
        <Dhis2Modal large position="top" onClose={onClose}>
            {block && (
                <Cover translucent>
                    <Center>
                        <CircularLoader />
                    </Center>
                </Cover>
            )}
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
    block: PropTypes.bool,
    name: PropTypes.string,
    onClose: PropTypes.func,
}
