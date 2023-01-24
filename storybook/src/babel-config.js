const makeBabelConfig = require('@dhis2/cli-app-scripts/config/makeBabelConfig.js')

exports.babelConfig = (config) => {
    // currently styled-jsx is configured the same way for prod and
    // dev so it doesn't matter what the mode is here.
    const mode = 'production'

    const custom = makeBabelConfig({
        moduleType: 'es',
        mode,
    })

    // ensure that our custom babel configuration is merged properly
    // with the storybook babel configuration.
    const merged = {
        ...config,
        presets: [...custom.presets],
        plugins: [...custom.plugins, ...custom.env[mode].plugins],
    }
    return merged
}
