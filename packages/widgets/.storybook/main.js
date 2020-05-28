const isTesting = 'STORYBOOK_TESTING' in process.env

module.exports = {
    stories: isTesting
        ? ['../src/__e2e__/**/*.stories.js']
        : ['../src/__demo__/*.stories.js'],

    addons: [
        '@storybook/preset-create-react-app',
        'storybook-addon-jsx/register',
    ],
}
