import { useMemo } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'

const useGrid = ({ rows, columns }) => {
    const { highlightedIndex } = useCommandPaletteContext()
    const rowIndexDifference = useMemo(() => columns - 1, [columns])

    const firstIndexPerRowArray = useMemo(() => {
        const arr = []
        for (let i = 0; i < rows; i++) {
            arr.push(i * columns)
        }
        return arr
    }, [rows, columns])

    const lastIndexPerRowArray = useMemo(() => {
        return firstIndexPerRowArray.map((index) => index + rowIndexDifference)
    }, [firstIndexPerRowArray, rowIndexDifference])

    const activeRow = useMemo(() => {
        let row = 0
        for (let i = 0; i < rows; i++) {
            if (highlightedIndex >= firstIndexPerRowArray[i]) {
                row = i
            }
        }
        return row
    }, [rows, firstIndexPerRowArray, highlightedIndex])

    const [rowFirstIndex, rowLastIndex] = useMemo(() => {
        const row = activeRow
        const rowFirstIndex = firstIndexPerRowArray[row]
        const rowLastIndex = lastIndexPerRowArray[row]

        return [rowFirstIndex, rowLastIndex]
    }, [activeRow, firstIndexPerRowArray, lastIndexPerRowArray])

    const nextLeftIndex = useMemo(() => {
        return highlightedIndex > rowFirstIndex
            ? highlightedIndex - 1
            : rowLastIndex
    }, [highlightedIndex, rowFirstIndex, rowLastIndex])

    const nextRightIndex = useMemo(() => {
        return highlightedIndex >= rowLastIndex
            ? rowFirstIndex
            : highlightedIndex + 1
    }, [highlightedIndex, rowFirstIndex, rowLastIndex])

    const lastRowFirstIndex = useMemo(() => {
        return firstIndexPerRowArray[rows - 1]
    }, [firstIndexPerRowArray, rows])

    return {
        nextLeftIndex,
        nextRightIndex,
        lastRowFirstIndex,
        rows,
    }
}

export default useGrid
