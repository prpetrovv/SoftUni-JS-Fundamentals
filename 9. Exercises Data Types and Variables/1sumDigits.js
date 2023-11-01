function sumDigits(number) {
    let sum = 0;
    for (digit of number.toString()) {
        sum += Number(digit);
    }
    return sum;
}

console.log(sumDigits(245678));
console.log(sumDigits(97561));
console.log(sumDigits(543));