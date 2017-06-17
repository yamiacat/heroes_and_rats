var DifficultyEnum = require("./task.js");

var Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
  this.booty = [];
};

Hero.prototype = {
  speak: function() {
    return "I am " + this.name + "!";
  },
  acceptTask: function(task) {
    this.tasks.push(task);
  },
  completeTask: function(completedTask) {
    // this.tasks.forEach(function(task) {
    for(task of this.tasks) {
      if(task === completedTask) {
        task.complete();
        this.health -= 30;
        // this.health -= (task.getDifficultyValue() * 10);
        this.booty.push(task.reward);
      }
    };
  },
  eat: function(food) {
    var currentHealth = this.health;
    var potentialHealth = currentHealth += food.foodValue;
    var foodGain = food.foodValue;

    if(food.foodName === this.favouriteFood) {
      foodGain = (foodGain * 1.5);
    }

    if(potentialHealth <= 100) {
      this.health += foodGain;
    } else {
      this.health = 100;
    }
  }
}






module.exports = Hero;
