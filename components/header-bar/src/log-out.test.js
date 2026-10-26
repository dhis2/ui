// Author: Morten Svanæs <msvanaes@dhis2.org>
import { logOut } from './log-out.js'

describe('logOut', () => {
    let submittedForms

    beforeEach(() => {
        submittedForms = []
        jest.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(
            function () {
                submittedForms.push(this)
            }
        )
    })

    afterEach(() => {
        jest.restoreAllMocks()
        document.body.innerHTML = ''
    })

    it.each([
        [
            'https://domain.tld/',
            'https://domain.tld/dhis-web-commons-security/logout.action',
        ],
        ['..', '../dhis-web-commons-security/logout.action'],
    ])(
        'submits a POST form to the logout URL for baseUrl %s',
        (baseUrl, expectedAction) => {
            logOut(baseUrl)

            expect(submittedForms).toHaveLength(1)
            const [form] = submittedForms
            expect(form.method).toBe('post')
            expect(form.getAttribute('action')).toBe(expectedAction)
            expect(form.elements).toHaveLength(0)
            expect(document.body.contains(form)).toBe(true)
        }
    )
})
