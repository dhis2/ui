const path = require('path')
const { PROJECT_ROOT, COMPONENTS_DIR } = require('./paths.js')
const { uiPackages } = require('./ui-packages.js')

const isTesting = 'STORYBOOK_TESTING' in process.env

/**
 * By default the loaders only include ./src and ./.storybook. But we're using ./packages so we
 * need to include that as well, otherwise the jsx in those folders won't be transpiled.
 */
exports.loadStories = () => {
    const curcomp = path.basename(process.cwd())

    const [components] = uiPackages()

    // if we run storybook in one component, we only want to serve a single one
    // and if we run storybook from the project root, we want to load the full shebang.
    if (components.includes(curcomp)) {
        return [
            path.join(
                COMPONENTS_DIR,
                curcomp,
                'src',
                '**',
                '*.stories.@(js|jsx|mdx)'
            ),
        ]
    } else {
        return isTesting
            ? [
                  `${PROJECT_ROOT}/collections/*/src/**/*.stories.e2e.@(js|jsx)`,
                  `${PROJECT_ROOT}/components/*/src/**/*.stories.e2e.@(js|jsx)`,
                  `${PROJECT_ROOT}/utilities/*/src/**/*.stories.e2e.@(js|jsx)`,
              ]
            : [
                  `${PROJECT_ROOT}/docs/**/*.stories.mdx`,
                  `${PROJECT_ROOT}/collections/*/src/**/*.stories.@(js|jsx|mdx)`,
                  `${PROJECT_ROOT}/components/*/src/**/*.stories.@(js|jsx|mdx)`,
                  `${PROJECT_ROOT}/utilities/*/src/**/*.stories.@(js|jsx|mdx)`,
              ]
    }
}
