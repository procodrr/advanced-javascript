function doHeavyCalculation(x) {
    const startTime = Date.now()
    let currentTime = startTime
    while(startTime + 1000 > currentTime) {
        currentTime = Date.now()
        console.log('Calculating...', (currentTime - startTime));
    }

    const result = + Math.sqrt(x).toFixed(3)
    return result
}
