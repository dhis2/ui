import { CustomDataProvider } from '@dhis2/app-runtime'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useFetchOrgData } from './use-fetch-org-data.js'

describe('useFetchOrgData', () => {
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

    it('should return a function', () => {
        const { result } = renderHook(useFetchOrgData)
        expect(result.current).toBeInstanceOf(Function)
    })

    it('should provide a function that queries an organisation unit', async () => {
        const { result } = renderHook(useFetchOrgData, { wrapper })
        const variables = { id: 'A0000000000' }
        const response = await result.current({ variables })

        expect(response).toEqual({
            organisationUnit: {
                id: 'A0000000000',
                path: '/A0000000000',
                displayName: 'Org Unit 1',
                children: [
                    {
                      id: 'A0000000001',
                      path: '/A0000000000/A0000000001',
                      children: [],
                      displayName: 'Org Unit 2'
                    }
                ]
            }
        })
    })

    it('should preserve the referential identity of the returned function', () => {
        const { result, rerender } = renderHook(useFetchOrgData, { wrapper })
        const afterFirstRender = result.current

        rerender()
        const afterSecondRender = result.current

        expect(afterFirstRender).toBe(afterSecondRender)
    })

    it('must throw when the request fails', () => {
        const dataProviderDataWithFailure = {
            organisationUnits: () => Promise.reject('Foobar'),
        }

        const wrapperWithFailure = ({ children }) => (
            <CustomDataProvider data={dataProviderDataWithFailure}>
                {children}
            </CustomDataProvider>
        )

        const { result } = renderHook(useFetchOrgData, { wrapper: wrapperWithFailure })
        const variables = { id: 'A0000000000' }

        expect(result.current({ variables })).rejects.toBe('Foobar')
    })
})
