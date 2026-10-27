import i18n from '@dhis2/d2-i18n'
import { colors, theme } from '@dhis2/ui-constants'
import { IconSync16 } from '@dhis2/ui-icons'
import React from 'react'

export interface OuTreeRetryButtonProps {
    onRetry: () => void
    dataTest?: string
}

export const OuTreeRetryButton = ({
    onRetry,
    dataTest,
}: OuTreeRetryButtonProps) => (
    <button
        type="button"
        aria-label={i18n.t('Retry')}
        data-test={dataTest}
        onClick={onRetry}
    >
        <IconSync16 color={theme.error} />
        <style jsx>{`
            button {
                width: 24px;
                height: 24px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                background: none;
                padding: 0;
                cursor: pointer;
                border-radius: 3px;
            }
            button:hover {
                background: ${colors.grey100};
            }
        `}</style>
    </button>
)
