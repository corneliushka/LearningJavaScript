// Execution 1
x;
y;
var x = 10;
var y = 5;
console.log(x);
console.log(y);

// Execution 2
var x;
var y;
x;
y;
x = 10;
y = 5;
console.log(x);
console.log(y);

// Execution 3
// Nous obtenons une erreur de reference cat monNom n'est pas déclaré
console.log(monNom);

// Execution 4
// Nous obtenons undefined, car dans le premier passage le compilateur voit que 
// nous sommes en train de déclarer "monNom", donc maintenant le compilateur est au courant de cela.
// Donc, lorsque nous exécutons console.log "avec monNom", le compilateur connaît cette variable globale, 
// mais elle est réglée à undefined. Elle n’est pas réglée à " Dominic" 
// jusqu'à ce que l’affectation s’exécute réellement au deuxième passage.
console.log(monNom);
var monNom = "Dominic";

// Execution 5
// Nous obtenons NaN, car lorsque nous exécutons la première ligne, le prix et quantité
// sont connus en raison de hoisting, mais ils ne sont pas encore initialiser, 
// ils sont régler à undefined. Et undefined multiplié par undefined retourn «NaN».
var total = prix * quantite;
var prix = 9.90;
var quantite = 2;

console.log(total);

// Execution 6
// Le hoisting fonctionne avec les fonctions également.
// Une déclaration de fonction peut etre utilisé avant qu'elle ne soit déclarée.
afficherMessage("Dominic");

function afficherMessage(nom) {
    console.log("Bonjour " + nom + "!");
}

// Execution 7
// Dans le premier passage «var afficherNom» va être deplacer vers le haut, mais elle va être réglé à undefined.
// Donc, quand nous appelons afficherNom, ce n'est pas vraiment encore une fonction, 
// ainsi nous allons obtenir une erreur: «afficherNom» n'est pas une fonction.
afficherMessage("Dominic");

var afficherMessage = function(nom) {
    console.log("Bonjour " + nom + "!");
}

// Execution 8
// lorsque vous travaillez avec des expressions de fonction, 
// toujours déclarer-les avant que vous les appelez en tant que des fonctions pour éviter tous problèmes de hoisting.
var afficherMessage = function(nom) {
    console.log("Bonjour " + nom + "!");
}
afficherMessage("Dominic");

// Execution 9
// Ceci un exemple où vous avez deux ou plus de fonctions appelant les uns les autres.  
// Si vous pensez à cela, une tel chose serait impossible dans un langage sans le hoisting, 
// parce que l'une des fonctions sera toujours appeler avant qu'elle soit déclaré.

function c(nombre, factorial) {
    if(nombre < 3) return a(2, factorial);
    return a(nombre - 1, factorial * (nombre - 1));
}

function b(nombre, factorial) {
    if(nombre < 3) return c(2, factorial);
    return c(nombre - 1, factorial * (nombre - 1));
}

function a(nombre, factorial) {
    factorial = (factorial === undefined) ? nombre : factorial;
    if(nombre < 3) return console.log(factorial);
    return b(nombre - 1, factorial * (nombre - 1));
}

a(5);