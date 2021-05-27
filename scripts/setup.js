#!/usr/bin/env node

/**
 * NOTA BENE
 *
 * The setup script should be run at least once after cloning the UI
 * repo, to ensure that all our generated source files exist before
 * attempting to run Storybook.
 *
 * Long-term goal is to remove the need for this script.
 */

const path = require('path')
const concurrently = require('concurrently')

/* We want to use the same way to find our packages in Storybook and our
 * scripts to make sure that we get a consistent result, which is why we
 * make an exception and reach into the storybook/src folder here.
 */
const { uiPackages } = require(path.resolve(
    __dirname,
    '..',
    'storybook',
    'src',
    'ui-packages.js'
))

/*
 * Only grab the components and generate the i18n for those since we are
 * doing this to allow Storybook to start cleanly without building
 * everything upfront.
 */
const [components] = uiPackages({ absolute: true })

/*
 * Right now, we use the @dhis2/d2-i18n runtime to do i18n so we check
 * if a component depends on it to know where to extract i18n strings
 * from.
 *
 * The reason we have to identify all the components that do i18n is
 * because the "d2-app-script i18n generate" command exits with code 1
 * (error) if it doesn't find any i18n strings. If it was a noop with
 * exit code 0 we wouldn't need to find the components that do i18n and
 * could run it on all of them.
 *
 * This may change when we revamp the i18n system:
 *
 * https://github.com/dhis2/notes/discussions/154
 *
 */
const hasDep = deps => (deps ? deps['@dhis2/d2-i18n'] : false)

const commands = components
    .map(p => {
        const pkg = require(path.join(p, 'package.json'))

        if (hasDep(pkg.dependencies) || hasDep(pkg.peerDependencies)) {
            return {
                name: path.basename(p),
                command: `yarn workspace ${pkg.name} d2-app-scripts i18n generate`,
            }
        }

        return
    })
    .filter(p => p)

concurrently(
    [
        ...commands,
        { name: 'icons', command: 'yarn workspace @dhis2/ui-icons build' },
    ],
    {
        prefix: 'name',
        killOthers: ['failure'],
        restartTries: 1,
        cwd: path.resolve(__dirname, '..'),
    }
).then(
    () => {
        console.log('UI setup complete')
        process.exit(0)
    },
    failure => {
        console.log('UI setup failed')
        console.dir(failure, { depth: null })
        process.exit(1)
    }
)
