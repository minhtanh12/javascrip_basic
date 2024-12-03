function filterEvenNumbers(arr) {
    const newArr = arr.filter((value, index, array) => {
         return value % 2 === 0 
        })
    return newArr
  }
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]