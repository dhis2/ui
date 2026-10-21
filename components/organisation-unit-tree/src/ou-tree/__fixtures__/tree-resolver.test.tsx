import { CustomDataProvider, useDataQuery } from '@dhis2/app-runtime'
import { renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { type OuTreeResponse, TREE_RESOURCE } from '../data/index'
import { createTreeResolver, parseQueryParams } from './tree-resolver'
import { zambiaOrgUnits } from './zambia-org-units'

describe('parseQueryParams', () => {
    it('passes typed values through and defaults page and pageSize', () => {
        expect(parseQueryParams({ roots: ['ou-3', 'ou-6'], depth: 1 })).toEqual(
            {
                page: 1,
                pageSize: 50,
                roots: ['ou-3', 'ou-6'],
                depth: 1,
            }
        )
    })

    it('parses query-string shaped values', () => {
        expect(
            parseQueryParams({
                page: '2',
                pageSize: '10',
                roots: 'ou-3, ou-6',
                groups: 'g-1',
                level: '4',
                currentlyOpen: 'true',
                shortName: 'false',
                search: 'Clinic',
            })
        ).toEqual({
            page: 2,
            pageSize: 10,
            roots: ['ou-3', 'ou-6'],
            groups: ['g-1'],
            level: 4,
            currentlyOpen: true,
            shortName: false,
            search: 'Clinic',
        })
    })
})

describe('createTreeResolver', () => {
    it('serves the resource through app-runtime', async () => {
        const resolver = createTreeResolver({ orgUnits: zambiaOrgUnits })
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <CustomDataProvider data={{ [TREE_RESOURCE]: resolver }}>
                {children}
            </CustomDataProvider>
        )
        const query = {
            tree: {
                resource: TREE_RESOURCE,
                params: { page: 1, pageSize: 50, roots: ['ou-13'], depth: 1 },
            },
        }

        const { result } = renderHook(() => useDataQuery(query), { wrapper })

        await waitFor(() => expect(result.current.loading).toBe(false))
        const tree = result.current.data?.tree as unknown as OuTreeResponse
        expect(tree.pager.total).toBe(3)
        expect(tree.organisationUnits.map((entry) => entry.id)).toEqual([
            'ou-13',
            'ou-14',
            'ou-17',
        ])
    })
})
