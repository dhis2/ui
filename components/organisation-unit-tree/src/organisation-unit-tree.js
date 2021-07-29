import propTypes from 'prop-types'
import React, { useEffect } from 'react'
import { OrganisationUnitNode } from './organisation-unit-node.js'
import { orgUnitPathPropType } from './prop-types.js'
import { RootError } from './root-error.js'
import { RootLoading } from './root-loading.js'
import { useExpanded } from './use-expanded.js'
import { useForceReload } from './use-force-reload.js'
import { useOrgData } from './use-org-data.js'

const OrganisationUnitTree = ({
    onChange,
    roots,

    autoExpandLoadingError,
    dataTest,
    disableSelection,
    forceReload,
    highlighted,
    isUserDataViewFallback,
    initiallyExpanded,
    filter,
    selected,
    singleSelection,
    suppressAlphabeticalSorting,

    onExpand,
    onCollapse,
    onChildrenLoaded,
}) => {
    const rootIds = Array.isArray(roots) ? roots : [roots]
    const reloadId = useForceReload(forceReload)
    const { loading, error, data, refetch } = useOrgData(rootIds, {
        withChildren: false,
        isUserDataViewFallback,
        suppressAlphabeticalSorting,
    })
    const { expanded, handleExpand, handleCollapse } = useExpanded(
        initiallyExpanded,
        onExpand,
        onCollapse
    )

    useEffect(() => {
        // do not refetch on initial render
        if (refetch && reloadId > 0) {
            refetch()
        }
    }, [reloadId, refetch])

    return (
        <div data-test={dataTest}>
            {error && <RootError error={error} dataTest={dataTest} />}
            {loading && <RootLoading dataTest={dataTest} />}
            {!error &&
                !loading &&
                rootIds.map(rootId => {
                    const rootNode = data[rootId]
                    const rootPath = `/${rootId}`

                    return (
                        <OrganisationUnitNode
                            key={rootPath}
                            autoExpandLoadingError={autoExpandLoadingError}
                            dataTest={dataTest}
                            disableSelection={disableSelection}
                            displayName={rootNode.displayName}
                            expanded={expanded}
                            highlighted={highlighted}
                            id={rootId}
                            isUserDataViewFallback={isUserDataViewFallback}
                            filter={filter}
                            path={rootPath}
                            selected={selected}
                            singleSelection={singleSelection}
                            suppressAlphabeticalSorting={
                                suppressAlphabeticalSorting
                            }
                            onChange={onChange}
                            onChildrenLoaded={onChildrenLoaded}
                            onCollapse={handleCollapse}
                            onExpand={handleExpand}
                        />
                    )
                })}
        </div>
    )
}

OrganisationUnitTree.propTypes = {
    /** Root org unit ID(s) */
    roots: propTypes.oneOfType([
        propTypes.string,
        propTypes.arrayOf(propTypes.string),
    ]).isRequired,
    /** Will be called with the following object:
     * `{ id: string, displayName: string, path: string, checked: boolean, selected: string[] }` */
    onChange: propTypes.func.isRequired,

    /** When set, the error when loading children fails will be shown automatically */
    autoExpandLoadingError: propTypes.bool,
    dataTest: propTypes.string,
    /** When set to true, no unit can be selected */
    disableSelection: propTypes.bool,
    /**
     * All organisation units with a path that includes the provided paths will be shown.
     * All others will not be rendered. When not provided, all org units will be shown.
     */
    filter: propTypes.arrayOf(orgUnitPathPropType),
    /** When true, everything will be reloaded. In order to load it again after reloading, `forceReload` has to be set to `false` and then to `true` again */
    forceReload: propTypes.bool,
    /**
     * All units provided to "highlighted" as path will be visually
     * highlighted.
     * Note:
     * The d2-ui component used two props for this:
     * * searchResults
     * * highlightSearchResults
     */
    highlighted: propTypes.arrayOf(orgUnitPathPropType),
    /**
     * An array of OU paths that will be expanded automatically
     * as soon as they are encountered.
     * The path of an OU is the UIDs of the OU
     * and all its parent OUs separated by slashes (/)
     * Note: This replaces "openFirstLevel" as that's redundant
     */
    initiallyExpanded: propTypes.arrayOf(orgUnitPathPropType),
    /** When provided, the 'isUserDataViewFallback' option will be sent when requesting the org units */
    isUserDataViewFallback: propTypes.bool,
    /** An array of paths of selected OUs. The path of an OU is the UIDs of the OU and all its parent OUs separated by slashes (`/`) */
    selected: propTypes.arrayOf(orgUnitPathPropType),
    /** When set, no checkboxes will be displayed and only the first selected path in `selected` will be highlighted */
    singleSelection: propTypes.bool,
    /** Turns off alphabetical sorting of units */
    suppressAlphabeticalSorting: propTypes.bool,
    /** Called with the children's data that was loaded */
    onChildrenLoaded: propTypes.func,
    /** Called with `{ path: string }` with the path of the parent of the level closed */
    onCollapse: propTypes.func,
    /** Called with `{ path: string }` with the path of the parent of the level opened */
    onExpand: propTypes.func,

    /**
     * All units with ids (not paths!) provided
     * to "idsThatShouldBeReloaded" will be reloaded
     * In order to reload an id twice, the array must be changed
     * while keeping the id to reload in the array
     *
     * NOTE: This is currently not working due to a limitation
     * of the data engine (we can't force specific resource to reload,
     * we'd have to reload the sibling nodes currently as well)
     */
    //idsThatShouldBeReloaded: propTypes.arrayOf(orgUnitIdPropType),
}

OrganisationUnitTree.defaultProps = {
    dataTest: 'dhis2-uiwidgets-orgunittree',
    filter: [],
    highlighted: [],
    initiallyExpanded: [],
    selected: [],
}

export { OrganisationUnitTree }
