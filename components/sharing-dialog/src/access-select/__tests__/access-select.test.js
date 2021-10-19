import { SingleSelectField } from '@dhis2-ui/select'
import { shallow } from 'enzyme'
import React from 'react'
import {
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../../sharing-constants.js'
import { AccessSelect } from '../access-select.js'

describe('<AccessSelect />', () => {
    it('renders a single SingleSelectField ', () => {
        const props = {
            access: ACCESS_VIEW_ONLY,
            accessOptions: [ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT],
            disabled: false,
            label: 'Label',
            placeholder: 'Placeholder',
            prefix: 'Prefix',
            showRemoveOption: false,
            onChange: () => {},
        }
        const wrapper = shallow(<AccessSelect {...props} />)
        const singleSelectFields = wrapper.find(SingleSelectField)

        expect(singleSelectFields).toHaveLength(1)
    })
})
