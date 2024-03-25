import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
Given(
    'a Popper with placement bottom-start has a React Ref as its reference',
    () => {
        cy.visitStory('Popper', 'React Ref As Reference')
    }
)
Given(
    'a Popper with placement bottom-start has a DOM node as its reference',
    () => {
        cy.visitStory('Popper', 'DOM Node As Reference')
    }
)
Given(
    'a Popper with placement bottom-start has a virtual element as its reference',
    () => {
        cy.visitStory('Popper', 'Virtual Element As Reference')
    }
)
Then(
    'the left of the popper is aligned with the left of the reference element',
    () => {
        cy.all(
            () => cy.get('button'),
            () => cy.get('[data-test="dhis2-uicore-popper"]')
        ).should(([$reference, $popper]) => {
            const referenceRect = $reference.get(0).getBoundingClientRect()
            const popperRect = $popper.get(0).getBoundingClientRect()

            expect(referenceRect.left).to.equal(popperRect.left)
        })
    }
)
Then(
    'the top of the popper is adjacent to the bottom of the reference element',
    () => {
        cy.all(
            () => cy.get('button'),
            () => cy.get('[data-test="dhis2-uicore-popper"]')
        ).should(([$reference, $popper]) => {
            const referenceRect = $reference.get(0).getBoundingClientRect()
            const popperRect = $popper.get(0).getBoundingClientRect()

            expect(Math.round(referenceRect.bottom)).to.equal(
                Math.round(popperRect.top)
            )
        })
    }
)
Then(
    'the top and left of the popper correspond with the virtualElement',
    () => {
        cy.get('[data-test="dhis2-uicore-popper"]').should(($popper) => {
            const popperRect = $popper.get(0).getBoundingClientRect()

            expect(popperRect.top).to.equal(200)
            expect(popperRect.left).to.equal(200)
        })
    }
)
