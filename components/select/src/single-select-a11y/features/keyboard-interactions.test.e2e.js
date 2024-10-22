describe('<SingleSelectA11y/>', () => {
    it('should highlight the first option on the currently displayed page', () => {
        // Given a select with 100 options is displayed
        cy.visitStory('Single Select A11y', 'Hundret Options')

        // And the menu is visible
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        // And the 74th option is being highlighted
        cy.findByRole('combobox').focus().type(`Select option 73`)

        // And the 70th option is the first option on the current page
        let optionOffset
        cy.findAllByRole('option')
            .eq(70)
            .then((option) => {
                const { offsetTop } = option.get(0)
                optionOffset = offsetTop
            })

        cy.findByRole('option', { selected: true })
            .invoke('parent') // listbox
            .invoke('parent') // scrollable div
            .then((listBoxParent) => {
                console.log('> listBoxParent', listBoxParent.get(0))
                console.log('> optionOffset', optionOffset)
                listBoxParent.get(0).scrollTop = optionOffset
            })

        cy.findAllByRole('option').eq(70).should('be.visible')

        // When the PageUp key is pressed
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        // Then the first option on the currently displayed page is highlighted
        cy.findByRole('option', { selected: true })
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 70')
    })

    it('should highlight the first option on the previous page', () => {
        // Given a select with 100 options is displayed
        cy.visitStory('Single Select A11y', 'Hundret Options')

        // And the menu is visible
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        // And the 70th option is being highlighted
        // Will automatically scroll there and make it the first option on the page
        cy.findByRole('combobox').focus().type(`Select option 70`)

        // When the PageUp key is pressed
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        // Then the first option on the previous page is highlighted
        cy.findByRole('option', { selected: true })
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 61')

        // And the previously highlighted option is not visible
        cy.findAllByRole('option').eq(70).should('not.be.visible')
    })

    it('should highlight the first option', () => {
        // Given a select with 100 options is displayed
        cy.visitStory('Single Select A11y', 'Hundret Options')

        // And the menu is visible
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        // And the 2nd option is being highlighted
        cy.findByRole('combobox').focus().type(`Select option 1`)

        // And the 2nd option is the first option on the current page
        let optionOffset
        cy.findAllByRole('option')
            .eq(1)
            .then((option) => {
                const { offsetTop } = option.get(0)
                optionOffset = offsetTop
            })

        cy.findByRole('option', { selected: true })
            .invoke('parent') // listbox
            .invoke('parent') // scrollable div
            .then((listBoxParent) => {
                console.log('> listBoxParent', listBoxParent.get(0))
                console.log('> optionOffset', optionOffset)
                listBoxParent.get(0).scrollTop = optionOffset
            })

        // When the PageUp key is pressed
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        // Then the first option is being highlighted
        cy.all(
            () => cy.findAllByRole('option').first().invoke('get', 0),
            () => cy.findByRole('option', { selected: true }).invoke('get', 0)
        ).then(([firstOption, highlightedOption]) => {
            expect(highlightedOption).to.equal(firstOption)
        })
    })

    it('should highlight the last option on the currently displayed page', () => {
        // Given a select with 100 options is displayed
        cy.visitStory('Single Select A11y', 'Hundret Options')

        // And the menu is visible
        // first option will be highlighted automatically
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        // When the PageDown key is pressed
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageDown',
            force: true,
        })

        // Then the last option on the currently displayed page is highlighted
        cy.all(
            () => cy.get('[role="option"]:visible').last().invoke('get', 0),
            () => cy.findByRole('option', { selected: true }).invoke('get', 0)
        ).then(([lastVisibleOption, highlightedOption]) => {
            expect(highlightedOption).to.equal(lastVisibleOption)
        })
    })

    it(
        'should highlight the last option on the next page',
        // We don't want the options to scroll when we check whether they're
        // visible or not (as that'd make them visible)
        { scrollBehavior: false },
        () => {
            // Given a select with 100 options is displayed
            cy.visitStory('Single Select A11y', 'Hundret Options')

            // And the menu is visible
            cy.findByRole('combobox').click()
            cy.findByRole('option', { selected: true }).should('be.visible')

            // And the option last visible option is being highlighted
            cy.get('[role="option"]:visible').then(($visibleOptions) => {
                const visibleOptionsAmount = $visibleOptions.length

                for (let i = 0; i < visibleOptionsAmount - 1; ++i) {
                    cy.findByRole('combobox').trigger('keydown', {
                        key: 'ArrowDown',
                        force: true,
                    })

                    if (i === visibleOptionsAmount - 2) {
                        cy.wrap(i).as('lastVisibleOptionIndex')
                    }
                }
            })

            cy.get('@lastVisibleOptionIndex').then((lastVisibleOptionIndex) => {
                cy.get('[role="option"]')
                    .eq(lastVisibleOptionIndex + 1) // 1-based
                    .invoke('attr', 'aria-selected')
                    .should('equal', 'true')
            })

            // When the PageDown key is pressed
            cy.findByRole('combobox').trigger('keydown', {
                key: 'PageDown',
                force: true,
            })

            // Then the next page is shown
            cy.get('@lastVisibleOptionIndex').then((lastVisibleOptionIndex) => {
                cy.get('[role="option"]')
                    .eq(lastVisibleOptionIndex + 1)
                    .should('not.be.visible')
                cy.get('[role="option"]')
                    .eq(lastVisibleOptionIndex + 2)
                    .should('be.visible')
            })

            // And the last option on the next page is highlighted
            cy.get('[role="option"]:visible')
                .last()
                .invoke('attr', 'aria-selected')
                .should('equal', 'true')

            // And the previously highlighted option is not visible
            cy.get('@lastVisibleOptionIndex').then((lastVisibleOptionIndex) => {
                cy.get('[role="option"]')
                    .eq(lastVisibleOptionIndex + 1)
                    .invoke('attr', 'aria-selected')
                    .should('equal', 'false')
            })
        }
    )

    it(
        'should highlight the last option',
        // We don't want the options to scroll when we check whether they're
        // visible or not (as that'd make them visible)
        { scrollBehavior: false },
        () => {
            // Given a select with 100 options is displayed
            cy.visitStory('Single Select A11y', 'Hundret Options')

            // And the menu is visible
            cy.findByRole('combobox').click()
            cy.findByRole('option', { selected: true }).should('be.visible')

            // And the 2nd-last option is being highlighted and visible
            for (
                let i = 0;
                i < 11; // This will bring us to the second last option exactly
                ++i
            ) {
                cy.findByRole('combobox').trigger('keydown', {
                    key: 'PageDown',
                    force: true,
                })
            }
            cy.findAllByRole('option').eq(98).should('be.visible')

            // And the last option is not visible
            cy.findAllByRole('option').last().should('not.be.visible')

            // When the PageDown key is pressed
            cy.findByRole('combobox').trigger('keydown', {
                key: 'PageDown',
                force: true,
            })

            // Then the last option is highlighted
            cy.all(
                () => cy.findAllByRole('option').last().invoke('get', 0),
                () =>
                    cy.findByRole('option', { selected: true }).invoke('get', 0)
            ).then(([lastOption, highlightedOption]) => {
                expect(highlightedOption).to.equal(lastOption)
            })

            // And the last option is visible
            cy.findAllByRole('option').last().should('be.visible')
        }
    )
})
