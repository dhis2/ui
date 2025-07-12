import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import {
    noAccess,
    searchUser,
    userNoAccess,
    searchGroup,
    getGroupWithDataAndMetadataAccess,
    getUserWithDataAndMetadataAccess,
    getAllUsersWithDataAndMetadataAccess,
    groupNoAccess,
    userAllAuthority,
} from '../fixtures/index.js'

/**
 * a sharing dialog that allows adding entities is visible
 */

Given(
    'a sharing dialog that allows adding user and group entities with data sharing is visible',
    () => {
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: noAccess,
        })
        cy.intercept(
            'GET',
            '/api/38/me?fields=id,userGroups%5Bid%5D,authorities',
            {
                body: userAllAuthority,
            }
        )

        cy.visitStory('sharing-dialog', 'data')
        cy.contains('Give access to a user or group').should('be.visible')
        cy.contains('Data access level').should('be.visible')
        cy.contains('Metadata access level').should('be.visible')
    }
)

When('the user selects a new user entity', () => {
    cy.intercept('GET', '/api/38/sharing/search?key=A%20user', {
        body: searchUser,
    })
    cy.get('[placeholder="Search"]').type('A user')
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A user').click()
})

When('the user selects a new group entity', () => {
    cy.intercept('GET', '/api/38/sharing/search?key=A%20group', {
        body: searchGroup,
    })
    cy.get('[placeholder="Search"]').type('A group')
    cy.contains('[data-test="dhis2-uicore-menuitem"]', 'A group').click()
})

When('the user chooses view only data access', () => {
    cy.contains('Data access level')
        .parent()
        .within(() => {
            cy.contains('Choose a level').click()
        })
    cy.contains(
        '[data-test="dhis2-uicore-singleselectoption"]',
        'View only'
    ).click()
})

When('the user chooses view only metadata access', () => {
    cy.contains('Metadata access level')
        .parent()
        .within(() => {
            cy.contains('Choose a level').click()
        })
    cy.contains(
        '[data-test="dhis2-uicore-singleselectoption"]',
        'View only'
    ).click()
})

When(
    'the user clicks Give access button to give target user {string} data access and {string} metadata access',
    (dataaccess, metadataaccess) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: getUserWithDataAndMetadataAccess(
                        metadataaccess,
                        dataaccess
                    )?.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )

        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getUserWithDataAndMetadataAccess(metadataaccess, dataaccess),
        })

        cy.contains('button', 'Give access').click()
    }
)

When(
    'the user clicks Give access button to give target group {string} data access and {string} metadata access',
    (dataaccess, metadataaccess) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: getGroupWithDataAndMetadataAccess(
                        metadataaccess,
                        dataaccess
                    )?.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )

        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getGroupWithDataAndMetadataAccess(metadataaccess, dataaccess),
        })

        cy.contains('button', 'Give access').click()
    }
)

Then('the user should be added to the access list', () => {
    cy.contains('.wrapper', 'A user').should('be.visible').as('user-item')

    cy.get('@user-item').contains('user-1').should('be.visible')
})

Then('the group should be added to the access list', () => {
    cy.contains('.wrapper', 'A group').should('be.visible').as('group-item')

    cy.get('@group-item').contains('User group').should('be.visible')
})

Then('the user should have {string} metadata access', (metadataString) => {
    cy.contains('.wrapper', 'A user').as('user-item')

    cy.get('@user-item').within(() => {
        cy.contains(
            '[data-test="dhis2-uicore-singleselect"]',
            'Metadata'
        ).within(() => {
            cy.contains(metadataString).should('be.visible')
        })
    })
})

Then('the group should have {string} metadata access', (metadataString) => {
    cy.contains('.wrapper', 'A group').as('group-item')

    cy.get('@group-item').within(() => {
        cy.contains(
            '[data-test="dhis2-uicore-singleselect"]',
            'Metadata'
        ).within(() => {
            cy.contains(metadataString).should('be.visible')
        })
    })
})

Then('the user should have {string} data access', (dataString) => {
    cy.contains('.wrapper', 'A user').as('user-item')

    cy.get('@user-item').within(() => {
        cy.contains('[data-test="dhis2-uicore-singleselect"]', 'Data').within(
            () => {
                cy.contains(dataString).should('be.visible')
            }
        )
    })
})

Then('the group should have {string} data access', (dataString) => {
    cy.contains('.wrapper', 'A group').as('group-item')

    cy.get('@group-item').within(() => {
        cy.contains('[data-test="dhis2-uicore-singleselect"]', 'Data').within(
            () => {
                cy.contains(dataString).should('be.visible')
            }
        )
    })
})

Then('the autocomplete input should be cleared', () => {
    cy.get('form input').invoke('val').should('be.empty')
})

