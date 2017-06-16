var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var DifficultyEnum = require("../task.js");
var UrgencyEnum = require("../task.js");

describe("Hero", function(){
var hero;

  beforeEach(function() {
    hero = new Hero("Mulan", "Dumpling");
    task = new Task("Defeat the Ogre", DifficultyEnum.DIFFICULT, UrgencyEnum.SOONPLEASE, "Chainmail shirt");
    task2 = new Task("Chase the ghost out of the old mill", DifficultyEnum.MEDIUM, UrgencyEnum.WHENEVER, "Bun");
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

  it("Should be able to accept task", function() {
    hero.acceptTask(task);
    assert.strictEqual(1, hero.tasks.length);
  });

  it("Should be able to accept multiple tasks", function() {
    hero.acceptTask(task);
    hero.acceptTask(task2);

    assert.strictEqual(2, hero.tasks.length);
  });


  it("Should be able to complete task", function() {
    hero.acceptTask(task);
    hero.completeTask(task);
    assert.strictEqual(true, hero.tasks[0].completed);
  });

  it("Should be able to complete specific task", function() {
    hero.acceptTask(task);
    hero.acceptTask(task2);
    hero.completeTask(task2);
    assert.strictEqual(false, hero.tasks[0].completed);
    assert.strictEqual(true, hero.tasks[1].completed);
  });


  // it("Should be able to list booty from completed tasks", function() {
  //   hero.acceptTask(task);
  //   hero.completeTask(task);
  //   assert.strictEqual(1, hero.booty.length);
  // });

});
