const path = require('path')
const fg = require('fast-glob')
const {
    PROJECT_ROOT,
    COMPONENTS_DIR,
    COLLECTIONS_DIR,
    ICONS_DIR,
    CONSTANTS_DIR,
} = require('./paths.js')
const { uiPackages } = require('./ui-packages.js')

/*
 * Modifies the Wepback loaders
 *
 * By default, only src/ is included as a source directory for the
 * loaders, and since we are using a monorepo we need to add our nested
 * package source directories to the relevant loaders.
 */
function modify_internal_package_loaders(cfg) {
    // Find the rules that configure the webpack loaders
    const loaderRules = cfg.module.rules.find(rule => 'oneOf' in rule).oneOf

    // Filter only the rules that have a regex under the test property
    const regexLoaders = loaderRules.filter(
        loader => 'test' in loader && typeof loader.test.test === 'function'
    )

    // Find the rules that deal with .js
    const jsLoaders = regexLoaders.filter(loader => loader.test.test('.js'))

    const [components, collections, icons, constants] = uiPackages()

    console.info('custom => Webpack module loaders')
    jsLoaders.forEach(loader => {
        for (const collection of collections) {
            loader.include.push(new RegExp(`collections/${collection}/src`))
        }

        for (const component of components) {
            loader.include.push(new RegExp(`components/${component}/src`))
        }

        if (icons) {
            loader.include.push(new RegExp('icons/src'))
        }

        if (constants) {
            loader.include.push(new RegExp('constants/src'))
        }

        console.log(
            `Loader '${path.relative(
                process.cwd(),
                loader.loader
            )}' matching '${loader.test}' changed to include internal packages`
        )
    })

    return cfg
}

/*
 * Modifies the Storybook package resolutions
 *
 * We need to find all the packages and components that we want
 * Storybook to load, and generate resolutions for them, so that we
 * can redirect the entry-point of a package to the source code and
 * allow Storybook to compile that on the fly for a smooth
 * development experience.
 *
 * This:
 *
 * import { Button } from '@dhis2-ui/button'
 *
 * In production resolves to:
 *
 * node_modules/@dhis2-ui/button/build/es/index.js
 *
 * In development, we intercept and resolve it to:
 *
 * node_modules/@dhis2-ui/button/src/index.js
 *
 * From there Storybook's Webpack takes over and compiles
 * src/index.js on-the-fly and injects it into the running code
 * bundle using fast-refresh in CRA.
 */
function modify_internal_package_resolutions(cfg) {
    const packages = fg.sync([
        `${COMPONENTS_DIR}/*/package.json`,
        `${COLLECTIONS_DIR}/*/package.json`,
        `${ICONS_DIR}/package.json`,
        `${CONSTANTS_DIR}/package.json`,
    ])

    for (const pkg of packages) {
        const p = require(pkg)
        const name = p.name

        const index = fg.sync(`node_modules/${name}/src/**/index.js`, {
            depth: 1,
            onlyFiles: true,
            cwd: PROJECT_ROOT,
            absolute: true,
        })
        cfg.resolve.alias[name] = path.resolve(PROJECT_ROOT, index[0])
    }

    console.info('custom => Resolve aliases for internal packages:')
    console.dir(cfg.resolve.alias, { depth: 1 })

    return cfg
}

/*
 * Modifies the Webpack plugins used by Storybook.
 *
 * ESLint fails on our generated sources (src/locales), and since
 * most our lint rules are errors, this kills the process and
 * storybook fails to start, so the ESLintWebpackPlugin needs to be
 * removed.
 */
function modify_webpack_plugins(cfg) {
    console.info('custom => Disable Webpack plugins')

    // The constructor name for the plugin to remove. Can be found
    // using: yarn start --debug-webpack
    const removals = ['ESLintWebpackPlugin']

    console.info('custom => Removed plugin:')
    for (const removal of removals) {
        const index = cfg.plugins.findIndex(
            plugin => plugin.constructor.name === removal
        )

        if (index === -1) {
            continue
        }

        const removed = cfg.plugins.splice(index, 1)
        console.dir(...removed, { depth: 0 })
    }

    return cfg
}

exports.webpackConfig = async config => {
    // note: mutates config object
    modify_internal_package_loaders(config)
    modify_internal_package_resolutions(config)
    modify_webpack_plugins(config)

    return config
}
