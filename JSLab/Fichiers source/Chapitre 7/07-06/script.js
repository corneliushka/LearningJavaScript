// Execution 1
// L'instruction for...in permet d'itérer sur les propriétés d'un objet, dans un ordre arbitraire.
// Un nom de propriété différente est assigné à la variable prop à chaque itération de la boucle.
var personne = {
    nom_complet: "François chaloux",
    age: 32,
    administrateur: false,
    ville: "Paris"
};

for( var prop in personne) {
    console.log(prop);
}

// Execution 2
// L'instruction for...in permet d'itérer sur les propriétés d'un objet, dans un ordre arbitraire.
// Par exemple, ceci ne fonctionnera pas. Pourquoi ? 
// Parce que cela va chercher une propriété qui est littéralement nommée prop,
// et comme cette propriété n'existe pas, il va retourner undefined.
var personne = {
    nom_complet: "François chaloux",
    age: 32,
    administrateur: false,
    ville: "Paris"
};

for( var prop in personne) {
    console.log(prop + personne.prop);
}

// Execution 3
// Lors d'une boucle for...in, il est obligatoire d'utiliser la notation avec crochets
// Ici nous obtenons des propriétés différents, mais la même valeur de propriété, 
// car nous sommes en train de préciser la propriété ville à chaque fois à travers la boucle.
var personne = {
    nom_complet: "François chaloux",
    age: 32,
    administrateur: false,
    ville: "Paris"
};

for( var prop in personne) {
    console.log(prop + personne["ville"]);
}

// Execution 4
// Ici nous utilisons la variable prop entre les crochets, 
// pour afficher toute les valeurs de propriété. 
var personne = {
    nom_complet: "François chaloux",
    age: 32,
    administrateur: false,
    ville: "Paris"
};

for( var prop in personne) {
    console.log(prop + personne[prop]);
}

