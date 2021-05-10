export const extractOptionFromElement = element => {
    const $element = Cypress.$(element)

    return {
        label: $element.text(),
        value: $element.data('value'),
    }
}
