import css from 'styled-jsx/css'

import { colors } from '@dhis2/ui-constants'

export const sharingCommonStyles = css`
    .sharing-subtitle {
        color: ${colors.grey700};
        font-size: 15px;
        font-weight: 500;
        margin: 0;
    }
`

export const shareBlockStyles = css`
    .share-block {
        background-color: ${colors.grey100};
        margin-bottom: 31px;
        padding: 16px;
        border-radius: 5px;
    }

    .sharing-inputs {
        display: flex;
        align-items: flex-end;
        width: 100%;
    }

    .select-wrap {
        width: 172px;
    }
`

export const sharingListItemStyles = css`
    .icon {
        width: 56px;
        text-align: center;
    }

    div.share-details {
        display: flex;
    }

    p.share-entity {
        font-size: 16px;
        font-weight: 500;
        color: ${colors.grey900};
        margin-bottom: 4px;
        margin-top: 0px;
    }

    p.share-context {
        font-size: 14px;
        color: ${colors.grey700};
        margin-top: 4px;
        margin-bottom: 8px;
    }
`

export const accessSelectStyles = css`
    .share-select {
        width: 150px;
    }
`
