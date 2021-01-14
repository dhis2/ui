import { getInitials } from './TextIcon'

describe('TextIcon - getInitials', () => {
    it('should return initials when given a name', () => {
        const actual = getInitials('Some Name')
        const expected = 'SN'
        expect(actual).toBe(expected)
    })

    it('should handle single names', () => {
        const actual = getInitials('Name')
        const expected = 'N'
        expect(actual).toBe(expected)
    })

    it('should only return the first two initials', () => {
        const actual = getInitials('A Very Long Name')
        const expected = 'AV'
        expect(actual).toBe(expected)
    })
})
