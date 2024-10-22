// This class is for representing individual trading days.
class TradingDayResult {
    id: number;
    balance: number;
    profit: number;
    tradeCount: number;
    sharesCount: number;

    constructor(){
        this.id = 0;
        this.balance = 0;
        this.profit = 0;
        this.tradeCount = 0;
        this.sharesCount = 0;
    }
}

export default TradingDayResult;