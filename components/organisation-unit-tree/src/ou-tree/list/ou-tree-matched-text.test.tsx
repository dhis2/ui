import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeMatchedText } from './ou-tree-matched-text'

describe('OuTreeMatchedText', () => {
    it('emphasises the matched substring and leaves the rest outside', () => {
        const { container } = render(
            <OuTreeMatchedText
                text="Hospital Clínico"
                term="clin"
                dataTest="t-match"
            />
        )

        expect(container).toHaveTextContent('Hospital Clínico')
        expect(screen.getByTestId('t-match')).toHaveTextContent(/^Clín$/)
    })

    it('emphasises the whole text for a quoted term', () => {
        render(<OuTreeMatchedText text="Rio" term={'"Rio"'} dataTest="t" />)

        expect(screen.getByTestId('t')).toHaveTextContent(/^Rio$/)
    })

    it('renders the text alone on a miss', () => {
        const { container } = render(
            <OuTreeMatchedText text="Rio" term="xyz" dataTest="t" />
        )

        expect(container).toHaveTextContent('Rio')
        expect(screen.queryByTestId('t')).not.toBeInTheDocument()
    })
})
