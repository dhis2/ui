import React from 'react'

import { TransferOption } from '../../../TransferOption'
import { createChildren } from '../../common/createChildren'
import { filterReactOptionsBy } from '../../../Transfer/helper/filterReactOptionsBy'

describe('Transfer - filterReactOptionsBy', () => {
    it('should return all enabled options', () => {
        const reactOptions = createChildren(
            <TransferOption key="foo" label="Foo" value="foo" />,
            <TransferOption key="bar" label="Bar" value="bar" disabled />,
            <TransferOption key="baz" label="Baz" value="baz" />,
            <TransferOption
                disabled
                key="foobar"
                label="Foobar"
                value="foobar"
            />,
            <TransferOption key="foobaz" label="Foobaz" value="foobaz" />
        )

        const expectedChildren = createChildren(
            <TransferOption key="foo" label="Foo" value="foo" />,
            <TransferOption key="baz" label="Baz" value="baz" />,
            <TransferOption key="foobaz" label="Foobaz" value="foobaz" />
        )

        const actualChildren = filterReactOptionsBy(
            ({ disabled }) => !disabled,
            reactOptions
        )

        const expected = expectedChildren.map(child => child.props)
        const actual = actualChildren.map(child => child.props)

        expect(actual).toEqual(expected)
    })
})
