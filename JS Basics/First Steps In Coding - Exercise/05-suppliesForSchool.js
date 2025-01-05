function suppliesForSchool(penPacks, markerPacks, detergentLiters, discountPercent) {
    let totalPenPrice = penPacks * 5.8;
    let totalMarkerPrice = markerPacks * 7.2;
    let totalDetergentPrice = detergentLiters * 1.2;

    let totalSum = totalPenPrice + totalMarkerPrice + totalDetergentPrice;
    let discountDecimal =  discountPercent / 100;
    let discount = discountDecimal * totalSum;
    let finalPrice = totalSum - discount

    console.log(finalPrice);

}

suppliesForSchool(2, 3, 4, 25);