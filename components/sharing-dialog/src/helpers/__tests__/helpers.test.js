import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
} from '../../sharing-constants.js'
import {
    convertAccessToConstant,
    convertConstantToAccess,
    isRemovableTarget,
} from '../helpers.js'

describe('helpers', () => {
    describe('convertAccessToConstant', () => {
        it('disallows access if the access string is undefined', () => {
            expect(convertAccessToConstant()).toEqual(ACCESS_NONE)
        })

        it('disallows access if the access string is invalid', () => {
            expect(convertAccessToConstant('invalid-access-string')).toEqual(
                ACCESS_NONE
            )
        })

        const cases = [
            ['--------', ACCESS_NONE],
            ['r-------', ACCESS_VIEW_ONLY],
            ['r-r-----', ACCESS_VIEW_ONLY],
            ['rw------', ACCESS_VIEW_AND_EDIT],
            ['rwrw----', ACCESS_VIEW_AND_EDIT],
        ]

        it.each(cases)(
            'parses the metadata portion of the access string correctly for %s',
            (accessString, accessConstant) => {
                expect(convertAccessToConstant(accessString)).toEqual(
                    accessConstant
                )
            }
        )
    })

    describe('convertConstantToAccess', () => {
        it('returns the default access string if the access constant is not recognised', () => {
            const expected = '--------'
            expect(convertConstantToAccess('NOT_RECOGNISED')).toEqual(expected)
        })

        const cases = [
            [ACCESS_NONE, '--------', false],
            [ACCESS_VIEW_ONLY, 'r-------', true],
            [ACCESS_VIEW_AND_EDIT, 'rw------', true],
        ]

        it.each(cases)(
            'returns the correct metadata access string for %s',
            (accessConstant, accessString) => {
                expect(convertConstantToAccess(accessConstant)).toEqual(
                    accessString
                )
            }
        )

        it.each(cases)(
            'returns the correct boolean value for %s',
            (accessConstant, accessString, accessBoolean) => {
                expect(convertConstantToAccess(accessConstant, true)).toEqual(
                    accessBoolean
                )
            }
        )
    })

    describe('isRemovableTarget', () => {
        it('returns false for targets that should not be removable', () => {
            expect(isRemovableTarget(SHARE_TARGET_EXTERNAL)).toBe(false)
            expect(isRemovableTarget(SHARE_TARGET_PUBLIC)).toBe(false)
        })

        it('returns true for all other targets', () => {
            expect(isRemovableTarget('Does not exist')).toBe(true)
        })
    })
})
