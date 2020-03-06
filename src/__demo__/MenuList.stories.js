import React from 'react'
import { storiesOf } from '@storybook/react'

import { MenuList, MenuItem, Divider, Switch } from '../index.js'

const Wrapper = fn => <div style={{ width: '358px' }}>{fn()}</div>

export const FolderOpen = () => (
    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
        <g
            id="icon/folder/open"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <g
                id="Group"
                transform="translate(0.000000, 3.000000)"
                stroke="#6E7A8A"
            >
                <path
                    d="M2,0.5 C1.17157288,0.5 0.5,1.17157288 0.5,2 L0.5,10 C0.5,10.8284271 1.17157288,11.5 2,11.5 L12,11.5 C12.8284271,11.5 13.5,10.8284271 13.5,10 L13.5,4 C13.5,3.17157288 12.8284271,2.5 12,2.5 L6.69098301,2.5 L5.82917961,0.776393202 C5.7444836,0.607001188 5.57135204,0.5 5.38196601,0.5 L2,0.5 Z"
                    id="Path-2"
                    fill="#A0ADBA"
                />

                <path
                    d="M1.53632259,10.7093809 C1.47575089,10.7941813 1.44318932,10.8957885 1.44318932,11 C1.44318932,11.2761424 1.66704695,11.5 1.94318932,11.5 L12.4853821,11.5 C12.6468577,11.5 12.7983931,11.4220172 12.8922488,11.2906191 L16.4636774,6.2906191 C16.5242491,6.20581872 16.5568107,6.10421149 16.5568107,6 C16.5568107,5.72385763 16.3329531,5.5 16.0568107,5.5 L5.5146179,5.5 C5.35314234,5.5 5.20160692,5.57798284 5.10775116,5.7093809 L1.53632259,10.7093809 Z"
                    id="Path-3"
                    fill="#FBFCFD"
                />
            </g>
        </g>

        <style jsx>{`
            svg {
                margin: 3px 0;
            }
        `}</style>
    </svg>
)

storiesOf('MenuList', module)
    .addDecorator(Wrapper)

    .add('Default', () => (
        <MenuList>
            <MenuItem
                label={
                    <Switch
                        label="Yahoo"
                        name="radio"
                        onChange={evt => {
                            alert(`${evt.target.name}: ${evt.target.value}`)
                        }}
                    />
                }
            />
            <Divider />
            <MenuItem
                icon={<FolderOpen />}
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />

            <Divider />
            <MenuItem
                icon={<FolderOpen />}
                label="Two"
                value="two"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
            <MenuItem
                icon={<FolderOpen />}
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
        </MenuList>
    ))

    .add('Dense', () => (
        <MenuList>
            <MenuItem
                icon={<FolderOpen />}
                dense
                label={
                    <Switch
                        label="Yahoo"
                        name="uhu"
                        onChange={v => {
                            alert('would need state, but would set to: ' + v)
                        }}
                        checked={false}
                    />
                }
            />
            <Divider />
            <MenuItem
                icon={<FolderOpen />}
                dense
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />

            <Divider />
            <MenuItem
                icon={<FolderOpen />}
                dense
                label="Two"
                value="two"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
            <MenuItem
                icon={<FolderOpen />}
                dense
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
        </MenuList>
    ))
