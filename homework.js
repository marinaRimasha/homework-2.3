const players = [
  {
    id: 1,
    name: "Anna",
    scorePoints: 4100,
  },
  {
    id: 2,
    name: "Sergei",
    scorePoints: 3850,
  },
  {
    id: 3,
    name: "Elena",
    scorePoints: 3650,
  },
  {
    id: 4,
    name: "Dmitry",
    scorePoints: 3000,
  },
  {
    id: 5,
    name: "Nikita",
    scorePoints: 3750,
  },
  {
    id: 6,
    name: "Marina",
    scorePoints: 2800,
  }
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