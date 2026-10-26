// Author: Morten Svanæs <msvanaes@dhis2.org>
import { clearSensitiveCaches } from '@dhis2/app-runtime'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { ProfileMenu } from './profile-menu.js'

jest.mock('@dhis2/app-runtime', () => ({
    useConfig: () => ({ baseUrl: 'https://domain.tld/' }),
    clearSensitiveCaches: jest.fn(),
}))

describe('ProfileMenu logout', () => {
    let submittedForms

    beforeEach(() => {
        submittedForms = []
        clearSensitiveCaches.mockResolvedValue(true)
        jest.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(
            function () {
                submittedForms.push(this)
            }
        )
    })

    afterEach(() => {
        jest.restoreAllMocks()
        clearSensitiveCaches.mockReset()
    })

    it('clears sensitive caches and then logs out with a POST', async () => {
        render(
            <ProfileMenu
                name="John Doe"
                email="john_doe@dhis2.org"
                hideProfileMenu={() => {}}
                showDebugInfoModal={() => {}}
            />
        )

        fireEvent.click(screen.getByText('Logout'))

        await waitFor(() => expect(submittedForms).toHaveLength(1))
        expect(clearSensitiveCaches).toHaveBeenCalledTimes(1)
        expect(clearSensitiveCaches.mock.invocationCallOrder[0]).toBeLessThan(
            HTMLFormElement.prototype.submit.mock.invocationCallOrder[0]
        )
        const [form] = submittedForms
        expect(form.method).toBe('post')
        expect(form.action).toBe(
            'https://domain.tld/dhis-web-commons-security/logout.action'
        )
    })
})
