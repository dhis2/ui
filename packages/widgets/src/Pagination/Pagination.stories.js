import React from 'react'
import * as pagers from './__fixtures__'
import { Pagination } from './Pagination.js'

export default { title: 'Pagination', component: Pagination }

const logOnPageChange = page => {
    console.log(`Now navigate to page ${page}...`)
}

const logOnPageSizeChange = pageSize => {
    console.log(`Now change page size to ${pageSize}...`)
}

export const Default = () => (
    <Pagination
        {...pagers.atTenthPage}
        onPageChange={logOnPageChange}
        onPageSizeChange={logOnPageSizeChange}
    />
)

export const PagerAtFirstPage = () => (
    <Pagination
        {...pagers.atFirstPage}
        onPageChange={logOnPageChange}
        onPageSizeChange={logOnPageSizeChange}
    />
)

export const PagerAtLastPage = () => (
    <Pagination
        {...pagers.atLastPage}
        onPageChange={logOnPageChange}
        onPageSizeChange={logOnPageSizeChange}
    />
)

export const WithoutPageSizeSelect = () => (
    <Pagination
        {...pagers.atTenthPage}
        onPageChange={logOnPageChange}
        onPageSizeChange={logOnPageSizeChange}
        hidePageSizeSelect
    />
)

export const WithoutGoToPageSelect = () => (
    <Pagination
        {...pagers.atTenthPage}
        onPageChange={logOnPageChange}
        onPageSizeChange={logOnPageSizeChange}
        hidePageSelect
    />
)

export const WithoutAnySelect = () => (
    <Pagination
        {...pagers.atTenthPage}
        onPageChange={logOnPageChange}
        onPageSizeChange={logOnPageSizeChange}
        hidePageSizeSelect
        hidePageSelect
    />
)
