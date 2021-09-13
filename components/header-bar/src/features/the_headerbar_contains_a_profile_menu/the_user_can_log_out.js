import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import { baseUrl } from '../common/index'

const logoutUrl = `${baseUrl}dhis-web-commons-security/logout.action`

Then('contains a link to log out the user', () => {
    cy.get('[data-test="headerbar-profile-menu"] > li').should(lis => {
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
    // stub clearSensitiveCaches and window.location.assign here?
    // window.location.assign can't be stubbed b/c window.location is read-only

    cy.get('[data-test="headerbar-profile-menu"] > li:nth-child(5)').trigger(
        'click'
    )
})

Then('a loading mask covers the screen', () => {
    cy.get('[data-test="headerbar-profile-menu-loading-mask"]').should(
        'be.visible'
    )
})

And('clearSensitiveCaches is called', () => {
    // todo: use with real app-runtime code
    // expect(utils.clearSensitiveCaches).to.be.called
})

Then('the window navigates to the logout URL', () => {
    // cy.get('@locationAssign').should('be.calledWith', logoutUrl)
})
