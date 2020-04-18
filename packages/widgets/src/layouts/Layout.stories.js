import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { TopbarLayout } from './TopbarLayout/TopbarLayout.js'
import { Topbar } from './TopbarLayout/Topbar.js'
import { SidebarLayout } from './SidebarLayout/SidebarLayout.js'
import { Sidebar } from './SidebarLayout/Sidebar.js'

import { LogoIcon } from '../'
import Button from '../Button/Button.js'

const AppsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        height="16px"
        viewBox="0 0 48 48"
    >
        <path d="M8 16h8V8H8v8zm12 24h8v-8h-8v8zM8 40h8v-8H8v8zm0-12h8v-8H8v8zm12 0h8v-8h-8v8zM32 8v8h8V8h-8zm-12 8h8V8h-8v8zm12 12h8v-8h-8v8zm0 12h8v-8h-8v8z" />
        <path d="M0 0h48v48H0z" fill="none" />
    </svg>
)

// TODO: height: 100% is too big when sibling layout panels have overflow.
// Using a <Layout /> component for absolute positioning would work for "fill" needs, otherwise height: 100% shouldn't be necessary.

const DemoContentBox = ({ filled, children, outlined = true }) => (
    <div
        style={
            outlined
                ? {
                      border: '1px dashed green',
                      width: '100%',
                      minHeight: '100%',
                  }
                : undefined
        }
    >
        {children}
        {filled && (
            <>
                <h1>Hello World!</h1>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
                    <React.Fragment key={idx}>
                        <h3>Hello there!</h3>
                        <p>
                            This is a paragraph of lots and lots of text, in
                            order to demonstrate overflow behavior and other
                            cool things.
                        </p>
                    </React.Fragment>
                ))}
            </>
        )}
    </div>
)

