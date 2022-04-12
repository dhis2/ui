export const shouldDisablePreviousPage = ({
    page,
    isNavigatingToPage,
    isChangingPageSize,
}) => page === 1 || isNavigatingToPage === 1 || isChangingPageSize
