function fuel(distance, passengers, price) {
    let fuelNeeded = distance * 7 / 100 + (passengers * 0.1)
    let neededM = fuelNeeded * price
    console.log(`Needed money for that trip is ${neededM}lv.`)
}

fuel(260, 9, 2.49)
fuel(90, 14, 2.88)