const takeScreenshots = !!Cypress.env('SCREENSHOT')

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: takeScreenshots,
})
