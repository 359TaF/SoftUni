function yardGreening(quadrature) {
    let price = quadrature * 7.61;
    let discout = 0.18 * price;
    let finalPrice = price - discout;
    
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discout} lv.`);
}

yardGreening(150);