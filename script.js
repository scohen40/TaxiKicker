let gameState = {
  "kickCount" : 0,
  // "winStatus" : false
};

//????? should i make anything like gene's popuplation dictionary?
// let taxiHealth = {
  
// }

//TODO: natural language description for kicks - different kick counts have different attributes with different cool downs. items and upgrades (like in a store)
let taxiKickingMethods = [{
                            "name" : "shoe_kick",
                            // "modifier" : 0.9, //?
                            "multiplyer" : 1,
                            "operation" : "add"
                          }, {
                            "name" : "sneaker_kick",
                            // "modifier" : 0.9, //?
                            "multiplyer" : 2,
                            "operation" : "add"
                          }, {
                           "name" : "boot_kick",
                           // "modifier" : 0.9, //?
                           "multiplyer" : 3,
                           "operation" : "add"
                         }];
let item = {
  "name" : "shoe_kick",
  "modifier" : 0.9, //?
  "multiplyer" : 1,
  "operation" : "multiply"
}

function useItem (item, kicks) {
  if (item["operation"] === "multiplyer") {
    return kicks * (item["modifier"] * item["multiplyer"])
  }
}

function makeButton (item, kickId) {
  let newButton = document.createElement("button");
  //add name to button
  newButton.innerHTML = item["name"];
  newButton.id = item["name"]
  newButton.value = item["value"] = item["multiplyer"]
  //add button to page
  kickerButtons = document.getElementById();
  kickerButtons.appendChild(newButton);
  newButton.addEventListener("click", function () {
    // const kickDisplay = document.getElementById(item["name"]+"_count");
    kickMultiplyer = item["multiplyer"];
    updateKickCount();
  });
}



const taxiImage = document.getElementById("taxi_image");

const clickerButtonOne = document.getElementById("click_one");
const clickerButtonTwo = document.getElementById("click_two");
const clickerButtonThree = document.getElementById("click_three");

const kickingView = document.getElementById("kicking_div");
const winView = document.getElementById("win_div");
const replayButton = document.getElementById("replay_button");

let kickMultiplyer = 1;

clickerButtonOne.addEventListener("click", function () {
  kickMultiplyer = 1;
  updateKickCount();
});

clickerButtonTwo.addEventListener("click", function () {
  kickMultiplyer = 2;
  updateKickCount();
});

clickerButtonThree.addEventListener("click", function () {
  kickMultiplyer = 3;
  updateKickCount();
});

/* TODO: change the taxi image to kicked taxi for a set amount of time */
function kick() {
  
}


function updateKickCount() {
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
    taxiImage.src = "images/defeated_taxi.jpeg"
    //stop timer
    clearInterval(timer);
    //toggle to win div:
    //hide kicking div
    kickingView.hidden = true;
    //show win div
    winView.hidden = false;
  } 
}

//on replay button click, have a reset mechanism, where the image and counter resets, hide the win dev, and show the kicking div
replayButton.addEventListener("click", function () {
  gameState["kickCount"] = 0;
  document.getElementById("click_count").innerHTML = gameState["kickCount"];
  taxiImage.src = "images/annoying_taxi.jpeg";
  kickingView.hidden = false;
  winView.hidden = true;
});


let timer = setInterval(function () {
  //kick number reduces as time goes on until kicks are 0
  if(gameState["kickCount"] > 0) {
      gameState["kickCount"]--;
    document.getElementById("click_count").innerHTML = gameState["kickCount"];
  }
}, 750); //every .75 second (750 milliseconds)
