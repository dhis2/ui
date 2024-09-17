import React from 'react'
import { Transfer } from '../transfer.js'
import { options } from './common/options.js'

export default { title: 'Transfer Loading Lists' }

export const LoadingSource = () => (
    <Transfer loading selected={[]} onChange={() => null} options={options} />
)

export const LoadingPicked = () => (
    <Transfer
        loadingPicked
        selected={[]}
        onChange={() => null}
        options={options}
    />
)

export const NotLoadingSource = () => (
    <Transfer selected={[]} onChange={() => null} options={options} />
)

export const NotLoadingPicked = () => (
    <Transfer selected={[]} onChange={() => null} options={options} />
)
