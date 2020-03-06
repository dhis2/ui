import React from 'react'
import { storiesOf } from '@storybook/react'
import { Logo, LogoWhite, LogoIcon, LogoIconWhite } from '../index.js'

const Wrapper = fn => <div style={{ width: '358px' }}>{fn()}</div>

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => (
    <div style={{ backgroundColor: '#276696' }}>{children}</div>
)

storiesOf('Logo', module)
    .addDecorator(Wrapper)

    .add('Logo', () => <Logo />)

    .add('Logo White', () => (
        <Background>
            <LogoWhite />
        </Background>
    ))

    .add('Logo Icon', () => <LogoIcon />)

    .add('Logo Icon White', () => (
        <Background>
            <LogoIconWhite />
        </Background>
    ))
