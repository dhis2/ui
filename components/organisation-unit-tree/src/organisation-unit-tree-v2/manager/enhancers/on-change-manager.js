export const onChangeManager = (manager) => {
    let onChange = null

    function setOnChange(newOnChange) {
        if (onChange === newOnChange) {
            return
        }

        onChange = newOnChange

        if (manager.getIsReady()) {
            manager.refreshRootNodes()
        }
    }

    function getOnChange() {
        return onChange
    }

    return {
        setOnChange,
        getOnChange,
    }
}
