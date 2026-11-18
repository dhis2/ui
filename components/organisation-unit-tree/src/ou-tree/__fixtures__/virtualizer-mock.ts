export const measureElement = jest.fn()
export const scrollToIndex = jest.fn()
export const useVirtualizer = jest.fn(
    (options: {
        count: number
        getItemKey?: (index: number) => string | number
    }) => ({
        getVirtualItems: () =>
            Array.from({ length: options.count }, (_, index) => ({
                index,
                start: index * 24,
                size: 24,
                key: options.getItemKey ? options.getItemKey(index) : index,
            })),
        getTotalSize: () => options.count * 24,
        range:
            options.count > 0
                ? { startIndex: 0, endIndex: options.count - 1 }
                : null,
        measureElement,
        scrollToIndex,
    })
)
