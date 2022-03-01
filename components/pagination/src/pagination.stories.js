import i18n from '@dhis2/d2-i18n'
import React from 'react'
import * as pagers from './__fixtures__/index.js'
import { Pagination } from './pagination.js'

const subtitle = 'Allows navigation through data displayed over several pages'

const description = `
Pagination allows data to be split in pages. Paging large amounts of data avoids overwhelming users and should always be used wherever a lot of data is displayed. Pagination controls allow a user to browse through a set of data or navigate to a specific page depending on the type of pagination used.

**Do not rely on pagination for navigating datasets. A user should be able to search within, sort and filter datasets too, rather than needing to click through many pages looking for the right data item.**

\`\`\`js
import { Pagination } from '@dhis2/ui'
\`\`\`

_**Note**: Dropdown menus may not display properly on this page. View these demos in the 'Canvas' tab._
`

const logOnPageChange = (page) => {
    console.log(`Now navigate to page ${page}...`)
}

const logOnPageSizeChange = (pageSize) => {
    console.log(`Now change page size to ${pageSize}...`)
}

export default {
    title: 'Navigation/Pagination',
    component: Pagination,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    // Default args for stories
    args: {
        onPageChange: logOnPageChange,
        onPageSizeChange: logOnPageSizeChange,
    },
}

const Template = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = { ...pagers.atTenthPage }

export const PagerAtFirstPage = Template.bind({})
PagerAtFirstPage.args = { ...pagers.atFirstPage }

export const PagerAtLastPage = Template.bind({})
PagerAtLastPage.args = { ...pagers.atLastPage }

export const NoTotal = Template.bind({})
NoTotal.args = { ...pagers.noTotal }

export const NoTotalAtLastPage = Template.bind({})
NoTotalAtLastPage.args = { ...pagers.noTotalAtLastPage, pageLength: 26 }

export const WithoutPageSizeSelect = Template.bind({})
WithoutPageSizeSelect.args = { ...pagers.atTenthPage, hidePageSizeSelect: true }

export const WithoutGoToPageSelect = Template.bind({})
WithoutGoToPageSelect.args = { ...pagers.atTenthPage, hidePageSelect: true }

export const WithoutPageSummary = Template.bind({})
WithoutPageSummary.args = { ...pagers.atTenthPage, hidePageSummary: true }

export const WithCustomPageSummary = Template.bind({})
WithCustomPageSummary.args = {
    ...pagers.atTenthPage,
    pageSummaryText: (interpolationObject) =>
        i18n.t(
            'You are at page {{page}} showing items {{firstItem}}-{{lastItem}}, but there are {{pageCount}} pages and {{total}} items',
            interpolationObject
        ),
}

export const WithoutAnySelect = Template.bind({})
WithoutAnySelect.args = {
    ...pagers.atTenthPage,
    ...WithoutGoToPageSelect.args,
    ...WithoutPageSizeSelect.args,
}
