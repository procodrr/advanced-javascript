function getYourMemoizedFunction() {
    const cache = {}
    function doHeavyCalculation(x) {
        if(cache[x]) return cache[x]
        const startTime = Date.now()
        let currentTime = startTime
        while(startTime + 500 > currentTime) {
            currentTime = Date.now()
            console.log('Calculating...', (currentTime - startTime));
        }
        const result = + Math.sqrt(x).toFixed(3)
    
        cache[x] = result
        return result
    }
    return doHeavyCalculation
}

const memoizedDoHeavyCalculation = getYourMemoizedFunction()