import { CustomDataProvider } from '@dhis2/app-runtime'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useOrgChildren } from './use-org-children.js'

describe('OrganisationUnitTree - useOrgChildren', () => {
    const dataProviderData = {
        organisationUnits: jest.fn((type, { id }) => {
            if (id === 'A0000000000') {
                return {
                    children: [
                        {
                            id: 'A0000000001',
                            path: '/A0000000000/A0000000001',
                            children: [],
                            displayName: 'Org Unit 2',
                        },
                    ],
                }
            }

            return Promise.reject(`No org unit with id "${id}"`)
        }),
    }

    const wrapper = ({ children }) => (
        <CustomDataProvider data={dataProviderData}>
            {children}
        </CustomDataProvider>
    )

    const node = {
        id: 'A0000000000',
        path: '/A0000000000',
        displayName: 'Org Unit 1',
        children: 1,
    }

    it('should respond with `loading: true`, `error: null` and `data: null` initially', async () => {
        const { result, waitForNextUpdate } = renderHook(
            () => useOrgChildren({ node }),
            {
                wrapper,
            }
        )

        expect(result.current).toEqual({
            called: true,
            loading: true,
            error: null,
            data: undefined,
        })

        // Prevent the following error log with
        // "Warning: An update to TestComponent inside a test was not wrapped
        // in act(...)."
        await waitForNextUpdate()
    })

    it('should provide the org unit data', async () => {
        const { result, waitForNextUpdate } = renderHook(
            () => useOrgChildren({ node }),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            called: true,
            loading: false,
            error: null,
            data: [
                {
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    children: [],
                    displayName: 'Org Unit 2',
                },
            ],
        })
    })

    it('should provide the error', async () => {
        const errorWrapper = ({ children }) => (
            <CustomDataProvider
                data={{
                    organisationUnits: async () => {
                        throw new Error('Error message')
                    },
                }}
            >
                {children}
            </CustomDataProvider>
        )

        const { result, waitForNextUpdate } = renderHook(
            () => useOrgChildren({ node }),
            { wrapper: errorWrapper }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            called: true,
            loading: false,
            error: new Error('Error message'),
            data: undefined,
        })
    })

    it('should call the onComplete callback', async () => {
        const onComplete = jest.fn()
        const options = { onComplete, node }

        const { waitForNextUpdate } = renderHook(
            () => useOrgChildren(options),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(onComplete).toHaveBeenCalledWith({
            id: 'A0000000000',
            path: '/A0000000000',
            displayName: 'Org Unit 1',
            children: [
                {
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    children: [],
                    displayName: 'Org Unit 2',
                },
            ],
        })
    })

    it("should sort the node's children alphabetically by default", async () => {
        const dataProviderDataWithUnsortedChildren = {
            organisationUnits: jest.fn((type, { id }) => {
                if (id === 'A0000000000') {
                    return {
                        children: [
                            {
                                id: 'A0000000002',
                                path: '/A0000000000/A0000000002',
                                children: [],
                                displayName: 'Org Unit 3',
                            },
                            {
                                id: 'A0000000001',
                                path: '/A0000000000/A0000000001',
                                children: [],
                                displayName: 'Org Unit 2',
                            },
                        ],
                    }
                }

                return Promise.reject(`No org unit with id "${id}"`)
            }),
        }

        const wrapperWithUnsortedChildren = ({ children }) => (
            <CustomDataProvider data={dataProviderDataWithUnsortedChildren}>
                {children}
            </CustomDataProvider>
        )

        const { result, waitForNextUpdate } = renderHook(
            () => useOrgChildren({ node: { ...node, children: 2 } }),
            { wrapper: wrapperWithUnsortedChildren }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            called: true,
            loading: false,
            error: null,
            data: [
                {
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    children: [],
                    displayName: 'Org Unit 2',
                },
                {
                    id: 'A0000000002',
                    path: '/A0000000000/A0000000002',
                    children: [],
                    displayName: 'Org Unit 3',
                },
            ],
        })
    })

    it(`should not sort the node's children alphabetically when "suppressAlphabeticalSorting" is true`, async () => {
        const dataProviderDataWithUnsortedChildren = {
            organisationUnits: jest.fn((type, { id }) => {
                if (id === 'A0000000000') {
                    return {
                        children: [
                            {
                                id: 'A0000000002',
                                path: '/A0000000000/A0000000002',
                                children: [],
                                displayName: 'Org Unit 3',
                            },
                            {
                                id: 'A0000000001',
                                path: '/A0000000000/A0000000001',
                                children: [],
                                displayName: 'Org Unit 2',
                            },
                        ],
                    }
                }

                return Promise.reject(`No org unit with id "${id}"`)
            }),
        }

        const wrapperWithUnsortedChildren = ({ children }) => (
            <CustomDataProvider data={dataProviderDataWithUnsortedChildren}>
                {children}
            </CustomDataProvider>
        )

        const options = {
            node: { ...node, children: 2 },
            suppressAlphabeticalSorting: true,
        }
        const { result, waitForNextUpdate } = renderHook(
            () => useOrgChildren(options),
            { wrapper: wrapperWithUnsortedChildren }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            called: true,
            loading: false,
            error: null,
            data: [
                {
                    id: 'A0000000002',
                    path: '/A0000000000/A0000000002',
                    children: [],
                    displayName: 'Org Unit 3',
                },
                {
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    children: [],
                    displayName: 'Org Unit 2',
                },
            ],
        })
    })

    it(`should not sort the node's children alphabetically when "suppressAlphabeticalSorting" is true`, async () => {
        const dataProviderDataWithUnsortedChildren = {
            organisationUnits: jest.fn((type, { id }) => {
                if (id === 'A0000000000') {
                    return {
                        children: [
                            {
                                id: 'A0000000002',
                                path: '/A0000000000/A0000000002',
                                children: [],
                                displayName: 'Org Unit 3',
                            },
                            {
                                id: 'A0000000001',
                                path: '/A0000000000/A0000000001',
                                children: [],
                                displayName: 'Org Unit 2',
                            },
                        ],
                    }
                }

                return Promise.reject(`No org unit with id "${id}"`)
            }),
        }

        const wrapperWithUnsortedChildren = ({ children }) => (
            <CustomDataProvider data={dataProviderDataWithUnsortedChildren}>
                {children}
            </CustomDataProvider>
        )

        const options = {
            node: { ...node, children: 2 },
            suppressAlphabeticalSorting: true,
        }
        const { result, waitForNextUpdate } = renderHook(
            () => useOrgChildren(options),
            { wrapper: wrapperWithUnsortedChildren }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            called: true,
            loading: false,
            error: null,
            data: [
                {
                    id: 'A0000000002',
                    path: '/A0000000000/A0000000002',
                    children: [],
                    displayName: 'Org Unit 3',
                },
                {
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    children: [],
                    displayName: 'Org Unit 2',
                },
            ],
        })
    })
})
