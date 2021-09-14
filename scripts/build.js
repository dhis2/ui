#!/usr/bin/env node

/**
 * NOTA BENE
 *
 * This script builds the UI repository, and has been extracted into its
 * own script instead of living inline in the main package.json to allow
 * for notably these reasons:
 *
 * 1. comments
 * 2. finding packages to build procedurally
 * 3. keeping the package.json file readable
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

const commands = packages.map(p => {
    const pkg = require(path.join(p, 'package.json'))
    return {
        name: path.basename(p),
        command: `yarn workspace ${pkg.name} build`,
    }
})

const threads = os.cpus().length

concurrently([...commands], {
    prefix: 'name',
    killOthers: ['failure'],
    restartTries: 1,
    cwd: path.resolve(__dirname, '..'),
    maxProcesses: Math.max(threads - 1, 1),
}).then(
    () => {
        console.log('Built UI successfully')
        process.exit(0)
    },
    failure => {
        console.log('Build error for UI')
        console.dir(failure, { depth: null })
        process.exit(1)
    }
)
