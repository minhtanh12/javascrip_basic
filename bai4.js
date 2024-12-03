const countName = (names, name) => {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === name) {
            return `Count ${name} = ${names.reduce((count, currentName) => currentName === name ? count + 1 : count, 0)}`
        }
    }
}

const names = ['1', '2', '3', '2', '1', '2', '3']
console.log(countName(names, '2'))