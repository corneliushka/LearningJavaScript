// Execution 1
// Même si la déclaration  "var a;" vient après le "a = 2", 
// console.log affichera «2». 
a = 2;
var a;
console.log(a);

// Execution 2
// Vous pourriez penser que comme la variable «a» est utilisé avant qu'elle ne soit déclaré, 
// ceci doit se traduire par une erreur de référence. Malheureusement, cette supposition est incorrecte. 
// Console.log affichera "undefined".
console.log(a);
var a;

// Execution 3
var x = 10;

function y() {
  var x = 5;    
}

function z(x) {
  x = 5;
  q = 5;    
}