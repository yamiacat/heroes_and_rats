var _ = require("lodash");

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
    for(task of this.tasks) {
      if(task === completedTask) {
        task.complete();
        this.health -= (task.difficulty * 10);
        this.booty.push(task.reward);
      }
    };
  },
  eat: function(food) {
    var currentHealth = this.health;
    var foodGain = food.foodValue;

    if(food.foodName === this.favouriteFood) {
      foodGain = (foodGain * 1.5);
    }

    if(food.poison === true) {
      foodGain -= (foodGain * 2);
    }

    var potentialHealth = currentHealth += foodGain;

    if(potentialHealth <= 100) {
      this.health += foodGain;
    } else {
      this.health = 100;
    }
  },
  reportCompletedTasks: function() {
    var reportString = "Completed Tasks:\n";
    for(task of this.tasks) {
      if(task.completed === true) {
        reportString += "* " + task.description + "\n";
      }
    }
    return reportString;
  },
  reportUncompletedTasks: function() {
    var reportString = "Uncompleted Tasks:\n";
    for(task of this.tasks) {
      if(task.completed === false) {
        reportString += "* " + task.description + "\n";
      }
    }
    return reportString;
  },
  reportTasksByDifficulty: function() {
    var reportString = "Tasks in order of difficulty:\n";
    var sortedTasks = _.sortBy(this.tasks, function(task) {
      return task.difficulty;
    });

    for(task of sortedTasks) {
      reportString += "* " + task.description + "\n";
      }
    return reportString;
  },
  reportTasksByUrgency: function() {
    var reportString = "Tasks in order of urgency:\n";
    var sortedTasks = _.sortBy(this.tasks, function(task) {
      return task.urgency;
    });

    for(task of _.reverse(sortedTasks)) {
      reportString += "* " + task.description + "\n";
      }
    return reportString;
  },
  reportTasksByReward: function() {
    var reportString = "Tasks in order of reward:\n";
    var sortedTasks = _.sortBy(this.tasks, function(task) {
      return task.reward;
    });

    for(task of _.reverse(sortedTasks)) {
      reportString += "* " + task.description + "\n";
      }
    return reportString;
  }
}






module.exports = Hero;
