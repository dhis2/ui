import { mount } from 'enzyme'
import React from 'react'
import { Transfer } from '../index.js'

describe('<Transfer />', () => {
    it('should be able to mount the transfer without errors', () => {
        mount(<Transfer onChange={() => {}} options={[]} />)
    })
})
