import { CustomDataProvider } from '@dhis2/app-runtime'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'
import { SharingDialog } from '../sharing-dialog.js'

describe('<SharingDialog />', () => {
    it('calls the onClose callback when the close button is clicked', async () => {
        const requiredProps = {
            id: 'sharing-test',
            type: 'visualization',
            onClose: () => {},
        }
        const spy = jest.fn()
        const customerProviderData = {
            me: {
                id: 'currentUser',
                userGroups: [],
                authorities: ['ALL'],
            },
            sharing: {
                meta: {
                    allowExternalAccess: true,
                    allowPublicAccess: true,
                },
                object: {
                    id: 'id',
                    name: '',
                    displayName: '',
                    externalAccess: false,
                    publicAccess: '--------',
                    userAccesses: [],
                    userGroupAccesses: [],
                },
            },
        }
        render(
            <CustomDataProvider data={customerProviderData}>
                <SharingDialog {...requiredProps} onClose={spy} />
            </CustomDataProvider>
        )

        expect(spy).toHaveBeenCalledTimes(0)

        await userEvent.click(screen.getByRole('button', { name: 'Close' }))

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
