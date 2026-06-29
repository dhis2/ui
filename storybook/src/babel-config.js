const path = require('node:path')

// As of v12, @dhis2/cli-app-scripts declares an `exports` map in its
// package.json that only exposes `.` and `./init`, so deep-importing
// `@dhis2/cli-app-scripts/config/makeBabelConfig.js` throws
// ERR_PACKAGE_PATH_NOT_EXPORTED. The file is still published (the `config`
// dir is in the package's `files`), so resolve the package root via its
// public entry point and reach the file by absolute path instead.
const pkgRoot = path.join(
    path.dirname(require.resolve('@dhis2/cli-app-scripts')),
    '..'
)
const makeBabelConfig = require(path.join(
    pkgRoot,
    'config',
    'makeBabelConfig.js'
))

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
        presets: custom.presets,
        plugins: [...custom.plugins, ...custom.env[mode].plugins].map(
            (plugin) => {
                if (plugin instanceof Array) {
                    return [plugin[0], { ...plugin[1], loose: true }]
                }

                return [plugin, { loose: true }]
            }
        ),
    }

    return merged
}
