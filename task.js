var DifficultyEnum = Object.freeze({
  EASY: 1,
  MEDIUM: 2,
  DIFFICULT: 3,
  HEROIC: 4,
  LEGENDARY: 5,
  properties: {
    1: {name: "Easy", value: 1},
    2: {name: "Medium", value: 2},
    3: {name: "Difficult", value: 3},
    4: {name: "Heroic", value: 4},
    5: {name: "Legendary!", value: 5}
  }
});

var UrgencyEnum = Object.freeze({
  WHENEVER: 1,
  SOONPLEASE: 2,
  IMMEDIATE: 3,
  URGENT: 4,
  NOWNOWNOW: 5,
  properties: {
    1: {name: "Whenever", value: 1},
    2: {name: "Soon please!", value: 2},
    3: {name: "Immediate!", value: 3},
    4: {name: "Urgent!!", value: 4},
    5: {name: "NOW! NOW! NOW!", value: 5}
  }
});

// var myUrgency = UrgencyEnum.IMMEDIATE;
// var myValue = UrgencyEnum.properties[myUrgency].value;

var Task = function(description, difficulty, urgency, reward) {
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
}

Task.prototype = {
  getDifficultyValue: function () {
    var taskDifficulty = this.difficulty;
    var returnValue =  DifficultyEnum.properties[taskDifficulty].value;
    return returnValue.valueOf();
  },
  complete: function() {
    this.completed = true;
  }
}

  // task = new Task("Defeat the Ogre", DifficultyEnum.DIFFICULT, UrgencyEnum.SOONPLEASE, "Chainmail shirt");
  //
  //
  // console.log(task.getDifficultyValue());


module.exports = DifficultyEnum;
module.exports = UrgencyEnum;
module.exports = Task;
