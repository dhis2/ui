import React from 'react'
import { Logo, LogoWhite, LogoIcon, LogoIconWhite } from './Logo.js'

const description = `
The master DHIS2 logo should be used overall, whenever possible. The master logo is a blue colored icon with black colored dhis2 wordmark.

\`\`\`js
import { Logo, LogoWhite, LogoIcon, LogoIconWhite } from '@dhis2/ui'
\`\`\`
`

const Wrapper = fn => <div style={{ width: '358px' }}>{fn()}</div>

const Background = ({ children }) => (
    <div style={{ backgroundColor: '#276696' }}>{children}</div>
)

export default {
    title: 'Utils/Logo',
    component: Logo,
    decorators: [Wrapper],
    parameters: { docs: { description: { component: description } } },
}

export const _Logo = args => <Logo {...args} />

export const _LogoWhite = args => (
    <Background>
        <LogoWhite {...args} />
    </Background>
)
_LogoWhite.parameters = {
    docs: {
        description: {
            story:
                'When placing the DHIS2 logo on a dark background, the reversed version can be used. The icon and wordmark are white in this version. The reversed logo can be placed on any colored background, but ideally blue would be used to remain consistent with the DHIS2 brand.',
        },
    },
}

export const _LogoIcon = args => <LogoIcon {...args} />
_LogoIcon.parameters = {
    docs: {
        description: {
            story:
                'There are times when it makes sense to use only the DHIS2 icon, such as in headers, toolbars and app icons. There are both blue colored and white colored icons, and these should be used as the main logo is used – blue colored where possible and white colored on darker backgrounds.',
        },
    },
}

export const _LogoIconWhite = args => (
    <Background>
        <LogoIconWhite {...args} />
    </Background>
)
