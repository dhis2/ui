import React from 'react'
import * as pagers from './__fixtures__'
import { Pagination } from './Pagination.js'

const subtitle = 'Allows navigation through data displayed over several pages'

const description = `
Pagination allows data to be split in pages. Paging large amounts of data avoids overwhelming users and should always be used wherever a lot of data is displayed. Pagination controls allow a user to browse through a set of data or navigate to a specific page depending on the type of pagination used.

**Do not rely on pagination for navigating datasets. A user should be able to search within, sort and filter datasets too, rather than needing to click through many pages looking for the right data item.**

\`\`\`js
import { Pagination } from '@dhis2/ui'
\`\`\`

_**Note**: Dropdown menus may not display properly on this page. View these demos in the 'Canvas' tab._
`

const logOnPageChange = page => {
    console.log(`Now navigate to page ${page}...`)
}

const logOnPageSizeChange = pageSize => {
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
        // Fixes 'defaultProps' errors for storybook
        ...Pagination.defaultProps,
        onPageChange: logOnPageChange,
        onPageSizeChange: logOnPageSizeChange,
        ...pagers.atTenthPage,
    },
}

const Template = args => <Pagination {...args} />

export const Default = Template.bind({})

export const PagerAtFirstPage = Template.bind({})
PagerAtFirstPage.args = { ...pagers.atFirstPage }

export const PagerAtLastPage = Template.bind({})
PagerAtLastPage.args = { ...pagers.atLastPage }

export const WithoutPageSizeSelect = Template.bind({})
WithoutPageSizeSelect.args = { hidePageSizeSelect: true }

export const WithoutGoToPageSelect = Template.bind({})
WithoutGoToPageSelect.args = { hidePageSelect: true }

export const WithoutAnySelect = Template.bind({})
WithoutAnySelect.args = {
    ...WithoutGoToPageSelect.args,
    ...WithoutPageSizeSelect.args,
}
