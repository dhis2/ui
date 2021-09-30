import { convertAccessToConstant, convertConstantToAccess } from '../helpers'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    defaultSharingSettings,
} from '../sharing-constants.js'

describe('helpers', () => {
    describe('convertAccessToConstant', () => {
        it('returns the default value for public sharing if the access string is undefined', () => {
            expect(convertAccessToConstant()).toEqual(
                defaultSharingSettings.public
            )
        })

        it('returns the default value for public sharing if the access string is invalid', () => {
            expect(convertAccessToConstant('invalid-access-string')).toEqual(
                defaultSharingSettings.public
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
            'returns the correct boolean value',
            (accessConstant, accessString, accessBoolean) => {
                expect(convertConstantToAccess(accessConstant, true)).toEqual(
                    accessBoolean
                )
            }
        )
    })
})
