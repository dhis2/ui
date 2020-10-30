import css from 'styled-jsx/css'

export const sidebarSize = 320 // TODO: Make this configurable?

export const sidebarLayoutStyles = css.resolve`
    .sidebarLayoutContainer {
        display: flex;
    }
    .sidebarSide-left {
        flex-direction: row;
    }
    .sidebarSide-right {
        flex-direction: row-reverse;
    }
`

export const sidebarStyles = css.resolve`
    .sidebarContainer {
        height: 100%;
        width: ${sidebarSize}px;
        min-width: ${sidebarSize}px;

        background-color: #fff;
    }
    .sidebarSide-left {
        border-right: 1px solid #e0e2e4;
        left: 0;
    }
    .sidebarSide-right {
        border-left: 1px solid #e0e2e4;
        right: 0;
    }
    .sidebarContainer.sidebarCollapsed {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;

        z-index: 1;
    }
    .sidebarContainer.sidebarCollapsed.sidebarToggled {
        display: block;
    }
`

export const sidebarToggleStyles = css.resolve`
    .sidebarToggle {
        position: absolute;
        top: 8px;

        width: 20px;
        height: 24px;
        background-color: #fff;
        z-index: 1;

        border: 1px solid #e0e2e4;

        color: #666;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

    .sidebarSide-left {
        border-radius: 0 50% 50% 0;
        border-left: none;
        left: 0;
    }
    .sidebarSide-right {
        border-radius: 50% 0 0 50%;
        border-right: none;
        right: 0;
    }
    .sidebarSide-left::before {
        margin-right: 3px;
    }
    .sidebarSide-right::before {
        margin-left: 3px;
    }

    .sidebarToggle.sidebarSide-left::before,
    .sidebarToggle.sidebarSide-right.sidebarToggled::before {
        content: '>';
    }
    .sidebarToggle.sidebarSide-left.sidebarToggled::before,
    .sidebarToggle.sidebarSide-right::before {
        content: '<';
    }

    .sidebarToggle.sidebarToggled.sidebarSide-left {
        left: calc(${sidebarSize}px - 1px);
    }
    .sidebarToggle.sidebarToggled.sidebarSide-right {
        right: calc(${sidebarSize}px - 1px);
    }
`
