import { useEffect, useState } from 'react'

const emptyParams = {
    get: () => {
        return undefined
    },
}

export const useParams = () => {
    const [params, setParams] = useState(emptyParams)
    const url = window.location.href
    useEffect(() => {
        if (!url) {
            return
        }
        const params = new URLSearchParams(url.split('?')[1])
        setParams(params)
    }, [url])
    return params
}
