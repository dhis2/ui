import { Checkbox, colors } from '@dhis2/ui-core'
import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { FolderOpen } from './icons/FolderOpen'
import { FolderClosed } from './icons/FolderClosed'
import { Single } from './icons/Single'
import { Empty } from './icons/Empty'
import { orgUnitPathPropType } from './propTypes'

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {Function} props.onToggleOpen
 * @param {bool} [props.loading]
 * @returns {React.Component}
 */
const DisabledSelectionLabel = ({ label, loading, onToggleOpen }) => (
    <SingleSelectionLabel
        checked={false}
        loading={loading}
        label={label}
        onChange={onToggleOpen}
    />
)

DisabledSelectionLabel.propTypes = {
    label: propTypes.string.isRequired,
    onToggleOpen: propTypes.func.isRequired,
    loading: propTypes.bool,
}

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {bool} [props.checked]
 * @param {bool} [props.loading]
 * @param {Function} [props.onChange]
 * @returns {React.Component}
 */
const SingleSelectionLabel = ({ checked, label, onChange, loading }) => (
    <span
        onClick={event => {
            const payload = { checked: !checked }
            onChange(payload, event)
        }}
        className={cx({ checked, loading })}
    >
        {label}

        <style jsx>{`
            span {
                background: transparent;
                border-radius: 3px;
                color: ${colors.grey900};
                cursor: pointer;
                display: inline-block;
                font-size: 14px;
                line-height: 24px;
                padding: 0 5px;
                user-select: none;
                white-space: nowrap;
            }

            .checked {
                background: ${colors.teal700};
                color: white;
            }

            .loading {
                cursor: auto;
            }
        `}</style>
    </span>
)

SingleSelectionLabel.propTypes = {
    label: propTypes.string.isRequired,
    checked: propTypes.bool,
    loading: propTypes.bool,
    onChange: propTypes.func,
}

/**
 * @param {Object} props
 * @param {bool} props.highlighted
 * @param {React.Component|React.Component[]} props.children
 * @returns {React.Component}
 */
const LabelContainer = ({ highlighted, children }) => (
    <div className={cx({ highlighted })}>
        <span>{children}</span>

        <style jsx>{`
            div {
                display: flex;
            }

            span {
                display: block;
            }

            .highlighted {
                background: ${colors.teal200};
                padding-right: 4px;
            }
        `}</style>
    </div>
)

LabelContainer.propTypes = {
    children: propTypes.node,
    highlighted: propTypes.bool,
}

/**
 * @param {Object} props
 * @param {bool} props.hasChildren
 * @param {bool} props.open
 * @returns {React.Component}
 */
const Icon = ({ loading, hasChildren, open, dataTest }) => {
    if (loading) {
        return <Empty dataTest={dataTest} />
    }

    if (!hasChildren) {
        return <Single dataTest={dataTest} />
    }

    if (open) {
        return <FolderOpen dataTest={dataTest} />
    }

    return <FolderClosed dataTest={dataTest} />
}

Icon.propTypes = {
    dataTest: propTypes.string.isRequired,
    hasChildren: propTypes.bool,
    loading: propTypes.bool,
    open: propTypes.bool,
}

const IconizedCheckbox = ({
    checked,
    dataTest,
    hasChildren,
    indeterminate,
    label,
    loading,
    name,
    open,
    value,
    onChange,
}) => {
    const icon = (
        <Icon
            loading={loading}
            open={open}
            hasChildren={hasChildren}
            dataTest={dataTest}
        />
    )

    const checkboxLabel = (
        <>
            <span>{icon}</span>
            {label}

            <style jsx>{`
                span {
                    display: inline-block;
                    margin-right: 4px;
                }
            `}</style>
        </>
    )

    return (
        <>
            <Checkbox
                dense
                checked={checked}
                name={name}
                value={value}
                label={checkboxLabel}
                indeterminate={indeterminate}
                onChange={onChange}
            />
        </>
    )
}

IconizedCheckbox.propTypes = {
    checked: propTypes.bool.isRequired,
    dataTest: propTypes.string.isRequired,
    hasChildren: propTypes.bool.isRequired,
    indeterminate: propTypes.bool.isRequired,
    label: propTypes.string.isRequired,
    loading: propTypes.bool.isRequired,
    name: propTypes.string.isRequired,
    open: propTypes.bool.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

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

/**
 * @module
 * @param {Label.PropTypes} props
 * @returns {React.Component}
 */
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

        onChange({ id, path, checked, selected: newSelected }, event)
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} id
 * @prop {string} path
 * @prop {string} displayName
 * @prop {bool} open
 * @prop {bool} loading
 * @prop {bool} hasChildren
 * @prop {Function} [onChange]
 * @prop {Function} [onToggleOpen]
 * @prop {bool} [checked]
 * @prop {bool} [highlighted]
 * @prop {bool} [disableSelection]
 * @prop {bool} [singleSelection]
 * @prop {bool} [hasSelectedDescendants]
 */
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
