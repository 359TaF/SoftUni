// ТЕОРЕМА:  Във всеки триъгълник която и да е страна е по-малка от сбора на другите две и по-голяма от тяхната разлика.
// А се записва така: a < c + b,  b < а + c,  c < a + b

function theTriangleofTruth(sideA, sideB, sideC) {
    if (sideA < sideC + sideB && sideB < sideA + sideC && sideC < sideA + sideB) {
        console.log(`The Triangle of Truth with sides ${sideA}, ${sideB}, and ${sideC} has been validated. Pen4o, you may begin your journey!`); 
    } else {
        console.log(`The Triangle of Truth with sides ${sideA}, ${sideB}, and ${sideC} is invalid. Pen4o remains stuck!`);
    }       
}

// theTriangleofTruth(3, 4, 5);
theTriangleofTruth(1, 2, 3);