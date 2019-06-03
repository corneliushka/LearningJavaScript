// Execution 1
// Lorsqu'une variable n'est pas déclaré a l'intérieur d'une fonction, 
// nous disons que cette variable est déclaré dans la portée global,
// et elle sera accessible par son nom et par l'objet global window.
var monNom = "Dominic";
console.log(monNom);
console.log(window.monNom);

// Execution 2
// Dans cette exemple, monNom a l'intérieur de la fonction,
// est différent de monNom à l'extérieur de la fonction,
// car ils ont une portée différente.

var monNom = "Dominic";

function mettre_a_jour_nom() {
  var monNom = "Sara";    
}

mettre_a_jour_nom();
console.log(monNom);
console.log(window.monNom);

// Execution 3
var monNom = "Dominic";

function mettre_a_jour_nom() {
  var monNom = "Sara";    
  console.log(monNom);
  console.log(window.monNom);
}

mettre_a_jour_nom();

// Execution 4
// En retirons l'instruction "var" de la variable à l'intérieur de la fonction,
// nous somme plus entraîne de créer une variable est l'initialiser a Sara
// au lieu de cela, nous somme entrain de modifier monNom de la portée globale.
var monNom = "Dominic";

function mettre_a_jour_nom() {
  monNom = "Sara";    
  console.log(monNom);
  console.log(window.monNom);
}

mettre_a_jour_nom();

// Execution 5
// monNom dans mettre_a_jour_nom sera une autre variable accessible uniquement à l'intérieur de la fonction, 
// donc il va pas modifier monNom de la portée globale, 
// alors que monNom dans mettre_a_jour_nom2 utilise monNom la portée globale, 
// à cause de l'absence du mot clé var. 
var monNom = "Dominic";

function mettre_a_jour_nom() {
  var monNom = "Lucas";    
  console.log(monNom);
  console.log(window.monNom);
}

mettre_a_jour_nom();

function mettre_a_jour_nom2() {
  monNom = "Sara";    
  console.log(monNom);
  console.log(window.monNom);
}

mettre_a_jour_nom2();

// Execution 6
// monNom va être créé dans la portée globale, 
// à cause de l'absence du mot clé var.
function mettre_a_jour_nom() {
  monNom = "Sara";    
}

mettre_a_jour_nom();
console.log(monNom);
console.log(window.monNom);

// Execution 7
// Ici, même si monNom est déclaré à l'intérieur d'une fonction pour les deux cas,
// le moteur JavaScript va chercher la portée de fonction la plus proche.
// Donc il va considérer var monNom = "Sara" et var monNom = "Dominic"
// deux variables différentes.
function mettre_a_jour_nom() {
  var monNom = "Sara"; 

  function mettre_a_jour_nom2() {
    var monNom = "Dominic";
    console.log(monNom);    
  } 
  
  mettre_a_jour_nom2()
  console.log(monNom);
}

mettre_a_jour_nom();

// Execution 8
// Ici le moteur JavaScript ne va pas trouver une déclaration de monNom
// dans la portée de mettre_a_jour_nom2, donc il va monter d'un seule niveau,
// et il va trouver une déclaration de monNom dans la portée de mettre_a_jour_nom
// et il va utiliser celle-ci.
function mettre_a_jour_nom() {
  var monNom = "Sara"; 

  function mettre_a_jour_nom2() {
    console.log(monNom);    
  } 
  
  mettre_a_jour_nom2()
  console.log(monNom);
}

mettre_a_jour_nom();

// Execution 9
// Dans cette exemple, JavaScript recherche d'abord une déclaration de monNom 
// à l'intérieur de la fonction mettre_a_jour_nom2,  s'il ne la trouve pas,
// il va monter d'un niveau vers la fonction mettre_a_jour_nom, puis s'il ne trouve pas une declaration de monNom, 
// il va monter vers la portée global.
var monNom = "Sara"; 
function mettre_a_jour_nom() {

  function mettre_a_jour_nom2() {
    console.log(monNom);    
  } 
  
  mettre_a_jour_nom2()
  console.log(monNom);
}

mettre_a_jour_nom();

// Execution 10
// JavaScript va chercher d'abord une déclaration de monNom à l'intérieur de la fonction mettre_a_jour_nom2, 
// s'il ne la trouve pas, il va continuer a monter vers les  parente
// jusqu'à ce qu'il arrive à la portée global, et s'il ne l'a trouve pas aussi dans la portée global, 
// il va retourner une erreur de référence.
function mettre_a_jour_nom() {

  function mettre_a_jour_nom2() {
    console.log(monNom);    
  } 
  
  mettre_a_jour_nom2()
  console.log(monNom);
}

mettre_a_jour_nom();

// Execution 11
// Les même règles de portée s'applique sur les fonctions  
function mettre_a_jour_nom() {

  function mettre_a_jour_nom2() {
    console.log(monNom);    
  } 
  
  mettre_a_jour_nom2()
  console.log(monNom);
}


window.mettre_a_jour_nom();

// Execution 12 
function mettre_a_jour_nom() {

  function mettre_a_jour_nom2() {
    console.log(monNom);    
  } 
  
  console.log(monNom);
}

mettre_a_jour_nom2()
window.mettre_a_jour_nom();