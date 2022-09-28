import { shallow } from 'enzyme'
import React from 'react'
import {
    getMatchingSegments,
    OrganisationUnitNodeText,
} from './organisation-unit-node-text.js'

describe('OrganisationUnitNodeText', () => {
    it('renders `displayName` when no `filteredString` is provided', () => {
        const wrapper = shallow(
            <OrganisationUnitNodeText
                isDisabled={false}
                toggleOpen={() => {}}
                displayName="the quick brown fox jumps over the lazy dog"
                filteredString=""
                isFilterMatch
            />
        )
        // 1 extra for styles
        expect(wrapper.children()).toHaveLength(2)
        expect(wrapper.find('span.highlight')).toHaveLength(0)
    })
    it('renders `displayName` when not `isFilterMatch`', () => {
        const wrapper = shallow(
            <OrganisationUnitNodeText
                isDisabled={false}
                toggleOpen={() => {}}
                displayName="the quick brown fox jumps over the lazy dog"
                filteredString="fox"
                isFilterMatch={false}
            />
        )
        // 1 extra for styles
        expect(wrapper.children()).toHaveLength(2)
        expect(wrapper.find('span.highlight')).toHaveLength(0)
    })
    it('renders `displayName` when `isFilterMatch`, `filteredString` not in `displayName`', () => {
        const wrapper = shallow(
            <OrganisationUnitNodeText
                isDisabled={false}
                toggleOpen={() => {}}
                displayName="the quick brown fox jumps over the lazy dog"
                isFilterMatch
                filteredString="aaaaaaaaaa"
            />
        )
        // 1 extra for styles
        expect(wrapper.children()).toHaveLength(2)
        expect(wrapper.find('span.highlight')).toHaveLength(0)
    })
    it('renders highlight spans when `isFilterMatch`, `filteredString` in `displayName`', () => {
        const wrapper = shallow(
            <OrganisationUnitNodeText
                isDisabled={false}
                toggleOpen={() => {}}
                displayName="the quick brown fox jumps over the lazy dog"
                isFilterMatch
                filteredString="fox"
            />
        )
        // 1 extra for styles
        expect(wrapper.children()).toHaveLength(4)
        expect(wrapper.find('span.highlight')).toHaveLength(1)
    })
    describe('getMatchingSegments', () => {
        it('handles a match at the middle of a string', () => {
            expect(
                getMatchingSegments(
                    'the quick brown fox jumps over the lazy dog',
                    'fox',
                    true
                )
            ).toMatchSnapshot()
        })
        it('handles a match at the start of a string', () => {
            expect(
                getMatchingSegments(
                    'the quick brown fox jumps over the lazy dog',
                    'the',
                    true
                )
            ).toMatchSnapshot()
        })
        it('handles a match at the end of a string', () => {
            expect(
                getMatchingSegments(
                    'the quick brown fox jumps over the lazy dog',
                    'dog',
                    true
                )
            ).toMatchSnapshot()
        })
        it('is case insensitive', () => {
            expect(
                getMatchingSegments(
                    'the quick brown FOX jumps over the lazy dog',
                    'fOx',
                    true
                )
            ).toMatchSnapshot()
        })
        it('treats spaces like regular characters', () => {
            expect(
                getMatchingSegments(
                    'the quick brown fox jumps over the lazy dog',
                    'quick brown fox',
                    true
                )
            ).toMatchSnapshot()
        })
        it('handles multiple matches', () => {
            expect(
                getMatchingSegments(
                    'the quick brown fox jumps over the lazy dog',
                    'the',
                    true
                )
            ).toMatchSnapshot()
        })
    })
})
