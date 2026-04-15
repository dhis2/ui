import React from 'react'
import { DisabledSelectionLabel } from './disabled-selection-label.tsx'
import { IconizedCheckbox } from './iconized-checkbox.tsx'
import { LabelContainer } from './label-container.tsx'
import { SingleSelectionLabel } from './single-selection-label.tsx'

interface LabelNode {
    displayName: string
    id: string
    children?: number
    path?: string
}

const createNewSelected = ({
    selected,
    path,
    checked,
    singleSelection,
}: {
    selected: string[]
    path: string
    checked: boolean
    singleSelection?: boolean
}): string[] => {
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

export interface LabelProps {
    children: React.ReactNode
    dataTest: string
    fullPath: string
    hasChildren: boolean
    loading: boolean
    node: LabelNode
    open: boolean
    rootId: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...args: any[]) => void
    onToggleOpen: (
        payload: { checked: boolean },
        event: React.MouseEvent
    ) => void
    checked?: boolean
    disableSelection?: boolean
    hasSelectedDescendants?: boolean
    highlighted?: boolean
    selected?: string[]
    singleSelection?: boolean
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
    rootId: _rootId,
    selected = [],
    singleSelection,
}: LabelProps) => {
    const onClick = (
        { checked }: { checked: boolean },
        event: React.SyntheticEvent
    ) => {
        const newSelected = createNewSelected({
            path: fullPath,
            selected,
            checked,
            singleSelection,
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
                checked={!!checked}
                name="org-unit"
                value={node.id}
                loading={loading}
                indeterminate={!checked && !!hasSelectedDescendants}
                onChange={onClick}
                open={open}
                hasChildren={hasChildren}
            >
                {children}
            </IconizedCheckbox>
        </LabelContainer>
    )
}

export { Label }
