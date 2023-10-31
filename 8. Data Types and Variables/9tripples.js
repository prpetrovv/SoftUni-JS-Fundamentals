function tripples(number){
    number = Number(number)
    startingN = 'a'.charCodeAt()
    limit = startingN+number
    for(let i = startingN; i < limit; i++){
        for (let j = startingN; j <limit; j++){
            for (let k = startingN; k < limit;k++){
                let a = String.fromCharCode(i)
                let b = String.fromCharCode(j)
                let c = String.fromCharCode(k)
                console.log(`${a}${b}${c}`)
            }
        }
    }
}

tripples(3)