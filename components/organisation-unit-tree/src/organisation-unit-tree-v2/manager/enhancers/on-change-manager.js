export const onChangeManager = (manager) => {
    const state = {
        onChange: null,
        stringifiedOnChange: '',
    }

    function setOnChange(newOnChange) {
        if (state.onChange === newOnChange) {
            return
        }

        const newStringifiedOnChange = newOnChange.toString()

        if (state.stringifiedOnChange === newStringifiedOnChange) {
            return
        }

        state.onChange = newOnChange
        state.stringifiedOnChange = newStringifiedOnChange

        if (manager.getIsReady()) {
            manager.refreshRootNodes()
        }
    }

    function getOnChange() {
        return state.onChange
    }

    return {
        setOnChange,
        getOnChange,
    }
}
