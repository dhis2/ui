import { IconUserGroup24 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { Avatar } from '../avatar'
import {
    ACCESS_NONE,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
} from '../sharing-constants'
import { SharingListItem } from '../sharing-list-item'

describe('<SharingListItem />', () => {
    describe('public access', () => {
        it('renders the expected components', () => {
            const props = {
                access: ACCESS_NONE,
                accessOptions: [],
                disabled: false,
                name: 'Public test',
                target: SHARE_TARGET_PUBLIC,
                onChange: () => {},
                onRemove: () => {},
            }
            const wrapper = shallow(<SharingListItem {...props} />)
            const icons = wrapper.find(IconUserGroup24)
            const entity = wrapper.find('.share-entity')
            const context = wrapper.find('.share-context')

            expect(icons).toHaveLength(1)
            expect(entity.text()).toContain(props.name)
            expect(context.text()).toMatchInlineSnapshot()
        })
    })

    describe('group access', () => {
        it('renders the expected components', () => {
            const props = {
                access: ACCESS_NONE,
                accessOptions: [],
                disabled: false,
                name: 'Group test',
                target: SHARE_TARGET_GROUP,
                onChange: () => {},
                onRemove: () => {},
            }
            const wrapper = shallow(<SharingListItem {...props} />)
            const icons = wrapper.find(IconUserGroup24)
            const entity = wrapper.find('.share-entity')
            const context = wrapper.find('.share-context')

            expect(icons).toHaveLength(1)
            expect(entity.text()).toContain(props.name)
            expect(context.text()).toMatchInlineSnapshot()
        })
    })

    describe('user access', () => {
        it('renders the expected components', () => {
            const props = {
                access: ACCESS_NONE,
                accessOptions: [],
                disabled: false,
                name: 'User test',
                target: SHARE_TARGET_USER,
                onChange: () => {},
                onRemove: () => {},
            }
            const wrapper = shallow(<SharingListItem {...props} />)
            const icons = wrapper.find(Avatar)
            const entity = wrapper.find('.share-entity')
            const context = wrapper.find('.share-context')

            expect(icons).toHaveLength(1)
            expect(entity.text()).toContain(props.name)
            expect(context.text()).toMatchInlineSnapshot()
        })
    })
})
