const {
    chromeAllowXSiteCookies,
    cucumberPreprocessor,
} = require('@dhis2/cypress-plugins')
const { defineConfig } = require('cypress')

async function setupNodeEvents(on, config) {
    await cucumberPreprocessor(on, config)
    chromeAllowXSiteCookies(on, config)
    return config
}

module.exports = defineConfig({
    video: false,
    projectId: 'vyavbk',
    e2e: {
        setupNodeEvents,
        baseUrl: 'http://localhost:5000',
        specPattern: '**/src/**/*.feature',
        // excludeSpecPattern: '**/build/**/*',
    },
})
