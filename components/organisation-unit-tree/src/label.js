import { Checkbox } from '@dhis2-ui/checkbox'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'
import { orgUnitPathPropType } from './prop-types.js'

const Empty = ({ dataTest }) => (
    <svg
        height="18px"
        version="1.1"
        viewBox="0 0 18 18"
        width="18px"
        data-test={`${dataTest}-iconempty`}
    >
        <g
            fill="none"
            fillRule="evenodd"
            id="icon/empty"
            stroke="none"
            strokeWidth="1"
        />

        <style jsx>{`
            svg {
                display: block;
                margin: 3px 0;
            }
        `}</style>
    </svg>
)

Empty.propTypes = {
    dataTest: propTypes.string.isRequired,
}
const Single = ({ dataTest }) => (
    <svg
        height="18px"
        version="1.1"
        viewBox="0 0 18 18"
        width="18px"
        data-test={`${dataTest}-iconsingle`}
    >
        <g
            fill="none"
            fillRule="evenodd"
            id="icon/single"
            stroke="none"
            strokeWidth="1"
        >
            <rect
                fill="#A0ADBA"
                height="4"
                id="Rectangle"
                rx="1"
                width="4"
                x="7"
                y="7"
            />
        </g>

        <style jsx>{`
            svg {
                display: block;
                margin: 3px 0;
            }
        `}</style>
    </svg>
)

Single.propTypes = {
    dataTest: propTypes.string.isRequired,
}
const FolderClosed = ({ dataTest }) => (
    <svg
        width="18px"
        height="18px"
        viewBox="0 0 18 18"
        version="1.1"
        data-test={`${dataTest}-iconfolderclosed`}
    >
        <g
            id="icon/folder/closed"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <path
                d="M2,3.5 C1.17157288,3.5 0.5,4.17157288 0.5,5 L0.5,13 C0.5,13.8284271 1.17157288,14.5 2,14.5 L12,14.5 C12.8284271,14.5 13.5,13.8284271 13.5,13 L13.5,7 C13.5,6.17157288 12.8284271,5.5 12,5.5 L6.69098301,5.5 L5.82917961,3.7763932 C5.7444836,3.60700119 5.57135204,3.5 5.38196601,3.5 L2,3.5 Z"
                id="Path-2"
                stroke="#6E7A8A"
                fill="#D5DDE5"
            />
        </g>

        <style jsx>{`
            svg {
                display: block;
                margin: 3px 0;
            }
        `}</style>
    </svg>
)

FolderClosed.propTypes = {
    dataTest: propTypes.string.isRequired,
}
const FolderOpen = ({ dataTest }) => (
    <svg
        width="18px"
        height="18px"
        viewBox="0 0 18 18"
        version="1.1"
        data-test={`${dataTest}-iconfolderopen`}
    >
        <g
            id="icon/folder/open"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <g
                id="Group"
                transform="translate(0.000000, 3.000000)"
                stroke="#6E7A8A"
            >
                <path
                    d="M2,0.5 C1.17157288,0.5 0.5,1.17157288 0.5,2 L0.5,10 C0.5,10.8284271 1.17157288,11.5 2,11.5 L12,11.5 C12.8284271,11.5 13.5,10.8284271 13.5,10 L13.5,4 C13.5,3.17157288 12.8284271,2.5 12,2.5 L6.69098301,2.5 L5.82917961,0.776393202 C5.7444836,0.607001188 5.57135204,0.5 5.38196601,0.5 L2,0.5 Z"
                    id="Path-2"
                    fill="#A0ADBA"
                />

                <path
                    d="M1.53632259,10.7093809 C1.47575089,10.7941813 1.44318932,10.8957885 1.44318932,11 C1.44318932,11.2761424 1.66704695,11.5 1.94318932,11.5 L12.4853821,11.5 C12.6468577,11.5 12.7983931,11.4220172 12.8922488,11.2906191 L16.4636774,6.2906191 C16.5242491,6.20581872 16.5568107,6.10421149 16.5568107,6 C16.5568107,5.72385763 16.3329531,5.5 16.0568107,5.5 L5.5146179,5.5 C5.35314234,5.5 5.20160692,5.57798284 5.10775116,5.7093809 L1.53632259,10.7093809 Z"
                    id="Path-3"
                    fill="#FBFCFD"
                />
            </g>
        </g>

        <style jsx>{`
            svg {
                margin: 3px 0;
                display: block;
            }
        `}</style>
    </svg>
)

FolderOpen.propTypes = {
    dataTest: propTypes.string.isRequired,
}

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
