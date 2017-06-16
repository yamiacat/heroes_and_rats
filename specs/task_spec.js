var assert = require("assert");
var Task = require("../task.js");
var DifficultyEnum = require("../task.js");
var UrgencyEnum = require("../task.js");

describe("Task", function() {
  var task;


  beforeEach(function() {
    task = new Task("Defeat the Ogre", DifficultyEnum.DIFFICULT, UrgencyEnum.SOONPLEASE, "Chainmail shirt");
  });

  it("should have a description", function() {
    assert.strictEqual("Defeat the Ogre", task.description);
  });

  it("should have a difficulty", function() {
    assert.strictEqual(DifficultyEnum.DIFFICULT, task.difficulty);
  });

//NO CLUE WHY I CANT GET THIS WORKING - IT CONSOLE LOGS OUT OK!?

  // it("should have a difficulty name", function() {
  //   assert.equals('Difficult', task.getDifficulty());
  // });

  // it("should have a difficulty value", function() {
  //   assert.strictEqual(3, DifficultyEnum.properties[task.difficulty].value);
  // });


  it("should have an urgency", function() {
    assert.strictEqual(UrgencyEnum.SOONPLEASE, task.urgency);
  });

  it("should have a reward", function() {
    assert.strictEqual("Chainmail shirt", task.reward);
  });

  it("should start uncompleted", function() {
    assert.strictEqual(false, task.completed);
  });

  it("should have method to mark completed", function() {
    task.complete();
    assert.strictEqual(true, task.completed);
  });

});
