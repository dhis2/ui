Cypress.Commands.add('getAll', (...elements) => {
    const promise = cy.wrap([], { log: false })

    for (const element of elements) {
        promise.then(arr => cy.get(element).then(got => cy.wrap([...arr, got])))
    }

    return promise
})
