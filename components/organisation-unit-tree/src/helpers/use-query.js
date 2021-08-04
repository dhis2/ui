import { useState, useEffect } from 'react'

export const useQuery = (
    fetchFn,
    {
        initialArguments = [],
        defaultData = null,
        transform = null,
        onComplete = null,
    }
) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: defaultData,
    })

    const performRequest = (...args) =>
        fetchFn(...args)
            .then(response => {
                const data = transform ? transform(response) : response
                const dataWithDefaults = { ...defaultData, ...data }

                setState({
                    ...state,
                    loading: false,
                    data: { ...defaultData, ...dataWithDefaults },
                })

                return dataWithDefaults
            })
            .then(data => onComplete && onComplete(data))
            .catch(error => setState({ ...state, loading: false, error }))

    const refetch = async (...args) => {
        setState({
            ...state,
            loading: true,
            error: null,
            data: defaultData,
        })

        performRequest(...args)
    }

    useEffect(() => {
        performRequest(...initialArguments)
    }, [])

    return {
        refetch,
        loading: state.loading,
        error: state.error,
        data: state.data,
    }
}
