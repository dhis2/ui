import css from 'styled-jsx/css'

export const styles = css`
    span.container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    span.top {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    span.content {
        display: flex;
        align-items: center;
        min-height: 24px;
    }
`

export const resolvedTableHeaderCss = css.resolve`
    :global(thead) > :global(tr) > th.DataTableColumnHeader {
        padding-top: 3px;
        padding-bottom: 3px;
    }
    :global(thead) > :global(tr) > th.DataTableColumnHeader.large {
        padding-top: 8px;
        padding-bottom: 8px;
    }
`
