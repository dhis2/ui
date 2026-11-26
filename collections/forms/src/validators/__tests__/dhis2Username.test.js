import { dhis2Username, invalidUsernameMessage } from '../dhis2Username.js'
import {
    testValidatorValues,
    allowsEmptyValues,
} from '../test-helpers/index.js'

describe('validator: dhis2Username', () => {
    allowsEmptyValues(dhis2Username)

    describe('constrains length of username to between 4 and 255 characters long', () => {
        testValidatorValues(dhis2Username, undefined, [
            's'.repeat(4),
            's'.repeat(255),
            'valid_username',
        ])

        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            '1',
            's',
            's'.repeat(256),
        ])
    })

    describe('does not allow usernames to start with _, -, . or @', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            '_xxx',
            '-xxx',
            '.xxx',
            '@xxx',
        ])
    })

    describe('does not allow usernames to end with _, -, . or @', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            'xxx_',
            'xxx-',
            'xxx.',
            'xxx@',
        ])
    })

    describe('does not allow usernames to contain __, --, .. or @@', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            'xx__xx',
            'xx--xx',
            'xx..xx',
            'xx@@xx',
        ])
    })

    describe('constrains characters in usernames to [a-z0-9._@]', () => {
        testValidatorValues(dhis2Username, undefined, [
            'v@lid_user.name',
            'v@lid-user.name',
            '123another_v@lid_usern@me',
            'UPPER_CASE',
            'lower@ca.se',
        ])

        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            'あいうえお',
            'some_username^%&*(',
            'josé.silva',
            'пользователь',
            'user name',
        ])
    })

    // LIBS-637: the message must explain every rule the pattern enforces
    describe('invalid username message', () => {
        it('mentions the allowed letters, digits and separators', () => {
            expect(invalidUsernameMessage).toContain('a-z or A-Z')
            expect(invalidUsernameMessage).toContain('without accents')
            expect(invalidUsernameMessage).toContain('0-9')
            expect(invalidUsernameMessage).toContain('. _ - @')
        })

        it('mentions the separator position rules', () => {
            expect(invalidUsernameMessage).toContain(
                'cannot start or end with a separator or have two separators in a row'
            )
        })
    })

    describe('rejects non-string data types', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            1,
            true,
            {},
            [],
            () => {},
        ])
    })
})
