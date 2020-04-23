import css from 'styled-jsx/css'

export const layoutStyles = css`
    .layoutContainer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`

export const layoutContentStyles = css.resolve`
    .layoutContentContainer {
        flex: 0 1 100%;
        position: relative;

        overflow: auto;
        padding: 16px;

        background-color: #f4f6f8;
    }
`

export const layoutOverlayStyles = css.resolve`
    .layoutOverlayContainer {
        padding: 16px;
        overflow: auto;
        background-color: #ffffff;

        position: relative;
    }
`
