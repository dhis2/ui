import { useEffect, useState } from 'react'
import { useForceReload } from '../useForceReload'

jest.mock('react', () => ({
    useEffect: jest.fn(callback => callback()),
    useState: jest.fn(iV => [iV, () => null]),
}))

describe('OrganisationUnitTree - useForceReload', () => {
    afterEach(() => {
        useEffect.mockClear()
    })

    it('should return an reloadIf of 0 when forceReload is false', () => {
        const expected = 0
        const actual = useForceReload(false)

        expect(actual).toBe(expected)
    })

    it('should increase the default reloadId when forceReload is true', () => {
        useState.mockImplementationOnce(initialValue => [
            initialValue,
            setReloadId,
        ])

        const setReloadId = jest.fn()
        const expected = 1

        useForceReload(true)

        expect(setReloadId).toHaveBeenCalledWith(expected)
    })

    it('should pass forceReload as only item as the second argument to useEffect', () => {
        const forceReload = true
        useForceReload(forceReload)

        const useEffectDependencies = useEffect.mock.calls[0][1]

        expect(useEffectDependencies).toEqual([forceReload])
    })
})