Given(
    'a sharing dialog with user item with {string} data access and {string} metadata access',
    (datalevel, metadatalevel) => {
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getUserWithDataAndMetadataAccess(metadatalevel, datalevel),
        })
        cy.intercept(
            'GET',
            '/api/38/me?fields=id,userGroups%5Bid%5D,authorities',
            {
                body: userAllAuthority,
            }
        )
        cy.visitStory('sharing-dialog', 'data')
        cy.contains('Sharing and access').should('be.visible')

        cy.contains('.details-text', 'A user')
            .should('be.visible')
            .contains('user-1')
            .should('be.visible')
            .closest('.wrapper')
            .as('user-list-item')

        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(datalevel).should('be.visible')
            })
        })

        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains(metadatalevel).should('be.visible')
            })
        })
    }
)

Given(
    'a sharing dialog with group item with {string} data access and {string} metadata access',
    (datalevel, metadatalevel) => {
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getGroupWithDataAndMetadataAccess(metadatalevel, datalevel),
        })
        cy.intercept(
            'GET',
            '/api/38/me?fields=id,userGroups%5Bid%5D,authorities',
            {
                body: userAllAuthority,
            }
        )
        cy.visitStory('sharing-dialog', 'data')
        cy.contains('Sharing and access').should('be.visible')

        cy.contains('.details-text', 'A group')
            .should('be.visible')
            .contains('User group')
            .should('be.visible')
            .closest('.wrapper')
            .as('group-list-item')

        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(datalevel).should('be.visible')
            })
        })

        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains(metadatalevel).should('be.visible')
            })
        })
    }
)

Given(
    'a sharing dialog with all users item with {string} data access and {string} metadata access',
    (datalevel, metadatalevel) => {
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getAllUsersWithDataAndMetadataAccess(
                metadatalevel,
                datalevel
            ),
        })
        cy.intercept(
            'GET',
            '/api/38/me?fields=id,userGroups%5Bid%5D,authorities',
            {
                body: userAllAuthority,
            }
        )
        cy.visitStory('sharing-dialog', 'data')
        cy.contains('Sharing and access').should('be.visible')

        cy.contains('.details-text', 'All users')
            .should('be.visible')
            .contains('Anyone logged in')
            .should('be.visible')
            .closest('.wrapper')
            .as('all-users-list-item')

        cy.get('@all-users-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(datalevel).should('be.visible')
            })
        })

        cy.get('@all-users-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains(metadatalevel).should('be.visible')
            })
        })
    }
)

When(
    'the user sets the user data access level to {string}, and leaves metadata as {string}',
    (dataAccess, metadataAccess) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: getUserWithDataAndMetadataAccess(
                        metadataAccess,
                        dataAccess
                    )?.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getUserWithDataAndMetadataAccess(metadataAccess, dataAccess),
        })

        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).click()
        })

        cy.contains(
            '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
            dataAccess
        )
            .should('be.visible')
            .click()

        // Menu should be closed before continuing
        cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
            'not.exist'
        )
    }
)

When(
    'the user sets the group data access level to {string}, and leaves metadata as {string}',
    (dataAccess, metadataAccess) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: getGroupWithDataAndMetadataAccess(
                        metadataAccess,
                        dataAccess
                    )?.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getGroupWithDataAndMetadataAccess(metadataAccess, dataAccess),
        })

        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).click()
        })

        cy.contains(
            '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
            dataAccess
        )
            .should('be.visible')
            .click()

        // Menu should be closed before continuing
        cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
            'not.exist'
        )
    }
)

When(
    'the user sets the all users data access level to {string}, and leaves metadata as {string}',
    (dataAccess, metadataAccess) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: getAllUsersWithDataAndMetadataAccess(
                        metadataAccess,
                        dataAccess
                    )?.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getAllUsersWithDataAndMetadataAccess(
                metadataAccess,
                dataAccess
            ),
        })

        cy.get('@all-users-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).click()
        })

        cy.contains(
            '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
            dataAccess
        )
            .should('be.visible')
            .click()

        // Menu should be closed before continuing
        cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
            'not.exist'
        )
    }
)

Then(
    'the user data access control should be set to {string}',
    (newDataAccess) => {
        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(newDataAccess).should('be.visible')
            })
        })
    }
)

Then(
    'the group data access control should be set to {string}',
    (newDataAccess) => {
        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(newDataAccess).should('be.visible')
            })
        })
    }
)

Then(
    'the all users data access control should be set to {string}',
    (newDataAccess) => {
        cy.get('@all-users-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(newDataAccess).should('be.visible')
            })
        })
    }
)

Then(
    'the user metadata access control should remain {string}',
    (metadataAccess) => {
        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains(metadataAccess).should('be.visible')
            })
        })
    }
)

