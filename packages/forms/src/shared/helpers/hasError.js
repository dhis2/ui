const hasError = (meta, error) => error || (meta.touched && meta.invalid)

export { hasError }
