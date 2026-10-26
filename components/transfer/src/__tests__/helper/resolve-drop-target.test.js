import { resolveDropTarget } from '../../transfer/resolve-drop-target.js'

describe('Transfer - resolveDropTarget', () => {
    const defaults = {
        draggedValues: ['dragged'],
        enableOrderChange: true,
        filterActivePicked: false,
    }
    // A 20px tall row starting at y=100, midline at y=110
    const overRect = { top: 100, height: 20 }

    it('should return null when not over anything', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'source',
                overSide: undefined,
            })
        ).toBeNull()
    })

    it('should return null when dragging a source option over the source side', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'source',
                overSide: 'source',
                overType: 'option',
                overValue: 'a',
            })
        ).toBeNull()
    })

    it('should resolve to removal when dragging a picked option over a source option', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'picked',
                overSide: 'source',
                overType: 'option',
                overValue: 'a',
            })
        ).toEqual({ side: 'source', pos: 'container' })
    })

    it('should resolve to removal when dragging a picked option over the source container', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'picked',
                overSide: 'source',
                overType: 'container',
            })
        ).toEqual({ side: 'source', pos: 'container' })
    })

    it('should insert before the hovered option when the pointer is above its midline', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'source',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 105,
            })
        ).toEqual({ side: 'picked', pos: 'before', value: 'b', index: 1 })
    })

    it('should insert after the hovered option when the pointer is below its midline', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'source',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 115,
            })
        ).toEqual({ side: 'picked', pos: 'after', value: 'b', index: 2 })
    })

    it('should append when dropping on the picked container', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'source',
                overSide: 'picked',
                overType: 'container',
            })
        ).toEqual({ side: 'picked', pos: 'end' })
    })

    it('should append when order change is disabled', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                enableOrderChange: false,
                activeSide: 'source',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 105,
            })
        ).toEqual({ side: 'picked', pos: 'end' })
    })

    it('should append when the picked filter is active', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                filterActivePicked: true,
                activeSide: 'source',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 105,
            })
        ).toEqual({ side: 'picked', pos: 'end' })
    })

    it('should resolve a reorder target within the picked list', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'picked',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 115,
            })
        ).toEqual({ side: 'picked', pos: 'after', value: 'b', index: 2 })
    })

    it('should return null when reordering while order change is disabled', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                enableOrderChange: false,
                activeSide: 'picked',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 105,
            })
        ).toBeNull()
    })

    it('should return null when reordering while the picked filter is active', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                filterActivePicked: true,
                activeSide: 'picked',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 105,
            })
        ).toBeNull()
    })

    it('should return null when hovering an option that is part of the dragged set', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                draggedValues: ['a', 'b'],
                activeSide: 'picked',
                overSide: 'picked',
                overType: 'option',
                overValue: 'b',
                overIndex: 1,
                overRect,
                dragY: 105,
            })
        ).toBeNull()
    })

    it('should allow appending a picked option via the picked container while reordering', () => {
        expect(
            resolveDropTarget({
                ...defaults,
                activeSide: 'picked',
                overSide: 'picked',
                overType: 'container',
            })
        ).toEqual({ side: 'picked', pos: 'end' })
    })
})
