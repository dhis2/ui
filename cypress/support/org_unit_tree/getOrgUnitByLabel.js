const getOrgUnitByLabel = label => {
    return cy
        .get(
            `[data-test="dhis2-uiwidgets-orgunittree-node-label"]:contains("${label}")`,
            { log: true }
        )
        .parents('[data-test="dhis2-uiwidgets-orgunittree-node"]', {
            log: false,
        })
        .first()
}

Cypress.Commands.add('getOrgUnitByLabel', getOrgUnitByLabel)
