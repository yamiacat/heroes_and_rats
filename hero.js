var Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
};

Hero.prototype = {
  speak: function() {
    return "I am " + this.name + "!";
  },
  acceptTask: function(task) {
    this.tasks.push(task);
  },
  completeTask: function(completedTask) {
    this.tasks.forEach(function(task) {
        if(task === completedTask) {
          task.complete();
        }
    });
  }

};






module.exports = Hero;
