import { IconWorld24, IconUserGroup24 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { Avatar } from '../avatar'
import {
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
} from '../sharing-constants'
import { SharingListItemIcon } from '../sharing-list-item-icon'

describe('<SharingListItemIcon />', () => {
    it('renders a world icon for external targets', () => {
        const wrapper = shallow(
            <SharingListItemIcon target={SHARE_TARGET_EXTERNAL} />
        )
        const icon = wrapper.find(IconWorld24)

        expect(icon.length === 1).toBe(true)
    })

    it('renders a user group icon for public targets', () => {
        const wrapper = shallow(
            <SharingListItemIcon target={SHARE_TARGET_PUBLIC} />
        )
        const icon = wrapper.find(IconUserGroup24)

        expect(icon.length === 1).toBe(true)
    })

    it('renders a user group icon for group targets', () => {
        const wrapper = shallow(
            <SharingListItemIcon target={SHARE_TARGET_GROUP} />
        )
        const icon = wrapper.find(IconUserGroup24)

        expect(icon.length === 1).toBe(true)
    })

    it('renders an avatar for user targets', () => {
        const wrapper = shallow(
            <SharingListItemIcon target={SHARE_TARGET_USER} />
        )
        const icon = wrapper.find(Avatar)

        expect(icon.length === 1).toBe(true)
    })

    it('returns null for unrecognized targets', () => {
        const wrapper = shallow(
            <SharingListItemIcon target={'does not exist'} />
        )

        expect(wrapper.isEmptyRender()).toBe(true)
    })
})
