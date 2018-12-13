document.addEventListener('DOMContentLoaded', function() {
  //TicTacToe
    // Need to place an x in one of the squares
      // create box variable
      var box = document.getElementsByTagName("td");
      // create the x.

      // Creat a click event add an x to a box when it is clicked
      for (var i = 0; i < box.length; i++) {
        box[i].addEventListener("click", xClick)
      }
      // Need to check that box are empty. If so, add an x to clicked square.
      function xClick () {
        console.log(box)
      }

    // Need to add a o to one of the squares.
      // Change text to say it is o turn
      // Creat a click event add an x to a box when it is clicked. (already done)
      // Need to check if there is already something in the squares
        // Need to check that box are empty. If so, add an o to clicked square. if square if full, don't allow o to be added
        function
    //Do the same process as above for x. Keep doing this.

    // Apply win conditions
      //Find all possible conditions for a win
      //If a condition has been satisfied, do not allow any more noughts or crosses to be placed. Announce winner
      // If all boxes are filled and no win conditions are satisied, announce draw

    // Set reset board button to clear all x's and o's from the board

});
