function diceRoll() {
    var number = prompt("How many dice would you like to roll?");
    var sides = prompt("How many sides on those dice?");
    var rollArray = [];
    for (var i = 0; i < number; i++) {
      rollArray[i] = Math.floor(Math.random()*sides) + 1;
      console.log(rollArray[i]);
      }
    alert(rollArray);
}
