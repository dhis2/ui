import React from 'react'
import { shallow } from 'enzyme'

import { SharingList } from '../SharingList'
import {
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    defaultSharingSettings,
} from '../sharingConstants'

describe('SharingDialog widget - SharingList component', () => {
    let shallowSharingListComponent
    let props

    const onChange = jest.fn()
    const onRemove = jest.fn()

    const getSharingListComponent = props => {
        if (!shallowSharingListComponent) {
            shallowSharingListComponent = shallow(<SharingList {...props} />)
        }

        return shallowSharingListComponent
    }

    beforeEach(() => {
        shallowSharingListComponent = undefined
        props = {
            sharingSettings: defaultSharingSettings,
            onChange,
            onRemove,
        }
    })

    it('renders a SharingListItem for external access', () => {
        const external = getSharingListComponent(props).findWhere(
            n => n.prop('target') === SHARE_TARGET_EXTERNAL
        )

        expect(external).toHaveLength(1)
        expect(external.prop('name')).toEqual('External users')
        expect(external.prop('access')).toEqual(defaultSharingSettings.external)
    })

    it('renders a SharingListItem for public access', () => {
        const external = getSharingListComponent(props).findWhere(
            n => n.prop('target') === SHARE_TARGET_PUBLIC
        )

        expect(external).toHaveLength(1)
        expect(external.prop('name')).toEqual('All users')
        expect(external.prop('access')).toEqual(defaultSharingSettings.public)
    })

    it('renders a SharingListItem for a user group access', () => {
        const groupId = 'test-group-id'

        props.sharingSettings.groups = {
            [groupId]: {
                id: groupId,
                name: 'Test group',
                access: 'r-------',
            },
        }

        const group = getSharingListComponent(props).findWhere(
            n => n.prop('target') === SHARE_TARGET_GROUP
        )

        expect(group).toHaveLength(1)
        expect(group.prop('name')).toEqual(
            props.sharingSettings.groups[groupId].name
        )
        expect(group.prop('access')).toEqual(
            props.sharingSettings.groups[groupId].access
        )
    })

    it('renders a SharingListItem for a user access', () => {
        const userId = 'test-user-id'

        props.sharingSettings.users = {
            [userId]: {
                id: userId,
                name: 'User group',
                access: 'rw------',
            },
        }

        const user = getSharingListComponent(props).findWhere(
            n => n.prop('target') === SHARE_TARGET_USER
        )

        expect(user).toHaveLength(1)
        expect(user.prop('name')).toEqual(
            props.sharingSettings.users[userId].name
        )
        expect(user.prop('access')).toEqual(
            props.sharingSettings.users[userId].access
        )
    })
})
