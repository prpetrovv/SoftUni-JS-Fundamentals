function roundToPrecision(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    const roundedNumber = parseFloat(number.toFixed(precision));
    console.log(roundedNumber);
}