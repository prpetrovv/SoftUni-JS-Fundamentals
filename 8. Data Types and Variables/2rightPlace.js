function rightPlace(givenString, givenChar, secondString) {
    let newWord = givenString.replace("_", givenChar);
    console.log(newWord === secondString ? "Matched" : "Not Matched");
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')