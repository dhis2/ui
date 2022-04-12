import '@testing-library/dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import * as mockPagers from '../__fixtures__/index.js'
import { Pagination } from '../pagination.js'

describe('<Pagination />', () => {
    describe('Pagination with total and totalPages', () => {
        const props = {
            ...mockPagers.atTenthPage,
            onPageChange: () => {},
            onPageSizeChange: () => {},
        }

        it('renders without errors', () => {
            render(<Pagination {...props} />)
        })

        it('renders a PageSelect and PageSizeSelect by default', () => {
            const { getByTestId } = render(<Pagination {...props} />)

            expect(
                getByTestId('dhis2-uiwidgets-pagination-page-select')
            ).toBeInTheDocument()
            expect(
                getByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).toBeInTheDocument()
        })

        it('renders without a PageSelect when hidePageSelect is true', () => {
            const { getByTestId, queryByTestId } = render(
                <Pagination {...props} hidePageSelect />
            )

            expect(
                queryByTestId('dhis2-uiwidgets-pagination-page-select')
            ).not.toBeInTheDocument()
            expect(
                getByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).toBeInTheDocument()
        })

        it('renders without a PageSelect when pageCount is not provided', () => {
            const { getByTestId, queryByTestId } = render(
                <Pagination {...props} pageCount={undefined} />
            )

            expect(
                queryByTestId('dhis2-uiwidgets-pagination-page-select')
            ).not.toBeInTheDocument()
            expect(
                getByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).toBeInTheDocument()
        })

        it('renders without a PageSelect when pageCount is 1', () => {
            const { getByTestId, queryByTestId } = render(
                <Pagination {...props} pageCount={1} />
            )

            expect(
                queryByTestId('dhis2-uiwidgets-pagination-page-select')
            ).not.toBeInTheDocument()
            expect(
                getByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).toBeInTheDocument()
        })

        it('renders without a PageSelect when pageCount is over 2000', () => {
            const { getByTestId, queryByTestId } = render(
                <Pagination {...props} pageCount={2001} />
            )

            expect(
                queryByTestId('dhis2-uiwidgets-pagination-page-select')
            ).not.toBeInTheDocument()
            expect(
                getByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).toBeInTheDocument()
        })

        it('renders without a PageSizeSelect when hidePageSizeSelect is true', () => {
            const { getByTestId, queryByTestId } = render(
                <Pagination {...props} hidePageSizeSelect />
            )

            expect(
                queryByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).not.toBeInTheDocument()
            expect(
                getByTestId('dhis2-uiwidgets-pagination-page-select')
            ).toBeInTheDocument()
        })

        it('renders without PageSelect and PageSizeSelect when both are true', () => {
            const { queryByTestId } = render(
                <Pagination {...props} hidePageSelect hidePageSizeSelect />
            )

            expect(
                queryByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).not.toBeInTheDocument()
            expect(
                queryByTestId('dhis2-uiwidgets-pagination-page-select')
            ).not.toBeInTheDocument()
        })

        it('disables all elements when disabled is true', () => {
            const { getByTestId, getByRole } = render(
                <Pagination {...props} disabled />
            )

            expect(
                getByTestId(
                    'dhis2-uiwidgets-pagination-pagesize'
                ).querySelector('.root.disabled')
            ).toBeInTheDocument()

            expect(
                getByTestId('dhis2-uiwidgets-pagination-summary').querySelector(
                    'span.inactive'
                )
            ).toBeInTheDocument()

            expect(
                getByTestId(
                    'dhis2-uiwidgets-pagination-page-select'
                ).querySelector('.root.disabled')
            ).toBeInTheDocument()

            expect(getByRole('button', { name: 'Previous' })).toBeDisabled()

            expect(getByRole('button', { name: 'Next' })).toBeDisabled()
        })

        it('prevents back navigation when on the first page', () => {
            const { getByRole } = render(
                <Pagination
                    {...mockPagers.atFirstPage}
                    onPageChange={() => {}}
                    onPageSizeChange={() => {}}
                />
            )
            expect(getByRole('button', { name: 'Previous' })).toBeDisabled()
            expect(getByRole('button', { name: 'Next' })).not.toBeDisabled()
        })
    })

    describe('Pagination without total and totalPages', () => {
        const props = {
            ...mockPagers.noTotal,
            pageLength: mockPagers.noTotal.pageSize,
            onPageChange: () => {},
            onPageSizeChange: () => {},
        }

        it('renders without errors', () => {
            render(<Pagination {...props} />)
        })

        it('renders with a PageSizeSelect but without a PageSelect', () => {
            const { queryByTestId, getByTestId } = render(
                <Pagination {...props} />
            )

            expect(
                getByTestId('dhis2-uiwidgets-pagination-pagesize')
            ).toBeInTheDocument()
            expect(
                queryByTestId('dhis2-uiwidgets-pagination-page-select')
            ).not.toBeInTheDocument()
        })

        it('prevents forward navigation when on the last page', () => {
            const { getByRole } = render(
                <Pagination {...props} {...mockPagers.noTotalAtLastPage} />
            )
            expect(getByRole('button', { name: 'Previous' })).not.toBeDisabled()
            expect(getByRole('button', { name: 'Next' })).toBeDisabled()
        })
    })

    describe('a page transition', () => {
        const props = {
            ...mockPagers.atTenthPage,
            onPageChange: () => {},
            onPageSizeChange: () => {},
        }
        const setup = () => {
            const { getByRole, getByTestId, getByText, rerender } = render(
                <Pagination {...props} />
            )
            const pageSizeSelect = getByTestId(
                'dhis2-uiwidgets-pagination-pagesize'
            ).querySelector('.select .root')
            const summarySpan = getByTestId(
                'dhis2-uiwidgets-pagination-summary'
            ).querySelector('span')
            const pageSelect = getByTestId(
                'dhis2-uiwidgets-pagination-page-select'
            ).querySelector('.select .root')
            const previousButton = getByRole('button', { name: 'Previous' })
            const nextButton = getByRole('button', { name: 'Next' })

            return {
                rerender,
                getByText,
                pageSizeSelect,
                summarySpan,
                pageSelect,
                previousButton,
                nextButton,
            }
        }

        it('it allows back and forward navigation when the component renders', () => {
            const { previousButton, nextButton, summarySpan, pageSelect } =
                setup()

            expect(summarySpan).not.toHaveClass('inactive')
            expect(pageSelect).not.toHaveClass('disabled')
            expect(previousButton).not.toBeDisabled()
            expect(nextButton).not.toBeDisabled()
        })

        it('prevents back and forwards navigation when previous button was clicked', () => {
            const { previousButton, nextButton, summarySpan, pageSelect } =
                setup()

            userEvent.click(previousButton)

            expect(pageSelect).not.toHaveClass('disabled')

            expect(summarySpan).toHaveClass('inactive')
            expect(previousButton).toBeDisabled()
            expect(nextButton).toBeDisabled()
        })

        it('prevents back and forwards navigation when next button was clicked', () => {
            const { previousButton, nextButton, summarySpan, pageSelect } =
                setup()

            userEvent.click(nextButton)

            expect(pageSelect).not.toHaveClass('disabled')

            expect(summarySpan).toHaveClass('inactive')
            expect(previousButton).toBeDisabled()
            expect(nextButton).toBeDisabled()
        })

        it('prevents back and forwards navigation when a new page was selected', () => {
            const {
                previousButton,
                nextButton,
                summarySpan,
                pageSelect,
                getByText,
            } = setup()

            userEvent.click(pageSelect)
            userEvent.click(getByText('3'))

            expect(pageSelect).not.toHaveClass('disabled')

            expect(summarySpan).toHaveClass('inactive')
            expect(previousButton).toBeDisabled()
            expect(nextButton).toBeDisabled()
        })

        it('prevents back and forwards navigation and page selection when a new page size was selected', () => {
            const {
                previousButton,
                nextButton,
                summarySpan,
                pageSelect,
                pageSizeSelect,
                getByText,
            } = setup()

            userEvent.click(pageSizeSelect)
            userEvent.click(getByText('75'))

            expect(pageSelect).toHaveClass('disabled')
            expect(summarySpan).toHaveClass('inactive')
            expect(previousButton).toBeDisabled()
            expect(nextButton).toBeDisabled()
        })

        it('re-enables back and forwards navigation after page change', () => {
            const {
                previousButton,
                nextButton,
                summarySpan,
                pageSelect,
                rerender,
            } = setup()

            userEvent.click(nextButton)

            // After click navigation is disabled
            expect(pageSelect).not.toHaveClass('disabled')
            expect(summarySpan).toHaveClass('inactive')
            expect(previousButton).toBeDisabled()
            expect(nextButton).toBeDisabled()

            // re-render with a different value for page to simulate a
            // new pager object being returned from a request
            rerender(<Pagination {...props} page={4} />)

            expect(summarySpan).not.toHaveClass('inactive')
            expect(pageSelect).not.toHaveClass('disabled')
            expect(previousButton).not.toBeDisabled()
            expect(nextButton).not.toBeDisabled()
        })
    })
})
