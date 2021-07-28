import React from 'react'
import { Label } from './label/index.js'

export const defaultRenderNodeLabel = ({
    data,
    dataTest = `${dataTest}-label`,
    disableSelection,
    hasChildren,
    hasSelectedDescendants,
    id,
    highlighted,
    checked,
    loading,
    onChange,
    onToggleOpen,
    open,
    path,
    selected,
    singleSelection,
}) => (
    <Label
        checked={checked}
        dataTest={dataTest}
        disableSelection={disableSelection}
        displayName={data.displayName}
        hasChildren={hasChildren}
        hasSelectedDescendants={hasSelectedDescendants}
        highlighted={highlighted}
        id={id}
        loading={loading}
        onChange={onChange}
        selected={selected}
        onToggleOpen={onToggleOpen}
        open={open}
        path={path}
        singleSelection={singleSelection}
    />
)
