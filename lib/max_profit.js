function maxProfit(values) {
  values.reverse();
  var largest_subsequent_price = [values[0]];
  for(var i = 1; i < values.length - 1; i ++) {
  	large_price = Math.max(values[i], largest_subsequent_price[i - 1]);
  	largest_subsequent_price.push(large_price);
  }
  values.reverse();
  largest_subsequent_price.reverse();
  var differences = [];
  for(i = 0; i < largest_subsequent_price.length; i ++) {
  	differences.push(largest_subsequent_price[i] - values[i]);
  }
  return Math.max(...differences);
}

module.exports = maxProfit;