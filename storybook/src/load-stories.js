const path = require('path')
const { COLLECTIONS_DIR } = require('./paths.js')
const { uiPackages } = require('./ui-packages.js')

const isTesting = 'STORYBOOK_TESTING' in process.env

/**
 * By default the loaders only include ./src and ./.storybook. But we're using ./packages so we
 * need to include that as well, otherwise the jsx in those folders won't be transpiled.
 */
exports.loadStories = () => {
    const curcomp = path.basename(process.cwd())
    const [collections] = uiPackages()

    // if we run storybook in one component, we only want to serve a single one
    // and if we run storybook from the project root, we want to load the full shebang.
    switch (true) {
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

        default: {
            console.info(
                `custom => Loading ${isTesting ? 'testing' : 'all'} stories`
            )

            const fileTypeExtension = '@(js|jsx|mdx)'
            const fileExtension = `${
                isTesting ? 'e2e.stories' : 'prod.stories'
            }`

            return [
                `${COLLECTIONS_DIR}/*/src/**/*${fileExtension}.${fileTypeExtension}`,
            ]
        }
    }
}
