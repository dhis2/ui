/**
 * What `useSyncExternalStore` needs from a mutable store: a way to be told
 * of changes and a version that increments on every change, since the
 * store's objects are mutated in place and cannot serve as the snapshot.
 */
export interface Subscribable {
    subscribe(listener: () => void): () => void
    getVersion(): number
}
