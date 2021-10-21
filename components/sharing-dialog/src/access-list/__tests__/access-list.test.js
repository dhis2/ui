import { shallow } from 'enzyme'
import React from 'react'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    ACCESS_NONE,
} from '../../sharing-constants.js'
import { AccessList } from '../access-list.js'

describe('<AccessList />', () => {
    it('renders an item for public access', () => {
        const props = {
            disableAllUsers: true,
            allUsersAccessLevel: ACCESS_NONE,
            groups: [],
            users: [],
            onChange: () => {},
            onRemove: () => {},
        }
        const wrapper = shallow(<AccessList {...props} />)
        const publicItem = wrapper.findWhere(
            (component) => component.prop('target') === SHARE_TARGET_PUBLIC
        )

        expect(publicItem).toHaveLength(1)
        expect(publicItem.prop('name')).toEqual('All users')
        expect(publicItem.prop('access')).toEqual(props.allUsersAccessLevel)
    })

    it('renders a SharingListItem for user group access', () => {
        const id = 'groupId'
        const name = 'Name'
        const access = 'r-------'
        const props = {
            disableAllUsers: true,
            allUsersAccessLevel: ACCESS_NONE,
            groups: [
                {
                    id,
                    name,
                    access,
                },
            ],
            users: [],
            onChange: () => {},
            onRemove: () => {},
        }

        const wrapper = shallow(<AccessList {...props} />)
        const groupItem = wrapper.findWhere(
            (component) => component.prop('target') === SHARE_TARGET_GROUP
        )

        expect(groupItem).toHaveLength(1)
        expect(groupItem.prop('name')).toEqual(name)
        expect(groupItem.prop('access')).toEqual(access)
    })

    it('renders a SharingListItem for user access', () => {
        const id = 'userId'
        const name = 'Name'
        const access = 'rw------'
        const props = {
            disableAllUsers: true,
            allUsersAccessLevel: ACCESS_NONE,
            groups: [],
            users: [
                {
                    id,
                    name,
                    access,
                },
            ],
            onChange: () => {},
            onRemove: () => {},
        }

        const wrapper = shallow(<AccessList {...props} />)
        const userItem = wrapper.findWhere(
            (component) => component.prop('target') === SHARE_TARGET_USER
        )

        expect(userItem).toHaveLength(1)
        expect(userItem.prop('name')).toEqual(name)
        expect(userItem.prop('access')).toEqual(access)
    })
})
