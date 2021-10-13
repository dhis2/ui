export const log = true
export const onChange = (...args) => log && console.log('onChange', ...args)
export const onExpand = (...args) => log && console.log('onExpand', ...args)
export const onCollapse = (...args) => log && console.log('onCollapse', ...args)
export const onChildrenLoaded = (...args) =>
    log && console.log('onChildrenLoaded', ...args)

export const customData = {
    organisationUnits: (type, { id }) => {
        let data
        let delay = 0

        if (id === 'A0000000000') {
            delay = 1000
            data = {
                id: 'A0000000000',
                path: '/A0000000000',
                displayName: 'Org Unit 1',
                children: [
                    {
                        id: 'A0000000001',
                        path: '/A0000000000/A0000000001',
                        children: [
                            { id: 'A0000000003' },
                            { id: 'A0000000004' },
                        ],
                        displayName: 'Org Unit 2',
                    },
                    {
                        id: 'A0000000002',
                        path: '/A0000000000/A0000000002',
                        children: [],
                        displayName: 'Org Unit 3',
                    },
                    {
                        id: 'A0000000006',
                        path: '/A0000000000/A0000000006',
                        children: [],
                        displayName: 'Org Unit 7',
                    },
                ],
            }
        }

        if (id === 'A0000000001') {
            data = {
                id: 'A0000000001',
                path: '/A0000000000/A0000000001',
                displayName: 'Org Unit 2',
                children: [
                    {
                        id: 'A0000000003',
                        path: '/A0000000000/A0000000001/A0000000003',
                        children: [],
                        displayName: 'Org Unit 4',
                    },
                    {
                        id: 'A0000000004',
                        path: '/A0000000000/A0000000001/A0000000004',
                        children: [],
                        displayName: 'Org Unit 5',
                    },
                ],
            }
        }

        if (id === 'A0000000002') {
            delay = 1000
            data = {
                displayName: 'Org Unit 3',
                id: 'A0000000002',
                path: '/A0000000000/A0000000002',
                children: [],
            }
        }

        if (id === 'A0000000003') {
            data = {
                displayName: 'Org Unit 4',
                id: 'A0000000003',
                path: '/A0000000000/A0000000001/A0000000003',
                children: [
                    {
                        id: 'A0000000007',
                        path: '/A0000000000/A0000000001/A0000000003/A0000000007',
                        children: [],
                        displayName: 'Org Unit 8',
                    },
                ],
            }
        }

        if (id === 'A0000000004') {
            data = {
                displayName: 'Org Unit 5',
                id: 'A0000000004',
                path: '/A0000000000/A0000000001/A0000000004',
                children: [],
            }
        }

        if (id === 'A0000000006') {
            data = {
                displayName: 'Org Unit 7',
                id: 'A0000000006',
                path: '/A0000000000/A0000000006',
                children: [],
            }
        }

        if (id === 'A0000000007') {
            data = {
                displayName: 'Org Unit 8',
                id: 'A0000000007',
                path: '/A0000000000/A0000000001/A0000000003/A0000000007',
                children: [],
            }
        }

        if (!data) {
            return Promise.reject(new Error('404 - Org unit not found'))
        }

        return new Promise(resolve => {
            setTimeout(() => resolve(data), delay)
        })
    },
}
