import React from 'react'

import { sharingListItemStyles } from "./SharingDialog.styles";
import { IconExternal } from "./icons/IconExternal";
import { IconDelete } from "./icons/IconDelete";
import { SHARE_TARGET_PUBLIC, accessStrings, isPermanentTarget } from "./sharingConstants";
import { AccessSelect } from './AccessSelect';

export const SharingListItem = ({ name, target, access, onChange, onRemove }) => (
    <tr>
      <style jsx>{sharingListItemStyles}</style>
      <td className="icon">
        <IconExternal />
      </td>
      <td className="details">
        <p className="share-entity">{name}</p>
        <p className="share-context">
          {target === SHARE_TARGET_PUBLIC
            ? accessStrings[access]?.publicDescription
            : accessStrings[access]?.description}
        </p>
      </td>
      <td>
        <AccessSelect access={access} showNoAccessOption={isPermanentTarget(target)} onChange={onChange}/>
      </td>
      <td className="share-delete">
        {!isPermanentTarget(target) && <div onClick={onRemove}>
          <IconDelete />
        </div>}
      </td>
    </tr>
  );