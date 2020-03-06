import React, { useEffect } from 'react'
import propTypes from 'prop-types'

import { OrganisationUnitNode } from './OrganisationUnitTree/OrganisationUnitNode'
import { RootError } from './OrganisationUnitTree/RootError'
import { RootLoading } from './OrganisationUnitTree/RootLoading'
import { orgUnitPathPropType } from './OrganisationUnitTree/propTypes'
import { useExpanded } from './OrganisationUnitTree/useExpanded'
import { useForceReload } from './OrganisationUnitTree/useForceReload'
import { useOrgData } from './OrganisationUnitTree/useOrgData'

/**
 * @module
 * @param {OrganisationUnitTree.PropTypes} props
 * @returns {React.Component}
 *
 * @example
 * import { OrganisationUnitTree } from '@dhis2/ui-widgets'
 *
 * @example
 * <OrganisationUnitTree
 *     name="Root org unit"
 *     roots="A0000000000"
 *     onChange={onChange}
 *     onExpand={onExpand}
 *     onCollapse={onCollapse}
 *     onChildrenLoaded={onChildrenLoaded}
 *     initiallyExpanded={['/A0000000000/A0000000001']}
 *     filter={['/A0000000000/A0000000001/A0000000003']}
 * />
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/organisation-unit-tree/org-unit-tree.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/organisationunittree--collapsed|Storybook}
 */
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

    onExpand,
    onCollapse,
    onChildrenLoaded,
}) => {
    const rootIds = Array.isArray(roots) ? roots : [roots]
    const reloadId = useForceReload(forceReload)
    const { loading, error, data, refetch } = useOrgData(rootIds, {
        withChildren: false,
        isUserDataViewFallback,
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string|string[]} roots
 * Root org unit id(s)
 *
 * @prop {Function} onChange
 * Will be called with the following object
 * { id: string; path: string; checked: boolean; }
 *
 * @prop {bool} [autoExpandLoadingError]
 * When set, the error when loading children
 * fails will be shown automaticlly
 *
 * @prop {bool} [singleSelection]
 * When set, no checkboxes will be displayed and only the first selected path
 * in `selected` will be highlighted
 *
 * @prop {bool} [disableSelection]
 * When set to true, no unit can be selected
 *
 * @prop {string[]} [filter]
 * All organisation units with a path that inclused the provided
 * paths will be shown. All others will not be rendered.
 * When not provided, all org units will be shown.
 *
 * @prop {bool} [forceReload]
 * When set to "true", everything will be reloaded.
 * In order to load it again after reloading,
 * "forceReload" has to be set to false and then to true again
 *
 * @prop {string[]} [selected]
 * An array of paths of selected OUs.
 * The path of an OU is the UIDs of the OU and all its parent OUs separated
 * by slashes (/)
 *
 * @prop {string[]} [initiallyExpanded]
 * An array of OU paths that will be expanded automatically
 * as soon as they are encountered.
 * The path of an OU is the UIDs of the OU
 * and all its parent OUs separated by slashes (/)
 * Note: This replaces "openFirstLevel" as that's redundant
 *
 * @prop {bool} [isUserDataViewFallback]
 * When provided, the "isUserDataViewFallback" option will be send when
 * requesting the org units
 *
 * @prop {string[]} [highlighted]
 * All units provided to "highlighted" as path will be visually
 * highlighted.
 * Note:
 * The d2-ui component used two props for this:
 * * searchResults
 * * highlightSearchResults
 *
 * @prop {Function} [onExpand]
 * Called with { path: string }
 * with the path of the parent of the level opened
 *
 * @prop {Function} [onCollapse]
 * Called with { path: string }
 * with the path of the parent of the level closed
 *
 * @prop {Function} [onChildrenLoaded]
 * Called with the children's data that was loaded
 */
OrganisationUnitTree.propTypes = {
    roots: propTypes.oneOfType([
        propTypes.string,
        propTypes.arrayOf(propTypes.string),
    ]).isRequired,
    onChange: propTypes.func.isRequired,

    autoExpandLoadingError: propTypes.bool,
    dataTest: propTypes.string,
    disableSelection: propTypes.bool,
    filter: propTypes.arrayOf(orgUnitPathPropType),
    forceReload: propTypes.bool,
    highlighted: propTypes.arrayOf(orgUnitPathPropType),
    initiallyExpanded: propTypes.arrayOf(orgUnitPathPropType),
    isUserDataViewFallback: propTypes.bool,
    selected: propTypes.arrayOf(orgUnitPathPropType),
    singleSelection: propTypes.bool,
    onChildrenLoaded: propTypes.func,
    onCollapse: propTypes.func,
    onExpand: propTypes.func,

    /**
     * @prop {string[]} [idsThatShouldBeReloaded]
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
