function init() {
  var container = document.getElementById("game-container");
  var game = new Game(container);
  game.init();

  console.log("dom fully loaded!");
}

document.addEventListener("DOMContentLoaded", init);
