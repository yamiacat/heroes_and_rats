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

  it("Should have starting health of 100", function() {
    assert.strictEqual(100, hero.health);
  });

  it("Should be able say their name", function() {
    assert.strictEqual("I am Mulan!", hero.speak());
  });

  it("Should have a task collection that starts empty", function() {
    assert.strictEqual(0, hero.tasks.length);
  });


});
