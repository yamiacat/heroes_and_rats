var assert = require("assert");
var Food = require("../food.js");

describe("Food", function() {
  var food;

  beforeEach(function() {
    food = new Food("Dumpling", 10);
  });

  it("should have a food name", function() {
    assert.strictEqual("Dumpling", food.foodName);
  });

  it("should have a food value", function() {
    assert.strictEqual(10, food.foodValue);
  });


});
