import React from 'react'
import { Label } from './label.js'

export const defaultRenderNodeLabel = ({
    dataTest,
    disableSelection,
    displayName,
    hasChildren,
    hasSelectedDescendants,
    id,
    isHighlighted,
    isSelected,
    loading,
    onChange,
    onToggleOpen,
    open,
    path,
    selected,
    singleSelection,
}) => (
    <Label
        checked={isSelected}
        dataTest={`${dataTest}-label`}
        disableSelection={disableSelection}
        displayName={displayName}
        hasChildren={hasChildren}
        hasSelectedDescendants={hasSelectedDescendants}
        highlighted={isHighlighted}
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