storiesOf('Component/Layout', module)
    .add('Topbar', () => (
        <TopbarLayout>
            <Topbar>
                <DemoContentBox />
            </Topbar>
            <DemoContentBox />
        </TopbarLayout>
    ))
    .add('Sidebar', () => (
        <SidebarLayout>
            <Sidebar collapseBreakpoint={640}>
                <DemoContentBox />
            </Sidebar>
            <DemoContentBox>
                <h3>Try me!</h3>
                <p>
                    Resize your browser so that this viewport is narrower than
                    640px.
                </p>
                <p>The sidebar will "collapse" out of the way of the content</p>
            </DemoContentBox>
        </SidebarLayout>
    ))
    .add('Sidebar (uncollapsible)', () => (
        <SidebarLayout>
            <Sidebar collapsible={false}>
                <DemoContentBox />
            </Sidebar>
            <DemoContentBox>
                <h3>Try me!</h3>
                <p>
                    Resize your browser so that this viewport is narrower than
                    640px.
                </p>
                <p>
                    Unlike the previouse example, this sidebar will not collapse
                </p>
            </DemoContentBox>
        </SidebarLayout>
    ))
    .add('Sidebar (collapsed)', () => (
        <div style={{ position: 'relative', width: 760, height: '100%' }}>
            <SidebarLayout>
                <Sidebar collapseBreakpoint={800}>
                    <DemoContentBox />
                </Sidebar>
                <DemoContentBox>
                    <h3>Sidebar Breakpoint</h3>
                    <p>
                        Let's artificially constrain the width of the container
                        to 760px.
                    </p>
                    <p>
                        We've also configured a custom{' '}
                        <strong>collapseBreakpoint</strong> at 800px instead of
                        the default 640px
                    </p>
                    <h4>BONUS FEATURE</h4>
                    <p>
                        A Layout can be embedded within any element with{' '}
                        <strong>position: relative</strong> (notably including
                        the Content section of other layouts!) and will adopt
                        that element's size.
                    </p>
                </DemoContentBox>
            </SidebarLayout>
        </div>
    ))
    .add('Sidebar (force-collapsed)', () => (
        <SidebarLayout>
            <Sidebar collapsed>
                <DemoContentBox />
            </Sidebar>
            <DemoContentBox>
                <h3>Try me!</h3>
                <p>Resize your browser so that this viewport is very large.</p>
                <p>This sidebar will be collapsed at any size</p>
            </DemoContentBox>
        </SidebarLayout>
    ))
    .add('Sidebar (manual)', () => {
        const [open, setOpen] = useState(false)
        return (
            <SidebarLayout>
                {open && (
                    <Sidebar collapsible={false}>
                        <DemoContentBox />
                    </Sidebar>
                )}
                <DemoContentBox>
                    <h3>Try me!</h3>
                    <p>Click the button below to manually toggle the sidebar</p>
                    <p>
                        Unlike a standard collapsible sidebar, this one will
                        "push" the main content out of the way
                    </p>
                    <button onClick={() => setOpen(x => !x)}>
                        Toggle sidebar
                    </button>
                </DemoContentBox>
            </SidebarLayout>
        )
    })
    .add('Sidebar (manual collapsed)', () => {
        const [open, setOpen] = useState(false)
        return (
            <SidebarLayout>
                {open && (
                    <Sidebar collapsed={true} toggled={true}>
                        <DemoContentBox>
                            <button onClick={() => setOpen(false)}>
                                Hide sidebar
                            </button>
                        </DemoContentBox>
                    </Sidebar>
                )}
                <DemoContentBox>
                    <h3>Try me!</h3>
                    <p>Click the button below to manually toggle the sidebar</p>
                    <p>
                        In this example, the sidebar will open above the content
                        and obscure it
                    </p>
                    <button disabled={open} onClick={() => setOpen(true)}>
                        Show sidebar
                    </button>
                </DemoContentBox>
            </SidebarLayout>
        )
    })
    .add('Sidebar (overflow)', () => (
        <SidebarLayout>
            <Sidebar>
                <DemoContentBox filled />
            </Sidebar>
            <DemoContentBox>
                <h3>Try me!</h3>
                <p>
                    Resize your browser so that this viewport is{' '}
                    <strong>short</strong> vertically.
                </p>
                <p>
                    The sidebar and the content div are independently scrollable
                </p>
            </DemoContentBox>
        </SidebarLayout>
    ))
    .add('Sidebar (right)', () => (
        <SidebarLayout side="right">
            <Sidebar>
                <DemoContentBox>
                    <h3>Hello, I'm a Right Sidebar!</h3>
                </DemoContentBox>
            </Sidebar>
            <DemoContentBox>
                <h3>Try me!</h3>
                <p>
                    Just like before, here's a Sidebar - but now it's on the
                    right!
                </p>
                <p>
                    It's collapsible too - Resize your browser so that this
                    viewport is narrower than 640px.
                </p>
            </DemoContentBox>
        </SidebarLayout>
    ))
    .add('Sidebar (right, collapsed)', () => (
        <SidebarLayout side="right">
            <Sidebar collapsed>
                <DemoContentBox>
                    <h3>Hello, I'm a Right Sidebar!</h3>
                </DemoContentBox>
            </Sidebar>
            <DemoContentBox>
                <h3>Try me!</h3>
                <p>
                    Here's another sidebar (look for the toggle button over
                    there! &rarr;)
                </p>
                <p>
                    We've set the <strong>collapsed</strong> prop to{' '}
                    <strong>true</strong> here.
                </p>
                <p>
                    This way, our Sidebar will stay collapsed (but toggleable!)
                    until the end of time.
                </p>
            </DemoContentBox>
        </SidebarLayout>
    ))
    .add('Sidebar (right, manual)', () => {
        const [open, setOpen] = useState(false)
        return (
            <SidebarLayout side="right">
                {open && (
                    <Sidebar collapsible={false}>
                        <DemoContentBox>
                            <h3>Hello, I'm a Right Sidebar!</h3>
                        </DemoContentBox>
                    </Sidebar>
                )}
                <DemoContentBox>
                    <h3>Try me!</h3>
                    <p>
                        This is another manual Sidebar - click the button below
                        and watch the content box indicators to your right
                        &rarr;
                    </p>
                    <button onClick={() => setOpen(x => !x)}>
                        Toggle sidebar
                    </button>
                </DemoContentBox>
            </SidebarLayout>
        )
    })
    .add('Composition', () => (
        <TopbarLayout>
            <Topbar>
                <DemoContentBox />
            </Topbar>
            <SidebarLayout>
                <Sidebar>
                    <DemoContentBox />
                </Sidebar>
                <DemoContentBox>
                    <h3>Layout Composition</h3>
                    <p>
                        Layouts are composable - this is a SidebarLayout
                        (&larr;) within a TopbarLayout (&uarr;)
                    </p>
                    <p>
                        Note that the layout will always fill its container
                        layout.
                    </p>
                    <p>
                        Also note that the final content section will always be
                        automatically DHIS2-styled with a background color and
                        some padding - it's ready for some content!
                    </p>
                </DemoContentBox>
            </SidebarLayout>
        </TopbarLayout>
    ))
    .add('Composite (clean)', () => (
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
    ))
    .add('Exagerated Composite (clean)', () => (
        <TopbarLayout>
            <Topbar>
                <div
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'column',
                        gridGap: 8,
                        alignItems: 'center',
                    }}
                >
                    <AppsIcon />
                    <strong>Topbar 1</strong>
                </div>
            </Topbar>
            <SidebarLayout>
                <Sidebar collapsible={false}>
                    <DemoContentBox outlined={false} filled />
                </Sidebar>
                <TopbarLayout>
                    <Topbar>
                        <strong>Topbar 2</strong>
                        <div
                            style={{
                                display: 'grid',
                                gridAutoFlow: 'column',
                                gridGap: 8,
                                alignItems: 'center',
                            }}
                        >
                            <button>Press this at your own risk</button>
                            <button>This is a test</button>
                            <button>...</button>
                        </div>
                    </Topbar>
                    <TopbarLayout>
                        <Topbar>
                            <strong>
                                Please don't ever make a layout like this!
                            </strong>
                            <span>
                                Though it's technically possible, so that's
                                cool...
                            </span>
                        </Topbar>
                        <SidebarLayout side="right">
                            <Sidebar collapsed>
                                <DemoContentBox outlined={false} filled />
                            </Sidebar>
                            <DemoContentBox outlined={false} filled />
                        </SidebarLayout>
                    </TopbarLayout>
                </TopbarLayout>
            </SidebarLayout>
        </TopbarLayout>
    ))
