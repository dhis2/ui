import { dhis2Username, invalidUsernameMessage } from '../dhis2Username.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: dhis2Username', () => {
    allowsEmptyValues(dhis2Username)

    describe('allows all sorts of strings between 1 and 255 characters long', () => {
        testValidatorValues(dhis2Username, undefined, [
            'electricchicken',
            '1', //1
            'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', //255
            'some_username^%&*(',
            'あいうえお',
        ])
    })

    describe('rejects other data types', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            1,
            true,
            {},
            [],
            () => {},
        ])
    })

    describe('values that are too long', () => {
        testValidatorValues(dhis2Username, invalidUsernameMessage, [
            'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', //256
        ])
    })
})
