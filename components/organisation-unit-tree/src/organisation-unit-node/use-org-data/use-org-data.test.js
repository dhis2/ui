import { CustomDataProvider } from '@dhis2/app-runtime'
import { renderHook, waitFor } from '@testing-library/react'
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

    it('should respond with `loading: true`, `error: null` and `data: { displayName, id }` initially', () => {
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
        const { result } = renderHook(
            () => useOrgData('A0000000000', { displayName: 'Display name' }),
            { wrapper }
        )

        await waitFor(() => {
            expect(result.current).toEqual({
                loading: false,
                error: null,
                data: {
                    id: 'A0000000000',
                    path: '/A0000000000',
                    displayName: 'Org Unit 1',
                },
            })
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

        const { result } = renderHook(
            () => useOrgData('A0000000000', { displayName: 'Display name' }),
            { wrapper: errorWrapper }
        )

        await waitFor(() => {
            expect(result.current).toEqual({
                loading: false,
                error: new Error('Error message'),
                data: { displayName: 'Display name', id: 'A0000000000' },
            })
        })
    })

    it('should send the "isUserDataViewFallback" parameter with value "undefined"', async () => {
        const options = { displayName: 'Display name' }

        renderHook(() => useOrgData('A0000000000', options), { wrapper })
        await waitFor(() => {
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
    })

    it('should send the "isUserDataViewFallback" parameter with value "true"', async () => {
        const options = {
            isUserDataViewFallback: true,
            displayName: 'Display name',
        }

        renderHook(() => useOrgData('A0000000000', options), { wrapper })

        await waitFor(() => {
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
    })
})
