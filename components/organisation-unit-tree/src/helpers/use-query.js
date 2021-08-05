import { useCallback, useState, useEffect } from 'react'

export const useQuery = (
    fetchFn,
    {
        initialArguments = [],
        defaultData = null,
        transform = null,
        onComplete = null,
    }
) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(defaultData)

    const performRequest = useCallback(
        (...args) => fetchFn(...args)
            .then(response => {
                const data = transform ? transform(response) : response
                const dataWithDefaults = { ...defaultData, ...data }

                setData(dataWithDefaults)
                setLoading(false)
                return dataWithDefaults
            })
            .then(data => onComplete && onComplete(data))
            .catch(error => {
                setError(error)
                setLoading(false)
            }),
        [setLoading, setError, setData, onComplete]
    )

    const refetch = useCallback((...args) => {
        setLoading(true)
        setError(null)
        setData(defaultData)

        return performRequest(...args)
    }, [setLoading, setError, setData, performRequest])

    useEffect(() => {
        performRequest(...initialArguments)
    }, [])

    return { refetch, loading, error, data }
}
