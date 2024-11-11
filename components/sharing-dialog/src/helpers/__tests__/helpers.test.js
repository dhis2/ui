import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
} from '../../constants.js'
import {
    convertAccessToConstantObject,
    convertConstantObjectToAccess,
    isRemovableTarget,
} from '../helpers.js'

describe('helpers', () => {
    describe('convertAccessToConstantObject', () => {
        it('disallows access if the access string is undefined', () => {
            const NO_ACCESS_OBJECT = {
                data: ACCESS_NONE,
                metadata: ACCESS_NONE,
            }
            expect(convertAccessToConstantObject()).toEqual(NO_ACCESS_OBJECT)
        })

        it('disallows access if the access string is invalid', () => {
            const NO_ACCESS_OBJECT = {
                data: ACCESS_NONE,
                metadata: ACCESS_NONE,
            }
            expect(
                convertAccessToConstantObject('invalid-access-string')
            ).toEqual(NO_ACCESS_OBJECT)
        })

        const cases = [
            ['--------', { data: ACCESS_NONE, metadata: ACCESS_NONE }],
            ['r-------', { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY }],
            [
                'r-r-----',
                { data: ACCESS_VIEW_ONLY, metadata: ACCESS_VIEW_ONLY },
            ],
            ['rw------', { data: ACCESS_NONE, metadata: ACCESS_VIEW_AND_EDIT }],
            [
                'rwrw----',
                { data: ACCESS_VIEW_AND_EDIT, metadata: ACCESS_VIEW_AND_EDIT },
            ],
        ]

        it.each(cases)(
            'parses the metadata portion of the access string correctly for %s',
            (accessString, accessConstant) => {
                expect(convertAccessToConstantObject(accessString)).toEqual(
                    accessConstant
                )
            }
        )
    })

    describe('convertConstantObjectToAccess', () => {
        it('returns the default access string if the access constant is not recognised', () => {
            const expected = '--------'
            expect(
                convertConstantObjectToAccess({
                    data: 'NOT_RECOGNISED',
                    metadata: 'NOT_RECOGNISED',
                })
            ).toEqual(expected)
        })

        const cases = [
            [{ data: ACCESS_NONE, metadata: ACCESS_NONE }, '--------'],
            [{ data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY }, 'r-------'],
            [{ data: ACCESS_NONE, metadata: ACCESS_VIEW_AND_EDIT }, 'rw------'],
            [{ data: ACCESS_VIEW_ONLY, metadata: ACCESS_NONE }, '--r-----'],
            [{ data: ACCESS_VIEW_AND_EDIT, metadata: ACCESS_VIEW_AND_EDIT }, 'rwrw----'],
        ]

        it.each(cases)(
            'returns the correct metadata access string for %s',
            (accessConstant, accessString) => {
                expect(convertConstantObjectToAccess(accessConstant)).toEqual(
                    accessString
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
