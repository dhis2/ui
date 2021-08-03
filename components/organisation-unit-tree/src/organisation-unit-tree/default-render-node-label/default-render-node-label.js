import React from 'react'
import { Label } from './label/index.js'

export const defaultRenderNodeLabel = ({
    node,
    dataTest = `${dataTest}-label`,
    disableSelection,
    hasChildren,
    hasSelectedDescendants,
    highlighted,
    checked,
    label,
    loading,
    onChange,
    onToggleOpen,
    open,
    selected,
    singleSelection,
}) => (
    <Label
        node={node}
        checked={checked}
        dataTest={dataTest}
        disableSelection={disableSelection}
        hasChildren={hasChildren}
        hasSelectedDescendants={hasSelectedDescendants}
        highlighted={highlighted}
        loading={loading}
        onChange={onChange}
        selected={selected}
        onToggleOpen={onToggleOpen}
        open={open}
        singleSelection={singleSelection}
    >
        {label}
    </Label>
)
