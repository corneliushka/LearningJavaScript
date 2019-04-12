// Execution 1
// Il existe deux façons d'accéder aux propriétés d'un objet : 
// la notation avec point et la notation avec crochets.
// la notation avec crochets reçoit une chaîne de caractères.
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false
};

console.log(personne["nom_complet"]);

// Execution 2
// la notation avec point doit utiliser une propriété avec un identifiant JavaScript valide, 
// c'est-à-dire une séquence de caractères alphanumériques, soulignés (« _ ») et signes dollar (« $ »), 
// qui ne peut commencer par un nombre. Par exemple, personne.M1 est valide, mais personne.1M ne l'est pas.
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false
};

console.log(personne["nom_complet"]);

// Execution 3
// La notation avec crochets il n'exige pas une propriété avec un identifiant JavaScript valide,
// tant que la propriété est entouré par des guillemets ou apostrophe.
// Donc elle peut avoir n'importe quelle valeur, par exemple "1foo", "!bar!" ou même " " (une espace).
// Mais il est fortement déconseillé de créer des objets avec des noms de propriété invalide.
var personne = {
    "nom complet": "William Fontaine",
    age: 32,
    administrateur: false
};
console.log(personne["nom complet"]);


// Execution 4
// On peut également définir ou modifier des propriétés avec l'opérateur d'affectation égale,
// comme le montre le code suivant:
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false
};

personne.age = 42;
personne.ville = "Paris";

// Execution 5
// Ici nous ajoutons quelque chose de très simple qu'on appelle une méthode,
// qui est tout simplement l'ajout d'une propriété dont la valeur est une fonction. 
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false,
    dirBonjour: function() {
        console.log("Bonjour " + personne.nom_complet);
    }
};

personne.dirBonjour();

// Execution 6
// L'opérateur delete permet de retirer une propriété d'un objet
var personne = {
    nom_complet: "William Fontaine",
    age: 32,
    administrateur: false,
    dirBonjour: function() {
        console.log("Bonjour " + personne.nom_complet);
    }
};

delete personne.age;
console.log(personne);







