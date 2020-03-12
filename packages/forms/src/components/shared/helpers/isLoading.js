const isLoading = (meta, loading, showLoadingStatus) =>
    loading || (showLoadingStatus && meta.validating)

export { isLoading }
