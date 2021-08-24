import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export const sharingCommonStyles = css`
    .sharing-subtitle {
        color: ${colors.grey700};
        font-size: 15px;
        font-weight: 500;
        margin: 0 0 8px 0;
    }
`

export const shareBlockStyles = css`
    .share-block {
        background-color: ${colors.grey100};
        color: ${colors.grey900};
        margin-bottom: 21px;
        padding: 8px 12px;
        border-radius: 5px;
    }

    .sharing-inputs {
        display: flex;
        align-items: flex-end;
        width: 100%;
    }
`

export const sharingListStyles = css`
    .sharing-headers {
        display: flex;
        width: 100%;
        padding: 10px 8px;
        margin: 0 0 8px 0;
        background-color: ${colors.grey200};
        color: ${colors.grey900};
        font-size: 13px;
    }

    .sharing-header-1 {
        flex: 2;
    }

    .sharing-header-2 {
        flex: 1;
    }

    .sharing-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-y: auto;
    }
`

export const sharingListItemStyles = css`
    .sharing-list-item {
        display: flex;
        padding: 4px 8px;
    }

    .share-details-text {
        margin-left: 8px;
    }

    div.share-details {
        display: flex;
        flex: 2;
    }

    p.share-entity {
        font-size: 15px;
        font-weight: 500;
        color: ${colors.grey900};
        margin: 0;
        padding: 0;
    }

    p.share-context {
        font-size: 14px;
        color: ${colors.grey700};
        margin: 6px 0 0 0;
        padding: 0;
    }
`

export const accessSelectStyles = css`
    .share-select {
        flex: 1;
    }
`

export const avatarStyles = css`
    .share-details-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        overflow: hidden;
        border-radius: 50%;
        background-color: ${colors.grey800};
        opacity: 0.8;
    }

    .share-details-avatar p {
        margin-left: 1px;
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
        color: ${colors.grey050};
    }
`

export const dashboardSharingStyles = css`
    .tab-content {
        padding-top: 15px;
    }
`

export const autoShareStyles = css`
    .title {
        font-size: 16px;
        color: ${colors.grey900};
        font-weight: 500;
    }

    .description {
        margin: 8px 0 13px 0;
        font-size: 14px;
        line-height: 19px;
        color: ${colors.grey800};
    }

    .box {
        display: inline-flex;
        margin-bottom: 14px;
        border-radius: 3px;
        padding: 8px 8px 6px 8px;
    }
    .box-text {
        padding-left: 6px;
        font-size: 14px;
        color: ${colors.grey900};
        line-height: 19px;
    }

    .box-info {
        background-color: ${colors.grey200};
    }

    .box-success {
        background-color: ${colors.green100};
    }

    .result-box {
        margin-top: 14px;
    }

    .loading {
        display: flex;
        align-items: center;
        color: ${colors.grey800};
        font-size: 14px;
        line-height: 19px;
    }
`
