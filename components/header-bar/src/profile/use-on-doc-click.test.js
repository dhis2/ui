import { renderHook } from '@testing-library/react-hooks'
import { useOnDocClick } from './use-on-doc-click.js'

describe('useOnDocClick', () => {
    let eventListenerMap = {}
    const hide = jest.fn()

    jest.spyOn(document, 'addEventListener').mockImplementation(
        (event, callback) => {
            eventListenerMap[event] = callback
        }
    )

    beforeEach(() => {
        eventListenerMap = {}
    })

    afterEach(() => {
        document.addEventListener.mockClear()
        hide.mockClear()
    })

    it('should call the hide function when clicking outside', () => {
        const el = document.createElement('span')
        const containerRef = { current: el }
        renderHook(() => useOnDocClick(containerRef, hide))

        eventListenerMap.click({ target: document.body })
        expect(hide).toHaveBeenCalled()
    })

    it('should not call the hide function when clicking inside', () => {
        const el = document.createElement('span')
        const containerRef = { current: el }
        renderHook(() => useOnDocClick(containerRef, hide))

        eventListenerMap.click({ target: el })
        expect(hide).not.toHaveBeenCalled()
    })
})
