import { Button } from '@dhis2-ui/button'
import { spacers } from '@dhis2/ui-constants'
import { IconChevronLeft16, IconChevronRight16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

const PageControls = ({
    dataTest,
    isNextDisabled,
    isPreviousDisabled,
    nextPageText,
    page,
    previousPageText,
    onClick,
}) => (
    <div data-test={`${dataTest}-pagecontrols`}>
        <Button
            secondary
            className="button-previous"
            small
            disabled={isPreviousDisabled}
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
            disabled={isNextDisabled}
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
    dataTest: PropTypes.string.isRequired,
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    page: PropTypes.number.isRequired,
    previousPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    onClick: PropTypes.func.isRequired,
    isNextDisabled: PropTypes.bool,
    isPreviousDisabled: PropTypes.bool,
}

export { PageControls }
