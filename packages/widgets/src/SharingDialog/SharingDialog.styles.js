import css from 'styled-jsx/css'

import { colors } from '@dhis2/ui-constants'

export const shareBlockStyles = css`
  .share-block {
    background-color: ${colors.grey100};
    padding: 8px 16px;
    border-radius: 5px;
  }

  .sharing-inputs {
    display: flex;
    width: 100%;
  }

  .select-wrap {
    width: 172px;
  }
`

export const sharingListStyles = css`
  table {
    width: 100%;
  }
`

export const sharingListItemStyles = css`
  td {
    border-bottom: 1px solid ${colors.grey300};
  }

  .icon {
    width: 56px;
    text-align: center;
  }

  .details {
    padding: 8px 0px;
  }

  p.share-entity {
    font-size: 16px;
    margin-bottom: 4px;
    margin-top: 0px;
  }

  p.share-context {
    font-size: 14px;
    color: ${colors.grey700};
    margin-top: 4px;
    margin-bottom: 8px;
  }

  td.share-delete {
      width: 32px;
  }
  td.share-delete > div {
      cursor: pointer;
  }

  span.heavy {
    font-weight: 600;
  }
`

export const accessSelectStyles = css`
  .share-select {
      width: 150px;
  }
`