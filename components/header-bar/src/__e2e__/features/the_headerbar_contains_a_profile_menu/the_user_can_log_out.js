import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import { baseUrl } from '../common/index.js'

const logoutUrl = `${baseUrl}dhis-web-commons-security/logout.action`

Then('contains a link to log out the user', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should((lis) => {
        const menuItem = lis.eq(4)
        expect(menuItem).to.be.visible
        expect(menuItem.find('a')).to.have.attr('href', logoutUrl)
    })
})

And('there is no loading mask', () => {
    cy.get('[data-test="headerbar-profile-menu-loading-mask"]').should(
        'not.exist'
    )
})

Then('the user clicks the link to log out', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li:nth-child(5)').trigger(
        'click'
    )
})

Then('a loading mask covers the screen', () => {
    cy.get('[data-test="headerbar-profile-menu-loading-mask"]').should(
        'be.visible'
    )
})

// Currently not working
And('clearSensitiveCaches is called', async () => {
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

// Currently not working
Then('the window navigates to the logout URL', () => {
    // (Currently unable to stub window.location.assign;
    // would be done in 'Then the user clicks link to log out')
    // cy.get('@locationAssign').should('be.calledWith', logoutUrl)
})
