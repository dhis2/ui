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

            expect(
                getByRole('button', {
                    name: 'Previous',
                })
            ).toBeDisabled()

            expect(
                getByRole('button', {
                    name: 'Next',
                })
            ).toBeDisabled()
        })

        it('prevents back navigation when on the first page', () => {
            const { getByRole } = render(
                <Pagination
                    {...mockPagers.atFirstPage}
                    onPageChange={() => {}}
                    onPageSizeChange={() => {}}
                />
            )
            expect(
                getByRole('button', {
                    name: 'Previous',
                })
            ).toBeDisabled()

            expect(
                getByRole('button', {
                    name: 'Next',
                })
            ).not.toBeDisabled()
        })

        it('prevents back navigation when navigating to the first page', () => {
            const { getByRole } = render(
                <Pagination
                    {...mockPagers.atSecondPage}
                    onPageChange={() => {}}
                    onPageSizeChange={() => {}}
                />
            )

            const previousButton = getByRole('button', {
                name: 'Previous',
            })

            userEvent.click(previousButton)

            expect(previousButton).toBeDisabled()

            expect(
                getByRole('button', {
                    name: 'Next',
                })
            ).not.toBeDisabled()
        })

        it('prevents forward navigation when on the last page', () => {
            const { getByRole } = render(
                <Pagination
                    {...mockPagers.atLastPage}
                    onPageChange={() => {}}
                    onPageSizeChange={() => {}}
                />
            )
            expect(
                getByRole('button', {
                    name: 'Previous',
                })
            ).not.toBeDisabled()

            expect(
                getByRole('button', {
                    name: 'Next',
                })
            ).toBeDisabled()
        })

        it('prevents forward navigation when navigating to the last page', () => {
            const { getByRole } = render(
                <Pagination
                    {...mockPagers.atPageBeforeLast}
                    onPageChange={() => {}}
                    onPageSizeChange={() => {}}
                />
            )

            const nextButton = getByRole('button', {
                name: 'Next',
            })

            userEvent.click(nextButton)

            expect(
                getByRole('button', {
                    name: 'Previous',
                })
            ).not.toBeDisabled()

            expect(nextButton).toBeDisabled()
        })

        it('re-enables buttons after page change', () => {
            const props = {
                ...mockPagers.atSecondPage,
                onPageChange: () => {},
                onPageSizeChange: () => {},
            }
            const { rerender, getByRole } = render(<Pagination {...props} />)

            const previousButton = getByRole('button', {
                name: 'Previous',
            })
            const nextButton = getByRole('button', {
                name: 'Next',
            })

            userEvent.click(previousButton)

            expect(previousButton).toBeDisabled()
            expect(nextButton).not.toBeDisabled()

            // re-render with a different value for page
            rerender(<Pagination {...props} page={4} />)

            expect(previousButton).not.toBeDisabled()
            expect(nextButton).not.toBeDisabled()
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
            expect(
                getByRole('button', {
                    name: 'Previous',
                })
            ).not.toBeDisabled()

            expect(
                getByRole('button', {
                    name: 'Next',
                })
            ).toBeDisabled()
        })

        it('prevents forward navigation during pending forward navigation', () => {
            const { getByRole } = render(<Pagination {...props} />)

            const previousButton = getByRole('button', {
                name: 'Previous',
            })
            const nextButton = getByRole('button', {
                name: 'Next',
            })

            expect(previousButton).not.toBeDisabled()
            expect(nextButton).not.toBeDisabled()

            userEvent.click(nextButton)

            expect(previousButton).not.toBeDisabled()
            expect(nextButton).toBeDisabled()
        })

        it('allows forward navigation during pending backward navigation', () => {
            const { getByRole } = render(<Pagination {...props} />)

            const previousButton = getByRole('button', {
                name: 'Previous',
            })
            const nextButton = getByRole('button', {
                name: 'Next',
            })

            expect(previousButton).not.toBeDisabled()
            expect(nextButton).not.toBeDisabled()

            userEvent.click(previousButton)

            expect(previousButton).not.toBeDisabled()
            expect(nextButton).not.toBeDisabled()
        })
    })
})
