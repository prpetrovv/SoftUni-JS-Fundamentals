function isAmazing(stringNumber) {
    let sum = 0
    flag = 'False'

    for (digit of stringNumber.toString()) {
        sum += Number(digit)
    }
    let sumString = sum.toString()
    for (d of sumString) {
        if (d == 9) {
            flag = 'True'
        }
    }
    console.log(`${stringNumber} Amazing? ${flag}`)
}


isAmazing(1233)
isAmazing(999)