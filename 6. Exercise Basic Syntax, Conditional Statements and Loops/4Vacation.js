function vacation(nOfPeople, type, day) {
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    singlePrice = Number(8.45);
                    break;
                case 'Saturday':
                    singlePrice = Number(9.80);
                    break;
                case 'Sunday':
                    singlePrice = Number(10.46);
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    singlePrice = Number(10.90);
                    break;
                case 'Saturday':
                    singlePrice = Number(15.60);
                    break;
                case 'Sunday':
                    singlePrice = Number(16);
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    singlePrice = Number(15);
                    break;
                case 'Saturday':
                    singlePrice = Number(20);
                    break;
                case 'Sunday':
                    singlePrice = Number(22.50);
                    break;
            }
            break;
    }
    let price = singlePrice * nOfPeople
    if (type == 'Students') {
        if (nOfPeople >= 30) {
            discount = (price * 0.15)
        } else {
            discount = 0;
        }
    } else if (type == 'Business') {
        if (nOfPeople >= 100) {
            discount = (price / nOfPeople) * 10
        } else {
            discount = 0;
        }
    } else if (type == 'Regular') {
        if (nOfPeople >= 10 && nOfPeople <= 20) {
            discount = (price * 0.05)
        } else {
            discount = 0;
        }
    }
    let totalPrice = price - discount
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}