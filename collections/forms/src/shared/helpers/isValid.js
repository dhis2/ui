const isValid = (meta, valid, showValidStatus) =>
    valid || (showValidStatus && meta.touched && meta.valid)

export { isValid }
