// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency >= 10000) {
        return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
    }
    if (currency <= 0) {
        return {};
    }
    if (currency % 50 !== 0) {
        var H = (currency - currency % 50) / currency;
        currency = currency % 50;
        if (currency % 25 !== 0) {
            var Q = (currency - currency % 25) / currency;
            currency = currency % 25;
            if (currency % 10 !== 0) {
                var D = (currency - currency % 10) / currency;
                currency = currency % 10;
                if (currency % 5 !== 0) {
                    var N = (currency - currency % 5) / currency;
                    currency = currency % 5;
                    if (currency % 1 !== 0) {
                        var P = currency;
                    }else return {"P":P};
                }else return {"N":N};
            }else return{"D":D};
        }else return {"Q":Q};
    }else return {"H":H};


}
