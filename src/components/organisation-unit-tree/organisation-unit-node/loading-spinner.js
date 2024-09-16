import { CircularLoader } from '../../loader/index.js'
import React from 'react'
import { resolve } from 'styled-jsx/css'

const loadingSpinnerStyles = resolve`
    .extrasmall {
        display: block;
        margin: 3px 0;
    }
`

export const LoadingSpinner = () => (
    <div>
        <CircularLoader extrasmall className={loadingSpinnerStyles.className} />
        <style>{loadingSpinnerStyles.styles}</style>
        <style jsx>{`
            div {
                width: 24px;
            }
        `}</style>
    </div>
)
