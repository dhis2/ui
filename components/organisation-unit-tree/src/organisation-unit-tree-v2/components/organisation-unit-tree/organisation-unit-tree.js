import PropTypes from 'prop-types'
import React from 'react'
import { orgUnitIdPropType, orgUnitPathPropType } from '../../../prop-types.js'
import {
    useOrganisationUnitTree,
    useOrganisationUnitTreeComponents,
} from '../../hooks/index.js'
import { OrganisationUnitTreeProvider } from '../organisation-unit-tree-provider.js'

const OrganisationUnitTree = ({
    disabledIds,
    filteredString,
    onChange,
    openedPaths,
    rootIds,
    selectedIds,
    singleSelection,
    filteredPaths,
}) => {
    const {
        OrganisationUnitRootContainer,
        OrganisationUnitRootError,
        OrganisationUnitRootFetcher,
        OrganisationUnitRootLoader,
        OrganisationUnitRootNodes,
    } = useOrganisationUnitTreeComponents()
    const { isLoading, error } = useOrganisationUnitTree({
        disabledIds,
        filteredString,
        onChange,
        openedPaths,
        rootIds,
        selectedIds,
        singleSelection,
        filteredPaths,
    })

    if (isLoading) {
        return (
            <OrganisationUnitRootContainer>
                <OrganisationUnitRootLoader />
            </OrganisationUnitRootContainer>
        )
    }

    if (error) {
        return (
            <OrganisationUnitRootContainer>
                <OrganisationUnitRootError error={error} />
            </OrganisationUnitRootContainer>
        )
    }

    return (
        <OrganisationUnitRootContainer>
            <OrganisationUnitRootNodes rootIds={rootIds} />
            <OrganisationUnitRootFetcher />
        </OrganisationUnitRootContainer>
    )
}

const ManagedOrganisationUnitTree = (props) => (
    <OrganisationUnitTreeProvider>
        <OrganisationUnitTree {...props} />
    </OrganisationUnitTreeProvider>
)

OrganisationUnitTree.propTypes = {
    rootIds: PropTypes.arrayOf(orgUnitIdPropType).isRequired,
    onChange: PropTypes.func.isRequired,
    disabledIds: PropTypes.arrayOf(orgUnitIdPropType),
    filteredPaths: PropTypes.arrayOf(orgUnitPathPropType),
    filteredString: PropTypes.string,
    openedPaths: PropTypes.arrayOf(orgUnitPathPropType),
    selectedIds: PropTypes.arrayOf(orgUnitIdPropType),
    singleSelection: PropTypes.bool,
}

export { ManagedOrganisationUnitTree as OrganisationUnitTree }
