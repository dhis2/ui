const createResponse = ({ fields, id, path, displayName, children }) => ({
    ...(fields.includes('id') ? { id } : {}),
    ...(fields.includes('path') ? { path } : {}),
    ...(fields.includes('displayName') ? { displayName } : {}),
    ...(fields.includes('children::size') ? { children: children.length } : {}),
    ...(fields.includes('children[id,path,displayName]') ? { children } : {}),
})

export const getOrganisationUnitData = (id, { fields }) => {
    let data

    if (id === 'A0000000000') {
        data = createResponse({
            fields,
            id: 'A0000000000',
            path: '/A0000000000',
            displayName: 'Org Unit 1',
            children: [
                {
                    id: 'A0000000001',
                    path: '/A0000000000/A0000000001',
                    displayName: 'Org Unit 2',
                },
                {
                    id: 'A0000000002',
                    path: '/A0000000000/A0000000002',
                    displayName: 'Org Unit 3',
                },
                {
                    id: 'A0000000006',
                    path: '/A0000000000/A0000000006',
                    displayName: 'Org Unit 7',
                },
            ],
        })
    }

    if (id === 'A0000000001') {
        data = createResponse({
            fields,
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
        })
    }

    if (id === 'A0000000002') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 3',
            id: 'A0000000002',
            path: '/A0000000000/A0000000002',
            children: [],
        })
    }

    if (id === 'A0000000003') {
        data = createResponse({
            fields,
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
        })
    }

    if (id === 'A0000000004') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 5',
            id: 'A0000000004',
            path: '/A0000000000/A0000000001/A0000000004',
            children: [],
        })
    }

    if (id === 'A0000000006') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 7',
            id: 'A0000000006',
            path: '/A0000000000/A0000000006',
            children: [],
        })
    }

    if (id === 'A0000000007') {
        data = createResponse({
            fields,
            displayName: 'Org Unit 8',
            id: 'A0000000007',
            path: '/A0000000000/A0000000001/A0000000003/A0000000007',
            children: [],
        })
    }

    return data
}
