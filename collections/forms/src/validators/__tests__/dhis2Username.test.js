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

    describe('does not allow usernames to start with _, . or @', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            '_xxx',
            '.xxx',
            '@xxx',
        ])
    })

    describe('does not allow usernames to end with _, . or @', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            'xxx_',
            'xxx.',
            'xxx@',
        ])
    })

    describe('does not allow usernames to contain __, .. or @@', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            '__xx',
            '..xx',
            '@@xx',
        ])
    })

    describe('constrains characters in usernames to [a-z0-9._@]', () => {
        testValidatorValues(dhis2Username, undefined, [
            'v@lid_user.name',
            '123another_v@lid_usern@me',
        ])

        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            'あいうえお',
            'some_username^%&*(',
        ])
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
