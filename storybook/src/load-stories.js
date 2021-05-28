const path = require('path')
const {
    PROJECT_ROOT,
    COMPONENTS_DIR,
    UTILITIES_DIR,
    COLLECTIONS_DIR,
} = require('./paths.js')
const { uiPackages } = require('./ui-packages.js')

const isTesting = 'STORYBOOK_TESTING' in process.env

/**
 * By default the loaders only include ./src and ./.storybook. But we're using ./packages so we
 * need to include that as well, otherwise the jsx in those folders won't be transpiled.
 */
exports.loadStories = () => {
    const curcomp = path.basename(process.cwd())

    const [components, collections, utilities] = uiPackages()

    // if we run storybook in one component, we only want to serve a single one
    // and if we run storybook from the project root, we want to load the full shebang.
    switch (true) {
        case components.includes(curcomp): {
            console.info(`custom => Loading component stories for '${curcomp}'`)
            return [
                path.join(
                    COMPONENTS_DIR,
                    curcomp,
                    'src',
                    '**',
                    '*.stories.@(js|jsx|mdx)'
                ),
            ]
        }

        case collections.includes(curcomp): {
            console.info(
                `custom => Loading collection stories for '${curcomp}'`
            )
            return [
                path.join(
                    COLLECTIONS_DIR,
                    curcomp,
                    'src',
                    '**',
                    '*.stories.@(js|jsx|mdx)'
                ),
            ]
        }

        case utilities.includes(curcomp): {
            console.info(`custom => Loading utility stories for '${curcomp}'`)
            return [
                path.join(
                    UTILITIES_DIR,
                    curcomp,
                    'src',
                    '**',
                    '*.stories.@(js|jsx|mdx)'
                ),
            ]
        }

        default: {
            console.info(
                `custom => Loading ${isTesting ? 'testing' : 'all'} stories`
            )
            return isTesting
                ? [
                      `${COLLECTIONS_DIR}/*/src/**/*.stories.e2e.@(js|jsx)`,
                      `${COMPONENTS_DIR}/*/src/**/*.stories.e2e.@(js|jsx)`,
                      `${UTILITIES_DIR}/*/src/**/*.stories.e2e.@(js|jsx)`,
                  ]
                : [
                      `${PROJECT_ROOT}/docs/**/*.stories.mdx`,
                      `${COLLECTIONS_DIR}/*/src/**/*.stories.@(js|jsx|mdx)`,
                      `${COMPONENTS_DIR}/*/src/**/*.stories.@(js|jsx|mdx)`,
                      `${UTILITIES_DIR}/*/src/**/*.stories.@(js|jsx|mdx)`,
                  ]
        }
    }
}
