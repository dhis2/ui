// The entry point is a CommonJS shim, so its re-exports are invisible to
// static analysis.
// eslint-disable-next-line import/named
import { addons } from '@storybook/manager-api'
import theme from './theme.js'

addons.setConfig({
    theme: theme,
})
