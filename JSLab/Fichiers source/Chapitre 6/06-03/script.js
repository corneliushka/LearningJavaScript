// Execution 1
// Multiple arguments peuvent être passer à une fonction, 
// en les séparant par des virgules.
function calculerSuperficieRectangle(longueur, largeur) {
  var resultat = longueur * largeur;
  console.log(resultat);
}

calculerSuperficieRectangle(6, 5);

// Execution 2
// Nous avons ajouter un troisième argument pour inclure l’unité de mesure de la superficie, 
// comme le centimètre carré ou le mètre carré. 
function calculerSuperficieRectangle(longueur, largeur, unite) {
  var resultat = longueur * largeur;
  console.log(resultat + unite);
}

calculerSuperficieRectangle(6, 5, "m²");

// Execution 3
// Quand on appelle un fonction avec moins d'arguments que déclarer, 
// l'argument manquer est réglé à undefined
function calculerSuperficieRectangle(longueur, largeur, unite) {
  var resultat = longueur * largeur;
  console.log(resultat + unite);
}

calculerSuperficieRectangle(6, 5);

// Execution 4
// Ici j’utilise l'opérateur ternaire pour mettre « mètres carrés » 
// comme la valeur par défaut de l'argument "unite". 
function calculerSuperficieRectangle(longueur, largeur, unite) {
  unite = (unite === undefined) ? "m²" : unite;   
  var resultat = longueur * largeur;
  console.log(resultat + unite);
}

calculerSuperficieRectangle(6, 5);

// Execution 4
// Si nous définissons une unité de mesure, 
// la valeur par defaut de l'argument "unite" n'est plus prise en compte.
// Les arguments optionnels doivent etre à la fin de la liste d'arguments 
//de sorte qu'ils peuvent être omis.
function calculerSuperficieRectangle(longueur, largeur, unite /*optionnel*/) {
  unite = (unite === undefined) ? "m²" : unite;   
  var resultat = longueur * largeur;
  console.log(resultat + unite);
}

calculerSuperficieRectangle(6, 5, "cm²");

// Execution 5
// L'objet arguments est un objet disponible dans toutes les fonctions, 
// semblable à un tableau, correspondant aux arguments passés à une fonction.
function calculerSomme(a, b) {
    var somme = 0;
    for(var i = 0; i < arguments.length; i++) {
        somme += arguments[i];
    }
    console.log(somme);
}

calculerSomme(1, 2, 3);

// Execution 6
// Vous pouvez utiliser l’objet « arguments », non pas seulement avec les boucles for, 
// mais vous pouvez aussi extraire les arguments basés sur leur index directement. 
function calculerSuperficieRectangle(longueur, largeur, unite /*optionnel*/) {
  arguments[2] = (arguments[2] === undefined) ? "m²" : arguments[2];   
  var resultat = arguments[0] * arguments[1];
  console.log(resultat + arguments[2]);
}

calculerSuperficieRectangle(6, 5, "cm²");

// Execution 7
// L'objet arguments n'est pas un tableau. Il est similaire à un tableau, 
// mais il n'a pas les méthodes et propriétés d'un tableau, exceptée la propriété length. 
// Dont l'utilisation de méthodes ou propriétés de tableau sur "arguments" 
// pourra conduire à des comportements blizzard.
function calculerSomme(a, b) {
    arguments.sort();
    var somme = 0;
    for(var i = 0; i < arguments.length; i++) {
        somme += arguments[i];
    }
    console.log(somme);
}

calculerSomme(1, 2, 3);

// Execution 8
// Pour utiliser les méthodes ou propriétés de tableau sur "arguments",
// on peut par exemple construire un nouveau tableau en parcourant l'objet arguments,
// ou en utilisant la méthode Array.prototype.slice.apply().
function calculerSomme(a, b) {
    var mesArguments = Array.prototype.slice.apply(arguments);
    mesArguments.sort();
    var somme = 0;
    for(var i = 0; i < mesArguments.length; i++) {
        somme += mesArguments[i];
    }
    console.log(somme);
}

calculerSomme(1, 2, 3);