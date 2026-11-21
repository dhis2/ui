import { Transfer as PackageTransfer } from '@dhis2-ui/transfer'
import { mount } from 'enzyme'
import React from 'react'
import { Transfer as LocalTransfer } from '../index.js'

describe('<Transfer />', () => {
    it('should be able to mount the local transfer without errors', () => {
        mount(<LocalTransfer onChange={() => {}} options={[]} />)
    })

    it('should be able to mount the package transfer without errors', () => {
        mount(<PackageTransfer onChange={() => {}} options={[]} />)
    })
})
