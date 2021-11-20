export default function getMaxGifts(prices, budget) {
    if(budget < 0) {
        throw new Error('Introduce a positive number as the budget')
    }

    const sortedPrices = prices.sort((a, b) => a - b)

    for(let i = 0; i < sortedPrices.length; i++) {
        budget -= sortedPrices[i]
        if(budget < 0) {
            return i
        }
    }

    return sortedPrices.length
}