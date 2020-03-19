/* eslint-disable */
/**
 * REMOVE THE ESLINT-DISABLE
 * !!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!! BEFORE !!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!
 * APPROVING THE PR
 */
import { CircularLoader, Node } from '@dhis2/ui-core';
import { resolve } from 'styled-jsx/css'
import React, { useEffect } from 'react'
import i18n from '@dhis2/d2-i18n'
import propTypes from '@dhis2/prop-types'

import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';
import { computeChildNodes } from './computeChildNodes';
import { hasDescendantSelectedPaths } from './hasDescendantSelectedPaths';
import { orgUnitIdPropType, orgUnitPathPropType } from './propTypes';
import { useOpenState } from './useOpenState';
import { useOrgData } from './useOrgData';

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
    selected,
    singleSelection,
    filter,
    onChange,
    onChildrenLoaded,
    onCollapse,
    onExpand,
}) => {
    const { loading, error, data } = useOrgData([id], { isUserDataViewFallback })
    const childNodes = !loading && !error
        ? computeChildNodes(data[id], filter)
        : []
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

    useEffect(
        () => {
            if (!loading && !error && onChildrenLoaded) {
                onChildrenLoaded(data)
            }
        },
        [ loading, error, onChildrenLoaded ]
    )

    const label = (
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
            {showChildNodes && childNodes.map(child => {
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
                        path={childPath}
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
    onChange: propTypes.func.isRequired,

    autoExpandLoadingError: propTypes.bool,
    disableSelection: propTypes.bool,
    displayName: propTypes.string,
    expanded: propTypes.arrayOf(orgUnitPathPropType),
    filter: propTypes.arrayOf(orgUnitPathPropType),
    /**
     * The parent already knows whether this node has children or not
     * before we load the children's details, so we can use this information
     * even during the loading phase
     */
    hasChildren: propTypes.bool,
    highlighted: propTypes.arrayOf(orgUnitPathPropType),
    isUserDataViewFallback: propTypes.bool,
    path: orgUnitPathPropType,
    selected: propTypes.arrayOf(orgUnitPathPropType),
    singleSelection: propTypes.bool,

    onCollapse: propTypes.func,
    onExpand: propTypes.func,
    onChildrenLoaded: propTypes.func,
}
