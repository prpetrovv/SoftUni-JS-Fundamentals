function age(number) {
    number = parseInt(number)
    if (number > 65) {
        console.log("elder")
    } else if (number >= 20) {
        console.log("adult")
    } else if (number >= 14) {
        console.log("teenager")
    } else if (number >= 3) {
        console.log("child")
    } else if (number <= 2 && number >= 0) {
        console.log("baby")
    } else {
        console.log("out of bounds")
    }

}