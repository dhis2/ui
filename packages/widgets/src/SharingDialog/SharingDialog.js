import React, { useState } from "react";
import PropTypes from '@dhis2/prop-types'

import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  ButtonStrip,
  Button,
} from "../";
import { SharingList } from "./SharingList";
import { ShareBlock } from "./ShareBlock";
import i18n from "@dhis2/d2-i18n";
import { defaultSharingSettings, sharingSettingsAreEqual } from "./sharingConstants";

export const SharingDialog = ({ name, initialSharingSettings = defaultSharingSettings }) => {
  const [sharingSettings, updateSharingSettings] = useState(initialSharingSettings)

  const addUserOrGroupAccess = ({ type, id, access }) => {
    console.log(type, id, access)
    updateSharingSettings({
      ...sharingSettings,
      [`${type}s`]: {
        ...sharingSettings[`${type}s`],
        [id]: access
      }
  })
}

  console.log(sharingSettings)

  const dirty = !sharingSettingsAreEqual(initialSharingSettings, sharingSettings)
  return (
    <Modal large >
      <ModalTitle>{i18n.t('Sharing settings')}{ name && `: ${name}` }</ModalTitle>
      <ModalContent>
          <ShareBlock onAdd={addUserOrGroupAccess} />
          <SharingList sharingSettings={sharingSettings} onChange={updateSharingSettings} />
      </ModalContent>
      <ModalActions>
          <ButtonStrip end>
            <Button>Hide</Button>
            <Button primary disabled={!dirty}>Save</Button>
          </ButtonStrip>
      </ModalActions>
    </Modal>
  );
}

SharingDialog.propTYpes = {
  name: PropTypes.string
}