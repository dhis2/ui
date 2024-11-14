const createResponse = ({ fields, id, path, displayName, children }) => ({
    ...(fields.includes('id') ? { id } : {}),
    ...(fields.includes('path') ? { path, level: path.split('/').length } : {}),
    ...(fields.includes('displayName') ? { displayName } : {}),
    ...(fields.includes('children::size') ? { children: children.length } : {}),
    ...(fields.includes('children[id,path,displayName]') ? { children } : {}),
})

export const getOrganisationUnitData = (id, { fields }) => {
    const allData = {
        ...createHierarchyResponses({ rootPrefix: 'A', fields }),
        ...createHierarchyResponses({ rootPrefix: 'B', fields, nameGenerator: (num) => `Org unit B ${num}` }),
    }
    // return null
    console.log({ id})
    console.log({allData})
    return allData[id]
}

const createHierarchyResponses = ({ rootPrefix, nameGenerator, fields }) => {
    nameGenerator =
        typeof nameGenerator === 'function'
            ? nameGenerator
            : (num) => `Org Unit ${num}`
    const data = {}
    const generateId = (num) => `${rootPrefix}000000000${num}`

    data[generateId(0)] = createResponse({
        fields,
        id: generateId(0),
        path: `/${rootPrefix}0000000000`,
        displayName: nameGenerator(1),
        children: [
            {
                id: generateId(1),
                path: [generateId(0), generateId(1)].join('/'),
                displayName: nameGenerator(2), //'Org Unit 2',
            },
            {
                id: generateId(2),
                path: [generateId(0), generateId(2)].join('/'),
                displayName: nameGenerator(3),
            },
            {
                id: generateId(6),
                path: [generateId(0), generateId(6)].join('/'),
                displayName: nameGenerator(7),
            },
        ],
    })

    data[generateId(1)] = createResponse({
        fields,
        id: generateId(1),
        path: [generateId(0), generateId(1)].join('/'),
        displayName: nameGenerator(2),
        children: [
            {
                id: generateId(3),
                path: [generateId(0), generateId(1), generateId(3)].join('/'),
                children: [],
                displayName: nameGenerator(4),
            },
            {
                id: generateId(4),
                path: [generateId(0), generateId(1), generateId(4)].join('/'),
                children: [],
                displayName: nameGenerator(5),
            },
        ],
    })

    data[generateId(2)] = createResponse({
        fields,
        displayName: nameGenerator(3),
        id: generateId(2),
        path: [generateId(0), generateId(2)].join('/'),
        children: [],
    })

    data[generateId(3)] = createResponse({
        fields,
        displayName: nameGenerator(4),
        id: generateId(3),
        path: [generateId(0), generateId(1), generateId(3)].join('/'),
        children: [
            {
                id: generateId(7),
                path: [
                    generateId(0),
                    generateId(1),
                    generateId(3),
                    generateId(7),
                ].join('/'),
                displayName: nameGenerator(8),
            },
        ],
    })

    data[generateId(4)] = createResponse({
        fields,
        displayName: nameGenerator(5),
        id: generateId(4),
        path: [generateId(0), generateId(1), generateId(4)].join('/'),
        children: [],
    })

    data[generateId(6)] = createResponse({
        fields,
        displayName: nameGenerator(7),
        id: generateId(6),
        path: [generateId(0), generateId(6)].join('/'),
        children: [],
    })

    data[generateId(7)] = createResponse({
        fields,
        displayName: nameGenerator(8),
        id: generateId(7),
        path: [generateId(0), generateId(1), generateId(3), generateId(7)].join(
            '/'
        ),
        children: [],
    })

    return data
}
