def picker(prices):
    
    bestDifference = [prices[1]-prices[0], 0, 1] # [best_difference, buy_index, sell_index]
    
    for buy_index in range(len(prices)):
        for sell_index in range(len(prices)):
            if buy_index < sell_index and prices[sell_index]-prices[buy_index] > bestDifference[0]:
                bestDifference = [prices[sell_index]-prices[buy_index], buy_index, sell_index]
                
    return [bestDifference[1], bestDifference[2]]