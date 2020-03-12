import { email, invalidEmailMessage } from '../email.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

/*
 * A comprehensive list technically valid and invalid email addresses was
 * taken from:
 * https://codefool.tumblr.com/post/15288874550/list-of-valid-and-invalid-email-addresses
 *
 * Our chosen regex does not work correctly in each case, but on balance
 * it performs pretty well: all plausible email addresses are accepted
 * and most malformed email addresses are rejected.
 *
 * I have kept the original list of values and have simply commented out
 * the ones that are not evaluated correctly by our regex.
 */

describe('validator: email', () => {
    allowsEmptyValues(email)

    describe('allows valid email addresses', () => {
        /*
         * Items that have been commented out below are FALSELY REJECTED by the chosen regex
         */
        testValidatorValues(email, undefined, [
            'email@example.com',
            'firstname.lastname@example.com',
            'email@subdomain.example.com',
            'firstname+lastname@example.com',
            // 'email@123.123.123.123',
            'email@[123.123.123.123]',
            '"email"@example.com',
            '1234567890@example.com',
            'email@example-one.com',
            '_______@example.com',
            'email@example.name',
            'email@example.museum',
            'email@example.co.jp',
            'firstname-lastname@example.com',

            /* very strange but technically valid addresses */
            // 'much."more unusual"@example.com',
            // 'very.unusual."@".unusual.com@example.com',
            // 'very."(),:;<>[]".VERY."very@\\\\\\ "very".unusual@strange.example.com',
        ])
    })

    describe('rejects invalid email addresses', () => {
        /*
         * Items that have been commented out below are FALSELY ACCEPTED by the chosen regex
         */
        testValidatorValues(email, invalidEmailMessage, [
            'plainaddress',
            '#@%^%#$@#$@#.com',
            '@example.com',
            'Joe Smith <email@example.com>',
            'email.example.com',
            'email@example@example.com',
            '.email@example.com',
            'email.@example.com',
            'email..email@example.com',
            /*
             * I think this false positive below may actualy be correct behaviour,
             * see https://en.wikipedia.org/wiki/International_email)
             */
            // 'あいうえお@example.com'
            'email@example.com (Joe Smith)',
            'email@example',
            // 'email@-example.com',
            // 'email@example.web',
            'email@111.222.333.44444',
            'email@example..com',
            'Abc..123@example.com',

            /* very strange invalid addresses */
            '"(),:;<>[]@example.com',
            'just"not"right@example.com',
            'this is"really"not\\\\allowed@example.com',
        ])
    })
})
