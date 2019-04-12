// Execution 1
// Pour utiliser une fonction en tant qu’un constructeur, nous utilisons avec elle le mot-clé "new". 
// N'oublier pas de capitaliser le nom des constructeurs pour les faire distinguer des fonctions.
function Personne() {

}

var personne = new Personne();
console.log(personne);

// Execution 2
// Ceci est un exemple de constructeur native à JavaScript.
var aujourdhui = new Date();

// Execution 3
// Pour définir des propriétés et méthodes pour notre propre type d'objet. Nous utilisons le mot-clé "this", 
function Personne() {
    this.nom_complet = "François chaloux";
}

var personne = new Personne();
console.log(personne);

// Execution 4
// Le mot-clé « this » réfère dans ce cas à un objet vide, 
// où nous pouvons affecter de nouvelles propriétés ou même des méthodes,
// et puis a la fin du constructeur nous retournons cet objet.
// Tout cela est fait par l'usage du mot-clé « new » lors de l'exécution du constructeur. 
function Personne() {
    // this = {};
    this.nom_complet = "François chaloux";
    // return this;
}

var personne = new Personne();
console.log(personne);

// Execution 5
// Si nous n'utilisons pas le mot-clé « new » lors de l'exécution du constructeur,
// le constructeur sera traité comme une fonction normale.
function Personne() {
    this.nom_complet = "François chaloux";
}

var personne = Personne();
console.log(personne);

// Execution 6
// On peut également passer des attributs a notre constructeur comme toute autre fonction normal.
function Personne(nom_complet) {
    this.nom_complet = nom_complet;
}

var personne = Personne("François chaloux");
console.log(personne);


