var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", function(){

  beforeEach(function() {
    hero = new Hero("Mulan", "Dumpling");
  });

  it("Should have name", function() {
    assert.strictEqual("Mulan", hero.name);
  });

  it("Should have favourite food", function() {
    assert.strictEqual("Dumpling", hero.favouriteFood);
  });

});
