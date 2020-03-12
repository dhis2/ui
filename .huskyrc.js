const { config } = require('@dhis2/cli-style')
const husky = require(config.husky)

const tasks = arr => arr.join(' && ')

module.exports = {
    hooks: {
        ...husky.hooks,
        'pre-commit': tasks([
            'd2-style js check --staged',
            'd2-style text check --staged',
        ]),
    },
}
