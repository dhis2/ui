import path from 'path'
import fs from 'fs'
import rimraf from 'rimraf'
import execa from 'execa'

describe('svg build', () => {
    it('should generate the expected component', async () => {
        const packageRoot = path.join(__dirname, '..')
        const testPath = path.join(packageRoot, 'test')
        const componentPath = path.join(testPath, 'Add16.js')

        // First remove the target dir to ensure we're not testing against an older file
        rimraf.sync(testPath)
        expect(fs.existsSync(componentPath)).toBe(false)

        // Generate the component with svgr-cli
        await execa.command('npx svgr -d test src/add-16.svg', {
            // svgr-cli locates files relative to process.cwd() so we need to set the cwd explicitly
            cwd: packageRoot,
        })

        // Assert that the file has been generated and that it matches our expectations
        expect(fs.existsSync(componentPath)).toBe(true)
        const componentBuffer = fs.readFileSync(componentPath)
        expect(componentBuffer.toString()).toMatchSnapshot()
    })
})
