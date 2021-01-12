const {
    chromeAllowXSiteCookies,
    cucumberPreprocessor,
} = require('@dhis2/cypress-plugins')

module.exports = (on, config) => {
    chromeAllowXSiteCookies(on, config)
    cucumberPreprocessor(on, config)
}
