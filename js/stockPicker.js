exports.picker = function(prices) {

    let initialBuy = prices[0]
    let initialSell = prices[1]
    let initialDifference = prices[1]-prices[0]
    let bestDifference = [initialDifference, initialBuy, initialSell];  // [diff_value, buyIndex, sellIndex]

    prices.forEach((buy,buyIndex) => {  // buy loop
        prices.forEach((sell,sellIndex) => {  // sell loop
            if (buyIndex < sellIndex && sell-buy > bestDifference[0]) {
                bestDifference = [sell-buy, buyIndex, sellIndex]
            }
        })
    })

    return [bestDifference[1], bestDifference[2]]
}