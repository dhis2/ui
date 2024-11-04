describe('<SingleSelectA11y/>', () => {
    it('should highlight the first option on the currently displayed page', () => {
        cy.log('**Given a select with 100 options is displayed**')
        cy.visitStory('Single Select A11y', 'Hundret Options')

        cy.log('**And the menu is visible**')
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        cy.log('**And the 74th option is being highlighted**')
        cy.findByRole('combobox').focus().type(`Select option 73`)

        cy.log(
            '**And the 70th option is the first option on the current page**'
        )
        let optionOffset
        cy.findAllByRole('option')
            .eq(70)
            .then((option) => {
                const { offsetTop } = option.get(0)
                optionOffset = offsetTop
            })

        cy.findByRole('option', { selected: true })
            .invoke('parent') // listbox
            .invoke('parent') // .listbox-container
            .invoke('parent') // scrollable div
            .then((listBoxParent) => {
                listBoxParent.get(0).scrollTop = optionOffset
            })

        cy.findAllByRole('option').eq(70).should('be.visible')

        cy.log('**When the PageUp key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        cy.log(
            '**Then the first option on the currently displayed page is highlighted**'
        )
        cy.findByRole('option', { selected: true })
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 70')
    })

    it('should highlight the first enabled option before the first (disabled) option on the currently displayed page', () => {
        cy.log(
            '**Given a select with 100 options is displayed and option #17 is disabled**'
        )
        cy.visitStory('Single Select A11y', 'Hundret Options With Disabled')

        cy.log('**And the menu is visible**')
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        cy.log('**And the 26th option is being highlighted**')
        cy.findByRole('combobox').focus().type(`Select option 25`)

        cy.log(
            '**And the 17th option is the first option on the current page**'
        )
        let optionOffset
        cy.findAllByRole('option')
            .eq(17)
            .then((option) => {
                const { offsetTop } = option.get(0)
                optionOffset = offsetTop
            })

        cy.findByRole('option', { selected: true })
            .invoke('parent') // listbox
            .invoke('parent') // .listbox-container
            .invoke('parent') // scrollable div
            .then((listBoxParent) => {
                listBoxParent.get(0).scrollTop = optionOffset
            })

        cy.findAllByRole('option').eq(17).should('be.visible')

        cy.log('**When the PageUp key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        cy.log(
            '**Then the first option on the currently displayed page is highlighted**'
        )
        cy.findByRole('option', { selected: true })
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 16')
    })

    it('should highlight the first option on the previous page', () => {
        cy.log('**Given a select with 100 options is displayed**')
        cy.visitStory('Single Select A11y', 'Hundret Options')

        cy.log('**And the menu is visible**')
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        cy.log('**And the 70th option is being highlighted**')
        // Will automatically scroll there and make it the first option on the page
        cy.findByRole('combobox').focus().type(`Select option 70`)

        cy.log('**When the PageUp key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        cy.log('**Then the first option on the previous page is highlighted**')
        cy.findByRole('option', { selected: true })
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 61')

        // That option is truly the first option
        cy.get('[role="option"]:visible')
            .first()
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 61')

        cy.log('**And the previously highlighted option is not visible**')
        cy.findAllByRole('option').eq(70).should('not.be.visible')
    })

    it('should highlight the first enabled option before the first (disabled) option on the previous page', () => {
        cy.log(
            '**Given a select with 100 options is displayed and option #17 is disabled**'
        )
        cy.visitStory('Single Select A11y', 'Hundret Options With Disabled')

        cy.log('**And the menu is visible**')
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        cy.log('**And the 27th option is being highlighted**')
        // Will automatically scroll there and make it the first option on the page
        cy.findByRole('combobox').focus().type(`Select option 27`)

        cy.log('**When the PageUp key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        cy.log('**Then the first option on the previous page is highlighted**')
        cy.findByRole('option', { selected: true })
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 16')

        cy.log('**And that option is truly the first option**')
        cy.get('[role="option"]:visible')
            .first()
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 16')

        cy.log('**And the previously highlighted option is not visible**')
        cy.findAllByRole('option').eq(27).should('not.be.visible')
    })

    it('should highlight the first option', () => {
        cy.log('**Given a select with 100 options is displayed**')
        cy.visitStory('Single Select A11y', 'Hundret Options')

        cy.log('**And the menu is visible**')
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        cy.log('**And the 2nd option is being highlighted**')
        cy.findByRole('combobox').focus().type(`Select option 1`)

        cy.log('**And the 2nd option is the first option on the current page**')
        let optionOffset
        cy.findAllByRole('option')
            .eq(1)
            .then((option) => {
                const { offsetTop } = option.get(0)
                optionOffset = offsetTop
            })

        cy.findByRole('option', { selected: true })
            .invoke('parent') // listbox
            .invoke('parent') // .listbox-container
            .invoke('parent') // scrollable div
            .then((listBoxParent) => {
                listBoxParent.get(0).scrollTop = optionOffset
            })

        cy.log('**When the PageUp key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        cy.log('**Then the first option is being highlighted**')
        cy.all(
            () => cy.findAllByRole('option').invoke('get', 0),
            () => cy.findByRole('option', { selected: true }).invoke('get', 0)
        ).then(([firstOption, highlightedOption]) => {
            expect(highlightedOption).to.equal(firstOption)
        })
    })

    it('should highlight the second option when the first option is disabled', () => {
        cy.log(
            '**Given a select with 100 options is displayed and option #2 is disabled**'
        )
        cy.visitStory('Single Select A11y', 'Hundret Options With Disabled')

        cy.log('**And the menu is visible**')
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        cy.log('**And the 3rd option is being highlighted**')
        cy.findByRole('combobox').focus().type(`Select option 2`)

        cy.log('**And the 3rd option is the first option on the current page**')
        let optionOffset
        cy.findAllByRole('option')
            .eq(2)
            .then((option) => {
                const { offsetTop } = option.get(0)
                optionOffset = offsetTop
            })

        cy.findByRole('option', { selected: true })
            .invoke('parent') // listbox
            .invoke('parent') // .listbox-container
            .invoke('parent') // scrollable div
            .then((listBoxParent) => {
                listBoxParent.get(0).scrollTop = optionOffset
            })

        cy.log('**When the PageUp key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageUp',
            force: true,
        })

        cy.log('**Then the second option is being highlighted**')
        cy.all(
            () => cy.findAllByRole('option').invoke('get', 1),
            () => cy.findByRole('option', { selected: true }).invoke('get', 0)
        ).then(([firstOption, highlightedOption]) => {
            expect(highlightedOption).to.equal(firstOption)
        })
    })

    it('should highlight the last option on the currently displayed page', () => {
        cy.log('**Given a select with 100 options is displayed**')
        cy.visitStory('Single Select A11y', 'Hundret Options')

        cy.log('**And the menu is visible**')
        // first option will be highlighted automatically
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        cy.log('**When the PageDown key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageDown',
            force: true,
        })

        cy.log(
            '**Then the last option on the currently displayed page is highlighted**'
        )
        cy.all(
            () => cy.get('[role="option"]:visible').last().invoke('get', 0),
            () => cy.findByRole('option', { selected: true }).invoke('get', 0)
        ).then(([lastVisibleOption, highlightedOption]) => {
            expect(highlightedOption).to.equal(lastVisibleOption)
        })
    })

    it('should highlight the first enabled option after the last (disabled) option on the currently displayed page', () => {
        cy.log(
            '**Given a select with 100 options is displayed and option #17 is disabled**'
        )
        cy.visitStory('Single Select A11y', 'Hundret Options With Disabled')

        cy.log(
            '**And the 9th option is being selected (will cause it to be the first option on the page when opening the menu)**'
        )
        cy.findByRole('combobox').focus().type(`Select option 9`)

        cy.log('**And the menu is visible**')
        // first option will be highlighted automatically
        cy.findByRole('combobox').click()
        cy.findByRole('option', { selected: true }).should('be.visible')

        // That option is truly the first option
        cy.get('[role="option"]:visible')
            .first()
            .invoke('attr', 'aria-label')
            .should('equal', 'Select option 9')

        cy.log('**When the PageDown key is pressed**')
        cy.findByRole('combobox').trigger('keydown', {
            key: 'PageDown',
            force: true,
        })

        cy.log(
            '**Then the first enabled option after last option on the currently displayed page is highlighted**'
        )
        cy.all(
            () => cy.findAllByRole('option').invoke('get', 19),
            () => cy.findByRole('option', { selected: true }).invoke('get', 0)
        ).then(([eighteensOptions, highlightedOption]) => {
            expect(highlightedOption).to.equal(eighteensOptions)
        })

        // For some reason, without the timeout,
        // cypress will still get the previously visible page
        // when using the `:visible` pseudo-selector
        cy.wait(0)

        cy.log(
            '**And the first enabled option after last option on the currently displayed page is the first visible option**'
        )
        cy.all(
            () => cy.get('[role="option"]:visible').invoke('get', 0),
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
            const LAST_VISIBLE_OPTION_INDEX = 8

            cy.log('**Given a select with 100 options is displayed**')
            cy.visitStory('Single Select A11y', 'Hundret Options')

            cy.log('**And the last option on the first page is selected**')
            cy.findByRole('combobox').focus().type(`Select option 8`)

            cy.log('**And the menu is visible**')
            cy.findByRole('combobox').click()
            cy.findByRole('option', { selected: true }).should('be.visible')

            cy.get('[role="option"]')
                .eq(LAST_VISIBLE_OPTION_INDEX)
                .invoke('attr', 'aria-selected')
                .should('equal', 'true')

            cy.log('**When the PageDown key is pressed**')
            cy.findByRole('combobox').trigger('keydown', {
                key: 'PageDown',
                force: true,
            })

            cy.log('**Then the next page is shown**')
            cy.get('[role="option"]')
                .eq(LAST_VISIBLE_OPTION_INDEX)
                .should('not.be.visible')
            cy.get('[role="option"]')
                .eq(LAST_VISIBLE_OPTION_INDEX + 1)
                .should('be.visible')

            cy.log('**And the last option on the next page is highlighted**')
            cy.get('[role="option"]:visible')
                .last()
                .invoke('attr', 'aria-selected')
                .should('equal', 'true')

            cy.log('**And the previously highlighted option is not visible**')
            cy.get('[role="option"]')
                .eq(LAST_VISIBLE_OPTION_INDEX + 1)
                .invoke('attr', 'aria-selected')
                .should('equal', 'false')
        }
    )

    it(
        'should highlight the first enabled option after the last (disabled) option on the next page',
        // We don't want the options to scroll when we check whether they're
        // visible or not (as that'd make them visible)
        { scrollBehavior: false },
        () => {
            cy.log(
                '**Given a select with 100 options is displayed and option #17 is disabled**'
            )
            cy.visitStory('Single Select A11y', 'Hundret Options With Disabled')

            cy.log('**And the 2nd option is being selected**')
            cy.findByRole('combobox').focus().type(`Select option 9`)

            cy.log('**And the menu is visible**')
            cy.findByRole('combobox').click()
            cy.findByRole('option', { selected: true }).should('be.visible')

            cy.log(
                '**And the 2nd option is the first option on the current page**'
            )
            cy.all(
                () => cy.findAllByRole('option').eq(1),
                // scrollable div
                () =>
                    cy
                        .findByRole('option', { selected: true })
                        .invoke('parent')
                        .invoke('parent') // .listbox-container
                        .invoke('parent')
            ).then(([nextTopOption, listBoxParent]) => {
                const { offsetTop } = nextTopOption.get(0)
                listBoxParent.get(0).scrollTop = offsetTop
            })

            cy.wrap(9).as('lastVisibleOptionIndex')

            cy.get('@lastVisibleOptionIndex').then((lastVisibleOptionIndex) => {
                cy.get('[role="option"]')
                    .eq(lastVisibleOptionIndex)
                    .invoke('attr', 'aria-selected')
                    .should('equal', 'true')
            })

            cy.log('**When the PageDown key is pressed**')
            cy.findByRole('combobox').trigger('keydown', {
                key: 'PageDown',
                force: true,
            })

            cy.log('**Then the next page is shown,**')
            // but one option is skipped due to the disabled option at the end of the next page
            cy.get('@lastVisibleOptionIndex').then((lastVisibleOptionIndex) => {
                cy.get('[role="option"]')
                    .eq(lastVisibleOptionIndex + 1)
                    .should('not.be.visible')
                cy.get('[role="option"]')
                    .eq(lastVisibleOptionIndex + 2)
                    .should('be.visible')
            })

            cy.log('**And the last option on the next page is highlighted**')
            cy.get('[role="option"]:visible')
                .last()
                .invoke('attr', 'aria-selected')
                .should('equal', 'true')

            cy.get('[role="option"]:visible')
                .last()
                .invoke('attr', 'aria-label')
                .should('equal', 'Select option 19')
        }
    )

    it(
        'should highlight the last option',
        // We don't want the options to scroll when we check whether they're
        // visible or not (as that'd make them visible)
        { scrollBehavior: false },
        () => {
            cy.log('**Given a select with 100 options is displayed**')
            cy.visitStory('Single Select A11y', 'Hundret Options')

            cy.log('**And the menu is visible**')
            cy.findByRole('combobox').click()
            cy.findByRole('option', { selected: true }).should('be.visible')

            cy.log(
                '**And the 2nd-last option is being highlighted and visible**'
            )
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

            cy.log('**And the last option is not visible**')
            cy.findAllByRole('option').last().should('not.be.visible')

            cy.log('**When the PageDown key is pressed**')
            cy.findByRole('combobox').trigger('keydown', {
                key: 'PageDown',
                force: true,
            })

            cy.log('**Then the last option is highlighted**')
            cy.all(
                () => cy.findAllByRole('option').last().invoke('get', 0),
                () =>
                    cy.findByRole('option', { selected: true }).invoke('get', 0)
            ).then(([lastOption, highlightedOption]) => {
                expect(highlightedOption).to.equal(lastOption)
            })

            cy.log('**And the last option is visible**')
            cy.findAllByRole('option').last().should('be.visible')
        }
    )

    it(
        'should highlight the last enabled option',
        // We don't want the options to scroll when we check whether they're
        // visible or not (as that'd make them visible)
        { scrollBehavior: false },
        () => {
            cy.log(
                '**Given a select with 100 options is displayed and option #99 is disabled**'
            )
            cy.visitStory('Single Select A11y', 'Hundret Options With Disabled')

            cy.log('**And the 3rd-last option is being selected**')
            cy.findByRole('combobox').focus().type(`Select option 97`)

            cy.log('**And the menu is visible**')
            cy.findByRole('combobox').click()
            cy.findByRole('option', { selected: true }).should('be.visible')

            cy.log(
                '**And the 3rd-last option is the last option on the current page**'
            )
            cy.all(
                () => cy.findAllByRole('option').eq(89),
                () => cy.findByRole('listbox').invoke('parent').invoke('parent') // scrollable div
            ).then(([nextTopOption, listBoxParent]) => {
                const { offsetTop } = nextTopOption.get(0)
                listBoxParent.get(0).scrollTop = offsetTop
            })

            cy.findAllByRole('option').eq(97).should('be.visible')
            cy.findAllByRole('option').eq(98).should('not.be.visible')
            cy.findAllByRole('option').last().should('not.be.visible')

            cy.log('**When the PageDown key is pressed**')
            cy.findByRole('combobox').trigger('keydown', {
                key: 'PageDown',
                force: true,
            })

            cy.log('**Then the last option is highlighted**')
            cy.all(
                () => cy.findAllByRole('option').invoke('get', 98),
                () =>
                    cy.findByRole('option', { selected: true }).invoke('get', 0)
            ).then(([secondLastOption, highlightedOption]) => {
                expect(highlightedOption).to.equal(secondLastOption)
            })

            cy.log('**And the second last option is visible**')
            cy.findAllByRole('option').eq(98).should('be.visible')
            cy.log('**And the last option is not visible**')
            cy.findAllByRole('option').eq(99).should('not.be.visible')
        }
    )
})
