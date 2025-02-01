import useLogout from './useLogout.js'

const useCommands = () => {
    const { logout } = useLogout()

    return [logout]
}

export default useCommands
