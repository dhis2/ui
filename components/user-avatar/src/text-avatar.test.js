import { getInitials } from './text-avatar.js'

describe('TextAvatar - getInitials', () => {
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

    it('should return the first and last initials', () => {
        const actual = getInitials('A Very Long Name')
        const expected = 'AN'
        expect(actual).toBe(expected)
    })

    it('should handle utf-8 multi byte characters', () => {
        const actual = getInitials('恨恨 한한한')
        const expected = '恨한'
        expect(actual).toBe(expected)
    })
})
