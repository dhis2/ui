import propTypes from 'prop-types'
import React from 'react'
import { orgUnitPathPropType } from '../../../prop-types.js'
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
    children,
    node,
    open,
    loading,
    checked,
    onChange,
    dataTest,
    selected,
    hasChildren,
    highlighted,
    onToggleOpen,
    disableSelection,
    singleSelection,
    hasSelectedDescendants,
}) => {
    const onClick = ({ checked }, event) => {
        const newSelected = createNewSelected({
            path: node.path,
            selected,
            checked,
            singleSelection,
        })

        onChange(
            {
                // @TODO: It'd make more sense to pass the node as an object
                // isntead of spread it. But that'd be a breaking change
                ...node,
                checked,
                selected: newSelected,
            },
            event
        )
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
    children: propTypes.any.isRequired,
    dataTest: propTypes.string.isRequired,
    // This is `any` so it can be customized by the app
    hasChildren: propTypes.bool.isRequired,
    loading: propTypes.bool.isRequired,
    node: propTypes.shape({
        displayName: propTypes.string.isRequired,
        id: propTypes.string.isRequired,
        children: propTypes.arrayOf(
            propTypes.shape({
                displayName: propTypes.string.isRequired,
                id: propTypes.string.isRequired,
            })
        ),
        path: propTypes.string,
    }).isRequired,
    open: propTypes.bool.isRequired,
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
