# Troubleshooting

## Encountering z-index issues?

To ensure that components are stacked on top of each other correctly, a Layer component is used which leverages a React context. If an application is using multiple instances of `@dhis2/ui-core`, it will end up using multiple instances of this context as well. As a result components will not be stacked on top of each other correctly.

To prevent this issue, make sure that the app and its dependencies are using compatible version ranges of `@dhis2/ui`, so `yarn` is able to deduplicate these versions. You can assess if this is in fact the case by running `yarn why @dhis2/ui-core`. See the [yarn docs](https://classic.yarnpkg.com/en/docs/cli/why/) for more information.
