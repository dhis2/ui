export interface GetItemRangeOptions {
    isLastPage?: boolean
    page: number
    pageLength?: number
    pageSize: number
    total?: number
}

export interface ItemRange {
    firstItem: number
    lastItem: number
}

export const getItemRange = ({
    isLastPage,
    page,
    pageLength,
    pageSize,
    total,
}: GetItemRangeOptions): ItemRange => {
    // page is 1-based
    let firstItem = (page - 1) * pageSize + 1
    let lastItem = firstItem + pageSize - 1

    if (typeof total === 'number') {
        if (total === 0) {
            /*
             * if no items are found, the pager total is 0
             * and the first and last item should be be 0 too
             */
            firstItem = 0
            lastItem = 0
        } else if (lastItem > total) {
            lastItem = total
        }
    }

    if (typeof pageLength === 'number') {
        lastItem = firstItem + pageLength - 1
    }

    if (isLastPage && isNaN(total as number) && isNaN(pageLength as number)) {
        // impossible to accurately determine the last item
        lastItem = NaN
    }

    return { firstItem, lastItem }
}
