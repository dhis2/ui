import React from 'react'
import { Label } from './label/index.js'

export const defaultRenderNodeLabel = ({
    data,
    dataTest = `${dataTest}-label`,
    disableSelection,
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
        dataTest={dataTest}
        disableSelection={disableSelection}
        displayName={data.displayName}
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
