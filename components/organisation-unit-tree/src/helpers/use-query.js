import { useCallback, useRef, useState, useEffect } from 'react'

export const useQuery = (
    queryOrMutateFn,
    {
        initialArgument = undefined,
        defaultData = null,
        transform = null,
        onComplete = null,
    } = {}
) => {
    // use ref not state so setting the value can be done synchronously
    const signal = useRef()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(defaultData)

    const performRequest = useCallback(
        arg => {
            if (arg?.signal) {
                signal.current = arg.signal
            } else {
                signal.current = new AbortController()
            }

            return queryOrMutateFn({ ...arg, signal: signal.current })
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
                })
        },
        [setLoading, setError, setData, onComplete]
    )

    const refetch = useCallback(
        arg => {
            setLoading(true)
            setError(null)
            setData(defaultData)

            return performRequest(arg)
        },
        [setLoading, setError, setData, performRequest]
    )

    useEffect(() => {
        performRequest(initialArgument)

        return () => {
            if (signal.current) {
                signal.current.abort()
            }
        }
    }, [])

    return { refetch, loading, error, data }
}
