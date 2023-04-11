import { DataProvider } from '@dhis2/app-runtime'
import React, { useCallback, useEffect, useState } from 'react'
import {
    OrganisationUnitTreeProvider,
    OrganisationUnitTreeV2,
    useOrganisationUnitTreeManager,
    OrganisationUnitNodeText,
    OrganisationUnitNodeManager,
} from '../organisation-unit-tree-v2/index.js'

const DataProviderWithDynamicBaseUrl = ({ children }) => {
    const baseUrl =
        window.location.hostname === 'localhost'
            ? 'http://localhost:8080'
            : 'https://debug.dhis2.org/dev'

    return (
        <DataProvider baseUrl={baseUrl} apiVersion="40">
            {children}
        </DataProvider>
    )
}

const props = {
    rootIds: ['ImspTQPwCqd'], // Sierra Leone
    // rootIds: ['O6uvpzGd5pu', 'lc3eMKXaEfw'], // Bo, Bonthe
    // rootIds: ['O6uvpzGd5pu', 'fwH9ipvXde9'], // Bo, Biriwa
    // rootIds: ['O6uvpzGd5pu', 'YuQRtpLP10I'], // Bo, Badjia
    // rootIds: ['O6uvpzGd5pu', 'fdc6uOvgoji', 'KKkLOTpMXGV'], // Bo, Bombali, Bombali Sebora
    filteredString: undefined,
    visisbleIds: undefined,
    singleSelection: true,
    onChange: (payload) => console.log(payload),
    openedPaths: [
        '/ImspTQPwCqd',
        '/ImspTQPwCqd/fdc6uOvgoji',
        '/ImspTQPwCqd/fdc6uOvgoji/e1eIKM1GIF3',
        '/ImspTQPwCqd/qhqAxPSTUXp',
        '/ImspTQPwCqd/TEQlaapDQoK',
        '/ImspTQPwCqd/TEQlaapDQoK/vn9KJsLyP5f',
    ],
    disabledIds: ['fdc6uOvgoji', 'e1eIKM1GIF3'],
}
export const TextHighlighting = () => (
    <OrganisationUnitNodeText
        displayName="Bo"
        isFilterMatch
        filteredString="Bo"
        isDisabled={false}
        toggleOpen={() => {}}
    />
)

export const V2 = () => {
    return (
        <DataProviderWithDynamicBaseUrl>
            <OrganisationUnitTreeV2 {...props} />
        </DataProviderWithDynamicBaseUrl>
    )
}

const TreeFilters = () => {
    const treeManager = useOrganisationUnitTreeManager()
    const [disabled, setDisabled] = useState(treeManager.getIsReady())
    const [token, setToken] = useState('Bumpe Ngao')
    const [level, setLevel] = useState()

    useEffect(
        () =>
            treeManager.onIsReady(() => {
                setDisabled(false)
            }),
        [treeManager]
    )

    const filterLocalTree = useCallback(() => {
        treeManager.filterLocalTree({ token, level })
    }, [treeManager, token, level])

    const showSearchResults = useCallback(async () => {
        setDisabled(true)

        const paths = []
        if (token || level) {
            const nodes = await treeManager.retreiveFilteredOrganisationUnits({
                query: token,
                level,
            })
            nodes?.forEach((node) => {
                paths.push(node.getPath())
            })
        }

        await treeManager.setFilterProperties(paths, token)

        setDisabled(false)
    }, [treeManager, token, level])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
            }}
        >
            <input
                type="search"
                value={token}
                onChange={(event) => {
                    setToken(event.target.value)
                }}
                disabled={disabled}
            />
            <input
                type="number"
                min="1"
                max="3"
                value={(level ?? '').toString()}
                onChange={(event) => {
                    setLevel(parseInt(event.target.value))
                }}
                disabled={disabled}
            />
            <button type="submit" onClick={filterLocalTree}>
                Filter local tree
            </button>
            <button type="submit" onClick={showSearchResults}>
                Search all units
            </button>
        </form>
    )
}

class CustomOrganisationUnitNodeManager extends OrganisationUnitNodeManager {
    getChildrenState() {
        console.log('called getChildrenState in extended node manager class')
        return super.getChildrenState()
    }
}

export const V2WithLocalTreeFilter = () => {
    const [selectedIds, setSelectedIds] = useState(['iUauWFeH8Qp'])
    return (
        <DataProviderWithDynamicBaseUrl>
            <OrganisationUnitTreeProvider
                organisationUnitNodeManagerClass={
                    CustomOrganisationUnitNodeManager
                }
            >
                <TreeFilters />
                <OrganisationUnitTreeV2
                    {...props}
                    selectedIds={selectedIds}
                    onChange={(payload) => {
                        console.log('payload', payload)
                        setSelectedIds(payload.ids)
                    }}
                />
            </OrganisationUnitTreeProvider>
        </DataProviderWithDynamicBaseUrl>
    )
}
