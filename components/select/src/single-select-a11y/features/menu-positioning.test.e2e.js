describe('SingleSelectA11y: Menu positioning', () => {
    it('should open in the default position', () => {
        // Given there is enough space below the anchor to fit the SingleSelect menu
        cy.visitStory('Single Select A11y', 'Default position')

        // When the SingleSelect is clicked
        cy.findByRole('combobox').click()

        // Then the top of the menu is aligned with the bottom of the input
        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            // The listbox is inside a container with a border,
            // hence the increased delta
            expect(menuRect.top).to.be.closeTo(selectedValueRect.bottom, 2)
        })

        // And the left of the SingleSelect is aligned with the left of the anchor
        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            // The listbox is inside a container with a border,
            // hence the increased delta
            expect(selectedValueRect.left).to.be.closeTo(menuRect.left, 2)
        })
    })

    it('should flipp the position when insufficient space below', () => {
        // Given there is not enough space below the anchor to fit the SingleSelect menu
        cy.visitStory('Single Select A11y', 'Flipped position')

        // When the SingleSelect is clicked
        cy.findByRole('combobox').click()

        // Then the bottom of the menu is aligned with the top of the input
        cy.all(
            () => cy.findByRole('combobox'),
            // We need to get the parent as the menu itself
            // extends withing the div container
            () => cy.findByRole('listbox').invoke('parent')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            expect(selectedValueRect.top).to.be.closeTo(menuRect.bottom, 1)
        })

        // And the left of the SingleSelect is aligned with the left of the anchor
        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            // The listbox is inside a container with a border,
            // hence the increased delta
            expect(selectedValueRect.left).to.be.closeTo(menuRect.left, 2)
        })
    })

    it('should shift the menu into view when insufficient space below and above', () => {
        // Given there is not enough space above or below the anchor to fit the SingleSelect menu
        cy.visitStory('Single Select A11y', 'Shifted into view')

        // When the SingleSelect is clicked
        cy.findByRole('combobox').click()

        // Then it is rendered on top of the SingleSelect
        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            expect(selectedValueRect.top).to.be.greaterThan(menuRect.top)
            expect(menuRect.bottom).to.be.greaterThan(selectedValueRect.bottom)
        })

        // And the left of the SingleSelect is aligned with the left of the anchor
        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            expect(selectedValueRect.top).to.be.greaterThan(menuRect.top)
            expect(menuRect.bottom).to.be.greaterThan(selectedValueRect.bottom)
        })
    })

    it('should keep the menu in position while the window is scrolled', () => {
        // Given there is enough space below the anchor to fit the SingleSelect menu
        cy.visitStory('Single Select A11y', 'Default position')

        // When the SingleSelect is clicked
        cy.findByRole('combobox').click()

        // And the window is scrolled down
        cy.get('body').then(($body) => $body.height('5000px')) // Ensure the body can scroll first
        cy.scrollTo(0, 800)

        // Then the top of the menu is aligned with the bottom of the input
        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            // The listbox is inside a container with a border,
            // hence the increased delta
            expect(menuRect.top).to.be.closeTo(selectedValueRect.bottom, 2)
        })

        // And the left of the SingleSelect is aligned with the left of the anchor
        cy.all(
            () => cy.findByRole('combobox'),
            () => cy.findByRole('listbox')
        ).should(([selectedValue, menu]) => {
            expect(selectedValue.length).to.equal(1)
            expect(menu.length).to.equal(1)

            const $selectedValue = selectedValue[0]
            const $menu = menu[0]

            const selectedValueRect = $selectedValue.getBoundingClientRect()
            const menuRect = $menu.getBoundingClientRect()

            // The listbox is inside a container with a border,
            // hence the increased delta
            expect(selectedValueRect.left).to.be.closeTo(menuRect.left, 2)
        })
    })
})
