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
    loading,
    onChange,
    onToggleOpen,
    open,
    selected,
    singleSelection,
}) => (
    <Label
        checked={checked}
        dataTest={dataTest}
        disableSelection={disableSelection}
        displayName={node.displayName}
        hasChildren={hasChildren}
        hasSelectedDescendants={hasSelectedDescendants}
        highlighted={highlighted}
        id={node.id}
        loading={loading}
        onChange={onChange}
        selected={selected}
        onToggleOpen={onToggleOpen}
        open={open}
        path={node.path}
        singleSelection={singleSelection}
    />
)
