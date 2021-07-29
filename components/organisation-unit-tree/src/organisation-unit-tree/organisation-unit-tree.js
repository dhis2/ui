import propTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { OrganisationUnitNode } from '../organisation-unit-node/index.js'
import { orgUnitPathPropType } from '../prop-types.js'
import { defaultRenderNodeLabel } from './default-render-node-label/index.js'
import { filterRootIds } from './filter-root-ids.js'
import { RootError } from './root-error.js'
import { RootLoading } from './root-loading.js'
import { useExpanded } from './use-expanded/index.js'
import { useForceReload } from './use-force-reload.js'
import { useRootOrgData } from './use-root-org-data/index.js'

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
    renderNodeLabel,
    selected,
    singleSelection,
    suppressAlphabeticalSorting,

    onExpand,
    onCollapse,
    onChildrenLoaded,
}) => {
    const rootIds = filterRootIds(
        filter,
        Array.isArray(roots) ? roots : [roots]
    )
    const reloadId = useForceReload(forceReload)
    const [prevReloadId, setPrevReloadId] = useState(reloadId)
    const { loading, error, data, refetch } = useRootOrgData(rootIds, {
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
        if (refetch && reloadId > 0 && reloadId !== prevReloadId) {
            refetch()
            setPrevReloadId(reloadId)
        }

        return () =>
            console.warn(
                '@TODO: Why does this component unmount after a force reload?'
            )
    }, [reloadId, prevReloadId, refetch])

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
                            renderNodeLabel={renderNodeLabel}
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

    /** Renders the actual node component for each leaf, can be used to customize the node.
     * The `node`'s data is incomplete while `loading` is true.
     * `{
     *    node: {
     *      displayName: string,
     *      id?: string,
     *      path?: string,
     *      children?: Array.<{
     *        id: string,
     *        path: string,
     *        displayName: string
     *      }>
     *    },
     *    dataTest: string,
     *    disableSelection: boolean,
     *    hasChildren: boolean,
     *    hasSelectedDescendants: boolean,
     *    highlighted: boolean,
     *    checked: boolean,
     *    loading: boolean,
     *    onChange: Function,
     *    onToggleOpen: Function,
     *    open: boolean,
     *    path: string,
     *    selected: Array.<string>,
     *    singleSelection: boolean,
     *  }` */
    renderNodeLabel: propTypes.func,

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
    renderNodeLabel: defaultRenderNodeLabel,
}

export { OrganisationUnitTree }
