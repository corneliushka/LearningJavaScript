// Execution 1
// Ceci va retourner que la valeur de la somme. 
// add_soust ne va pas retourner la différence aussi.  
function add_soust(valeur1, valeur2) {
    var somme = valeur1 + valeur2;
    var difference = valeur1 - valeur2;
    return somme;
}

var resultat = add_soust(10, 5);
console.log(resultat);

// Execution 2
// Cette fois-ci, return va seulement prendre en compte la différence.  
function add_soust(valeur1, valeur2) {
    var somme = valeur1 + valeur2;
    var difference = valeur1 - valeur2;
    return somme, difference;
}

var resultat = add_soust(10, 5);
console.log(resultat);

// Execution 3
// L'une des façons pour retourner plusieurs valeurs d'une fonction, et de retourner un tableau de valeurs,
// et puis accéder a ces valeures par leur indice
function add_soust(valeur1, valeur2) {
    var somme = valeur1 + valeur2;
    var difference = valeur1 - valeur2;
    return [somme, difference];
}

var resultat = add_soust(10, 5);
console.log("Somme: " + resultat[0]);
console.log("Différence: " + resultat[1]);

// Execution 4
// L'autre façons pour retourner plusieurs valeurs d'une fonction 
// est de retourner un objet JavaScript littéral.
function add_soust(valeur1, valeur2) {
    var somme = valeur1 + valeur2;
    var difference = valeur1 - valeur2;
    return {somme: somme, difference: difference};
}

var resultat = add_soust(10, 5);
console.log("Somme: " + resultat.somme);
console.log("Différence: " + resultat.difference);