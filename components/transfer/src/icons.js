import { colors, theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'

const centerButtonStyles = css`
    svg {
        min-width: 20px;
    }
    div.centerButton:dir(rtl) {
        transform: rotate(180deg) translateX(4px);
    }
`

export const IconAddAll = ({ dataTest, disabled }) => (
    <div className="centerButton">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            data-test={dataTest}
            fill={disabled ? theme.disabled : colors.grey800}
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
        </svg>
        <style jsx>{centerButtonStyles}</style>
    </div>
)

IconAddAll.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const IconAddIndividual = ({ dataTest, disabled }) => (
    <div className="centerButton">
        <svg
            fill={disabled ? theme.disabled : colors.grey800}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            data-test={dataTest}
        >
            <polygon points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8" />
        </svg>
        <style jsx>{centerButtonStyles}</style>
    </div>
)

IconAddIndividual.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const IconRemoveAll = ({ dataTest, disabled }) => (
    <div className="centerButton">
        <svg
            fill={disabled ? theme.disabled : colors.grey800}
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
        </svg>
        <style jsx>{centerButtonStyles}</style>
    </div>
)

IconRemoveAll.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const IconRemoveIndividual = ({ dataTest, disabled }) => (
    <div className="centerButton">
        <svg
            fill={disabled ? theme.disabled : colors.grey800}
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
        </svg>
        <style jsx>{centerButtonStyles}</style>
    </div>
)

IconRemoveIndividual.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const IconMoveDown = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? colors.grey500 : colors.grey800}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <path d="M13.5303 8.53027L12.4697 7.46973L8.75 11.1895V2H7.25V11.1895L3.53027 7.46973L2.46973 8.53027L8 14.0605L13.5303 8.53027Z" />
    </svg>
)

IconMoveDown.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const IconMoveUp = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? colors.grey500 : colors.grey800}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <path d="M13.5303 7.46973L12.4697 8.53027L8.75 4.81055V14H7.25V4.81055L3.53027 8.53027L2.46973 7.46973L8 1.93945L13.5303 7.46973Z" />
    </svg>
)

IconMoveUp.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const IconMoveToTop = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? colors.grey500 : colors.grey800}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <path d="M13.5303 10.4697L12.4697 11.5303L8.75 7.81055V14H7.25V7.81055L3.53027 11.5303L2.46973 10.4697L8 4.93945L13.5303 10.4697ZM13.5303 6.46973L12.4697 7.53027L8 3.06055L3.53027 7.53027L2.46973 6.46973L8 0.939453L13.5303 6.46973Z" />
    </svg>
)

IconMoveToTop.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const IconMoveToBottom = ({ dataTest, disabled }) => (
    <svg
        fill={disabled ? colors.grey500 : colors.grey800}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={dataTest}
    >
        <path d="M13.5303 5.53027L12.4697 4.46973L8.75 8.18945V2H7.25V8.18945L3.53027 4.46973L2.46973 5.53027L8 11.0605L13.5303 5.53027ZM13.5303 9.53027L12.4697 8.46973L8 12.9395L3.53027 8.46973L2.46973 9.53027L8 15.0605L13.5303 9.53027Z" />
    </svg>
)

IconMoveToBottom.propTypes = {
    dataTest: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}
