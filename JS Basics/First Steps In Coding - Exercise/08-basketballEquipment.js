function basketballEquipment(annuelFee){
    let sneakersPrice = 0.6 * annuelFee;
    let outfitPrice = 0.8 * sneakersPrice;
    let basketballPrice = 1 / 4 * outfitPrice;
    let accessoriesPrice =  1 / 5 * basketballPrice;

    let totalPrice = annuelFee + sneakersPrice + outfitPrice + basketballPrice + accessoriesPrice;

    console.log(totalPrice);
    
}

basketballEquipment(365);