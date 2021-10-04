import { shallow } from 'enzyme'
import React from 'react'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    ACCESS_NONE,
} from '../sharing-constants.js'
import { SharingList } from '../sharing-list.js'

describe('<SharingList />', () => {
    it('renders an item for public access', () => {
        const props = {
            sharingSettings: {
                name: 'name',
                allowExternal: true,
                allowPublic: true,
                external: ACCESS_NONE,
                public: ACCESS_NONE,
                groups: {},
                users: {},
            },
        }
        const wrapper = shallow(<SharingList {...props} />)
        const publicItem = wrapper.findWhere(
            component => component.prop('target') === SHARE_TARGET_PUBLIC
        )

        expect(publicItem).toHaveLength(1)
        expect(publicItem.prop('name')).toEqual('All users')
        expect(publicItem.prop('access')).toEqual(props.sharingSettings.public)
    })

    it('renders a SharingListItem for user group access', () => {
        const id = 'groupId'
        const props = {
            sharingSettings: {
                name: 'name',
                allowExternal: true,
                allowPublic: true,
                external: ACCESS_NONE,
                public: ACCESS_NONE,
                groups: {
                    [id]: {
                        id,
                        name: 'Test group',
                        access: 'r-------',
                    },
                },
                users: {},
            },
        }
        const wrapper = shallow(<SharingList {...props} />)
        const groupItem = wrapper.findWhere(
            component => component.prop('target') === SHARE_TARGET_GROUP
        )

        expect(groupItem).toHaveLength(1)
        expect(groupItem.prop('name')).toEqual(
            props.sharingSettings.groups[id].name
        )
        expect(groupItem.prop('access')).toEqual(
            props.sharingSettings.groups[id].access
        )
    })

    it('renders a SharingListItem for user access', () => {
        const id = 'userId'
        const props = {
            sharingSettings: {
                name: 'name',
                allowExternal: true,
                allowPublic: true,
                external: ACCESS_NONE,
                public: ACCESS_NONE,
                groups: {},
                users: {
                    [id]: {
                        id,
                        name: 'User group',
                        access: 'rw------',
                    },
                },
            },
        }
        const wrapper = shallow(<SharingList {...props} />)
        const userItem = wrapper.findWhere(
            component => component.prop('target') === SHARE_TARGET_USER
        )

        expect(userItem).toHaveLength(1)
        expect(userItem.prop('name')).toEqual(
            props.sharingSettings.users[id].name
        )
        expect(userItem.prop('access')).toEqual(
            props.sharingSettings.users[id].access
        )
    })
})
