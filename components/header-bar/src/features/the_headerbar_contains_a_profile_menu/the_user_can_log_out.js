import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { baseUrl } from '../common/index.js'

const logoutUrl = `${baseUrl}dhis-web-commons-security/logout.action`

Then('contains a link to log out the user', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should((lis) => {
        const menuItem = lis.eq(4)
        expect(menuItem).to.be.visible
        expect(menuItem.find('a')).to.have.attr('href', logoutUrl)
    })
})

When('there is no loading mask', () => {
    cy.get('[data-test="headerbar-profile-menu-loading-mask"]').should(
        'not.exist'
    )
})

When('the user clicks the link to log out', () => {
    // Stub the form submission so the test page does not navigate away
    cy.window().then((win) => {
        cy.stub(win.HTMLFormElement.prototype, 'submit').as('formSubmit')
    })
    cy.get('[data-test="headerbar-profile-menu"] > li:nth-child(5) a').click()
})

Then('the user is logged out with a POST to the logout URL', () => {
    cy.get('@formSubmit').should((submit) => {
        expect(submit).to.have.been.calledOnce
        const form = submit.thisValues[0]
        expect(form.method).to.equal('post')
        expect(form.action).to.equal(logoutUrl)
    })
})

Then('a loading mask covers the screen', () => {
    cy.get('[data-test="headerbar-profile-menu-loading-mask"]').should(
        'be.visible'
    )
})

// Currently not working
When('clearSensitiveCaches is called', async () => {
    // Open caches to test 'clearSensitiveCaches':
    // A keepable cache
    await caches.open('workbox-precache-v2-asdf')
    // Other, potentially-sensitive cache
    await caches.open('test-cache')

    // Todo: wait for function to resolve (loading mask goes away?)
    const keys = await caches.keys()
    // Static asset caches are kept
    expect(keys).to.include('workbox-precache-v2-asdf')
    // Others are removed
    expect(keys).not.to.include('test-cache')
})
