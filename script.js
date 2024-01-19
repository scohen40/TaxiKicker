let gameState = {
  "kickCount" : 0,
  "winStatus" : false
};

const clickerButtonOne = document.getElementById("click_one");
const clickerButtonTwo = document.getElementById("click_two");
const clickerButtonThree = document.getElementById("click_three");

let kickMultiplyer = 1;

console.log("hi");

clickerButtonOne.addEventListener("click", function () {
  kickMultiplyer = 1;
  updateClickCount();
});

clickerButtonTwo.addEventListener("click", function () {
  kickMultiplyer = 2;
  updateClickCount();
});

clickerButtonThree.addEventListener("click", function () {
  kickMultiplyer = 3;
  updateClickCount();
});

/* TODO: change the taxi image to kicked taxi */
function kick() {
  
}


function updateClickCount() {
  gameState["kickCount"]+=kickMultiplyer;
  // console.log(clickerCount);
  document.getElementById("click_count").innerHTML = gameState["kickCount"];
  //check for win
  checkWin();
}

function checkWin() {
  //check if we have 50 kicks
  if(gameState["kickCount"] >= 50) {
    //TODO: change the taxi image to defeated taxi
    //stop timer
    clearInterval(timer);
    //alert
    alert("You defeated the taxi!");
    //TODO: have a reset mechanism, where the image and counter resets
  } 
}


let timer = setInterval(function () {
  //kick number reduces as time goes on until kicks are 0
  if(gameState["kickCount"] > 0) {
      gameState["kickCount"]--;
    document.getElementById("click_count").innerHTML = gameState["kickCount"];
  }
}, 750); //every .75 second (750 milliseconds)
