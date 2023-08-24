// Creator: Robert Sterenchak



// MODULE: GAMEBOARD
var BoardModule = (function () {
  
  // **************** Element References **************** // 
  const hoverButton1 = document.getElementById("box1");
  hoverButton1.style.pointerEvents = "none"; // sets
  
  const hoverButton2 = document.getElementById("box2");
  hoverButton2.style.pointerEvents = "none";
  
  const hoverButton3 = document.getElementById("box3");
  hoverButton3.style.pointerEvents = "none";
  
  const hoverButton4 = document.getElementById("box4");
  hoverButton4.style.pointerEvents = "none";
  
  const hoverButton5 = document.getElementById("box5");
  hoverButton5.style.pointerEvents = "none";  
  
  const hoverButton6 = document.getElementById("box6");
  hoverButton6.style.pointerEvents = "none";  
  
  const hoverButton7 = document.getElementById("box7");
  hoverButton7.style.pointerEvents = "none";  
  
  const hoverButton8 = document.getElementById("box8");
  hoverButton8.style.pointerEvents = "none";  
  
  const hoverButton9 = document.getElementById("box9");
  hoverButton9.style.pointerEvents = "none";  
  
  const hoverButton10 = document.getElementById("button");  
  
  const title = document.getElementById("topSpace");
  
  const nameLeft = document.getElementById("name1");
  const nameRight = document.getElementById("name2");
  
  
  let player1 = "";
  let player2 = ""; 
  
  let name1 = "";
  let name2 = "";
  
  var turnMarker = 1;
  
  let turn = 1; // relevant to click Listeners
  let gamer = ""; // relevant to click Listeners
  
  // gameboard - object literal method
  var gameBoard = {
    board: [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    
    };
  
  
  
  // ******************* PRIVATE *******************
  
  var _endGame = function () {
    
    var value = gameBoard.newBoard();  // resets console board
    
    return value; // return value to winnerCheck function
    
  };

   var _clearBoard = function () {
      hoverButton1.textContent = "";
      hoverButton2.textContent = "";
      hoverButton3.textContent = "";
      hoverButton4.textContent = "";
      hoverButton5.textContent = "";
      hoverButton6.textContent = "";
      hoverButton7.textContent = "";
      hoverButton8.textContent = "";
      hoverButton9.textContent = "";
   }

   var _setOff = function () {

      hoverButton1.style.pointerEvents = "none";
      hoverButton2.style.pointerEvents = "none";
      hoverButton3.style.pointerEvents = "none";
      hoverButton4.style.pointerEvents = "none";
      hoverButton5.style.pointerEvents = "none";
      hoverButton6.style.pointerEvents = "none";
      hoverButton7.style.pointerEvents = "none";
      hoverButton8.style.pointerEvents = "none";      
      hoverButton9.style.pointerEvents = "none"; 

   }  
   
   var _setOn = function () {

      hoverButton1.style.pointerEvents = "auto";
      hoverButton2.style.pointerEvents = "auto";
      hoverButton3.style.pointerEvents = "auto";
      hoverButton4.style.pointerEvents = "auto";
      hoverButton5.style.pointerEvents = "auto";
      hoverButton6.style.pointerEvents = "auto";
      hoverButton7.style.pointerEvents = "auto";
      hoverButton8.style.pointerEvents = "auto";      
      hoverButton9.style.pointerEvents = "auto"; 

   }  
  
   
  // ***********************************************
  
  gameBoard.setPlayers = function (player1Input, player2Input, nameA, nameB) {

    player1 = Player(player1Input, 1); // must be 'x or o'
    player2 = Player(player2Input, 2); // must be 'x or o'

    name1 = nameA;
    name2 = nameB;
    
    console.log(player1);
    console.log(name1);
    
    nameLeft.textContent = name1;
    nameLeft.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.6)";
    
    console.log(player2);    
    console.log(name2);
    
    nameRight.textContent = name2;

  };  
  
  gameBoard.freshBoard = function () {
    
    title.textContent = "TIC-TAC-TOE";
    turn = 1; // sets back to player1 ****
    gameBoard.newBoard();// clears console board
    _clearBoard(); // clears GUI
    gameBoard.displayBoard(); // shows board
    _setOn(); // sets all eventListeners back to ON
    
    
    
  }
    
  gameBoard.checkFilled = function () {
    let array = gameBoard.board;
    let counter = 0;
    let filled = 0;
    
    while(counter < array.length){
      
      if((array[counter] === 'x') || (array[counter] === 'o')){
        
        filled++;
        
      }
      
      counter++;
      
    }
    
    // return true if filled (9)
    if(filled === 9){
      
      return true;
      
    }
    // return false if no filled (<9)
    else{
      
      return false;
      
    }
    
  };  
  
  
  gameBoard.displayBoard = function () {
    let array = gameBoard.board;
    
      console.log(array[0] + "|" + array[1] + "|" + array[2] + "\n " + array[3] + "|" + array[4] + "|" + array[5] + "\n " + array[6] + "|" + array[7] + "|" + array[8]);
 
    
  };
  
  
  gameBoard.changeBoard = function (selection) { // turnMarker needs to be changed back to 1
    let newGame = 1;
    let choice = selection; // recieves (game position, player marker)
    turnMarker = choice[2];
    var prefix = "game";
    
    gameBoard.board[choice[0]] = choice[1]; // places marker onto board
    gameBoard.displayBoard(); // Displays board in console

    newGame = gameBoard.winnerCheck(choice, turnMarker); // send current turn (1 or 2) as well
    
    // *******RETURNED TO GAME FLOW LOGIC*******
    // changes turnMaker to next player's turn
    
    if(turnMarker === 1){
      turnMarker = 2;
      // change boxShadow to right name element
      nameLeft.style.boxShadow = "none";
      nameRight.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.6)";
    }
    else{
      turnMarker = 1;
      // change boxShadow to left name element
      nameRight.style.boxShadow = "none";
      nameLeft.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.6)";
    }
    
    
    if(newGame === 0){
      // tieCounter = 0;
      nameRight.style.boxShadow = "none";
      nameLeft.style.boxShadow = "none";
      
      
      return newGame; // returns 0 when winner or tie
      
    }
    
    else{
      
      return turnMarker; // returns [player number = turn]
    }
    
  };
  
  
  
  gameBoard.newBoard = function () {
    
    gameBoard.board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    
    return 0; // return 1 to _endGame
    
  };
  
  
  gameBoard.winnerCheck = function (marker, turn) {
    let board = gameBoard.board;
    let pos = marker[1];  // stores user marker 'x or o'
    let user = 'Player ' + turn; // stores 'player1 or 2'
    
    console.log('turn (w/ in winnerCheck): ' + turn);
    
    
    // Annouce winner for the following board-marker combinations
    // if rows [0, 1, 2] [3, 4, 5] [6, 7, 8]
    if((board[0] === pos) && (board[1] === pos) && (board[2] === pos)){
      
      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();

         
      return _endGame();            
    }
    if((board[3] === pos) && (board[4] === pos) && (board[5] === pos)){

      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();

         
      return _endGame();      
      
    }
    if((board[6] === pos) && (board[7] === pos) && (board[8] === pos)){
      
      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();

      
      return _endGame();      
      
    }    
    // if columns [0, 3, 6] [1, 4, 7] [2, 5, 8]
    if((board[0] === pos) && (board[3] === pos) && (board[6] === pos)){
      
      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();

            
      return _endGame();      
      
    }
    if((board[1] === pos) && (board[4] === pos) && (board[7] === pos)){
      
      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();

      
      return _endGame();      
      
    }
    if((board[2] === pos) && (board[5] === pos) && (board[8] === pos)){

      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();

      
      return _endGame();      
      
    }        
    
    // if diagonal [0, 4, 8] [2, 4, 6]
    if((board[0] === pos) && (board[4] === pos) && (board[8] === pos)){

      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();

      
      return _endGame();      
      
    }
    if((board[2] === pos) && (board[4] === pos) && (board[6] === pos)){

      // Announce Winner - take from variable passed into function?
      console.log(user + " is the winner!");
      title.textContent = user + " WINS!";
      gameBoard.displayBoard();


      return _endGame();      
      
    }
       

    if(gameBoard.checkFilled()){
      
      console.log('THIS GAME IS A TIE!!!');
      title.textContent = "NOBODY WINS";
      gameBoard.displayBoard();

      
      return _endGame(); // End game           
    }
    
  };  
  
  
  
  // **************************** NEW GAME BUTTON **************************** //
  
  hoverButton10.addEventListener("mouseenter", function() {
    this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    this.style.background = "lightgrey";  
  });

  hoverButton10.addEventListener("mouseleave", function() {
    this.style.boxShadow = "none";
    this.style.background = "#ededed";  
  });     
  
  
  hoverButton10.addEventListener("click", function() {  
    
    let game = GameModule(); // new game object, return 'information array' to be used in 'eventListeners'
  
  }); // ends 'new Game' eventListener  
  
  
  // ************************************************************************* //  
  
  
  
  
  // **************************** GUI 'EVENT' LISTENERS *********************** //
  
  // Click Listener for box1 or position 0
  hoverButton1.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton1.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton1.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [0, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton1.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton1.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });    
  
  
  // Click Listener for box1 or position 0
  hoverButton2.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton2.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton2.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [1, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton2.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton2.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });    
  
  
  
  // Click Listener for box1 or position 0
  hoverButton3.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton3.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton3.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [2, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton3.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton3.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });      
  
  
  // Click Listener for box1 or position 0
  hoverButton4.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton4.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton4.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [3, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton4.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton4.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });  
  

  // Click Listener for box1 or position 0
  hoverButton5.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton5.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton5.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [4, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton5.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton5.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });    
  
  // Click Listener for box1 or position 0
  hoverButton6.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton6.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton6.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [5, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton6.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton6.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });    
  
  // Click Listener for box1 or position 0
  hoverButton7.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton7.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton7.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [6, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton7.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton7.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });    
  
  
  // Click Listener for box1 or position 0
  hoverButton8.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton8.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton8.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [7, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
     }
    
    });

    hoverButton8.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton8.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });    
  
  
  // Click Listener for box1 or position 0
  hoverButton9.addEventListener("click", function() {
      
    if(turn === 1){
      gamer = player1;
    }
    if(turn === 2){
      gamer = player2;  
    }

    hoverButton9.textContent = gamer.choice;  

    // 'Turn off' hover Event listeners
    hoverButton9.style.pointerEvents = "none";

    // Call changeBoard to modify array
    let selection = [8, gamer.choice, gamer.playerNum]; // (game position, player marker, player Number)

    console.log(selection); // check selection, being passed twice????

    // sends (game position, player marker)
    turn = gameBoard.changeBoard(selection); // returns player number for next turn 
    console.log('turn (after changeBoard): ' + turn);


    if (turn === 0){
      
      turn = 1; // sets back to player1 ****
 
        
      _clearBoard(); // clears GUI
      gameBoard.displayBoard(); // shows console board        
      _setOff();
      console.log("Board cleared - GAME COMPLETE");    
      
      
     }
    
    });

    hoverButton9.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      this.style.background = "lightgrey";  
    });

    hoverButton9.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
      this.style.background = "white";  
    });    
  
  // ************************************************************************* //
  
  
  
  
  
  
  return gameBoard;
  
})(); // Ends BoardModule




