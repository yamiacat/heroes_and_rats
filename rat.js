var Rat = function() {

}

Rat.prototype = {
  touch: function(food) {
    food.getPoisoned();
  }
};



module.exports = Rat;
