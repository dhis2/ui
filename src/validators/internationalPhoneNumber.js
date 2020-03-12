import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString, isNumeric } from './helpers/index.js'

/*
 * There were some problems with the server side implementation
 * of how international phone numbers are validated, and the
 * server side implementation will likely be removed, see:
 * https://jira.dhis2.org/browse/DHIS2-8040
 *
 * So, rather than aligning with the server-side implementation
 * this validator implements the E.164 numbering plan, see:
 * https://www.cm.com/blog/how-to-format-international-telephone-numbers/
 *
 * SPECS
 * Here's how the E.164 numbering plan works:
 * - A telephone number can have a maximum of 15 digits
 * - The first part of the telephone number is the country code (one to three digits)
 * - The second part is the national destination code (NDC)
 * - The last part is the subscriber number (SN)
 * - The NDC and SN together are collectively called the national (significant) number
 *
 * IMPLEMENTATION ADVICE
 * Two important things to note: First of all, in the international E.164 notation a
 * leading ‘0’ is removed. The UK mobile phone number ‘07911 123456’ in international
 * format is ‘+44 7911 123456’, so without the first zero. Secondly in the E.164 notation
 * all spaces, dashes [‘-‘] and parentheses [ ‘(‘ and ‘)’] are removed, besides the
 * leading ‘+’ all characters should be numeric.
 */

const invalidInternationalPhoneNumberMessage = i18n.t(
    'Please provide a valid international phone number.'
)

const internationalPhoneNumber = value => {
    // allow empty values
    if (isEmpty(value)) {
        return undefined
    }

    // value must be a string
    if (!isString(value)) {
        return invalidInternationalPhoneNumberMessage
    }

    const cleanedValue = value
        // strip all hyphens, dots, spaces
        .replace(/[-. )(]/g, '')
        // trim leading zeroes and plus signs
        .replace(/^[0+]+/, '')

    return isNumeric(cleanedValue) && cleanedValue.length <= 15
        ? undefined
        : invalidInternationalPhoneNumberMessage
}

export { internationalPhoneNumber, invalidInternationalPhoneNumberMessage }
