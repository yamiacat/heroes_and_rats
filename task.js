var Task = function(description, difficulty, urgency, reward) {
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
}

Task.prototype = {
  getDifficulty: function() {
    switch(this.difficulty) {
      case 1:
        return "Easy";
        break;
      case 2:
        return "Medium";
        break;
      case 3:
        return "Difficult";
        break;
      case 4:
        return "Heroic";
        break;
      case 5:
        return "Legendary";
        break;
      default:
        return "No task, no difficulty";
    }
  },
  getUrgency: function() {
    switch(this.urgency) {
      case 1:
        return "Whenever";
        break;
      case 2:
        return "Soon please";
        break;
      case 3:
        return "Immediate!";
        break;
      case 4:
        return "Urgent!!";
        break;
      case 5:
        return "NOW! NOW! NOW!";
        break;
      default:
        return "No task, no urgency";
    }
  },
  getRewardDescription: function() {
    switch(this.reward) {
      case 1:
        return "Trinkets";
        break;
      case 2:
        return "Armour or weapons";
        break;
      case 3:
        return "Silver & gold";
        break;
      case 4:
        return "Gems";
        break;
      case 5:
        return "Enchanted object";
        break;
      default:
        return "No task, no urgency";
    }
  },
  complete: function() {
    this.completed = true;
  }
}


module.exports = Task;
