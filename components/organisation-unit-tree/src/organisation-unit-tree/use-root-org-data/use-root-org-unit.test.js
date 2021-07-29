import { CustomDataProvider } from '@dhis2/app-runtime'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useRootOrgData } from './use-root-org-data.js'

describe('OrganisationUnitTree - useRootOrgData', () => {
    // @TODO: Figure out why this is necessary at all...
    const origError = console.error
    jest.spyOn(console, 'error').mockImplementation((...args) => {
        const [err] = args

        if (!err.toString().match(/^Warning: An update to/)) {
            origError(...args)
        }
    })

    // @TODO: This is kind of necessary; no idea if we can get rid of this
    const origWarn = console.warn
    const dynamicQueryWarningMsg = "The query should be static, don't create it within the render loop!"
    jest.spyOn(console, 'warn').mockImplementation((...args) => {
        const [err] = args

        if (!err.toString().match(dynamicQueryWarningMsg)) {
            origWarn(...args)
        }
    })

    afterAll(() => {
        console.error.mockRestore()
        console.warn.mockRestore()
    })

    const dataProviderData = {
        organisationUnits: jest.fn(() => {
            return {
                id: 'A0000000000',
                path: '/A0000000000',
                displayName: 'Org Unit 1',
            }
        })
    }

    const wrapper = ({ children }) => (
        <CustomDataProvider data={dataProviderData}>
            {children}
        </CustomDataProvider>
    )

    it('should respond with `loading: false`, `error: null` and `data: null` initially', () => {
        const { result } = renderHook(
            () => useRootOrgData(['A0000000000']),
            { wrapper }
        )

        expect(result.current).toEqual(expect.objectContaining({
            loading: true,
            error: null,
            data: null,
        }))
        expect(result.current.refetch).toBeInstanceOf(Function)
    })

    it('should provide the org unit data', async () => {
        const { result, waitForNextUpdate } = renderHook(
            () => useRootOrgData(['A0000000000']),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual(expect.objectContaining({
            loading: false,
            error: null,
            data: {
                A0000000000: {
                    id: 'A0000000000',
                    path: '/A0000000000',
                    displayName: 'Org Unit 1',
                },
            },
        }))
    })

    it('should provide the error', async () => {
        const errorWrapper = ({ children }) => (
            <CustomDataProvider data={{
                organisationUnits: async () => {
                    throw new Error('Error message')
                }
            }}>
                {children}
            </CustomDataProvider>
        )

        const { result, waitForNextUpdate } = renderHook(
            () => useRootOrgData(['A0000000000']),
            { wrapper: errorWrapper }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual(expect.objectContaining({
            loading: false,
            error: new Error('Error message'),
            data: null,
        }))
    })

    it('should send the "isUserDataViewFallback" parameter with value "undefined"', async () => {
        const { waitForNextUpdate } = renderHook(
            () => useRootOrgData(['A0000000000']),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(dataProviderData.organisationUnits).toHaveBeenCalledWith(
            'read',
            expect.objectContaining({
                params: expect.objectContaining({
                     isUserDataViewFallback: undefined,
                })
            }),
            expect.objectContaining({}) // contains the `signal`
        )
    })

    it('should send the "isUserDataViewFallback" parameter with value "true"', async () => {
        const options = { isUserDataViewFallback: true }
        const { waitForNextUpdate } = renderHook(
            () => useRootOrgData(['A0000000000'], options),
            { wrapper }
        )

        await waitForNextUpdate()

        expect(dataProviderData.organisationUnits).toHaveBeenCalledWith(
            'read',
            expect.objectContaining({
                params: expect.objectContaining({
                     isUserDataViewFallback: true,
                })
            }),
            expect.objectContaining({}) // contains the `signal`
        )
    })

    it('should patch the display name if it is missing', async () => {
        const dataProviderDataWithoutDisplayName = {
            organisationUnits: jest.fn(() => {
                return {
                    id: 'A0000000000',
                    path: '/A0000000000',
                }
            })
        }

        const wrapperWithoutDisplayName = ({ children }) => (
            <CustomDataProvider data={dataProviderDataWithoutDisplayName}>
                {children}
            </CustomDataProvider>
        )

        const { result, waitForNextUpdate } = renderHook(
            () => useRootOrgData(['A0000000000']),
            { wrapper: wrapperWithoutDisplayName }
        )

        await waitForNextUpdate()

        expect(result.current).toEqual(expect.objectContaining({
            loading: false,
            error: null,
            data: {
                A0000000000: {
                    id: 'A0000000000',
                    path: '/A0000000000',
                    displayName: '',
                },
            },
        }))
    })
})
