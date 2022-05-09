#!/usr/bin/env node

const os = require('os')
const path = require('path')
const concurrently = require('concurrently')

const threads = Math.max(os.cpus().length - 1, 1)
const cwd = path.resolve(__dirname, '..')

concurrently(
    ['yarn workspace ui-docusaurus build', 'yarn workspace ui-storybook build'],
    {
        prefix: 'name',
        killOthers: ['failure'],
        restartTries: 1,
        cwd: cwd,
        maxProcesses: Math.max(threads - 1, 1),
    }
).then(
    () => {
        console.log('Built documentation successfully')
        process.exit(0)
    },
    (failure) => {
        console.log('Build error for documentation')
        console.dir(failure, { depth: null })
        process.exit(1)
    }
)
