const fs = require('fs')
const path = require('path')

const getAllFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath)

    files.forEach((file) => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles)
        } else if (path.extname(file) === '.feature') {
            arrayOfFiles.push(path.join(dirPath, file))
        }
    })

    return arrayOfFiles
}

const createGroups = (files, numberOfGroups = 7) => {
    const groups = []
    for (let i = 0; i < numberOfGroups; i++) {
        groups.push([])
    }

    files.forEach((file, index) => {
        groups[index % numberOfGroups].push(file)
    })

    return groups.map((group, index) => ({ id: index + 1, tests: group }))
}

const cypressSpecsPath = '../'
const specs = getAllFiles(cypressSpecsPath)
const groupedSpecs = createGroups(specs)

console.log(JSON.stringify(groupedSpecs))
