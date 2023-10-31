function isSpecial(number) {
    for (let i = 1; i <= number; i++) {
        let sumI = 0;
        for (digit of i.toString()) {
            sumI += Number(digit);
        }
        let flag = "False"
        if (sumI == 5 || sumI == 7 || sumI == 11){
            flag = "True"
        }
        console.log(`${i} -> ${flag}`)
    }
}

isSpecial(15)