const path = require('path')
const fg = require('fast-glob')
const { PROJECT_ROOT, COMPONENTS_DIR, PACKAGES_DIR } = require('./paths.js')
const { uiPackages } = require('./ui-packages.js')

exports.webpackConfig = async config => {
    // Find the rules that configure the webpack loaders
    const loaderRules = config.module.rules.find(rule => 'oneOf' in rule).oneOf

    // Filter only the rules that have a regex under the test property
    const regexLoaders = loaderRules.filter(
        loader => 'test' in loader && typeof loader.test.test === 'function'
    )

    // Find the rules that deal with .js
    const jsLoaders = regexLoaders.filter(loader => loader.test.test('.js'))

    const [components, packages] = uiPackages()

    jsLoaders.forEach(loader => {
        for (const pkg of packages) {
            loader.include.push(new RegExp(`packages/${pkg}/src`))
        }

        for (const component of components) {
            loader.include.push(new RegExp(`components/${component}/src`))
        }
    })

    const find_packages = () => {
        const result = {}
        const packages = fg.sync([
            `${COMPONENTS_DIR}/*/package.json`,
            `${PACKAGES_DIR}/*/package.json`,
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
            result[name] = path.resolve(PROJECT_ROOT, index[0])
        }

        console.info('custom => Resolve aliases for internal packages:')
        console.dir(result, { depth: null })
        return result
    }

    return {
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                ...find_packages(),
            },
        },
    }
}
