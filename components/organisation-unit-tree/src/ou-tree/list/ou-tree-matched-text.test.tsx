import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeMatchedText } from './ou-tree-matched-text'

describe('OuTreeMatchedText', () => {
    it('emphasises the matched segments and leaves the rest outside', () => {
        const { container } = render(
            <OuTreeMatchedText
                segments={[
                    { text: 'San', matched: true },
                    { text: ' Jose de ', matched: false },
                    { text: 'San', matched: true },
                    { text: ' Martin', matched: false },
                ]}
                dataTest="t-match"
            />
        )

        expect(container).toHaveTextContent('San Jose de San Martin')
        expect(
            screen.getAllByTestId('t-match').map((el) => el.textContent)
        ).toEqual(['San', 'San'])
    })

    it('renders the text alone when nothing is matched', () => {
        const { container } = render(
            <OuTreeMatchedText
                segments={[{ text: 'Rio', matched: false }]}
                dataTest="t"
            />
        )

        expect(container).toHaveTextContent('Rio')
        expect(screen.queryByTestId('t')).not.toBeInTheDocument()
    })
})
