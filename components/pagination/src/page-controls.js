import { Button } from '@dhis2-ui/button'
import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import { IconChevronLeft16, IconChevronRight16 } from '@dhis2/ui-icons'
import React from 'react'

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
            <IconChevronLeft16 />
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
            <IconChevronRight16 />
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
