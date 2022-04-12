export const shouldDisableNextPage = ({
    page,
    pageCount,
    isLastPage,
    isNavigatingToPage,
    isChangingPageSize,
}) => {
    if (isChangingPageSize) {
        // Always disable when changing page size because it is
        // hard to make valid assumptions about future pager
        return true
    } else if (
        typeof pageCount === 'undefined' &&
        typeof isLastPage === 'boolean'
    ) {
        // Disable forward pagination for simple pagers when a forward
        // pagination is pending because any next page could be the
        // last one. And also once the last page has been reached
        const isNavigatingForward =
            typeof isNavigatingToPage === 'number' && isNavigatingToPage > page
        return isNavigatingForward || isLastPage
    } else {
        // Disable forward pagination for full pagers when a pagination
        // to the last page is pending and also once the last page has
        // been reached
        const nextPage = isNavigatingToPage || page
        return nextPage === pageCount
    }
}
