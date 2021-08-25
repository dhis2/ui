import { colors, spacers } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    .container {
        display: flex;
        align-items: center;
        justify-content: center; // new
        background-color: #104167;
        flex-shrink: 0; // ?
        color: ${colors.grey100};
    }

    .container.desktop {
        margin-right: ${spacers.dp24};
        padding: ${spacers.dp8};
        border-radius: 5px;
        font-size: 14px;
    }

    .container.mobile {
        display: none;
        padding: 0px ${spacers.dp4};
        min-height: 24px;
        font-size: 13px;
    }

    @media (max-width: 480px) {
        .container.desktop {
            display: none;
        }

        .container.mobile {
            display: flex;
        }
    }

    .info {
        margin-right: ${spacers.dp16};
    }

    .info-mobile {
        margin-left: ${spacers.dp12};
        font-size: 12px;
    }

    .icon {
        width: 8px;
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
        width: 7px;
        height: 7px;
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

    .label {
        letter-spacing: 0.5px;
    }
`
