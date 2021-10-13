#!/usr/bin/env node

const path = require('path')
const { PerformanceObserver, performance } = require('perf_hooks')
const concurrently = require('concurrently')

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration)
    performance.clearMarks()
})

obs.observe({ entryTypes: ['measure'] })

performance.mark('test-run-start')

concurrently(
    [
        { name: 'server', command: 'yarn cy:start' },
        { name: 'cypress', command: 'yarn cy:run' },
    ],
    {
        prefix: 'name',
        killOthers: ['failure', 'success'],
        restartTries: 1,
        cwd: path.resolve(__dirname, '..'),
    }
).then(
    () => {
        performance.mark('test-run-ok')
        performance.measure(
            'Tests completed in',
            'test-run-start',
            'test-run-ok'
        )
        process.exit(0)
    },
    (failure) => {
        console.dir(failure, { depth: null })
        performance.mark('test-run-ko')
        performance.measure('Tests failed in', 'test-run-start', 'test-run-ko')
        process.exit(1)
    }
)
