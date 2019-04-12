// Execution 1
// L'operateur ternaire va retourner, soit le "A est supérieure à b" 
// ou "b est supérieure à a ", selon la condition. 
// Si la condition est vraie, il va retourner la première valeur,
// si la condition n'est pas vraie, il va retourner la deuxième valeur.

var a = 10, b = 12;
var resultat = a > b ? "A est supérieur à B" : "B est supérieur à A";
alert(resultat);

// Execution 2
// Exemple d'operateur ternaire imbriquer.
// Il arrive souvent que c'est une bonne idée de mettre la deuxième clause en parenthèses, 
// et cela le rend un peu plus facile à lire.

var a = 10, b = 10;
var resultat = a === b ? "A est égale à B" : (a > b ? "A est supérieur à B" : "B est supérieur à A");
alert(resultat);
