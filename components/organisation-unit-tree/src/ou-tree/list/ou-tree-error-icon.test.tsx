import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeErrorIcon } from './ou-tree-error-icon'

describe('OuTreeErrorIcon', () => {
    it('renders the icon and shows the message in a tooltip on hover', async () => {
        render(<OuTreeErrorIcon message="Boom" dataTest="t-error" />)
        const icon = screen.getByTestId('t-error')

        await userEvent.hover(icon)

        expect(await screen.findByText('Boom')).toBeInTheDocument()
    })
})
