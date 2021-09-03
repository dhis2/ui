import path from 'path'
import execa from 'execa'

describe('svg build', () => {
    it('should generate the expected component', async () => {
        const cwd = path.join(__dirname, '..')

        /**
         * The silent flag means yarn won't print the path to the executable
         * which can change from test run to test run
         */
        const command = 'yarn --silent svgr src/svg/add-16.svg'

        /**
         * svgr-cli locates files relative to process.cwd() so we
         * need to set the cwd to the package root explicitly
         */
        const { stdout } = await execa.command(command, { cwd })

        expect(stdout).toMatchSnapshot()
    })
})
