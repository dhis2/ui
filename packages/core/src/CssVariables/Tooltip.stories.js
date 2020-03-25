import React from 'react'
import css from 'styled-jsx/css'
import { Tooltip } from '../Tooltip.js'

const noPaddingStyles = css`
    :global(#root) {
        padding: 0;
    }
`

export default { title: 'Tooltip', component: Tooltip }

export const Default = () => (
    <p>
        I am a <Tooltip content="Short content">paragraph</Tooltip> that
        contains a tooltip.
        <style jsx>{noPaddingStyles}</style>
        <style jsx>{`
            p {
                margin-top: 40px;
            }
        `}</style>
    </p>
)

export const FlippedVertically = () => (
    <p>
        I am a <Tooltip content="Short content">paragraph</Tooltip> that
        contains a tooltip.
        <style jsx>{noPaddingStyles}</style>
        <style jsx>{`
            p {
                margin-top: 0;
            }
        `}</style>
    </p>
)

export const AdjustedHorizontalPosition = () => (
    <p>
        I am a{' '}
        <Tooltip content="Longer content will force the tooltip popper to shift">
            paragraph
        </Tooltip>{' '}
        that contains a tooltip.
        <style jsx>{noPaddingStyles}</style>
        <style jsx>{`
            p {
                margin-top: 40px;
            }
        `}</style>
    </p>
)

export const ShiftingPosition = () => (
    <p>
        I am a <Tooltip content="Short content">paragraph</Tooltip> that
        contains a tooltip.
        <style jsx>{noPaddingStyles}</style>
        <style jsx>{`
            p {
                margin: 0;
            }
            :global(html),
            :global(body),
            :global(#root) {
                position: relative;
                height: 50px;
                max-height: 50px;
                overflow: hidden;
            }
        `}</style>
    </p>
)
