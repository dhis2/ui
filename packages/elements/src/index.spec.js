import { mount } from 'enzyme'

import * as elements from './index.js'

/**
 * These tests must pass for all UI Elements.
 */
describe('UI Elements API consistency', () => {
    for (const element in elements) {
        const Component = elements[element]

        describe(Component.displayName, () => {
            test('default dataTest attribute', () => {
                const wrapper = mount(<Component />)
                const dataTest = wrapper.prop('dataTest')

                expect(dataTest.startsWith('dhis2-uielements-')).toBe(true)
            })

            test('custom dataTest attribute', () => {
                const dataTest = 'custom-data-test'
                const wrapper = mount(<Component dataTest={dataTest} />)

                expect(wrapper.prop('dataTest')).toEqual(dataTest)
            })

            test('custom props', () => {
                const button = mount(<Component foo="bar" fuz={{buz: 'yikes'}} />)

                expect(button.props().foo).toEqual('bar')
                expect(button.props().fuz.buz).toEqual('yikes')
            })

            test('custom class', () => {
                const wrapper = mount(<Component className="foobar" />)
                const actual = wrapper.find('button')

                expect(actual.hasClass('foobar')).toBe(true)
            })

            test('forwarded ref', () => {
                const ref = React.createRef()
                const wrapper = mount(<Component ref={ref}>foobar</Component>)

                expect(wrapper.first().getElement().ref).toEqual(ref)
            })
        })
    }
})

