function lowerorUpper(letter) {
    let letterNumer = letter.charCodeAt()
    let letterType = ""
    if (letterNumer >= 65 && letterNumer <= 90) {
        letterType = "upper-case"
    } else if (letterNumer >= 97 && letterNumer <= 122) {
        letterType = "lower-case"
    }
    console.log(letterType)
}

lowerorUpper('L')
lowerorUpper('s')