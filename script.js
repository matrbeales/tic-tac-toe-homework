document.addEventListener('DOMContentLoaded', function() {
  //TicTacToe
    // Need to place an x in one of the squares
      // create box variable
      var box = document.getElementsByTagName("td");
      var turn = document.getElementsByClassName("playerTurn");
      var reset = document.getElementById("reset");
      // create the x.

      // // Create a click event add an x to a box when it is clicked
      for (var i = 0; i < box.length; i+=2) {
        box[i].addEventListener("click", xclick);
      }
      // // Need to check that box are empty. If so, add an x to clicked square.

        function xclick() {
          for (var i = 0; i < box.length; i++) {
            if (this.Classlist != "O" && this.Classlist != "X") {
              this.classList.add("X");
              this.innerHTML = "X";
            }
          }
        }



    // Need to add a o to one of the squares.
      // Change text to say it is o turn
      // Creat a click event add an x to a box when it is clicked.
      for (var i = 1; i < box.length; i+=2) {
        box[i].addEventListener("click", oclick);
      }
      // Need to check if there is already something in the squares
        // Need to check that box are empty. If so, add an o to clicked square. if square if full, don't allow o to be added
        function oclick() {
          for (var i = 0; i < box.length; i++) {
            if (this.Classlist != "O" && this.Classlist != "X") {
              this.classList.add("O");
              this.innerHTML = "O";
            }
          }
        }

    // Apply win conditions
      //Find all possible conditions for a win
      var winConditions = [
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [2,4,6],
          [2,5,8],
          [6,7,8],
          [1,4,7],
          [3,4,5]
        ];
      //If a condition has been satisfied, do not allow any more noughts or crosses to be placed. Announce winner.
      // If all boxes are filled and no win conditions are satisied, announce draw

      // Set reset board button to clear all x's and o's from the board
      reset.addEventListener("click", reset);
      function reset() {

      }
});
