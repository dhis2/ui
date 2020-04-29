import React from 'react'
import css from 'styled-jsx/css'
import propTypes from '@dhis2/prop-types'
import { theme } from '../theme.js'

const centerButtonStyles = css`
    svg {
        min-width: 20px;
    }
`

export const IconAddAll = ({ dataTest, disabled }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
        fill={disabled ? theme.disabled : '#404B5A'}
    >
        <g fillRule="evenodd">
            <polygon
                fillRule="nonzero"
                points="6 2 4.94 3.06 9.13 7.25 0 7.25 0 8.75 9.13 8.75 4.94 12.94 6 14 12 8"
            />

            <polygon
                fillRule="nonzero"
                points="10 2 8.94 3.06 13.13 7.25 13.9 8 13.13 8.75 8.94 12.94 10 14 16 8"
            />
        </g>

        <style jsx>{centerButtonStyles}</style>
    </svg>
)

IconAddAll.propTypes = {
    dataTest: propTypes.string.isRequired,
    disabled: propTypes.bool,
}

export const IconAddIndividual = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? theme.disabled : '#404B5A'}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <polygon points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8" />

        <style jsx>{centerButtonStyles}</style>
    </svg>
)

IconAddIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
    disabled: propTypes.bool,
}

export const IconRemoveAll = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? theme.disabled : '#404B5A'}
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        data-test={dataTest}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fillRule="evenodd">
            <polygon
                fillRule="nonzero"
                points="10 2 8.94 3.06 13.13 7.25 4 7.25 4 8.75 13.13 8.75 8.94 12.94 10 14 16 8"
                transform="matrix(-1 0 0 1 20 0)"
            />

            <polygon
                fillRule="nonzero"
                points="1.06 2 0 3.06 4.19 7.25 4.96 8 4.19 8.75 0 12.94 1.06 14 7.06 8"
                transform="matrix(-1 0 0 1 7.06 0)"
            />
        </g>

        <style jsx>{centerButtonStyles}</style>
    </svg>
)

IconRemoveAll.propTypes = {
    dataTest: propTypes.string.isRequired,
    disabled: propTypes.bool,
}

export const IconRemoveIndividual = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? theme.disabled : '#404B5A'}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <polygon
            points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8"
            transform="matrix(-1 0 0 1 16 0)"
        />

        <style jsx>{centerButtonStyles}</style>
    </svg>
)

IconRemoveIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
    disabled: propTypes.bool,
}

export const IconMoveDown = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? theme.disabled : '#404B5A'}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <polygon
            points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8"
            transform="matrix(0 1 1 0 0 0)"
        />
    </svg>
)

IconMoveDown.propTypes = {
    dataTest: propTypes.string.isRequired,
    disabled: propTypes.bool,
}

export const IconMoveUp = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? theme.disabled : '#404B5A'}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <polygon
            points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8"
            transform="rotate(-90 8 8)"
        />
    </svg>
)

IconMoveUp.propTypes = {
    dataTest: propTypes.string.isRequired,
    disabled: propTypes.bool,
}
