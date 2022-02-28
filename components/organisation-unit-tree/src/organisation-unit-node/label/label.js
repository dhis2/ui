import PropTypes from 'prop-types'
import React from 'react'
import { orgUnitPathPropType } from '../../prop-types.js'
import { DisabledSelectionLabel } from './disabled-selection-label.js'
import { IconizedCheckbox } from './iconized-checkbox.js'
import { LabelContainer } from './label-container.js'
import { SingleSelectionLabel } from './single-selection-label.js'

const createNewSelected = ({ selected, path, checked, singleSelection }) => {
    const pathIndex = selected.indexOf(path)

    if (checked && pathIndex !== -1) {
        return selected
    }
    if (singleSelection && checked) {
        return [path]
    }
    if (checked) {
        return [...selected, path]
    }
    if (pathIndex === -1) {
        return selected
    }
    if (singleSelection) {
        return []
    }
    if (selected.indexOf(path) === 0) {
        return selected.slice(1)
    }

    const prevSlice = selected.slice(0, pathIndex)
    const nextSlice = selected.slice(pathIndex + 1)
    return [...prevSlice, ...nextSlice]
}

const Label = ({
    checked,
    children,
    dataTest,
    disableSelection,
    fullPath,
    hasChildren,
    hasSelectedDescendants,
    highlighted,
    loading,
    node,
    onChange,
    onToggleOpen,
    open,
    rootId,
    selected,
    singleSelection,
}) => {
    const onClick = ({ checked }, event) => {
        const newSelected = createNewSelected({
            path: fullPath,
            selected,
            checked,
            singleSelection,
            rootId,
        })

        // @TODO: It'd make more sense to pass the node as an object
        // instead of spread it. But that'd be a breaking change
        const payload = {
            ...node,
            path: fullPath,
            checked,
            selected: newSelected,
        }

        onChange(payload, event)
    }

    if (disableSelection) {
        return (
            <LabelContainer highlighted={highlighted}>
                <DisabledSelectionLabel
                    loading={loading}
                    onToggleOpen={onToggleOpen}
                >
                    {children}
                </DisabledSelectionLabel>
            </LabelContainer>
        )
    }

    if (singleSelection) {
        return (
            <LabelContainer highlighted={highlighted}>
                <SingleSelectionLabel
                    checked={checked}
                    onChange={onClick}
                    loading={loading}
                >
                    {children}
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
                value={node.id}
                loading={loading}
                indeterminate={!checked && hasSelectedDescendants}
                onChange={onClick}
                open={open}
                hasChildren={hasChildren}
            >
                {children}
            </IconizedCheckbox>
        </LabelContainer>
    )
}

Label.propTypes = {
    // This is `any` so it can be customized by the app
    children: PropTypes.any.isRequired,
    dataTest: PropTypes.string.isRequired,
    fullPath: PropTypes.string.isRequired,
    hasChildren: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    node: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        children: PropTypes.number,
        path: PropTypes.string,
    }).isRequired,
    open: PropTypes.bool.isRequired,
    rootId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onToggleOpen: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    disableSelection: PropTypes.bool,
    hasSelectedDescendants: PropTypes.bool,
    highlighted: PropTypes.bool,
    selected: PropTypes.arrayOf(orgUnitPathPropType),
    singleSelection: PropTypes.bool,
}

export { Label }
