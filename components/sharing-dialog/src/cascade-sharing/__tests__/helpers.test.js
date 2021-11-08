import { getResultMessage, getInfoMessage } from '../helpers.js'

describe('getResultMessage', () => {
    it('returns the expected message when there are errors and no updates', () => {
        const args = {
            itemsCount: 0,
            visualizationsCount: 0,
            hasErrors: true,
            updatedItems: 0,
        }

        expect(getResultMessage(args)).toMatchInlineSnapshot(
            `"No visualizations were updated. Check that you have permission to change sharing for all visualizations."`
        )
    })

    it('returns the expected message when there are errors and updates', () => {
        const args = {
            itemsCount: 1,
            visualizationsCount: 5,
            hasErrors: true,
            updatedItems: 2,
        }

        expect(getResultMessage(args)).toMatchInlineSnapshot(
            `"Not all visualizations could be updated successfully. 2 updated successfully, 3 failed to update. Check that you have permission to change sharing for all visualizations."`
        )
    })

    it('returns the expected message when there are no errors and no updates', () => {
        const args = {
            itemsCount: 1,
            visualizationsCount: 5,
            hasErrors: false,
            updatedItems: 0,
        }

        expect(getResultMessage(args)).toMatchInlineSnapshot(
            `"No visualizations were updated because sharing settings are already sufficient."`
        )
    })

    it('returns the expected message when there are no errors and all items were updated', () => {
        const args = {
            itemsCount: 1,
            visualizationsCount: 5,
            hasErrors: false,
            updatedItems: 5,
        }

        expect(getResultMessage(args)).toMatchInlineSnapshot(
            `"Successfully updated sharing for all visualizations."`
        )
    })

    it('returns the expected message when there are no errors and not all items were updated', () => {
        const args = {
            itemsCount: 1,
            visualizationsCount: 5,
            hasErrors: false,
            updatedItems: 2,
        }

        expect(getResultMessage(args)).toMatchInlineSnapshot(
            `"Not all visualization sharing settings needed to be updated. 2 updated, 3 already had sufficient sharing settings."`
        )
    })
})

describe('getInfoMessage', () => {
    it('returns the expected message when there are no entities', () => {
        const args = {
            entityAmount: 0,
            visualizationsCount: 0,
        }

        expect(getInfoMessage(args)).toMatchInlineSnapshot(
            `"There are no users, groups or roles to apply sharing settings for."`
        )
    })

    it('returns the expected message when there are entities', () => {
        const args = {
            entityAmount: 10,
            visualizationsCount: 5,
        }

        expect(getInfoMessage(args)).toMatchInlineSnapshot(
            `"Amount of visualizations on this dashboard that will potentially get updated sharing settings: 5. The amount of users or groups that these updated settings will apply to: 10."`
        )
    })
})
