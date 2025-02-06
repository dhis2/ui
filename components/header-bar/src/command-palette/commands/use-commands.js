import { useConfig } from '@dhis2/app-runtime'
import { joinPath } from '../../join-path.js'
import logoutCommand from './logout-command.js'

const useCommands = () => {
    const { baseUrl } = useConfig()
    const logoutURL = joinPath(
        baseUrl,
        'dhis-web-commons-security/logout.action'
    )

    return [logoutCommand(logoutURL)]
}

export default useCommands
