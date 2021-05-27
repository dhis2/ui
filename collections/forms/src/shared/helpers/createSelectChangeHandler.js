const createSelectChangeHandler = ({ onChange }) => ({ selected }) => {
    onChange(selected)
}
export { createSelectChangeHandler }