// ************************************************************************ //


// FACTORY FUNCTION: PLAYER OBJECT
// Store players in objects
const Player = (marker,digit) => {
  let choice = marker;
  let playerNum = digit;
  
  
  return {choice, playerNum};
};



// ************************************************************************ //






// FACTORY FUNCTION: GAMEMODULE
// var GameModule = (function () {
var GameModule = () => {
  
  
  let turn = 1;

  let proceed = 0;


  // Announce game start
  console.log("GAME START -> " + proceed);
    
  while(proceed === 0){
    
    // PROMPT: for player1 name 
    var name1 = prompt("Player 1: What is your name?");
    
    // PROMPT: Ask player one whether they'd like 'x' or 'o'?
    var player1Input = prompt("Player 1: Would you like to be 'x' or 'o'? Type your selection then press ENTER.");
    player1Input = player1Input.trim();
    player1Input = player1Input.toLowerCase();
    
    // PROMPT: for player2 name 
    var name2 = prompt("Player 2: What is your name?");    

    var player2Input = "";

    if((player1Input === 'x') || (player1Input === 'o')){

    // Assign other player marker 'x or o'
    if(player1Input === 'x'){
      
      player2Input = 'o';
     
    }
      
    if(player1Input === 'o'){
      
      player2Input = 'x';
    
    }

        proceed = 1;// escape while loop 
      }

    } // Ends First Loop

  
    // FUNCTION: Call function that defines player objects within BoardModule()
    BoardModule.setPlayers(player1Input, player2Input, name1, name2);
    
    // FUNCTION: Call function that sets up board for a fresh game
    BoardModule.freshBoard();

  
  
}; // Ends GameModule - Factory
// })(); // Ends GameModule - Module





// ****** TESTING SECTION ******

// **CURRENT ISSUES** - (* = completed)
//
// - *For some reason after every GameModule() when pressing the 'New Game' button,
//   the console will show double prompts like multiple games are going on at
//   the same time. 
// 
// - Include way for users to input their own to be displayed in game.
//
//
// **POSSIBLE SOLUTIONS**
//  
// -  return; is usable for ending the GameModule()
// -  maybe include a way to track the number of games won by each player?
//
// - 
// ******************************




// *************************************************** //
