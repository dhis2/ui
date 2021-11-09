import { useConfig } from '@dhis2/app-runtime'
import { useAvatarImgSrc } from './image-avatar.js'

jest.mock('@dhis2/app-runtime', () => ({
    useConfig: jest.fn(),
}))

describe('ImageAvatar - useAvatarImgSrc', () => {
    it('should produce a correct url for an absolute baseUrl', () => {
        useConfig.mockReturnValueOnce({ baseUrl: 'http://example.com' })
        const src = useAvatarImgSrc('some_id')

        expect(src).toBe('http://example.com/api/fileResources/some_id/data')
    })
    it('should produce a correct url for a relative baseUrl', () => {
        useConfig.mockReturnValueOnce({ baseUrl: '..' })
        const src = useAvatarImgSrc('some_id')

        expect(src).toBe('../api/fileResources/some_id/data')
    })
})
