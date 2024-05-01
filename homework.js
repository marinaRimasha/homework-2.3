const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scores = []; // created empty array for all the scores

for (let i = 0; i < players.length; i++) {
  scores.push(players[i].scorePoints);
} //push the scorepoints into the array

let bestScore = Math.max(...scores); // find max score 
// get index of the max score in the array
let bestPlayerIndex = scores.indexOf(bestScore); 
// get the name with the max score in array
let bestPlayerName = players[bestPlayerIndex].name;

console.log(bestPlayerName + " has the highest score: " + bestScore);