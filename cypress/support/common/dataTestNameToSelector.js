/**
 * @param {string} dataTestName
 * @param {string} [prefix] - Default to "dhis2-uicore"
 * @returns {string}
 */
export const dataTestNameToSelector = (
    dataTestName,
    prefix = 'dhis2-uicore'
) => {
    const dataTestId = prefix ? `${prefix}-${dataTestName}` : dataTestName
    return `[data-test="${dataTestId}"]`
}
