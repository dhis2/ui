# ui-layouts

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Components Available

- `Layout` (internal)
- `LayoutContent` (internal)
- `LayoutOverlay` (internal)
- `SidebarContainer`
- `Sidebar`
- `TopbarContainer`
- `Topbar`

## Example Usage

Here's a simple full application layout example including both Topbar and Sidebar layouts:

```jsx
<TopbarLayout>
    <Topbar>
        <div
            style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridGap: 12,
                alignItems: 'center',
            }}
        >
            <div style={{ width: 32 }}>
                <LogoIcon />
            </div>
            <strong>Greetings from DHIS2!</strong>
        </div>
        <Button primary>Login</Button>
    </Topbar>
    <SidebarLayout>
        <Sidebar>
            <p>
                Now let's take off the training wheels and get rid of
                those content block outlines
            </p>
        </Sidebar>
        <div>
            <h1>So long, and thanks for all the fish!</h1>
            <p>
                That's all for now, go build DHIS2 apps with these
                stunningly simple Layouts!
            </p>
        </div>
    </SidebarLayout>
</TopbarLayout>
```