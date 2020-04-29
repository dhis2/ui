import React from 'react'

import { createChildren } from '../../../common/createChildren'
import { toggleRange } from '../../../../Transfer/helper/useHighlightedOptions/toggleRange'

describe('Transfer- useHighlightedOptions - toggleRange', () => {
    const setHighlightedOptions = jest.fn()
    const plainOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
        { label: 'Foobar', value: 'foobar' },
        { label: 'Foobaz', value: 'foobaz' },
        { label: 'Foobarbaz', value: 'foobarbaz' },
    ]
    const reactOptions = createChildren(
        ...plainOptions.map(plainOption =>
            React.createElement('span', {
                ...plainOption,
                key: plainOption.value,
            })
        )
    )

    afterEach(() => {
        setHighlightedOptions.mockClear()
    })

    describe('maxSelections=1', () => {
        const maxSelections = 1
        const highlightedOptions = plainOptions.slice(0, 1)
        const lastClicked = plainOptions[0]

        it('should replace the current highlighted option', () => {
            const option = plainOptions[1]
            const expected = [option]

            toggleRange({
                lastClicked,
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
                reactOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should not change the highlighted options', () => {
            const option = plainOptions[0]
            const expected = highlightedOptions

            toggleRange({
                lastClicked,
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
                reactOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })
    })

    describe('maxSelections=Infinity', () => {
        const maxSelections = Infinity
        const highlightedOptions = plainOptions.slice(0, 1)
        const lastClicked = plainOptions[0]

        it('should not change the highlighted options', () => {
            const option = plainOptions[0]
            const expected = highlightedOptions

            toggleRange({
                lastClicked,
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
                reactOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should highlight all option from the highlighted one to the clicked one', () => {
            const expected = plainOptions.slice(0, 4)

            toggleRange({
                option: plainOptions[3],
                lastClicked,
                maxSelections,
                highlightedOptions,
                setHighlightedOptions,
                reactOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should highlight from the lastClicked to the most recently clicked one', () => {
            const expected = plainOptions.slice(1, 4)

            toggleRange({
                option: plainOptions[3],
                lastClicked: plainOptions[1],
                maxSelections,
                highlightedOptions,
                setHighlightedOptions,
                reactOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        /**
         * E. g. lastClicked is hidden because of a filter change
         */
        it('should highlight from the highest in list to the clicked when last clicked not visible anymore', () => {
            const expected = plainOptions.slice(1, 6)

            toggleRange({
                option: plainOptions[5],
                lastClicked: {
                    value: 'not visible anymore',
                    label: 'irrelevant',
                },
                maxSelections,
                highlightedOptions: [
                    ...plainOptions.slice(1, 2),
                    ...plainOptions.slice(3, 5),
                ],
                setHighlightedOptions,
                reactOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        /**
         * E. g. lastClicked is null because all options so far
         * have been clicked with shift
         */
        it('should highlight from the highest in list to the clicked when last clicked null', () => {
            const expected = plainOptions.slice(1, 6)

            toggleRange({
                option: plainOptions[5],
                lastClicked: null,
                maxSelections,
                highlightedOptions: [
                    ...plainOptions.slice(1, 2),
                    ...plainOptions.slice(3, 5),
                ],
                setHighlightedOptions,
                reactOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })
    })
})
