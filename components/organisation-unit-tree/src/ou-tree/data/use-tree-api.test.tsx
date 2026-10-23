import { CustomDataProvider } from '@dhis2/app-runtime'
import { renderHook } from '@testing-library/react'
import React from 'react'
import { GIST_RESOURCE, TREE_RESOURCE } from './constants'
import { useTreeApi } from './use-tree-api'

type Data = React.ComponentProps<typeof CustomDataProvider>['data']

const render = (data: Data) => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <CustomDataProvider data={data}>{children}</CustomDataProvider>
    )
    return renderHook(() => useTreeApi(), { wrapper }).result.current
}

describe('useTreeApi', () => {
    it('fetches a tree page with the query as params', async () => {
        const response = {
            pager: { page: 1, pageSize: 50, total: 1, pageCount: 1 },
            organisationUnits: [],
            ancestors: [],
        }
        const resolver = jest.fn().mockResolvedValue(response)
        const api = render({ [TREE_RESOURCE]: resolver })

        const result = await api.fetchTreePage({
            roots: ['ou-1'],
            depth: 1,
            page: 1,
            pageSize: 50,
            shortName: false,
        })

        expect(result).toEqual(response)
        expect(resolver.mock.calls[0][1].params).toEqual({
            roots: ['ou-1'],
            depth: 1,
            page: 1,
            pageSize: 50,
            shortName: false,
        })
    })

    it('fetches nodes through gist and renames children to childrenCount', async () => {
        const resolver = jest.fn().mockResolvedValue([
            {
                id: 'ou-1',
                displayName: 'Zambia',
                path: '/ou-1',
                level: 1,
                children: 2,
                apiEndpoints: { children: 'ignored' },
            },
        ])
        const api = render({ [GIST_RESOURCE]: resolver })

        const nodes = await api.fetchNodes(['ou-1'], {})

        expect(nodes).toEqual([
            {
                id: 'ou-1',
                displayName: 'Zambia',
                path: '/ou-1',
                level: 1,
                childrenCount: 2,
            },
        ])
        expect(resolver.mock.calls[0][1].params).toEqual({
            filter: 'id:in:[ou-1]',
            fields: 'id,displayName,path,level,children::size',
            headless: true,
            pageSize: 1,
        })
    })

    it('asks gist for the short name when shortName is true', async () => {
        const resolver = jest.fn().mockResolvedValue([])
        const api = render({ [GIST_RESOURCE]: resolver })

        await api.fetchNodes(['ou-1', 'ou-2'], { shortName: true })

        expect(resolver.mock.calls[0][1].params.fields).toBe(
            'id,displayShortName~rename(displayName),path,level,children::size'
        )
        expect(resolver.mock.calls[0][1].params.pageSize).toBe(2)
    })

    it('resolves to an empty list without a request for no ids', async () => {
        const resolver = jest.fn()
        const api = render({ [GIST_RESOURCE]: resolver })

        expect(await api.fetchNodes([], {})).toEqual([])
        expect(resolver).not.toHaveBeenCalled()
    })

    describe('fetchChildrenPage', () => {
        const response = {
            pager: { page: 2, pageSize: 2, total: 6, pageCount: 3 },
            organisationUnits: [
                {
                    id: 'ou-8',
                    displayName: 'Kanona Clinic',
                    path: '/ou-1/ou-2/ou-6/ou-8',
                    level: 4,
                    leaf: true,
                },
            ],
        }

        it('queries the children resource of the parent', async () => {
            const resolver = jest.fn().mockResolvedValue(response)
            const api = render({ [TREE_RESOURCE]: resolver })

            await api.fetchChildrenPage('ou-6', 2, {})

            const query = resolver.mock.calls[0][1]
            expect(query.id).toBe('ou-6/children')
            expect(query.params).toEqual({
                page: 2,
                pageSize: 50,
                shortName: false,
            })
        })

        it('asks for the short name when shortName is true', async () => {
            const resolver = jest.fn().mockResolvedValue(response)
            const api = render({ [TREE_RESOURCE]: resolver })

            await api.fetchChildrenPage('ou-6', 1, { shortName: true })

            expect(resolver.mock.calls[0][1].params).toEqual({
                page: 1,
                pageSize: 50,
                shortName: true,
            })
        })

        it('passes the response through unchanged', async () => {
            const api = render({
                [TREE_RESOURCE]: jest.fn().mockResolvedValue(response),
            })

            const result = await api.fetchChildrenPage('ou-6', 2, {})

            expect(result).toEqual(response)
        })
    })
})
