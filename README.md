# ui-widgets

![DHIS2](https://github.com/dhis2/ui-widgets/workflows/DHIS2/badge.svg)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[Online docs and demos (latest master
build)](https://ui-widgets.dhis2.nu)**

## Testing

Testing is done with cypress & cucumber.

-   Run `yarn cypress:run`<br />
    This will run cypress and exit with either 0 or 1

-   Run `yarn cypress:open`<br />
    This will open the cypress gui, which is useful for writing tests

### Recording videos and taking screenshots

When running `yarn cypress:run`, by default no video is recorded and no
screenshot will be taken.

-   Recording videos can be enabled by supplying the
    `CYPRESS_VIDEO=true` env var.
-   Taking screenshots can be enabled by supplying the
    `CYPRESS_SCREENSHOT=true` env var.

### Storybook stories for testing

Sometimes it's required to add stateful stories to test certain behavior.
That's why you can add files with the following file name format: `*.stories.testing.js`
These stories will not be used when generating the docs storybook and can
contain more sophisticated scenarios for testing.
