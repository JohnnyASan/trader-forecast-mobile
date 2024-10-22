import AccountType from '@/models/AccountType';
import TradingDayResult from '@/models/TradingDayResult';
import { round, roundToWhole } from '@/helpers/round';

class DayTradingForecaster {
    expectedProfitPerShare: number;
    costPerShare: number;
    initialBalance: number;
    numTradingDays: number;
    accountType: AccountType;
    results: TradingDayResult[];

    constructor(
        expectedProfitPerShare: number = 0.05, 
        costPerShare: number = 3.0, 
        initialBalance: number = 1000.0, 
        numTradingDays: number = 50, 
        accountType: AccountType = AccountType.Cash
    ) {
        if (expectedProfitPerShare <= 0 || costPerShare <= 0 || initialBalance <=0 || numTradingDays <= 0)
            throw new RangeError('Values for all numerical fields must be greater than 0');
        this.expectedProfitPerShare = expectedProfitPerShare;
        this.costPerShare = costPerShare;
        this.initialBalance = initialBalance;
        this.numTradingDays = numTradingDays;
        this.accountType = accountType;
        this.results = [];

        this.generate();
    }

    generate(n = 1, previousDayResult: TradingDayResult | undefined = undefined) {
        let currentDayResult = new TradingDayResult();
        
        let startBalance = (previousDayResult != undefined ? previousDayResult.balance : this.initialBalance);
        currentDayResult.id = n;
        currentDayResult.sharesCount = roundToWhole(startBalance / this.costPerShare);
        currentDayResult.profit = round(currentDayResult.sharesCount * this.expectedProfitPerShare, 3);
        currentDayResult.balance = round(startBalance + currentDayResult.profit, 3);
        if (this.accountType == AccountType.Cash) currentDayResult.tradeCount = 1;
        else currentDayResult.tradeCount = -1; // Margin Account not implemented

        this.results.push(currentDayResult);
        if (n <= this.numTradingDays) this.generate(++n, currentDayResult);
    }
}

export default DayTradingForecaster;