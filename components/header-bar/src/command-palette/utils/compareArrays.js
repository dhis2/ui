export const isSameArray = (firstArray, secondArray) =>
    firstArray?.length === secondArray?.length &&
    firstArray.every((value, index) => value === secondArray[index])
