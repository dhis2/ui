import { screen, render } from '@testing-library/react'
import React from 'react'
import { Chip } from '../chip.js'

describe('<Chip />', () => {
    it('accepts numerical margin props', () => {
        render(
            <Chip
                marginBottom={8}
                marginLeft={8}
                marginRight={8}
                marginTop={8}
            />
        )
        const chip = screen.getByTestId('dhis2-uicore-chip')

        expect(chip).toHaveStyle('margin-bottom: 8px')
        expect(chip).toHaveStyle('margin-left: 8px')
        expect(chip).toHaveStyle('margin-right: 8px')
        expect(chip).toHaveStyle('margin-top: 8px')
    })
    it('accepts string margin props', () => {
        render(
            <Chip
                marginBottom="8px"
                marginLeft="8px"
                marginRight="8px"
                marginTop="8px"
            />
        )
        const chip = screen.getByTestId('dhis2-uicore-chip')

        expect(chip).toHaveStyle('margin-bottom: 8px')
        expect(chip).toHaveStyle('margin-left: 8px')
        expect(chip).toHaveStyle('margin-right: 8px')
        expect(chip).toHaveStyle('margin-top: 8px')
    })
})
