Cypress.on('uncaught:exception', (err) => {
    /* This prevents a benign error:
     *   This error means that ResizeObserver was not able to deliver all
     *   observations within a single animation frame. It is benign (your site
     *   will not break).
     *
     * Source: https://stackoverflow.com/a/50387233/1319140
     */
    const errMsg = err.toString()
    if (
        errMsg.match(/ResizeObserver loop limit exceeded/) ||
        errMsg.match(
            /ResizeObserver loop completed with undelivered notifications/
        )
    ) {
        return false
    }
})
