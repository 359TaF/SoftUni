function foodDelivery(chikenMenuCount, fishMenuCount, vegMenuCount) {
    let chikenMenuPrice = chikenMenuCount * 10.35;
    let fishMenuPrice = fishMenuCount * 12.4;
    let vegMenuPrice = vegMenuCount * 8.15;
    let totalMenuPrice = chikenMenuPrice + fishMenuPrice + vegMenuPrice;
    let dessertPrice = 0.2 * totalMenuPrice;
    let deliveryPrice = 2.5

    let totalSum = totalMenuPrice + dessertPrice + deliveryPrice;

    console.log(totalSum);
}

foodDelivery(2, 4, 3);