import { useDataQuery } from '@dhis2/app-runtime'

import { addMissingDisplayNameProps, createQuery } from '../useOrgData/helpers'
import { useOrgData } from '../useOrgData'

jest.mock('@dhis2/app-runtime', () => ({
    useDataQuery: jest.fn(() => ({ loading: false, error: null, data: {} })),
}))

jest.mock('../useOrgData/helpers', () => ({
    createQuery: jest.fn(() => 'createQuery'),
    addMissingDisplayNameProps: jest.fn(() => 'addMissingDisplayNameProps'),
}))

describe('OrganisationUnitTree - useOrgData', () => {
    const ids = ['foo', 'bar', 'baz']

    afterEach(() => {
        createQuery.mockClear()
        useDataQuery.mockClear()
        addMissingDisplayNameProps.mockClear()
    })

    it('create the query from the ids', () => {
        useOrgData(ids)
        expect(createQuery).toHaveBeenCalledWith(ids)
    })

    it('should pass the created query to useDataQuery', () => {
        createQuery.mockReturnValueOnce('foobarbaz')
        useOrgData(ids)

        const [firstArg] = useDataQuery.mock.calls[0]
        expect(firstArg).toBe('foobarbaz')
    })

    it('should format the nodes if data is not falsy', () => {
        const data = { id1: {} }
        useDataQuery.mockReturnValueOnce({ loading: false, error: null, data })
        useOrgData(ids)
        expect(addMissingDisplayNameProps).toHaveBeenCalledWith(data)
    })

    it('should return the data from addMissingDisplayNameProps as data when there are nodes', () => {
        const data = { id1: {} }
        useDataQuery.mockReturnValueOnce({ loading: false, error: null, data })
        addMissingDisplayNameProps.mockImplementationOnce(input => input)
        const { data: actual } = useOrgData(ids)

        expect(actual).toEqual(data)
    })

    it('should return the loading state from useDataQuery as loading state', () => {
        const loading = 'foobar'
        useDataQuery.mockReturnValueOnce({ loading, error: null, data: null })
        const { loading: actual } = useOrgData(ids)

        expect(actual).toEqual(loading)
    })

    it('should return the error state from useDataQuery as error state', () => {
        const error = 'foobar'
        useDataQuery.mockReturnValueOnce({ loading: false, error, data: null })
        const { error: actual } = useOrgData(ids)

        expect(actual).toEqual(error)
    })
})
