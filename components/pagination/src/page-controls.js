import { Button } from '@dhis2-ui/button'
import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import React from 'react'

// TODO: ui-icons
function ChevronRight({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
ChevronRight.propTypes = {
    className: propTypes.string,
}

function ChevronLeft({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
ChevronLeft.propTypes = {
    className: propTypes.string,
}

// TODO: i18n translate
const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

const PageControls = ({
    dataTest,
    onClick,
    nextPageText,
    page,
    pageCount,
    previousPageText,
}) => (
    <div data-test={`${dataTest}-pagecontrols`}>
        <Button
            secondary
            className="button-previous"
            small
            disabled={page === 1}
            onClick={() => onClick(page - 1)}
            dataTest={`${dataTest}-page-previous`}
        >
            <ChevronLeft />
            {translate(previousPageText)}
        </Button>
        <Button
            secondary
            className="button-next"
            small
            disabled={page === pageCount}
            onClick={() => onClick(page + 1)}
            dataTest={`${dataTest}-page-next`}
        >
            {translate(nextPageText)}
            <ChevronRight />
        </Button>
        <style jsx>{`
            div {
                display: flex;
            }
            div :global(.button-previous) {
                height: 32px;
                padding-left: 0;
            }
            div :global(.button-next) {
                height: 32px;
                padding-right: 0;
                margin-left: ${spacers.dp4};
            }
        `}</style>
    </div>
)

PageControls.propTypes = {
    dataTest: propTypes.string.isRequired,
    nextPageText: propTypes.oneOfType([propTypes.string, propTypes.func])
        .isRequired,
    page: propTypes.number.isRequired,
    pageCount: propTypes.number.isRequired,
    previousPageText: propTypes.oneOfType([propTypes.string, propTypes.func])
        .isRequired,
    onClick: propTypes.func.isRequired,
}

export { PageControls }
