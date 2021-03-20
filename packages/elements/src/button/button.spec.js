import { mount } from 'enzyme'
import { Button } from './button.component.js'

describe('<Button>', () => {
    test('has class "toggled" if toggled is true', () => {
        const wrapper = mount(<Button toggled />)

        const actual = wrapper.find('button')
        expect(actual.hasClass('toggled')).toBe(true)
    })

    test('no class "toggled" if toggled is false', () => {
        const wrapper = mount(<Button />)

        const actual = wrapper.find('button')
        expect(actual.hasClass('toggled')).toBe(false)
    })

    test('the built-in classes are in addition to the custom one', () => {
        const wrapper = mount(<Button primary large className="foobar" />)

        const actual = wrapper.find('button')
        expect(actual.hasClass('foobar')).toBe(true)
        expect(actual.hasClass('primary')).toBe(true)
        expect(actual.hasClass('large')).toBe(true)
    })
})
