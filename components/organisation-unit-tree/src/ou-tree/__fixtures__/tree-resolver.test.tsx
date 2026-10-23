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

    describe('children', () => {
        const children = (
            resolver: ReturnType<typeof createTreeResolver>,
            params: Record<string, unknown>
        ) =>
            resolver('read', { id: 'ou-6/children', params }) as Promise<{
                pager: { pageSize: number; total: number }
                organisationUnits: Array<{ id: string; leaf: boolean }>
            }>

        it('answers an id of the form <parentId>/children with a children page', async () => {
            const resolver = createTreeResolver({ orgUnits: zambiaOrgUnits })

            const page = await children(resolver, { page: 3, pageSize: 2 })

            expect(page.organisationUnits.map((unit) => unit.id)).toEqual([
                'ou-7',
                'ou-11',
            ])
            expect(page.pager.total).toBe(6)
            expect(page.organisationUnits.every((unit) => unit.leaf)).toBe(true)
        })

        it('defaults the page size to 50 and honours shortName', async () => {
            const resolver = createTreeResolver({
                orgUnits: zambiaOrgUnits.map((unit) =>
                    unit.id === 'ou-7' ? { ...unit, shortName: 'Aaa' } : unit
                ),
            })

            const page = await children(resolver, { shortName: 'true' })

            expect(page.pager.pageSize).toBe(50)
            expect(page.organisationUnits[0].id).toBe('ou-7')
        })

        it('gives a leaf parent a total of 0', async () => {
            const resolver = createTreeResolver({ orgUnits: zambiaOrgUnits })

            const page = await resolver('read', {
                id: 'ou-4/children',
                params: { page: 1, pageSize: 2 },
            })

            expect(page).toEqual({
                pager: { page: 1, pageSize: 2, total: 0, pageCount: 0 },
                organisationUnits: [],
            })
        })

        it('rejects with the error failChildrenPageWith returns', async () => {
            const error = new Error('page 3 failed')
            const resolver = createTreeResolver({
                orgUnits: zambiaOrgUnits,
                failChildrenPageWith: (parentId, page) =>
                    parentId === 'ou-6' && page === 3 ? error : undefined,
            })

            await expect(
                children(resolver, { page: 3, pageSize: 2 })
            ).rejects.toBe(error)
            await expect(
                children(resolver, { page: 2, pageSize: 2 })
            ).resolves.toBeDefined()
        })

        it('keeps failWith for the tree query only', async () => {
            const error = new Error('tree failed')
            const resolver = createTreeResolver({
                orgUnits: zambiaOrgUnits,
                failWith: () => error,
            })

            await expect(
                resolver('read', { params: { roots: ['ou-1'] } })
            ).rejects.toBe(error)
            await expect(
                children(resolver, { page: 1, pageSize: 2 })
            ).resolves.toBeDefined()
        })
    })
})
