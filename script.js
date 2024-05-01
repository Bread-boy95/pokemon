// HTML DOM Elements
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

var allPokemon;

fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (allPokemon = strData.split(/\r?\n/)));

button1.addEventListener("click", showPokemon);
button2.addEventListener("click", showTeam);
input1.addEventListener("change", showLetter);
input2.addEventListener("change", amount);

function showPokemon() {
  let randIndex = Math.floor(Math.random() * allPokemon.length);
  span1.innerHTML = allPokemon[randIndex];
}

function showTeam() {
  span2.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let randIndex = Math.floor(Math.random() * allPokemon.length);
    span2.innerHTML += allPokemon[randIndex] + " ";
  }
}

function showLetter() {
  div1.innerHTML = "";
  var letter = input1.value;
  input1.value = "";

  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i]; // e.g. "pikachu"
    let firstletter = currentPokemon.charAt(0);

    if (firstletter == letter) {
      div1.innerHTML += currentPokemon + "<br>";
    }
  }
}

function amount() {
  div2.innerHTML = "";
  var number = input2.value;
  input2.value = " ";

  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i];
    if (currentPokemon.length == number) {
      div2.innerHTML += currentPokemon += "<br>";
    }
  }
}
