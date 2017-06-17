var Food = function(foodName, foodValue) {
  this.foodName = foodName;
  this.foodValue = foodValue;
  this.poison = false;
};

Food.prototype = {
  getPoisoned: function() {
    this.poison = true;
  }
}


module.exports = Food;
