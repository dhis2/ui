import React from 'react'
import {
    SingleSelect,
    SingleSelectOption,
} from '../'
import { accessStrings, ACCESS_NONE } from './sharingConstants'
import { accessSelectStyles } from './SharingDialog.styles';

export const AccessSelect = ({ access, onChange, showNoAccessOption }) => (
    <SingleSelect
      className="share-select"
      placeholder="Select access"
      selected={access}
      onChange={({ selected }) => onChange(selected)}
    >
        <style jsx>{accessSelectStyles}</style>
        {Object.entries(accessStrings).map(([value, strings]) => (
            (value !== ACCESS_NONE || showNoAccessOption) &&
                <SingleSelectOption label={strings.option} value={value} />
        ))}
    </SingleSelect>
  );