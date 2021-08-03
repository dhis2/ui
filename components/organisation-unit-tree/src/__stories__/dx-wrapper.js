/* eslint-disable react/no-unescaped-entities,react/prop-types */
import React, { useState } from 'react'
import { OrganisationUnitTree } from '../index.js'

const DX_onChange = (selected, setSelected, singleSelection) => ({
    id,
    path,
    checked,
}) => {
    console.log('onChange', { path, id, checked })
    const pathIndex = selected.indexOf(path)

    if (checked) {
        setSelected(singleSelection ? [path] : [...selected, path])
    } else {
        setSelected(
            singleSelection
                ? []
                : [
                      ...selected.slice(0, pathIndex),
                      ...selected.slice(pathIndex + 1),
                  ]
        )
    }
}

export const Wrapper = props => {
    const [selected, setSelected] = useState([])

    return (
        <OrganisationUnitTree
            name="Root org unit"
            roots={['A0000000000']}
            selected={selected}
            onChange={DX_onChange(selected, setSelected, props.singleSelection)}
            initiallyExpanded={['A0000000001/A0000000002']}
            {...props}
        />
    )
}
