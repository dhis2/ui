import css from 'styled-jsx/css'

export const topbarLayoutStyles = css.resolve`
    .topbarLayoutContainer {
        display: flex;
        flex-direction: column;
    }
`

export const topbarStyles = css.resolve`
    .topbarContainer {
        width: 100%;
        min-height: 46px;
        height: auto;
        padding: 8px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        overflow: hidden;

        border-bottom: solid 1px #e0e2e4;
    }
`
