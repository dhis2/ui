import React, { useState } from 'react'
import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'

import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ButtonStrip,
    Button,
} from '../'
import { SharingList } from './SharingList'
import { ShareBlock } from './ShareBlock'
import {
    defaultSharingSettings,
    sharingSettingsAreEqual,
} from './sharingConstants'

export const SharingDialog = ({
    name,
    initialSharingSettings = defaultSharingSettings,
}) => {
    const [sharingSettings, updateSharingSettings] = useState(
        initialSharingSettings
    )

    const addUserOrGroupAccess = ({ type, id, access }) => {
        console.log(type, id, access)
        updateSharingSettings({
            ...sharingSettings,
            [`${type}s`]: {
                ...sharingSettings[`${type}s`],
                [id]: access,
            },
        })
    }

    const dirty = !sharingSettingsAreEqual(
        initialSharingSettings,
        sharingSettings
    )
    return (
        <Modal large>
            <ModalTitle>
                {i18n.t('Sharing settings')}
                {name && `: ${name}`}
            </ModalTitle>
            <ModalContent>
                <ShareBlock onAdd={addUserOrGroupAccess} />
                <SharingList
                    sharingSettings={sharingSettings}
                    onChange={updateSharingSettings}
                />
            </ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button>{i18n.t('Hide')}</Button>
                    <Button primary disabled={!dirty}>
                        {i18n.t('Save')}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}

SharingDialog.propTypes = {
    initialSharingSettings: PropTypes.object,
    name: PropTypes.string,
}
