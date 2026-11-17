import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeNoResults } from './ou-tree-no-results'

describe('OuTreeNoResults', () => {
    it('says that nothing was found', () => {
        render(<OuTreeNoResults dataTest="t-no-results" />)

        expect(screen.getByTestId('t-no-results')).toHaveTextContent(
            'No results found'
        )
    })
})
