import { colors, spacers } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    .container {
        display: flex;
        align-items: center;
        justify-content: center; // new
        background-color: #10436a;
        flex-shrink: 0; // ?
        color: ${colors.grey050};
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    }

    .container.badge {
        margin-right: ${spacers.dp8};
        padding: 6px;
        border-radius: 5px;
        font-size: 13px;
    }

    .container.bar {
        display: none;
        padding: 0px ${spacers.dp4};
        min-height: 24px;
        font-size: 13px;
    }

    @media (max-width: 480px) {
        .container.badge {
            display: none;
        }

        .container.bar {
            display: flex;
        }
    }

    .unselectable {
        cursor: default;
        user-select: none;
    }

    .info {
        margin-right: ${spacers.dp12};
    }

    .info-dense {
        margin-left: ${spacers.dp12};
        font-size: 12px;
    }

    .icon {
        width: 8px;
        min-width: 8px;
        height: 8px;
        border-radius: 8px;
        margin-right: ${spacers.dp4};
    }

    .icon.online {
        background-color: ${colors.teal400};
    }

    .icon.offline {
        background-color: transparent;
        border: 1px solid ${colors.yellow300};
    }

    .icon.reconnecting {
        background: ${colors.grey300};
        -webkit-animation: fadeinout 2s linear infinite;
        animation: fadeinout 2s linear infinite;
        opacity: 0;
    }

    @-webkit-keyframes fadeinout {
        50% {
            opacity: 1;
        }
    }

    @keyframes fadeinout {
        50% {
            opacity: 1;
        }
    }

    .label,
    .info {
        letter-spacing: 0.1px;
    }
`
