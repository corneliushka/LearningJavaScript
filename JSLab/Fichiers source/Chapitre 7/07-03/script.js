// Execution 1
// Personne2 va contenir les mêmes valeurs que personne.
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false
};

var personne2 =personne;
console.log(personne2);

// Execution 2
// Nous exposons ici un exemple de la façons dont les éléments de type référence fonctionne,
// lorsque nous changeons la valeur d’âge de l'objet personne2, 
// la valeur d’âge de l'objet personne change aussi, car l'opérateur d'affectation ici ne fait pas réellement une copie, 
// mais il copie simplement le pointeur qui point sur l’emplacement mémoire de personne a la variable personne2.
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false
};

var personne2 = personne;
personne2.age = 36;
console.log(personne);

// Execution 2
// Pour créer une copie de l'objet personne, je dois finir encore une fois les même propriété dans le nouveau objet.
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false
};

var personne2 = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false
};