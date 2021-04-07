import { Button } from '@dhis2/ui-core'
import { shallow } from 'enzyme'
import React from 'react'
import { AccessSelect } from '../AccessSelect'
import { Autocomplete } from '../Autocomplete/Autocomplete'
import { ShareBlock } from '../ShareBlock'

describe('SharingDialog widget - ShareBlock component', () => {
    let shallowShareBlockComponent
    let props

    const onAdd = jest.fn()

    const getShareBlockComponent = props => {
        if (!shallowShareBlockComponent) {
            shallowShareBlockComponent = shallow(<ShareBlock {...props} />)
        }

        return shallowShareBlockComponent
    }

    beforeEach(() => {
        shallowShareBlockComponent = undefined
        props = {
            onAdd,
        }
    })

    it('renders the Autocomplete component ', () =>
        expect(getShareBlockComponent(props).find(Autocomplete)).toHaveLength(
            1
        ))

    it('renders the AccessSelect component', () =>
        expect(getShareBlockComponent(props).find(AccessSelect)).toHaveLength(
            1
        ))

    it('renders the Give access button', () => {
        const button = getShareBlockComponent(props).find(Button)

        expect(button).toHaveLength(1)
        expect(button.html()).toMatch('Give access')
    })
})
