$(document).ready(function() {
  $('#rollDice').click (function() {
      $('#result').empty();
      var sides = $("input[name='diceSides']").val();
      console.log('sides: ' + sides);
      var number = $("input[name='diceNumber']").val();
      console.log('number: ' + number);
      var rollArray = [];
      var diceTotal = 0;
      console.log('diceTotal: ' + diceTotal);
      for (var i = 0; i < number; i++) {
        rollArray[i] = Math.floor(Math.random()*sides) + 1;
        console.log('die ' + i + ' ' + rollArray[i]);
        $('#result').append('Die ' + (i+1) + ': ' + rollArray[i] +'<br>');
        diceTotal += rollArray[i];
        console.log(diceTotal);
        }
      $('#result').append('Total: ' + diceTotal);
  });
});
