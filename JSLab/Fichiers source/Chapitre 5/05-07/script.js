// Execution 1
// Pour construire des tableaux à deux dimensions en javascript, 
// l’astuce consiste à stocker une liste de tableaux dans un autre tableau.
var notesEtudiants = [
  [65, 70, 80, 90],
  [100, 95, 100, 70],
  [60, 100, 90, 70]    
];

console.log(notesEtudiants[0][1]);
console.log(notesEtudiants[1]);
console.log(notesEtudiants[2][0]);

// Execution 2
// Boucler à travers un tableau à deux dimensions
var formations = [
    ["Les fondamentaux d'AngularJS", "François"],
    ["Découverte de jQuery UI", "Robert"],
    ["Node.js, le JavaScript coté serveur", "François"],
    ["Introduction à ECMAScript 6", "Alpha"]    
];

for(var i = 0; i < formations.length; i++) {
    console.log(formations[i][0] + " par " + formations[i][1]);
}