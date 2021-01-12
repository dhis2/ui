const {
    chromeAllowXSiteCookies,
    cucumberPreprocessor,
} = require('@dhis2/cypress-plugins')

module.exports = (on, config) => {
    chromeAllowXSiteCookies(on, config)
    cucumberPreprocessor(on, config)
    // test code
    const state = {
        runStarts: 0,
        runEnds: 0,
        specStarts: 0,
        specEnds: 0,
    }

    on('before:run', () => {
        state.runStarts++
        console.log(
            `before:run event: incremented runStarts to ${state.runStarts}`
        )
    })

    on('after:run', () => {
        state.runEnds++
        console.log(`before:run event: incremented runEnds to ${state.runEnds}`)
    })

    on('before:spec', ({ name }) => {
        state.specStarts++
        console.log(
            `before:spec event: ${name} - incremented specStarts to ${state.specStarts}`
        )
    })

    on('after:spec', ({ name }) => {
        state.specEnds++
        console.log(
            `before:spec event: ${name} - incremented specEnds to ${state.specEnds}`
        )
    })
}
