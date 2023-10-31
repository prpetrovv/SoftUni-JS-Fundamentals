function numbers(a, b, c) {
    result = a + b + c
    console.log(Number.isInteger(result) ? `${result} - Integer` : `${result} - Float`)
}

numbers(9, 100, 1.1)
numbers(100, 200, 303)