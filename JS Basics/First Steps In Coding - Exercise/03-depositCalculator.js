function radiansToDegrees(deposit, mounts, annualInterest) {
    let interestRate = annualInterest / 100;
    let sum = deposit + mounts * ((deposit * interestRate) / 12);
    
    console.log(sum);
    
}

radiansToDegrees(200, 3, 5.7);