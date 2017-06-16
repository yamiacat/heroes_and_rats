var Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
};

Hero.prototype = {
  speak: function() {
    return "I am " + this.name + "!";
  }

};






module.exports = Hero;
