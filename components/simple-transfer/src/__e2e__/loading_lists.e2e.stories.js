import React from 'react'
import { SimpleTransfer } from '../simple-transfer.js'
import { options } from './common/options.js'

export default { title: 'SimpleTransfer Loading Lists' }

export const LoadingSource = () => (
    <SimpleTransfer
        loading
        selected={[]}
        onChange={() => null}
        options={options}
    />
)

export const LoadingPicked = () => (
    <SimpleTransfer
        loadingPicked
        selected={[]}
        onChange={() => null}
        options={options}
    />
)

export const NotLoadingSource = () => (
    <SimpleTransfer selected={[]} onChange={() => null} options={options} />
)

export const NotLoadingPicked = () => (
    <SimpleTransfer selected={[]} onChange={() => null} options={options} />
)
