import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    convertConstantToAccess,
} from '../sharingConstants'

describe('SharingDialog - convertConstantToAccess', () => {
    const testCases = [
        [ACCESS_NONE, '--------', false],
        [ACCESS_VIEW_ONLY, 'r-------', true],
        [ACCESS_VIEW_AND_EDIT, 'rw------', true],
    ]

    it('returns the default access string if the access constant is not recognised', () =>
        expect(convertConstantToAccess('NOT_RECOGNISED')).toEqual('--------'))

    it('returns the correct metadata access string', () =>
        testCases.forEach(([accessConstant, accessString]) =>
            expect(convertConstantToAccess(accessConstant)).toEqual(
                accessString
            )
        ))

    it('returns the correct boolean value', () =>
        testCases.forEach(testCase =>
            expect(convertConstantToAccess(testCase[0], true)).toEqual(
                testCase[2]
            )
        ))
})
