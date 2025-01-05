function repainting(nylon, paintLiters, thinnerLiters, hours) {
    let additionalNylon = nylon + 2;
    let additionalPaint = 0.1 * paintLiters + paintLiters;
    
    let nylonPrice = additionalNylon * 1.5;
    let paintPrice = additionalPaint * 14.5;
    let thinnerPrice = thinnerLiters * 5;
    let bags = 0.4

    let materialPrice = nylonPrice + paintPrice + thinnerPrice + bags;
    let pricePerHour = 0.3 * materialPrice;
    let totalPrice =  materialPrice + pricePerHour * hours;

    console.log(totalPrice);
  
}

repainting(10, 11, 4 , 8);