import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString } from './helpers/index.js'

/*
 * Email validation is complicated business. There is no perfect regex,
 * instead we have to make a trade-off between complexity, correctness,
 * and the risk of producing false negatives. This article
 * https://www.regular-expressions.info/email.html offers a good overview.
 * It recommends to use a very simple regex when having to validate many
 * records, but for validating an individual email address a more complex
 * regex may be used.
 *
 * The pattern below is taken from the "The Official Standard: RFC 5322"
 * section of the article and is described as:
 * "[..] a more practical implementation of RFC 5322 [..] that will still
 * match 99.99% of all email addresses in actual use today"
 *
 * const EMAIL_ADDRESS_PATTERN = /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
 *
 * However, this regex produces a few false negatives and quite a lot
 * of false positives.
 *
 * Another regex, found in this stackoverflow answer below resulted in a better
 * overall picture in terms of false negatives and positives, so I settled on that one:
 * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript/46181#46181
 */

const EMAIL_ADDRESS_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

const invalidEmailMessage = i18n.t('Please provide a valid email address')

const email = value =>
    isEmpty(value) || (isString(value) && EMAIL_ADDRESS_PATTERN.test(value))
        ? undefined
        : invalidEmailMessage

export { email, invalidEmailMessage }
