import React from 'react'
import { NoticeBox } from './notice-box.js'

export default { title: 'NoticeBox' }
export const WithChildren = () => <NoticeBox>The noticebox content</NoticeBox>
export const WithTitle = () => <NoticeBox title="The noticebox title" />
