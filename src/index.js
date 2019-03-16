// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var change = {};
    if (currency > 10000) {
      change.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
      return change;
    } else if (currency <= 0) {
      return change;
    }
    if (currency >= 50) {
      change.H = (currency - currency % 50) / 50;
      currency = currency % 50;
    }
    if (currency >= 25) {
      change.Q = (currency - currency % 25) / 25;
      currency = currency % 25;
    }
    if (currency >= 10) {
      change.D = (currency - currency % 10) / 10;
      currency = currency % 10;
    }
    if (currency >= 5) {
      change.N = (currency - currency % 5) / 5;
      currency = currency % 5;
    }
    if (currency >= 1) {
      change.P = (currency % 5)
    }
  
    return change;
  
  }