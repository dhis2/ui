import { DataProvider } from '@dhis2/app-runtime'
import React, { useCallback, useEffect, useState } from 'react'
import {
    OrganisationUnitTreeProvider,
    OrganisationUnitTreeV2,
    useOrganisationUnitTreeManager,
    OrganisationUnitNodeText,
} from '../organisation-unit-tree-v2/index.js'

const props = {
    rootIds: ['ImspTQPwCqd'], // Sierra Leone
    // rootIds: ['O6uvpzGd5pu', 'lc3eMKXaEfw'], // Bo, Bonthe
    // rootIds: ['O6uvpzGd5pu', 'fwH9ipvXde9'], // Bo, Biriwa
    // rootIds: ['O6uvpzGd5pu', 'YuQRtpLP10I'], // Bo, Badjia
    // rootIds: ['O6uvpzGd5pu', 'fdc6uOvgoji', 'KKkLOTpMXGV'], // Bo, Bombali, Bombali Sebora
    filteredString: undefined,
    visisbleIds: undefined,
    singleSelection: false,
    onChange: (payload) => console.log(payload),
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
        <DataProvider baseUrl="http://localhost:8080" apiVersion="40">
            <OrganisationUnitTreeV2 {...props} />
        </DataProvider>
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

        const nodes = await treeManager.retreiveFilteredOrganisationUnits({
            query: token,
            level,
        })
        const paths = nodes.map((node) => node.getPath())

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

export const V2WithLocalTreeFilter = () => {
    const [selectedIds, setSelectedIds] = useState(['iUauWFeH8Qp'])
    return (
        <DataProvider baseUrl="http://localhost:8080">
            <OrganisationUnitTreeProvider>
                <TreeFilters />
                <OrganisationUnitTreeV2
                    {...props}
                    selectedIds={selectedIds}
                    onChange={(ids) => {
                        setSelectedIds(ids)
                    }}
                />
            </OrganisationUnitTreeProvider>
        </DataProvider>
    )
}
