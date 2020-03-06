Cypress.Commands.add('getPositionsBySelectors', (...elements) => {
    const promise = cy.wrap([], { log: false })

    for (const element of elements) {
        promise.then(arr =>
            cy
                .get(element)
                .then(jQueryInstance =>
                    cy.wrap([...arr, jQueryInstance[0].getBoundingClientRect()])
                )
        )
    }

    return promise
})
