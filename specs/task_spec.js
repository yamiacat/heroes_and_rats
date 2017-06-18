var assert = require("assert");
var Task = require("../task.js");


describe("Task", function() {
  var task;


  beforeEach(function() {
    task = new Task("Defeat the Ogre", 3, 3, 2);
    task2 = new Task("Banish the Lich", 5, 5, 5);

  });

  it("should have a description", function() {
    assert.strictEqual("Defeat the Ogre", task.description);
  });

  it("should have a difficulty", function() {
    assert.strictEqual(3, task.difficulty);
  });

  it("should have a difficulty not hardcoded", function() {
    assert.strictEqual(5, task2.difficulty);
  });

  it("should have a difficulty description", function() {
    assert.strictEqual('Difficult', task.getDifficulty());
  });

  it("should have a difficulty description not hardcoded", function() {
    assert.strictEqual('Legendary', task2.getDifficulty());
  });

  it("should have an urgency", function() {
    assert.strictEqual(3, task.urgency);
  });

  it("should have an urgency not hardcoded", function() {
    assert.strictEqual(5, task2.urgency);
  });

  it("should have an urgency descripton", function() {
    assert.strictEqual("Immediate!", task.getUrgency());
  });

  it("should have an urgency descripton not hardcoded", function() {
    assert.strictEqual("NOW! NOW! NOW!", task2.getUrgency());
  });

  it("should have a reward", function() {
    assert.strictEqual(5, task2.reward);
  });

  it("should have a reward description", function() {
    assert.strictEqual("Enchanted object", task2.getRewardDescription());
  });

  it("should start uncompleted", function() {
    assert.strictEqual(false, task.completed);
  });

  it("should have method to mark completed", function() {
    task.complete();
    assert.strictEqual(true, task.completed);
  });

});
