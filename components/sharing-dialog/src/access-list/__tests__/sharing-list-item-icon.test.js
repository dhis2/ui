import { IconWorld24, IconUserGroup24 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { IconInitials } from '../icon-initials.js'
import {
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
} from '../../sharing-constants.js'
import { SharingListItemIcon } from '../sharing-list-item-icon.js'

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

    it('renders an icon with initials for user targets', () => {
        const wrapper = shallow(
            <SharingListItemIcon target={SHARE_TARGET_USER} name="Name" />
        )
        const icon = wrapper.find(IconInitials)

        expect(icon.length === 1).toBe(true)
    })

    it('returns null for unrecognized targets', () => {
        const wrapper = shallow(
            <SharingListItemIcon target={'does not exist'} />
        )

        expect(wrapper.isEmptyRender()).toBe(true)
    })
})
