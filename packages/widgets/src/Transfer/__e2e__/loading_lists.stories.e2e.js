import React from 'react'
import { Transfer } from '../Transfer'
import { options } from './common/options'

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
