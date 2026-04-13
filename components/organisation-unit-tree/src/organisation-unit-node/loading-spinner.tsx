import { CircularLoader } from '@dhis2-ui/loader'
import React from 'react'
import css from 'styled-jsx/css'

const loadingSpinnerStyles = css.resolve`
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
