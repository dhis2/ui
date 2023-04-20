import { createPubSub } from '../helpers/index.js'

export const loadingManager = () => {
    const state = {
        /* Signifies if the manager has been initialised successfully */
        isReady: false,
        /* Refers to the inital loading state of the manager. This
         * property normally transitions from true to false only
         * once. The only reason to go back to true is if the manager
         * needs to be re-initialised, which currently doesn't happen
         * but may become a relevant use-case in the future. */
        isLoading: true,
        /* Refers to any loading state of the manager, so this will be
         * true during initialisation, but also when units are being
         * fetched, or when a mutation is in place. */
        isFetching: true,
        /* The global error state, which will be populated with an error
         * object when a network error has occurred that prevents the
         * entire tree from functioning. Note that a Node instance also
         * has an error state which is used to deal with errors that only
         * the UI at a node level. */
        error: null,
    }
    const subscribers = {
        ready: createPubSub(getLoadingState),
        treeState: createPubSub(getLoadingState),
        fetchState: createPubSub(getLoadingState),
    }

    function onIsReady(callback) {
        return subscribers.ready.subscribe(callback)
    }

    function onTreeStateChange(callback) {
        return subscribers.treeState.subscribe(callback)
    }

    function onFetchStateChange(callback) {
        return subscribers.fetchState.subscribe(callback)
    }

    function notifyOnReadySubscribers() {
        if (state.isReady) {
            subscribers.treeState.notify()
        }
    }

    function refreshTree() {
        subscribers.treeState.notify()
    }

    function refreshFetcher() {
        subscribers.fetchState.notify()
    }

    function getLoadingState() {
        // Return a clone to prevent consumers mutating the state
        return Object.assign({}, state)
    }

    function getIsReady() {
        return state.isReady
    }

    function setIsReady(value) {
        state.isReady = value
    }

    function getIsLoading() {
        return state.isLoading
    }

    function setIsLoading(value) {
        state.isLoading = value
    }

    function getIsFetching() {
        return state.isFetching
    }

    function setIsFetching(value) {
        state.isFetching = value
    }

    function getError() {
        return state.error
    }

    function setError(value) {
        state.error = value
    }

    return {
        getError,
        getIsFetching,
        getIsLoading,
        getIsReady,
        getLoadingState,
        notifyOnReadySubscribers,
        onFetchStateChange,
        onIsReady,
        onTreeStateChange,
        refreshTree,
        refreshFetcher,
        setError,
        setIsFetching,
        setIsLoading,
        setIsReady,
    }
}
