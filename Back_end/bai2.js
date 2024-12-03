const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numberArray = [11, 22, 100, 88, 77, 44, 55];
console.log(findMax(numberArray));