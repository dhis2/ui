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
    // if we run storybook in one component, we only want to serve a single one
    // and if we run storybook from the project root, we want to load the full shebang.
    switch (true) {
        case components.includes(curcomp): {
            console.info(`custom => Loading stories for '${curcomp}'`)
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
            console.info(`custom => Loading stories for '${curcomp}'`)
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

        case icons.includes(curcomp): {
            console.info(`custom => Loading stories for '${curcomp}'`)
            return [
                path.join(ICONS_DIR, 'src', '**', '*.stories.@(js|jsx|mdx)'),
            ]
        }
        case constants.includes(curcomp): {
            console.info(`custom => Loading stories for '${curcomp}'`)
            return [
                path.join(
                    CONSTANTS_DIR,
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

            const fileTypeExtension = '@(js|jsx|mdx)'
            const fileExtension = `${isTesting ? 'e2e.stories' : 'prod.stories'}`

            return [
                `${COLLECTIONS_DIR}/*/src/**/*${fileExtension}.${fileTypeExtension}`,
                `${COMPONENTS_DIR}/*/src/**/*${fileExtension}.${fileTypeExtension}`,
                `${ICONS_DIR}/src/**/*${fileExtension}.${fileTypeExtension}`,
                `${CONSTANTS_DIR}/src/**/*${fileExtension}.${fileTypeExtension}`,
            ]
        }
    }
}
