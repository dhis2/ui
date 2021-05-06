const fs = require('fs')
const path = require('path')
const makeBabelConfig = require('@dhis2/cli-app-scripts/config/makeBabelConfig.js')
const fg = require('fast-glob')
const findup = require('find-up')

const isTesting = 'STORYBOOK_TESTING' in process.env

const root = findup.sync(
    directory => {
        const amiroot = ['.git', '.github'].map(i =>
            findup.sync.exists(path.join(directory, i))
        )
        return amiroot.includes(true) && directory
    },
    {
        type: 'directory',
    }
)

const loadStories = () => {
    const components_dir = path.join(root, 'components')
    const curcomp = path.basename(process.cwd())

    const components = fs.readdirSync(components_dir, {
        encoding: 'utf8',
    })

    // if we run storybook in one component, we only want to serve a single one
    // and if we run storybook from the project root, we want to load the full shebang.
    if (components.includes(curcomp)) {
        return [
            path.join(
                components_dir,
                curcomp,
                'src',
                '**',
                '*.stories.@(js|jsx|mdx)'
            ),
        ]
    } else {
        return isTesting
            ? [
                  '../packages/*/src/**/*.stories.e2e.@(js|jsx)',
                  '../components/*/src/**/*.stories.e2e.@(js|jsx)',
              ]
            : [
                  '../docs/**/*.stories.mdx',
                  '../packages/*/src/**/*.stories.@(js|jsx|mdx)',
                  '../components/*/src/**/*.stories.@(js|jsx|mdx)',
              ]
    }
}

module.exports = {
    /**
     * By default the loaders only include ./src and ./.storybook. But we're using ./packages so we
     * need to include that as well, otherwise the jsx in those folders won't be transpiled.
     */
    webpackFinal: async config => {
        // Find the rules that configure the webpack loaders
        const loaderRules = config.module.rules.find(rule => 'oneOf' in rule)
            .oneOf

        // Filter only the rules that have a regex under the test property
        const regexLoaders = loaderRules.filter(
            loader => 'test' in loader && typeof loader.test.test === 'function'
        )

        // Find the rules that deal with .js
        const jsLoaders = regexLoaders.filter(loader => loader.test.test('.js'))

        const components_dir = path.join(root, 'components')
        const packages_dir = path.join(root, 'packages')

        const components = fs.readdirSync(components_dir, {
            encoding: 'utf8',
        })
        const packages = fs.readdirSync(packages_dir, {
            encoding: 'utf8',
        })

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
                `${components_dir}/*/package.json`,
                `${packages_dir}/*/package.json`,
            ])

            for (const pkg of packages) {
                const p = require(pkg)
                const name = p.name

                const dir = path.dirname(pkg)
                const index = fg.sync('src/**/index.js', {
                    deep: 2,
                    onlyFiles: true,
                    cwd: dir,
                    absolute: true,
                })
                result[name] = index[0]
            }

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
    },
    stories: async list => [...list, ...loadStories()],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-storysource',
            options: { loaderOptions: { injectDecorator: false } },
        },
        'storybook-addon-jsx',
        '@storybook/addon-a11y',
    ],
    babel: async config => {
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
    },
}
