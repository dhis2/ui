export const onChangeManager = (manager) => {
    const state = {
        onChange: null,
    }

    function setOnChange(newOnChange) {
        if (state.onChange === newOnChange) {
            return
        }

        state.onChange = newOnChange

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
