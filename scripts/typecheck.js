#!/usr/bin/env node

/**
 * NOTA BENE
 *
 * Babel strips TypeScript types without checking them, so nothing in the
 * normal build or test run verifies them. This script runs the `typecheck`
 * script of every package that declares one.
 *
 * Packages are discovered rather than listed, the same way build.js and
 * setup.js do it, so a new TypeScript package is covered the moment it adds
 * a `typecheck` script — nobody has to remember to register it here.
 */

const os = require('os')
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

const packages = uiPackages({ absolute: true }).reduce((a, b) => a.concat(b))

const commands = packages
    .map((p) => {
        const pkg = require(path.join(p, 'package.json'))

        if (!pkg.scripts || !pkg.scripts.typecheck) {
            return
        }

        return {
            name: path.basename(p),
            command: `yarn workspace ${pkg.name} typecheck`,
        }
    })
    .filter((c) => c)

if (commands.length === 0) {
    console.log('No packages declare a typecheck script, nothing to do')
    process.exit(0)
}

const threads = os.cpus().length

concurrently(commands, {
    prefix: 'name',
    killOthers: ['failure'],
    cwd: path.resolve(__dirname, '..'),
    maxProcesses: Math.max(threads - 1, 1),
}).then(
    () => {
        console.log('Typecheck passed')
        process.exit(0)
    },
    (failure) => {
        console.log('Typecheck failed')
        console.dir(failure, { depth: null })
        process.exit(1)
    }
)
