import { spacers } from '@dhis2/ui-constants'
import { IconChevronLeft16, IconChevronRight16 } from '@dhis2/ui-icons'
import { Button } from '@dhis2-ui/button'
import React from 'react'

const translate = (
    prop: string | ((interpolationObject?: Record<string, unknown>) => string),
    interpolationObject?: Record<string, unknown>
): string => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

export interface PageControlsProps {
    dataTest: string
    nextPageText:
        | string
        | ((interpolationObject?: Record<string, unknown>) => string)
    page: number
    previousPageText:
        | string
        | ((interpolationObject?: Record<string, unknown>) => string)
    onClick: (page: number) => void
    isNextDisabled?: boolean
    isPreviousDisabled?: boolean
}

const PageControls = ({
    dataTest,
    isNextDisabled,
    isPreviousDisabled,
    nextPageText,
    page,
    previousPageText,
    onClick,
}: PageControlsProps) => (
    <div data-test={`${dataTest}-pagecontrols`}>
        <Button
            secondary
            className="button-previous"
            small
            disabled={isPreviousDisabled}
            onClick={() => onClick(page - 1)}
            dataTest={`${dataTest}-page-previous`}
        >
            <div className="navigator-icon">
                <IconChevronLeft16 />
            </div>
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
            <div className="navigator-icon">
                <IconChevronRight16 />
            </div>
        </Button>
        <style jsx>{`
            div {
                display: flex;
            }
            div :global(.button-previous) {
                height: 32px;
                padding-inline-start: 0;
            }
            div :global(.button-next) {
                height: 32px;
                padding-inline-end: 0;
                margin-inline-start: ${spacers.dp4};
            }
            div .navigator-icon:dir(rtl) {
                transform: rotate(180deg);
            }
        `}</style>
    </div>
)

export { PageControls }
