const reverseStudent = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

const students = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(reverseStudent(students));