// Execution 1
// "etudiants" et " etudiants_ mise_a_joure " vont pointer vers le même objet en mémoire. 

var etudiants = ["Robert", "Alice", "Francis", "Elina", "Alpha"];
var etudiants_mis_a_jour = etudiants;

console.log(etudiants);
console.log(etudiants_mis_a_jour);

// Execution 2
// Puisque les tableaux sont des types référence, 
// la mettre à jour ici du tableau "étudiants" a le même effet que mettre à jour le tableau" etudiants_ mise_a_joure ". 

var etudiants = ["Robert", "Alice", "Francis", "Elina", "Alpha"];
var etudiants_mis_a_jour = etudiants;

etudiants[0] = "Victoria Henry";
console.log(etudiants_mis_a_jour);

// Execution 3
// Mettre à jour le tableau "etudiants_mise_a_joure" mettrera également à jour le tableau "etudiants".
var etudiants = ["Robert", "Alice", "Francis", "Elina", "Alpha"];
var etudiants_mis_a_jour = etudiants;

etudiants_mis_a_jour[0] = "Arthur Burnett";
console.log(etudiants);
