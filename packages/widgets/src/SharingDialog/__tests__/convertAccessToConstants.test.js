import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    defaultSharingSettings,
    convertAccessToConstant,
} from '../sharingConstants'

describe('SharingDialog - convertAccessToConstant', () => {
    it('returns the default value for public sharing if the access string is not recognised', () => {
        expect(convertAccessToConstant()).toEqual(defaultSharingSettings.public)
        expect(convertAccessToConstant('invalid-access-string')).toEqual(
            defaultSharingSettings.public
        )
    })

    it('parses the metadata portion of the access string correctly', () => {
        const testCases = [
            ['--------', ACCESS_NONE],
            ['r-------', ACCESS_VIEW_ONLY],
            ['r-r-----', ACCESS_VIEW_ONLY],
            ['rw------', ACCESS_VIEW_AND_EDIT],
            ['rwrw----', ACCESS_VIEW_AND_EDIT],
        ]

        testCases.forEach(([accessString, accessConstant]) =>
            expect(convertAccessToConstant(accessString)).toEqual(
                accessConstant
            )
        )
    })
})
