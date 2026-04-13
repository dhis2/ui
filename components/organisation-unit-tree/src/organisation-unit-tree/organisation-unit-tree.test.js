import { CustomDataProvider } from '@dhis2/app-runtime'
import { shallow } from 'enzyme'
import React from 'react'
import { OrganisationUnitTree } from './organisation-unit-tree.tsx'

describe('OrganisationUnitTree', () => {
    it('should render without crashing when all required props are provided', () => {
        const wrapper = shallow(
            <CustomDataProvider data={{}}>
                <OrganisationUnitTree roots="/A001" onChange={() => {}} />
            </CustomDataProvider>
        )

        expect(wrapper.exists()).toBe(true)
    })

    it('should render with controlled expanded props', () => {
        const wrapper = shallow(
            <CustomDataProvider data={{}}>
                <OrganisationUnitTree
                    roots="/A001"
                    expanded={[]}
                    onChange={() => {}}
                    handleExpand={() => {}}
                    handleCollapse={() => {}}
                />
            </CustomDataProvider>
        )

        expect(wrapper.exists()).toBe(true)
    })
})
