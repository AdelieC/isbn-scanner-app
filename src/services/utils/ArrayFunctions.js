export const getMostRepeatedValueInArr = (arr) => {
    let evaluatedValues = {},
        maxCount = 0,
        mostRepeatedValue;
    for (let i = 0; i < arr.length; i++) {
        Object.hasOwn(evaluatedValues, arr[i])
            ? ++evaluatedValues[arr[i]]
            : (evaluatedValues[arr[i]] = 1);
        if (evaluatedValues[arr[i]] > maxCount) {
            maxCount = evaluatedValues[arr[i]];
            mostRepeatedValue = arr[i];
        }
    }
    return mostRepeatedValue;
};
