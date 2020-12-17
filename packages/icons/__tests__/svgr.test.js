import path from 'path'
import execa from 'execa'

describe('svg build', () => {
    it('should generate the expected component', async () => {
        const cwd = path.join(__dirname, '..')
        const command = 'npx svgr src/svg/add-16.svg'

        /**
         * svgr-cli locates files relative to process.cwd() so we
         * need to set the cwd to the package root explicitly
         */
        const { stdout } = await execa.command(command, { cwd })

        expect(stdout).toMatchSnapshot()
    })
})
