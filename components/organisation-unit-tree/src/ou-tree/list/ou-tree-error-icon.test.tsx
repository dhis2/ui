import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeErrorIcon } from './ou-tree-error-icon'

describe('OuTreeErrorIcon', () => {
    it('is hidden from assistive technology and carries its dataTest', () => {
        render(<OuTreeErrorIcon dataTest="t-error" />)
        expect(screen.getByTestId('t-error')).toHaveAttribute('aria-hidden')
    })
})
