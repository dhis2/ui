/** Resolves after `ms` milliseconds; at once when `ms` is 0. */
export const wait = (ms: number) =>
    new Promise<void>((resolve) =>
        ms > 0 ? setTimeout(resolve, ms) : resolve()
    )
