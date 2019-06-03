// Execution 1
// La ligne 13 va se traduira à une erreur de référence parce qu'il n'y a aucun identificateur " nom "
// qui est dans n’importe quel portée accessible par cette ligne de code actuelle.
var x = 10;

function y() {
  var x = 5;    
}

function z(x) {
  x = 5;
  q = 5;    
  console.log(nom)
}