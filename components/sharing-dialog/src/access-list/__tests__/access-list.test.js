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
            groups: {},
            users: {},
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
        const props = {
            disableAllUsers: true,
            allUsersAccessLevel: ACCESS_NONE,
            groups: {
                [id]: {
                    id,
                    name: 'Test group',
                    access: 'r-------',
                },
            },
            users: {},
            onChange: () => {},
            onRemove: () => {},
        }

        const wrapper = shallow(<AccessList {...props} />)
        const groupItem = wrapper.findWhere(
            (component) => component.prop('target') === SHARE_TARGET_GROUP
        )

        expect(groupItem).toHaveLength(1)
        expect(groupItem.prop('name')).toEqual(props.groups[id].name)
        expect(groupItem.prop('access')).toEqual(props.groups[id].access)
    })

    it('renders a SharingListItem for user access', () => {
        const id = 'userId'
        const props = {
            disableAllUsers: true,
            allUsersAccessLevel: ACCESS_NONE,
            groups: {},
            users: {
                [id]: {
                    id,
                    name: 'User group',
                    access: 'rw------',
                },
            },
            onChange: () => {},
            onRemove: () => {},
        }

        const wrapper = shallow(<AccessList {...props} />)
        const userItem = wrapper.findWhere(
            (component) => component.prop('target') === SHARE_TARGET_USER
        )

        expect(userItem).toHaveLength(1)
        expect(userItem.prop('name')).toEqual(props.users[id].name)
        expect(userItem.prop('access')).toEqual(props.users[id].access)
    })
})
