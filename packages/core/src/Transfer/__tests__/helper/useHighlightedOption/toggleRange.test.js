import { toggleRange } from '../../../helper/useHighlightedOptions/toggleRange.js'

describe('Transfer- useHighlightedOptions - toggleRange', () => {
    const setHighlightedOptions = jest.fn()
    const options = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
        { label: 'Foobar', value: 'foobar' },
        { label: 'Foobaz', value: 'foobaz' },
        { label: 'Foobarbaz', value: 'foobarbaz' },
    ]

    afterEach(() => {
        setHighlightedOptions.mockClear()
    })

    describe('maxSelections=1', () => {
        const maxSelections = 1
        const highlightedOptions = options.slice(0, 1)
        const lastClicked = options[0]

        it('should replace the current highlighted option', () => {
            const option = options[1]
            const expected = [option]

            toggleRange({
                lastClicked,
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
                options,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should not change the highlighted options', () => {
            const option = options[0]
            const expected = highlightedOptions

            toggleRange({
                lastClicked,
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
                options,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })
    })

    describe('maxSelections=Infinity', () => {
        const maxSelections = Infinity
        const highlightedOptions = options.slice(0, 1)
        const lastClicked = options[0]

        it('should not change the highlighted options', () => {
            const option = options[0]
            const expected = highlightedOptions

            toggleRange({
                lastClicked,
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
                options,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should highlight all option from the highlighted one to the clicked one', () => {
            const expected = options.slice(0, 4)

            toggleRange({
                option: options[3],
                lastClicked,
                maxSelections,
                highlightedOptions,
                setHighlightedOptions,
                options,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should highlight from the lastClicked to the most recently clicked one', () => {
            const expected = options.slice(1, 4)

            toggleRange({
                option: options[3],
                lastClicked: options[1],
                maxSelections,
                highlightedOptions,
                setHighlightedOptions,
                options,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        /**
         * E. g. lastClicked is hidden because of a filter change
         */
        it('should highlight from the highest in list to the clicked when last clicked not visible anymore', () => {
            const expected = options.slice(1, 6)

            toggleRange({
                option: options[5],
                lastClicked: {
                    value: 'not visible anymore',
                    label: 'irrelevant',
                },
                maxSelections,
                highlightedOptions: [
                    ...options.slice(1, 2),
                    ...options.slice(3, 5),
                ],
                setHighlightedOptions,
                options,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        /**
         * E. g. lastClicked is null because all options so far
         * have been clicked with shift
         */
        it('should highlight from the highest in list to the clicked when last clicked null', () => {
            const expected = options.slice(1, 6)

            toggleRange({
                option: options[5],
                lastClicked: null,
                maxSelections,
                highlightedOptions: [
                    ...options.slice(1, 2),
                    ...options.slice(3, 5),
                ],
                setHighlightedOptions,
                options,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })
    })
})
