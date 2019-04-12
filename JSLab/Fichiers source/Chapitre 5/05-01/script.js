// Execution 1
// Attention : un tableau commence à l'indice n° 0 ! 
// Notre tableau joursDeLaSemain a donc les indices de 0 à 6. 
// Il n'y a pas d'indice 7 dans ce tableau de 7 cases !
// C'est une source d'erreurs très courantes que vous devez vous en souvenir.
var joursDeLaSemain = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
console.log(joursDeLaSemain[1]);

// Execution 2
// Un tableau en JavaScript peut contenir différents types de données
var monTableau = [12, 25, "François", "Frémont", true, false];
console.log(monTableau);

// Execution 3
// Tout type valide dans JavaScript peut aller à l'intérieur d'un tableau,
// donc on peut même avoir des tableaux a l'intérieur d'autres tableaux
var monTableau = [12, "François", "Frémont", ["a", "b", "c"], true, false];
console.log(monTableau[3]);

// Execution 4
// Pour accéder à une case du tableau ["a", "b", "c"] est en fait très facile :
// d'abord on accède au tableau ["a", "b", "c"] avec monTableau[3],
// puis on accède à la case que nous souhaitons avec monTableau[3][indice de la case].
var monTableau = [12, "François", "Frémont", ["a", "b", "c"], true, false];
console.log(monTableau[3][1]);

// Execution 5
// On utilise tableau[indice] pour pas seulement lire les éléments d'un tableau, 
// mais aussi pour ajouter un nouvel élément, on modifie simplement sa valeur s'il existait déjà.
var monTableau = [12, "François", "Frémont", ["a", "b", "c"], true, false];

monTableau[2] = "JavaScriptLab";
monTableau[6] = "Voiture";
console.log(monTableau);

// Execution 6
// Si je veux savoir la longueur d’un tableau, je peux utiliser la propriété length de ce tableau. 
// Je peux voir que la longueur de mon tableau est de 7.
// Mais vous remarquerez que la longueur du tableau n'est pas basée sur zéro. 
// La dernière position est 6, mais la longueur du tableau est 7.
var monTableau = [12, "François", "Frémont", ["a", "b", "c"], true, false];

monTableau[2] = "JavaScriptLab";
monTableau[6] = "Voiture";
console.log(monTableau.length);

// Execution 6
// On peut ajouter une valeur a la fin du tableau, 
// en utilisant la propriété length de ce tableau.
var monTableau = [12, "François", "Frémont", ["a", "b", "c"], true, false];

monTableau[2] = "JavaScriptLab";
monTableau[6] = "Voiture";
monTableau[monTableau.length] = "Avion";
console.log(monTableau);

// Execution 7
// D'autres façons pour créer un tableau
var monDeuxiemeTableau = new Array();
var monDeuxiemeTableau = Array();
