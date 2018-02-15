var assert = require("chai").assert;
var maxProfit = require("../lib/max_profit.js");

describe("check", function() {
  it("should return true if a maxProfit successfully determines the maximum difference between any two elements in an array of numbers", function() {
    var stock_prices = [45, 24, 35, 31, 40, 38, 11];
    assert.isTrue(maxProfit(stock_prices) === 16);
  });
});
