import { IconWorld24, IconUserGroup24 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { Avatar } from '../icons/Avatar'
import {
    ACCESS_NONE,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
    accessStrings,
} from '../sharingConstants'
import { SharingListItem } from '../SharingListItem'

describe('SharingDialog widget - SharingListItem component', () => {
    let shallowSharingListItemComponent
    let props

    const onChange = jest.fn()
    const onRemove = jest.fn()

    const getSharingListItemComponent = props => {
        if (!shallowSharingListItemComponent) {
            shallowSharingListItemComponent = shallow(
                <SharingListItem {...props} />
            )
        }

        return shallowSharingListItemComponent
    }

    describe('external access', () => {
        beforeEach(() => {
            shallowSharingListItemComponent = undefined
            props = {
                access: ACCESS_NONE,
                accessOptions: [],
                disabled: false,
                name: 'External test',
                target: SHARE_TARGET_EXTERNAL,
                onChange,
                onRemove,
            }
        })

        it('renders the icon for external access', () =>
            expect(
                getSharingListItemComponent(props).find(IconWorld24)
            ).toHaveLength(1))

        it('renders the label for external access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-entity').html()
            ).toMatch(props.name))

        it('renders the description for external access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-context').html()
            ).toMatch(accessStrings[props.access].description()))
    })

    describe('public access', () => {
        beforeEach(() => {
            shallowSharingListItemComponent = undefined
            props = {
                access: ACCESS_NONE,
                accessOptions: [],
                disabled: false,
                name: 'Public test',
                target: SHARE_TARGET_PUBLIC,
                onChange,
                onRemove,
            }
        })

        it('renders the icon for public access', () =>
            expect(
                getSharingListItemComponent(props).find(IconUserGroup24)
            ).toHaveLength(1))

        it('renders the label for public access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-entity').html()
            ).toMatch(props.name))

        it('renders the description for public access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-context').html()
            ).toMatch(accessStrings[props.access].publicDescription()))
    })

    describe('group access', () => {
        beforeEach(() => {
            shallowSharingListItemComponent = undefined
            props = {
                access: ACCESS_NONE,
                accessOptions: [],
                disabled: false,
                name: 'Group test',
                target: SHARE_TARGET_GROUP,
                onChange,
                onRemove,
            }
        })

        it('renders the icon for group access', () =>
            expect(
                getSharingListItemComponent(props).find(IconUserGroup24)
            ).toHaveLength(1))

        it('renders the label for group access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-entity').html()
            ).toMatch(props.name))

        it('renders the description for group access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-context').html()
            ).toMatch(accessStrings[props.access].description()))
    })

    describe('user access', () => {
        beforeEach(() => {
            shallowSharingListItemComponent = undefined
            props = {
                access: ACCESS_NONE,
                accessOptions: [],
                disabled: false,
                name: 'User test',
                target: SHARE_TARGET_USER,
                onChange,
                onRemove,
            }
        })

        it('renders the icon for user access', () =>
            expect(
                getSharingListItemComponent(props).find(Avatar)
            ).toHaveLength(1))

        it('renders the label for user access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-entity').html()
            ).toMatch(props.name))

        it('renders the description for user access', () =>
            expect(
                getSharingListItemComponent(props).find('.share-context').html()
            ).toMatch(accessStrings[props.access].description()))
    })
})
