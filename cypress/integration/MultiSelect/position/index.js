import '../common'
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given(
    'there is enough space below the anchor to fit the MultiSelect menu',
    () => {
        cy.visitStory('MultiSelect', 'Default position')
    }
)

Given(
    'there is not enough space below the anchor to fit the MultiSelect menu',
    () => {
        cy.visitStory('MultiSelect', 'Flipped position')
    }
)

Given(
    'there is not enough space above or below the anchor to fit the MultiSelect menu',
    () => {
        cy.visitStory('MultiSelect', 'Shifted into view')
    }
)

When('the MultiSelect is clicked', () => {
    cy.get('[data-test="dhis2-uicore-multiselect"]').click()
})

When('the window is scrolled down', () => {
    cy.scrollTo(0, 800)
})

When('the window is resized to a greater width', () => {
    waitForResizeObserver(() => {
        cy.viewport(1200, 660)
    })
})

When('an option is clicked', () => {
    waitForResizeObserver(() => {
        cy.contains('option one').click()
    })
})

Then('the input is empty', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').then($el => {
        cy.wrap($el.outerHeight()).as('emptyInputHeight')
    })
    cy.get('[data-test="dhis2-uicore-select-input"] .root').should('be.empty')
})

Then('the Input grows in height', () => {
    cy.get('@emptyInputHeight').then(emptyInputHeight => {
        cy.get('[data-test="dhis2-uicore-select-input"]').then($el => {
            expect($el.outerHeight()).to.be.greaterThan(emptyInputHeight)
        })
    })
})

Then('the top of the menu is aligned with the bottom of the input', () => {
    // This test is used by the window scroll scenario
    // so needs to take y into account for the anchor
    getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
        expect(menuRect.top).to.equal(
            anchorRect.y - anchorRect.top + anchorRect.height
        )
    })
})

Then('the bottom of the menu is aligned with the top of the input', () => {
    getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
        expect(anchorRect.top).to.equal(menuRect.bottom)
    })
})

Then('it is rendered on top of the MultiSelect', () => {
    getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
        expect(anchorRect.top).to.be.greaterThan(menuRect.top)
        expect(menuRect.bottom).to.be.greaterThan(anchorRect.bottom)
    })
})

Then('the left of the Menu is aligned with the left of the Input', () => {
    getAnchorAndMenuRects().then(([anchorRect, menuRect]) => {
        expect(anchorRect.left).to.equal(menuRect.left)
    })
})

Then('the Menu and the Input have an equal width', () => {
    cy.get('[data-test="dhis2-uicore-multiselect"] .root-input').then(
        $input => {
            cy.get('[data-test="dhis2-uicore-select-menu-menuwrapper"]').then(
                $menu => {
                    expect($input.outerWidth()).to.equal($menu.outerWidth())
                }
            )
        }
    )
})

function getAnchorAndMenuRects() {
    return cy.getPositionsBySelectors(
        '[data-test="dhis2-uicore-multiselect"]',
        '[data-test="dhis2-uicore-select-menu-menuwrapper"]'
    )
}

function waitForResizeObserver(callback) {
    cy.window().then(() => {
        const id = 'resize-observer-callback-executed'
        const oldNode = document.getElementById(id)

        // Cleanup
        if (oldNode) {
            oldNode.parentNode.removeChild(oldNode)
        }

        cy.get('[data-test="dhis2-uicore-select"]').then($el => {
            const el = $el[0]
            const observer = new ResizeObserver(() => {
                // Create element to wait for when resizeObserver callback is executed
                const newNode = document.createElement('div')
                newNode.setAttribute('id', id)
                el.parentNode.appendChild(newNode)
            })

            observer.observe(el)

            callback()

            // Wait for element and DOM redraw
            return cy.get(`#${id}`).then(() => cy.wait(1))
        })
    })
}
