import propTypes from 'prop-types'
import React from 'react'
import { orgUnitPathPropType } from '../prop-types.js'
import { DisabledSelectionLabel } from './disabled-selection-label.js'
import { IconizedCheckbox } from './iconized-checkbox.js'
import { LabelContainer } from './label-container.js'
import { SingleSelectionLabel } from './single-selection-label.js'

const createNewSelected = ({ selected, path, checked, singleSelection }) => {
    const pathIndex = selected.indexOf(path)

    if (checked && pathIndex !== -1) return selected
    if (singleSelection && checked) return [path]
    if (checked) return [...selected, path]
    if (pathIndex === -1) return selected
    if (singleSelection) return []
    if (selected.indexOf(path) === 0) return selected.slice(1)

    const prevSlice = selected.slice(0, pathIndex)
    const nextSlice = selected.slice(pathIndex + 1)
    return [...prevSlice, ...nextSlice]
}

const Label = ({
    id,
    path,
    open,
    loading,
    checked,
    onChange,
    dataTest,
    selected,
    hasChildren,
    highlighted,
    displayName,
    onToggleOpen,
    disableSelection,
    singleSelection,
    hasSelectedDescendants,
}) => {
    const onClick = ({ checked }, event) => {
        const newSelected = createNewSelected({
            selected,
            path,
            checked,
            singleSelection,
        })

        onChange(
            { id, path, checked, displayName, selected: newSelected },
            event
        )
    }

    if (disableSelection) {
        return (
            <LabelContainer highlighted={highlighted}>
                <DisabledSelectionLabel
                    label={displayName}
                    loading={loading}
                    onToggleOpen={onToggleOpen}
                />
            </LabelContainer>
        )
    }

    if (singleSelection) {
        return (
            <LabelContainer highlighted={highlighted}>
                <SingleSelectionLabel
                    checked={checked}
                    label={displayName}
                    onChange={onClick}
                    loading={loading}
                >
                    {displayName}
                </SingleSelectionLabel>
            </LabelContainer>
        )
    }

    return (
        <LabelContainer highlighted={highlighted}>
            <IconizedCheckbox
                dataTest={dataTest}
                checked={checked}
                name="org-unit"
                value={id}
                label={displayName}
                loading={loading}
                indeterminate={!checked && hasSelectedDescendants}
                onChange={onClick}
                open={open}
                hasChildren={hasChildren}
            />
        </LabelContainer>
    )
}

Label.propTypes = {
    dataTest: propTypes.string.isRequired,
    displayName: propTypes.string.isRequired,
    hasChildren: propTypes.bool.isRequired,
    id: propTypes.string.isRequired,
    loading: propTypes.bool.isRequired,
    open: propTypes.bool.isRequired,
    path: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    onToggleOpen: propTypes.func.isRequired,
    checked: propTypes.bool,
    disableSelection: propTypes.bool,
    hasSelectedDescendants: propTypes.bool,
    highlighted: propTypes.bool,
    selected: propTypes.arrayOf(orgUnitPathPropType),
    singleSelection: propTypes.bool,
}

export { Label }
