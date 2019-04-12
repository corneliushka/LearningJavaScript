// Execution 1
function somme(valeur1, valeur2) {
  return valeur1 + valeur2;
}


var moyenne = function calculerMoyenne(mesNotes) {
  var somme = 0;
  for(var i = 0; mesNotes.length; i++) {
    somme += mesNotes[i];
  }
  return somme / mesNotes.length;
}
