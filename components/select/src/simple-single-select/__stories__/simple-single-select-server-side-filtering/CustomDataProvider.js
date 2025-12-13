/* eslint-disable react/prop-types */
import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { dataElements as allDataElements } from './dataElements.js'

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const fakeNetworkDelay = ({ pager, dataElements, signal }) => {
    const delay = randomBetween(750, 1550)
    const response = { dataElements }
    if (pager) {
        response.pager = pager
    }

    return new Promise((resolve, reject) => {
        const onAbort = () => {
            clearTimeout(timeout)
            reject('Aborted')
        }

        signal?.addEventListener('abort', onAbort)

        const timeout = setTimeout(() => {
            signal?.removeEventListener('abort', onAbort)
            resolve(response)
        }, delay)
    })
}

const Provider = ({ children }) => {
    const data = {
        dataElements: (_, { id, params = {} }, { signal }) => {
            if (id) {
                const dataElement = allDataElements.find(
                    (curDE) => id === curDE.id
                )
                return fakeNetworkDelay({ dataElements: dataElement, signal })
            }

            // Only this specific filter is supported by this server-mock
            const searchTerm = params.filter
                ? params.filter[0].split(':')[2]
                : ''

            const filteredDataElements = searchTerm
                ? allDataElements.filter(({ displayName }) =>
                      displayName.startsWith(searchTerm)
                  )
                : allDataElements

            const page = params.page || 1
            const total = filteredDataElements.length
            const pageSize = params.pageSize || 50
            const pageCount = Math.ceil(total / pageSize)
            const pager = { page, total, pageSize, pageCount }

            const start = (page - 1) * pageSize
            const end = start + pageSize
            const dataElements = filteredDataElements.slice(start, end)

            return fakeNetworkDelay({ pager, dataElements, signal })
        },
    }

    return <CustomDataProvider data={data}>{children}</CustomDataProvider>
}

export { Provider as CustomDataProvider }
