import { CircularLoader } from '@dhis2-ui/loader'
import { Node } from '@dhis2-ui/node'
import propTypes from '@dhis2/prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'
import i18n from '../locales/index.js'
import { orgUnitPathPropType } from '../prop-types.js'
import { computeChildNodes } from './compute-child-nodes.js'
import { ErrorMessage } from './error-message.js'
import { hasDescendantSelectedPaths } from './has-descendant-selected-paths.js'
import { Label } from './label/index.js'
import { useOpenState } from './use-open-state.js'
import { useOrgData } from './use-org-data/index.js'

const loadingSpinnerStyles = resolve`
    .small {
        display: block;
        margin: 3px 0;
        width: 18px;
        height: 18px;
    }
`

const LoadingSpinner = () => (
    <div>
        <CircularLoader small className={loadingSpinnerStyles.className} />
        <style>{loadingSpinnerStyles.styles}</style>
        <style jsx>{`
            div {
                width: 24px;
            }
        `}</style>
    </div>
)

export const OrganisationUnitNode = ({
    autoExpandLoadingError,
    dataTest,
    disableSelection,
    displayName,
    expanded,
    highlighted,
    id,
    isUserDataViewFallback,
    path,
    renderNodeLabel,
    selected,
    singleSelection,
    filter,
    suppressAlphabeticalSorting,
    onChange,
    onChildrenLoaded,
    onCollapse,
    onExpand,
}) => {
    const { loading, error, data } = useOrgData(id, {
        isUserDataViewFallback,
        suppressAlphabeticalSorting,
        displayName,
        onComplete: onChildrenLoaded,
    })

    const childNodes = !loading && !error ? computeChildNodes(data, filter) : []
    const hasChildren = !!childNodes.length
    const hasSelectedDescendants = hasDescendantSelectedPaths(path, selected)
    const isHighlighted = highlighted.includes(path)
    const { open, onToggleOpen } = useOpenState({
        autoExpandLoadingError,
        errorMessage: error && error.toString(),
        path,
        expanded,
        onExpand,
        onCollapse,
    })

    const isSelected = selected.includes(path)

    const labelContent = renderNodeLabel({
        disableSelection,
        hasChildren,
        hasSelectedDescendants,
        loading,
        error,
        selected,
        open,
        path,
        singleSelection,
        node: data,
        label: data.displayName,
        checked: isSelected,
        highlighted: isHighlighted,
    })

    const label = (
        <Label
            node={data}
            open={open}
            loading={loading}
            checked={isSelected}
            onChange={onChange}
            dataTest={`${dataTest}-label`}
            selected={selected}
            hasChildren={hasChildren}
            highlighted={isHighlighted}
            onToggleOpen={onToggleOpen}
            disableSelection={disableSelection}
            singleSelection={singleSelection}
            hasSelectedDescendants={hasSelectedDescendants}
        >
            {labelContent}
        </Label>
    )

    /**
     * No children means no arrow, therefore we have to provide something.
     * While "loading" is true, "hasChildren" is false
     * There are some possible children variants as content of this node:
     *
     * 1. Nothing; There are no children
     * 2. Placeholder: There are children, but the Node is closed (show arrow)
     * 3. Error: There are children and loading information somehow failed
     * 4. Child nodes: There are children and the node is open
     */
    const showPlaceholder = hasChildren && !open && !error
    const showChildNodes = hasChildren && open && !error

    return (
        <Node
            dataTest={`${dataTest}-node`}
            open={open}
            onOpen={onToggleOpen}
            onClose={onToggleOpen}
            component={label}
            icon={loading && <LoadingSpinner />}
        >
            {error && (
                <ErrorMessage dataTest={dataTest}>
                    {i18n.t('Could not load children')}
                </ErrorMessage>
            )}
            {showPlaceholder && <span data-test={`${dataTest}-placeholder`} />}
            {showChildNodes &&
                childNodes.map(child => {
                    const childPath = `${path}/${child.id}`
                    const grandChildNodes = computeChildNodes(child, filter)

                    return (
                        <OrganisationUnitNode
                            key={childPath}
                            autoExpandLoadingError={autoExpandLoadingError}
                            childNodes={grandChildNodes}
                            dataTest={dataTest}
                            disableSelection={disableSelection}
                            displayName={child.displayName}
                            expanded={expanded}
                            filter={filter}
                            highlighted={highlighted}
                            id={child.id}
                            isUserDataViewFallback={isUserDataViewFallback}
                            suppressAlphabeticalSorting={
                                suppressAlphabeticalSorting
                            }
                            path={childPath}
                            renderNodeLabel={renderNodeLabel}
                            selected={selected}
                            singleSelection={singleSelection}
                            onChange={onChange}
                            onChildrenLoaded={onChildrenLoaded}
                            onCollapse={onCollapse}
                            onExpand={onExpand}
                        />
                    )
                })}
        </Node>
    )
}

OrganisationUnitNode.propTypes = {
    dataTest: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    renderNodeLabel: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired,

    autoExpandLoadingError: propTypes.bool,
    disableSelection: propTypes.bool,
    displayName: propTypes.string,
    expanded: propTypes.arrayOf(orgUnitPathPropType),
    filter: propTypes.arrayOf(orgUnitPathPropType),
    highlighted: propTypes.arrayOf(orgUnitPathPropType),
    isUserDataViewFallback: propTypes.bool,
    path: orgUnitPathPropType,
    selected: propTypes.arrayOf(orgUnitPathPropType),
    singleSelection: propTypes.bool,
    suppressAlphabeticalSorting: propTypes.bool,

    onChildrenLoaded: propTypes.func,
    onCollapse: propTypes.func,
    onExpand: propTypes.func,
}
