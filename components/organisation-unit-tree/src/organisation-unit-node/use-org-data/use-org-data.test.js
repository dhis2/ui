import { CustomDataProvider } from '@dhis2/app-runtime'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useOrgData } from './use-org-data.js'

describe('OrganisationUnitTree - useOrgData', () => {
    // @TODO: Figure out why this is necessary at all...
    const origError = console.error
    jest.spyOn(console, 'error').mockImplementation((...args) => {
        const [err] = args

        if (!err.toString().match(/^Warning: An update to/)) {
            origError(...args)
        }
    })

    afterAll(() => {
        console.error.mockRestore()
    })

    const dataProviderData = {
        organisationUnits: jest.fn((type, { id }) => {
            if (id === 'A0000000000') {
                return {
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

    it('should respond with `loading: false`, `error: null` and `data: { displayName, id }` initially', () => {
        const { result } = renderHook(
            () => useOrgData('A0000000000', { displayName: 'Display name' }),
            { wrapper }
        )

        expect(result.current).toEqual({
            loading: true,
            error: null,
            data: { displayName: 'Display name', id: 'A0000000000' },
        })
    })

    it('should provide the org unit data', async () => {
        const { result, waitForNextUpdate } = renderHook(
            () => useOrgData('A0000000000', { displayName: 'Display name' }),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            loading: false,
            error: null,
            data: {
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
            },
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
            () => useOrgData('A0000000000', { displayName: 'Display name' }),
            { wrapper: errorWrapper }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            loading: false,
            error: new Error('Error message'),
            data: { displayName: 'Display name', id: 'A0000000000' },
        })
    })

    it('should call the onComplete callback', async () => {
        const onComplete = jest.fn()
        const options = { onComplete, displayName: 'Display name' }

        const { waitForNextUpdate } = renderHook(
            () => useOrgData('A0000000000', options),
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

    it('should send the "isUserDataViewFallback" parameter with value "undefined"', async () => {
        const options = { displayName: 'Display name' }

        const { waitForNextUpdate } = renderHook(
            () => useOrgData('A0000000000', options),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(dataProviderData.organisationUnits).toHaveBeenCalledWith(
            'read',
            expect.objectContaining({
                params: expect.objectContaining({
                    isUserDataViewFallback: undefined,
                }),
            }),
            expect.objectContaining({}) // contains the `signal`
        )
    })

    it('should send the "isUserDataViewFallback" parameter with value "true"', async () => {
        const options = {
            isUserDataViewFallback: true,
            displayName: 'Display name',
        }

        const { waitForNextUpdate } = renderHook(
            () => useOrgData('A0000000000', options),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(dataProviderData.organisationUnits).toHaveBeenCalledWith(
            'read',
            expect.objectContaining({
                params: expect.objectContaining({
                    isUserDataViewFallback: true,
                }),
            }),
            expect.objectContaining({}) // contains the `signal`
        )
    })

    it("should sort the node's children alphabetically by default", async () => {
        const dataProviderDataWithUnsortedChildren = {
            organisationUnits: jest.fn((type, { id }) => {
                if (id === 'A0000000000') {
                    return {
                        id: 'A0000000000',
                        path: '/A0000000000',
                        displayName: 'Org Unit 1',
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
            () => useOrgData('A0000000000', { displayName: 'Display name' }),
            { wrapper: wrapperWithUnsortedChildren }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            loading: false,
            error: null,
            data: {
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
                    {
                        id: 'A0000000002',
                        path: '/A0000000000/A0000000002',
                        children: [],
                        displayName: 'Org Unit 3',
                    },
                ],
            },
        })
    })

    it(`should not sort the node's children alphabetically when "suppressAlphabeticalSorting" is true`, async () => {
        const dataProviderDataWithUnsortedChildren = {
            organisationUnits: jest.fn((type, { id }) => {
                if (id === 'A0000000000') {
                    return {
                        id: 'A0000000000',
                        path: '/A0000000000',
                        displayName: 'Org Unit 1',
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
            displayName: 'Display name',
            suppressAlphabeticalSorting: true,
        }
        const { result, waitForNextUpdate } = renderHook(
            () => useOrgData('A0000000000', options),
            { wrapper: wrapperWithUnsortedChildren }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual({
            loading: false,
            error: null,
            data: {
                id: 'A0000000000',
                path: '/A0000000000',
                displayName: 'Org Unit 1',
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
            },
        })
    })
})
