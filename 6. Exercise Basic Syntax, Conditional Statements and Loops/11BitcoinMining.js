function mine(arr) {
    let money = 0
    let gotBitcoin = false
    let firstDay
    for (i = 0; i < arr.length; i++) {
        let day = i + 1
        let currMoney = arr[i] * 67.51
        if (day % 3 == 0) {
            currMoney *= 0.7
        }
        money += currMoney
        if (!gotBitcoin) {
            if (money >= 11949.16) {
                firstDay = day
                gotBitcoin = true
            }
        }
    }
    let bitcoins = Math.floor(money / 11949.16)
    let leftMoney = money - bitcoins * 11949.16
    console.log(`Bought bitcoins: ${bitcoins}`)
    if (firstDay) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`)
}