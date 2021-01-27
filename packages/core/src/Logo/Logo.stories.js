import React from 'react'
import { Logo, LogoWhite, LogoIcon, LogoIconWhite } from './Logo.js'

const Wrapper = fn => <div style={{ width: '358px' }}>{fn()}</div>

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => (
    <div style={{ backgroundColor: '#276696' }}>{children}</div>
)

export default {
    title: 'Logo',
    component: Logo,
    decorators: [Wrapper],
}

export const _Logo = () => <Logo />

export const _LogoWhite = () => (
    <Background>
        <LogoWhite />
    </Background>
)

export const _LogoIcon = () => <LogoIcon />

export const _LogoIconWhite = () => (
    <Background>
        <LogoIconWhite />
    </Background>
)
