const monsterInput = document.getElementById("spellInput");
const spellSearchButton = document.getElementById("spellSearchButton");
const monsterResult = document.getElementById("spellResult");
const raceSearchButton = document.getElementById("raceSearchButton");

// let userInput = 



// function searchButton(){
//   const userInput = raceInput.value.toLowerCase();
//   const raceName = race.replace(' ', '-');

//   if (raceName) {
//     searchRace(raceName);
//   } else {
//     raceResult.innerHTML = "Please enter a race.";
//   }
// }

// raceSearchButton.addEventListener("click", () => {
//   const race = raceInput.value.toLowerCase();
//   const raceName = race.replace(' ', '-');

//   if (raceName) {
//     searchRace(raceName);
//   } else {
//     raceResult.innerHTML = "Please enter a race.";
//   }
// });

async function searchRace(){
  const race = raceInput.value.toLowerCase();
  const raceName = race.replace(' ', '-');

  const response = await fetch (`https://www.dnd5eapi.co/api/spells/${spellName}`);

  var data = await response.json();

  console.log(data);

  if (data['name'] !== undefined){
    document.getElementById('raceName').innerHTML = data['name'];
  }

}

function rollDice(){
  let attributeArray = [];
  for(let i = 0; i < 6; i++){
    let randomNumber = Math.round(Math.random() * (20 - 1 + 1));
    attributeArray[i] = randomNumber;
    console.log(attributeArray);
  }
  document.getElementById('rollArray').innerHTML = attributeArray;
}

spellSearchButton.addEventListener("click", () => {
  const spell = spellInput.value.toLowerCase();
  const spellName = spell.replace(' ', '-');

  if (spellName) {
    searchSpell(spellName);
  } else {
    spellResult.innerHTML = "Please enter a spell name.";
  }
});

async function searchSpell(){
  const spell = spellInput.value.toLowerCase();
  const spellName = spell.replace(' ', '-');

  const response = await fetch (`https://www.dnd5eapi.co/api/spells/${spellName}`);

  var data = await response.json();

  if (data['name'] !== undefined){
    document.getElementById('spellName').innerHTML = data['name'];
    document.getElementById('spellDescription').innerHTML = data['desc'];
  }

}


searchSpell();