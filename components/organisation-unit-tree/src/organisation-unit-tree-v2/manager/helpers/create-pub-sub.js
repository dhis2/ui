export const createPubSub = (stateGetter) => {
    if (typeof stateGetter !== 'function') {
        throw new Error('"stateGetter" argument is not a function')
    }

    const subscribers = []
    return {
        subscribe: (callback) => {
            subscribers.push(callback)
            const index = subscribers.length - 1

            return function unsubscribe() {
                subscribers.splice(index, 1)
            }
        },
        notify: () => {
            for (const callback of subscribers) {
                if (typeof callback !== 'function') {
                    throw new Error('Subscriber callback is not a function')
                }
                callback(stateGetter())
            }
        },
    }
}