Then(
    'the group metadata access control should remain {string}',
    (metadataAccess) => {
        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains(metadataAccess).should('be.visible')
            })
        })
    }
)

Then(
    'the all users metadata access control should remain {string}',
    (metadataAccess) => {
        cy.get('@all-users-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains(metadataAccess).should('be.visible')
            })
        })
    }
)

// a sharing dialog with <target> item with <data-access-level> for data and No access for metadata is visible

When(
    'a sharing dialog with user item with {string} for data and No access for metadata is visible',
    (dataAccess) => {
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getUserWithDataAndMetadataAccess('No access', dataAccess),
        })
        cy.visitStory('sharing-dialog', 'data')
        cy.contains('Sharing and access').should('be.visible')

        cy.contains('.details-text', 'A user')
            .should('be.visible')
            .contains('user-1')
            .should('be.visible')
            .closest('.wrapper')
            .as('user-list-item')

        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(dataAccess).should('be.visible')
            })
        })

        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains('No access').should('be.visible')
            })
        })
    }
)

When(
    'a sharing dialog with group item with {string} for data and No access for metadata is visible',
    (dataAccess) => {
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getGroupWithDataAndMetadataAccess('No access', dataAccess),
        })
        cy.visitStory('sharing-dialog', 'data')
        cy.contains('Sharing and access').should('be.visible')

        cy.contains('.details-text', 'A group')
            .should('be.visible')
            .contains('User group')
            .should('be.visible')
            .closest('.wrapper')
            .as('group-list-item')

        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Data'
            ).within(() => {
                cy.contains(dataAccess).should('be.visible')
            })
        })

        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).within(() => {
                cy.contains('No access').should('be.visible')
            })
        })
    }
)

When(
    'the user clicks to remove the access for the user from the {string} access select',
    (type) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: userNoAccess.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )

        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: userNoAccess,
        })

        cy.get('@user-list-item').within(() => {
            cy.contains('[data-test="dhis2-uicore-singleselect"]', type).click()
        })

        cy.contains('Remove access').should('be.visible').click()
    }
)

When(
    'the user clicks to remove the access for the group from the {string} access select',
    (type) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: groupNoAccess.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )

        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: groupNoAccess,
        })

        cy.get('@group-list-item').within(() => {
            cy.contains('[data-test="dhis2-uicore-singleselect"]', type).click()
        })

        cy.contains('Remove access').should('be.visible').click()
    }
)

Then('the user item should be removed', () => {
    cy.contains('.details-text', 'A user').should('not.exist')
})

Then('the group item should be removed', () => {
    cy.contains('.details-text', 'A group').should('not.exist')
})

When(
    'the user sets the user metadata access level to No access and leaves data access as {string}',
    (dataAccess) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: getUserWithDataAndMetadataAccess(
                        'No access',
                        dataAccess
                    )?.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getUserWithDataAndMetadataAccess('No access', dataAccess),
        })

        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).click()
        })

        cy.contains(
            '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
            'No access'
        )
            .should('be.visible')
            .click()

        // Menu should be closed before continuing
        cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
            'not.exist'
        )
    }
)

When(
    'the user sets the group metadata access level to No access and leaves data access as {string}',
    (dataAccess) => {
        cy.intercept(
            'PUT',
            '/api/38/sharing?type=visualization&id=id',
            (req) => {
                const expected = {
                    object: getGroupWithDataAndMetadataAccess(
                        'No access',
                        dataAccess
                    )?.object,
                }
                expect(req.body).to.deep.equal(expected)
                req.reply({ statusCode: 200 })
            }
        )
        cy.intercept('GET', '/api/38/sharing?type=visualization&id=id', {
            body: getGroupWithDataAndMetadataAccess('No access', dataAccess),
        })

        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                'Metadata'
            ).click()
        })

        cy.contains(
            '[data-test="dhis2-uicore-select-menu-menuwrapper"] [data-test="dhis2-uicore-singleselectoption"]',
            'No access'
        )
            .should('be.visible')
            .click()

        // Menu should be closed before continuing
        cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').should(
            'not.exist'
        )
    }
)

Then(
    'the user {string} access level options do not contain Remove access',
    (sharingType) => {
        cy.get('@user-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                sharingType
            ).click()
        })

        cy.contains('Remove access').should('not.exist')
    }
)

Then(
    'the group {string} access level options do not contain Remove access',
    (sharingType) => {
        cy.get('@group-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                sharingType
            ).click()
        })

        cy.contains('Remove access').should('not.exist')
    }
)

Then(
    'the all users {string} access level options do not contain Remove access',
    (sharingType) => {
        cy.get('@all-users-list-item').within(() => {
            cy.contains(
                '[data-test="dhis2-uicore-singleselect"]',
                sharingType
            ).click()
        })

        cy.contains('Remove access').should('not.exist')
    }
)
