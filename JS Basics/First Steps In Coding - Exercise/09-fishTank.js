function fishTank(length, width, height, percent) {
    let tankVolume = length * width * height;
    let volumeInLiters = tankVolume / 1000;
    let percentRate = percent / 100
    let litersNeeded = volumeInLiters * (1 - percentRate);

    console.log(litersNeeded);
    
}

fishTank(85, 75, 47, 17)