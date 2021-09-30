import { SingleSelectField } from '@dhis2-ui/select'
import { mount } from 'enzyme'
import React from 'react'
import { AccessSelect } from '../access-select.js'
import { ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT } from '../sharing-constants.js'

describe('SharingDialog widget - AccessSelect component', () => {
    let shallowAccessSelectComponent
    let props

    const onChange = jest.fn()

    const getAccessSelectComponent = (props) => {
        if (!shallowAccessSelectComponent) {
            shallowAccessSelectComponent = mount(<AccessSelect {...props} />)
        }

        return shallowAccessSelectComponent
    }

    beforeEach(() => {
        shallowAccessSelectComponent = undefined
        props = {
            access: ACCESS_VIEW_ONLY,
            accessOptions: [ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT],
            disabled: false,
            label: 'Label',
            placeholder: 'Placeholder',
            prefix: 'Prefix',
            showRemoveOption: false,
            onChange,
        }
    })

    it('renders a SingleSelectField component ', () => {
        expect(
            getAccessSelectComponent(props).find(SingleSelectField)
        ).toHaveLength(1)
    })
})
