function Game(containerElement) {
  var self = this;
  self.containerElement = containerElement;
  self.state = null;
  self.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  self.turn = null;
  self.score = 0;
  self.visibleNumber = null;
  self.hiddenNumber = null;
  self.userSelection = null;

  // timeouts/intervals
  self.intervalId = null;

  // DOM elements
  self.splashElement = null;
  self.gameElement = null;
  self.gameOverElement = null;

  self.buildSplash = function() {
    console.log("buildSplash");
    // create splash div
    self.splashElement = document.createElement("div");
    self.splashElement.innerText = "SPLASH";
    self.splashElement.classList.add("splash");
    self.containerElement.appendChild(self.splashElement);

    // create and append button to splash div
    var startButton = document.createElement("button");
    startButton.innerText = "Start Game";
    startButton.classList.add("btn-start");
    startButton.addEventListener("click", function() {
      self.play();
    });
    self.splashElement.appendChild(startButton);
  };

  self.destroySplash = function() {
    self.splashElement.remove();
  };

  self.buildGameOver = function() {
    console.log("buildGameOver");
  };

  self.destroyGameOver = function() {
    console.log("destroyGameOver");
  };

  self.buildGame = function() {
    console.log("buildGame");
    // create header and append it to game container
    var header = document.createElement("header");
    // header.innerText = "header div";
    header.classList.add("game-header");
    self.containerElement.appendChild(header);
    // create turn and score and append to header
    var turn = document.createElement("div");
    turn.innerText = "turn div";
    turn.classList.add("game-turn");
    header.appendChild(turn);
    var time = document.createElement("div");
    time.innerText = "score div";
    time.classList.add("game-time");
    header.appendChild(time);

    // create main and append it to game container
    var main = document.createElement("main");
    main.classList.add("game-main");
    // main.innerText = "main div";
    self.containerElement.appendChild(main);

    // create visibleNumber, choices, hiddenNumber
    var visibleNumber = document.createElement("div");
    visibleNumber.classList.add("game-visiblenumber");
    visibleNumber.innerText = "visibleNumber div";
    main.appendChild(visibleNumber);

    var choices = document.createElement("div");
    choices.classList.add("game-choices");
    // choices.innerText = "choices div";
    main.appendChild(choices);

    var choicesBtn1 = document.createElement("button");
    choicesBtn1.setAttribute("id", "game-choices-higher");
    // choicesBtn1.classList.add("game-choices-higher");
    choicesBtn1.innerText = "higher";
    choices.appendChild(choicesBtn1);

    var choicesBtn2 = document.createElement("button");
    // choicesBtn2.classList.add("game-choices-lower");
    choicesBtn2.setAttribute("id", "game-choices-lower");
    choicesBtn2.innerText = "lower";
    choices.appendChild(choicesBtn2);

    var hiddenNumber = document.createElement("div");
    hiddenNumber.classList.add("game-hiddenNumber");
    hiddenNumber.innerText = "hiddenNumber div";
    main.appendChild(hiddenNumber);

    // create footer and append it to the game container
    var footer = document.createElement("footer");
    footer.classList.add("game-footer");
    // footer.innerText = "footer div"
    self.containerElement.appendChild(footer);

    // create message and score
    var message = document.createElement("div");
    message.classList.add("game-message");
    message.innerText = "message div";
    footer.appendChild(message);

    var score = document.createElement("div");
    score.classList.add("game-score");
    score.innerText = "score div";
    footer.appendChild(score);
  };

  self.destroyGame = function() {
    console.log("destroyGame");
  };

  self.createNumber = function() {
    console.log("createNumber");
    var numbers = [];

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < this.numbers.length; j++) {
        numbers.push(this.numbers[j]);
      }
    }

    // Fisher-Yates (aka Knuth) Shuffle
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    this.numbers = shuffle(numbers);
  };

  self.bindClicks = function() {
    console.log("bindClicks");
    var btnLower = document.getElementById("game-choices-lower");
    var btnHigher = document.getElementById("game-choices-higher");
    btnLower.addEventListener("click", function() {
      console.log("clicked on lower btn");
    });
    btnHigher.addEventListener("click", function() {
      console.log("clikced on higher btn");
    });
  };

  self.nextTurn = function() {
    console.log("nextTurn");
    // pop the two last elements from number and insert to visibleNumber and hiddenNumber
    this.visibleNumber = this.numbers.pop();
    this.hiddenNumber = this.numbers.pop();
  };

  self.reveal = function() {
    console.log("reveal");
  };

  self.timeout = function() {
    console.log("timeout");
  };

  self.showResult = function() {
    console.log("showResult");
  };

  // State Transition

  self.init = function() {
    console.log("INIT");
    // build Splash
    self.buildSplash();
    // destroy Game Over
    self.destroyGameOver();
  };

  self.play = function() {
    console.log("PLAY");
    // buildGame
    self.buildGame();

    // destroySplash
    self.destroySplash();

    // createNumber
    self.createNumber();

    // bindClicks
    self.bindClicks();
  };
  self.nextTurn = function() {
    console.log("NEXT TURN");
    // updateTurn
    // startTimer
    // pickNumber
    // showTime
    // showScore
    // showVisibleNumber
  };

  self.reveal = function() {
    console.log("REVEAL");
    // setUserSelection
    // stepTimer
    // disableButtons
    // showHiddenNumber
    // setTimeout -> go to result
  };

  self.timeout = function() {
    console.log("TIMEOUT");
    // disableButtons
    // showMessage (to slow
    // updateScore
    // setTimeout -> resume
  };

  self.showResult = function() {
    console.log("SHOWRESULT");
    // showMessage (win/loose)
    // updateScore( +1 / -1)
    // setTimeout -> resume
  };
}
