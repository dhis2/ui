import { colors } from '@dhis2/ui-constants'
import React from 'react'

const BackNavigationIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.5 4H5.31213L1.17075 7.62371C1.06224 7.71866 1 7.85582 1 8C1 8.14418 1.06224 8.28134 1.17075 8.37629L5.31213 12H12.5C13.3284 12 14 11.3284 14 10.5V5.5C14 4.67157 13.3284 4 12.5 4ZM2.2593 8L5.68787 5H12.5C12.7761 5 13 5.22386 13 5.5V10.5C13 10.7761 12.7761 11 12.5 11H5.68787L2.2593 8ZM10.6464 10.3536L8.99998 8.70714L7.35353 10.3536L6.64642 9.64648L8.29287 8.00004L6.64642 6.35359L7.35353 5.64648L8.99998 7.29293L10.6464 5.64648L11.3535 6.35359L9.70708 8.00004L11.3535 9.64648L10.6464 10.3536Z"
            fill={colors.grey700}
        />
    </svg>
)

const CloseKeyIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 5H5V6H2V7H5V8H2V10H5V11H1V5ZM11 5H15V6H12V10H15V11H11V5ZM10 5H6V8H9V10H6V11H10V7H7V6H10V5Z"
            fill={colors.grey700}
        />
    </svg>
)

const MultiDirectionNavigationIcon = () => (
    <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.5 0.292847L10.3536 3.1464L9.64645 3.85351L8 2.20706V6H7V2.20706L5.35355 3.85351L4.64645 3.1464L7.5 0.292847ZM12.7929 7H9V8H12.7929L11.1464 9.64648L11.8536 10.3536L14.7071 7.50004L11.8536 4.64648L11.1464 5.35359L12.7929 7ZM8 9L8 12.7929L9.64645 11.1465L10.3536 11.8536L7.5 14.7072L4.64645 11.8536L5.35355 11.1465L7 12.7929L7 9H8ZM2.20714 8L6 8L6 7L2.20707 7L3.85355 5.35352L3.14645 4.64641L0.292892 7.49996L3.14645 10.3535L3.85355 9.64641L2.20714 8Z"
            fill={colors.grey700}
        />
    </svg>
)

const SelectKeyIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 5H11V9H4.70716L6.85357 6.85359L6.14646 6.14648L2.79291 9.50004L6.14646 12.8536L6.85357 12.1465L4.70708 10H12V4H8V5Z"
            fill={colors.grey700}
        />
    </svg>
)

const VerticalNavigationIcon = () => (
    <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.49998 0.292847L10.3535 3.1464L9.64642 3.85351L7.99998 2.20706V6H6.99998V2.20706L5.35353 3.85351L4.64642 3.1464L7.49998 0.292847ZM7.99998 12.7929L7.99998 9H6.99998L6.99998 12.7929L5.35353 11.1465L4.64643 11.8536L7.49998 14.7072L10.3535 11.8536L9.64642 11.1465L7.99998 12.7929Z"
            fill={colors.grey700}
        />
    </svg>
)

export {
    BackNavigationIcon,
    CloseKeyIcon,
    MultiDirectionNavigationIcon,
    SelectKeyIcon,
    VerticalNavigationIcon,
}
