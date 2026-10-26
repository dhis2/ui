// Author: Morten Svanæs <msvanaes@dhis2.org>
import { joinPath } from './join-path.js'

export const getLogoutUrl = (baseUrl) =>
    joinPath(baseUrl, 'dhis-web-commons-security/logout.action')

/**
 * Logs the user out by submitting a POST to the server's logout URL.
 *
 * A regular form submission is used instead of fetch, so the browser
 * follows the server's redirect to the login page and sends the
 * `Origin` header the server uses to accept the request.
 */
export const logOut = (baseUrl) => {
    const form = document.createElement('form')
    form.method = 'post'
    form.action = getLogoutUrl(baseUrl)
    form.style.display = 'none'
    document.body.appendChild(form)
    form.submit()
}
