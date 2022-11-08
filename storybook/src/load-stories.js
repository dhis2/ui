const path = require('path')
const {
    COMPONENTS_DIR,
    COLLECTIONS_DIR,
    ICONS_DIR,
    CONSTANTS_DIR,
} = require('./paths.js')
const { uiPackages } = require('./ui-packages.js')

const isTesting = 'STORYBOOK_TESTING' in process.env

/**
 * By default the loaders only include ./src and ./.storybook. But we're using ./packages so we
 * need to include that as well, otherwise the jsx in those folders won't be transpiled.
 */
exports.loadStories = () => {
    const curcomp = path.basename(process.cwd())

    const [components, collections, icons, constants] = uiPackages()

    console.log(curcomp)
    console.log(constants)
    const matchedStories = '*.stories.@(js|jsx|ts|tsx|mdx)'

    // if we run storybook in one component, we only want to serve a single one
    // and if we run storybook from the project root, we want to load the full shebang.
    switch (true) {
        case components.includes(curcomp): {
            console.info(`custom => Loading stories for '${curcomp}'`)
            return [
                path.join(COMPONENTS_DIR, curcomp, 'src', '**', matchedStories),
            ]
        }

        case collections.includes(curcomp): {
            console.info(`custom => Loading stories for '${curcomp}'`)
            return [
                path.join(
                    COLLECTIONS_DIR,
                    curcomp,
                    'src',
                    '**',
                    matchedStories
                ),
            ]
        }

        case icons.includes(curcomp): {
            console.info(`custom => Loading stories for '${curcomp}'`)
            return [path.join(ICONS_DIR, 'src', '**', matchedStories)]
        }
        case constants.includes(curcomp): {
            console.info(`custom => Loading stories for '${curcomp}'`)
            return [path.join(CONSTANTS_DIR, 'src', '**', matchedStories)]
        }

        default: {
            console.info(
                `custom => Loading ${isTesting ? 'testing' : 'all'} stories`
            )
            return isTesting
                ? [
                      `${COLLECTIONS_DIR}/*/src/**/*.stories.e2e.@(js|jsx)`,
                      `${COMPONENTS_DIR}/*/src/**/*.stories.e2e.@(js|jsx)`,
                      `${ICONS_DIR}/src/**/*.stories.e2e.@(js|jsx)`,
                      `${CONSTANTS_DIR}/src/**/*.stories.e2e.@(js|jsx)`,
                  ]
                : [
                      `${COLLECTIONS_DIR}/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
                      `${COMPONENTS_DIR}/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
                      `${ICONS_DIR}/src/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
                      `${CONSTANTS_DIR}/src/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
                  ]
        }
    }
}
